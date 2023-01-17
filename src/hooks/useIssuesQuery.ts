import { useState } from "react";
import { useInfiniteQuery } from "react-query";
import { getIssues } from "~/apis";

const useIssuesQuery = (query: string) => {
  const [page, setPage] = useState(1);

  const { data, fetchNextPage, hasNextPage, isFetching } = useInfiniteQuery(
    ["repos", query],
    () => getIssues(query, page.toString()),
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
      fetchNextPage();
    }
  };

  return { data, onLoadMore, isFetching };
};

export default useIssuesQuery;