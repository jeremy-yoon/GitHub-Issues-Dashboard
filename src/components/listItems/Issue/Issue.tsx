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

      return (
        <S.Container onClick={goToLink} ref={issueRef}>
          <S.Wrapper>
            <S.ContentWrapper>
              <S.Description>{htmlUrl}</S.Description>
              <S.Title>{title}</S.Title>
              <S.Information>
                #{number} · {moment(createdAt).format("YYYY-MM-DD")} · {state} ·{" "}
                {closedAt}
              </S.Information>
            </S.ContentWrapper>
          </S.Wrapper>
        </S.Container>
      );
    }
  )
);
export default Issue;
