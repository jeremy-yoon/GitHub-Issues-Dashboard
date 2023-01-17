import React, { useEffect } from "react";
import * as S from "./SearchResultList.style";
import { Repo } from "~/components";
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
  link: string;
};

const SearchResultList = ({}) => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query") as string;

  const { data, onLoadMore } = useReposQuery(query);

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
              title={repo.full_name}
              imageUrl={repo.link}
              displayLink={repo.link}
              link={repo.link}
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

  return <S.Container>{renderData()}</S.Container>;
};

export default SearchResultList;
