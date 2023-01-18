import { useState } from "react";
import { useInfiniteQuery } from "react-query";
import { getRepos } from "~/apis";

const useInfiniteReposQuery = (query: string) => {
  const [page, setPage] = useState(1);

  const { data, fetchNextPage, hasNextPage, isFetching } = useInfiniteQuery(
    ["repos", query],
    () => getRepos(query, page.toString()),
    {
      getNextPageParam: (lastPage: any) => {
        if (lastPage.length < 20) return undefined;
        return page + 1;
      },
    }
  );

  const onLoadMore = () => {
    if (hasNextPage && !isFetching && data && query) {
      setPage(page + 1);
      setTimeout(() => {
        fetchNextPage();
      }, 0);
    }
  };

  return { data, onLoadMore, isFetching };
};

export default useInfiniteReposQuery;
