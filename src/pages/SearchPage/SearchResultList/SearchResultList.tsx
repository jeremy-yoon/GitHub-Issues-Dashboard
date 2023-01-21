import React, { useEffect } from "react";
import * as S from "./SearchResultList.style";
import { Repo, RepoSkeleton } from "~/components";
import { useInfiniteReposQuery } from "~/hooks";
import { useInView } from "react-intersection-observer";
import { IRawRepo } from "~/interfaces";
import { notification } from "antd";

interface ISearchResultList {
  query: string;
}

interface IPage {
  data: {
    items: IRawRepo[];
  };
}

const SearchResultList = ({ query }: ISearchResultList) => {
  const [api, contextHolder] = notification.useNotification();

  const openErrorNotification = (error: string) => {
    api.warning({
      message: error,
    });
  };

  const { data, onLoadMore, isFetching } = useInfiniteReposQuery(
    query,
    openErrorNotification
  );

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

  const renderEmptyMessage = () => {
    if (data !== undefined) {
      if (data.pages[0].data.items.length === 0) {
        return <S.EmptyMessage>검색 결과가 없어요.</S.EmptyMessage>;
      }
    }
  };

  useEffect(() => {
    if (inView) {
      onLoadMore();
    }
  }, [inView]);

  return (
    <S.Container>
      {contextHolder}
      {renderData()}
      {renderEmptyMessage()}
      {isFetching && <RepoSkeleton repeat={10} />}
    </S.Container>
  );
};

export default SearchResultList;
