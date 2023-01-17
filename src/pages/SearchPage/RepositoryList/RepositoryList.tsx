import React, { useEffect } from "react";
import * as S from "./RepositoryList.style";
import { Repository } from "~/components";
import { useReposQuery } from "~/hooks";
import { useSearchParams } from "react-router-dom";
import { useInView } from "react-intersection-observer";

type pageType = {
  data: {
    items: repositoryType[];
  };
};

type repositoryType = {
  full_name: string;
  link: string;
};

const RepositoryList = ({}) => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query") as string;

  const { data, onLoadMore } = useReposQuery(query);

  const [lastElementRef, inView] = useInView();

  const renderData = () => {
    if (data !== undefined) {
      return data.pages.map((page: pageType) => {
        return page.data.items.map((repo: repositoryType, index: number) => {
          const isLast = index === page.data.items.length - 1;
          return (
            <Repository
              key={repo.link}
              id={repo.link}
              title={repo.full_name}
              imageUrl={repo.link}
              displayLink={repo.link}
              link={repo.link}
              initialIsSaved={false}
              repositoryRef={isLast ? lastElementRef : undefined}
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

export default RepositoryList;
