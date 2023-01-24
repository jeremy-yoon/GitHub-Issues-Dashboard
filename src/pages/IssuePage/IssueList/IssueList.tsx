import React, { useEffect } from "react";
import * as S from "./IssueList.style";
import { Issue, RepoSkeleton } from "~/components";
import { useInfiniteIssuesQuery } from "~/hooks";
import { useInView } from "react-intersection-observer";
import { savedReposAtom } from "~/store/atoms";
import { useRecoilState } from "recoil";
import { IRawIssue } from "~/interfaces";
import { notification } from "antd";

interface IPage {
  data: {
    items: IRawIssue[];
  };
}

const IssueList = () => {
  const [savedRepos] = useRecoilState(savedReposAtom);

  const [api, contextHolder] = notification.useNotification();

  const openErrorNotification = (error: string) => {
    api.warning({
      message: error,
    });
  };

  const getIssuesParams = (repos: { fullName: string }[]) => {
    const issuesParams = repos.map((repo: { fullName: string }) => {
      return `repo:${repo.fullName}`;
    });
    return issuesParams.join("+");
  };

  const { data, onLoadMore, isFetching } = useInfiniteIssuesQuery(
    getIssuesParams(savedRepos),
    openErrorNotification
  );

  const [lastElementRef, inView] = useInView();

  useEffect(() => {
    if (inView) {
      onLoadMore();
    }
  }, [inView, onLoadMore]);

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

  const renderEmptyMessage = () => {
    if (data !== undefined) {
      if (data.pages[0].data.items.length === 0) {
        return (
          <S.EmptyMessage>저장한 레포지토리의 이슈가 없어요.</S.EmptyMessage>
        );
      }
    }
  };

  return (
    <S.Container>
      {contextHolder}
      {renderData()}
      {renderEmptyMessage()}
      {isFetching && <RepoSkeleton repeat={10} />}
    </S.Container>
  );
};

export default IssueList;
