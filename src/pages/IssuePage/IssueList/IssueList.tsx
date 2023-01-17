import React, { useEffect, useState } from "react";
import * as S from "./IssueList.style";
import { Issue } from "~/components";
import { useIssuesQuery } from "~/hooks";
import { useInView } from "react-intersection-observer";
import { savedReposAtom } from "~/store/atoms";
import { useRecoilState } from "recoil";

type pageType = {
  data: {
    items: IssueType[];
  };
};

type IssueType = {
  id: string;
  title: string;
  link: string;
};

const IssueList = ({}) => {
  const [savedRepos] = useRecoilState(savedReposAtom);

  const getIssuesParams = (repos: { title: string }[]) => {
    const issuesParams = repos.map((repo: { title: string }) => {
      return `repo:${repo.title}`;
    });
    return issuesParams.join("+");
  };

  const { data, onLoadMore } = useIssuesQuery(getIssuesParams(savedRepos));

  const [lastElementRef, inView] = useInView();

  useEffect(() => {
    if (inView) {
      onLoadMore();
    }
  }, [inView]);

  const renderData = () => {
    if (data !== undefined) {
      return data.pages.map((page: pageType) => {
        return page.data.items.map((repo: IssueType, index: number) => {
          const isLast = index === page.data.items.length - 1;
          return (
            <Issue
              key={repo.id}
              id={repo.id}
              title={repo.title}
              imageUrl={repo.link}
              displayLink={repo.link}
              link={repo.link}
              issueRef={isLast ? lastElementRef : undefined}
            />
          );
        });
      });
    }
  };

  return <S.Container>{renderData()}</S.Container>;
};

export default IssueList;
