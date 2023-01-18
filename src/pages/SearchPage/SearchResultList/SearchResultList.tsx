import React, { useEffect } from "react";
import * as S from "./SearchResultList.style";
import { Repo, RepoSkeleton } from "~/components";
import { useReposQuery } from "~/hooks";
import { useSearchParams } from "react-router-dom";
import { useInView } from "react-intersection-observer";

type pageType = {
  data: {
    items: RepoType[];
  };
};

type RepoType = {
  id: string;
  full_name: string;
  description: string;
  stargazers_count: number;
  language: string;
  license: {
    name: string;
  };
  updated_at: string;
  html_url: string;
};

const SearchResultList = ({}) => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query") as string;

  const { data, onLoadMore, isFetching } = useReposQuery(query);

  const [lastElementRef, inView] = useInView();

  const renderData = () => {
    if (data !== undefined) {
      return data.pages.map((page: pageType) => {
        return page.data.items.map((repo: RepoType, index: number) => {
          const isLast = index === page.data.items.length - 1;
          return (
            <Repo
              key={repo.id}
              id={repo.id}
              fullName={repo.full_name}
              description={repo.description}
              stargazersCount={repo.stargazers_count}
              language={repo.language}
              licenseName={repo.license?.name}
              updatedAt={repo.updated_at}
              htmlUrl={repo.html_url}
              RepoRef={isLast ? lastElementRef : undefined}
            />
          );
        });
      });
    }
  };

  useEffect(() => {
    if (inView) {
      onLoadMore();
    }
  }, [inView]);

  return (
    <S.Container>
      {renderData()}
      {isFetching && <RepoSkeleton repeat={10} />}
    </S.Container>
  );
};

export default SearchResultList;
