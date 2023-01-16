import { useState } from "react";
import { useInfiniteQuery } from "react-query";

//apis
import { getRepos } from "~/apis";

const useReposQuery = (query: string) => {
  const [page, setPage] = useState(1);

  const { data, fetchNextPage, hasNextPage } = useInfiniteQuery(
    ["repos", query],
    () => getRepos(query),
    {
      getNextPageParam: (lastPage: any) => {
        if (lastPage.length < 10) return undefined;
        return page + 1;
      },
    }
  );

  const onLoadMore = () => {
    if (hasNextPage) {
      fetchNextPage();
      setPage(page + 1);
    }
  };

  return { data, onLoadMore };
};

export default useReposQuery;
