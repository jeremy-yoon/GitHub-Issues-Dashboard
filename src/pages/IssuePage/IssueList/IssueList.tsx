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
  fullName: string;
};

const IssueList = ({}) => {
  const [savedRepos] = useRecoilState(savedReposAtom);

  const getIssuesParams = (repos: { fullName: string }[]) => {
    const issuesParams = repos.map((repo: { fullName: string }) => {
      return `repo:${repo.fullName}`;
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
              key={repo.fullName}
              id={repo.fullName}
              title={repo.fullName}
              imageUrl={repo.fullName}
              displayLink={repo.fullName}
              link={repo.fullName}
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
