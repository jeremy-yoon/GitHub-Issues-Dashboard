import { useState } from "react";
import { useInfiniteQuery } from "react-query";
import { getRepos } from "~/apis";

const useInfiniteReposQuery = (
  query: string,
  handleError: (error: string) => void
) => {
  const [page, setPage] = useState(1);

  const { data, fetchNextPage, hasNextPage, isFetching } = useInfiniteQuery(
    ["repos", query],
    () => getRepos(query, page.toString()),
    {
      getNextPageParam: (lastPage: any) => {
        if (lastPage.length < 20) return undefined;
        return page + 1;
      },
      onError: (error: { message: string }) => {
        handleError(error.message);
      },
    }
  );

  const onLoadMore = async () => {
    if (hasNextPage && !isFetching && data && query) {
      setPage(page + 1);
      await fetchNextPage();
    }
  };

  return { data, onLoadMore, isFetching };
};

export default useInfiniteReposQuery;
