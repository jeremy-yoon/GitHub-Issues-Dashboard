import React, { forwardRef } from "react";
import * as S from "./Issue.style";
import moment from "moment";

interface IIssue {
  id: string;
  title: string;
  number: number;
  createdAt: string;
  closedAt?: string;
  userName: string;
  state: string;
  htmlUrl: string;
  issueRef?: React.RefObject<HTMLElement> | undefined | (() => void);
}

export const Issue: React.FC<IIssue> = React.memo(
  forwardRef(
    ({
      id,
      title,
      number,
      createdAt,
      closedAt,
      userName,
      state,
      htmlUrl,
      issueRef,
    }) => {
      const goToLink = () => {
        window.open(htmlUrl, "_blank");
      };

      const getRepoName = (url: string) => {
        const splitUrl = url.split("/");
        return (
          splitUrl[splitUrl.length - 4] + "/" + splitUrl[splitUrl.length - 3]
        );
      };

      const getStateText = (
        state: string,
        createdAt: string,
        userName: string,
        closedAt?: string
      ) => {
        if (state === "open") {
          return `opened ${moment(createdAt).fromNow()} by ${userName}`;
        } else {
          return `by ${userName} was closed ${moment(closedAt).fromNow()}`;
        }
      };

      return (
        <S.Container onClick={goToLink} ref={issueRef}>
          <S.Wrapper>
            <S.ContentWrapper>
              <S.Description>{getRepoName(htmlUrl)}</S.Description>
              <S.Title isClosed={state === "closed"}>
                {state === "closed" && "(closed) "}
                {title}
              </S.Title>
              <S.Information>
                #{number} {getStateText(state, createdAt, userName, closedAt)}
              </S.Information>
            </S.ContentWrapper>
          </S.Wrapper>
        </S.Container>
      );
    }
  )
);
export default Issue;
