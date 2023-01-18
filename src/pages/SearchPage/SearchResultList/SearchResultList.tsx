import React, { useEffect } from "react";
import * as S from "./SearchResultList.style";
import { Repo, RepoSkeleton } from "~/components";
import { useReposQuery } from "~/hooks";
import { useInView } from "react-intersection-observer";
import { IRawRepo } from "~/interfaces";

interface ISearchResultList {
  query: string;
}

interface IPage {
  data: {
    items: IRawRepo[];
  };
}

const SearchResultList = ({ query }: ISearchResultList) => {
  const { data, onLoadMore, isFetching } = useReposQuery(query);

  const [lastElementRef, inView] = useInView();

  const renderData = () => {
    if (data !== undefined) {
      return data.pages.map((page: IPage) => {
        return page.data.items.map((repo: IRawRepo, index: number) => {
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
