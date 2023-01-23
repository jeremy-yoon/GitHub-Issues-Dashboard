import { useRef } from "react";
import { useInfiniteQuery } from "react-query";
import { getRepos } from "~/apis";

const useInfiniteReposQuery = (
  query: string,
  handleError: (error: string) => void
) => {
  const page = useRef(1);

  const { data, fetchNextPage, hasNextPage, isFetching } = useInfiniteQuery(
    ["repos", query],
    ({ pageParam = 1 }) => getRepos(query, pageParam.toString()),
    {
      getNextPageParam: (lastPage: any) => {
        if (lastPage.length < 20) return undefined;
        return page.current;
      },
      onError: (error: { message: string }) => {
        handleError(error.message);
      },
    }
  );

  const onLoadMore = () => {
    if (hasNextPage && !isFetching && data && query) {
      page.current += 1;
      fetchNextPage();
    }
  };

  return { data, onLoadMore, isFetching };
};

export default useInfiniteReposQuery;
