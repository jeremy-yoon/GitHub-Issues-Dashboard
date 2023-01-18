import React, { useEffect } from "react";
import * as S from "./IssueList.style";
import { Issue, RepoSkeleton } from "~/components";
import { useIssuesQuery } from "~/hooks";
import { useInView } from "react-intersection-observer";
import { savedReposAtom } from "~/store/atoms";
import { useRecoilState } from "recoil";
import { IRawIssue } from "~/interfaces";

interface IPage {
  data: {
    items: IRawIssue[];
  };
}

const IssueList = () => {
  const [savedRepos] = useRecoilState(savedReposAtom);

  const getIssuesParams = (repos: { fullName: string }[]) => {
    const issuesParams = repos.map((repo: { fullName: string }) => {
      return `repo:${repo.fullName}`;
    });
    return issuesParams.join("+");
  };

  const { data, onLoadMore, isFetching } = useIssuesQuery(
    getIssuesParams(savedRepos)
  );

  const [lastElementRef, inView] = useInView();

  useEffect(() => {
    if (inView) {
      onLoadMore();
    }
  }, [inView]);

  const renderData = () => {
    if (data !== undefined) {
      return data.pages.map((page: IPage) => {
        return page.data.items.map((issue: IRawIssue, index: number) => {
          const isLast = index === page.data.items.length - 1;
          return (
            <Issue
              id={issue.id}
              title={issue.title}
              number={issue.number}
              createdAt={issue.created_at}
              closedAt={issue.closed_at}
              userName={issue.user.login}
              state={issue.state}
              htmlUrl={issue.html_url}
              issueRef={isLast ? lastElementRef : undefined}
            />
          );
        });
      });
    }
  };

  return (
    <S.Container>
      {renderData()}
      {isFetching && <RepoSkeleton repeat={10} />}
    </S.Container>
  );
};

export default IssueList;
