import React, { forwardRef } from "react";
import * as S from "./Issue.style";
import { defaultThumb } from "~/assets/images";

interface IIssue {
  id: string;
  title: string;
  displayLink: string;
  link: string;
  imageUrl?: string;
  issueRef?: React.RefObject<HTMLElement> | undefined | (() => void);
}

export const Issue: React.FC<IIssue> = React.memo(
  forwardRef(
    ({ id, title, displayLink, link, imageUrl = defaultThumb, issueRef }) => {
      const goToLink = () => {
        window.open(link, "_blank");
      };

      const handleImageError = (
        e: React.SyntheticEvent<HTMLImageElement, Event>
      ) => {
        const target = e.target as HTMLImageElement;
        target.onerror = null;
        target.src = defaultThumb;
      };

      return (
        <S.Container onClick={goToLink} ref={issueRef}>
          <S.Wrapper>
            <S.PostImage src={imageUrl} onError={handleImageError} />
            <S.PostContentWrapper>
              <S.Title>{title}</S.Title>
              <S.LinkWrapper>
                <S.Link>{displayLink}</S.Link>
              </S.LinkWrapper>
            </S.PostContentWrapper>
          </S.Wrapper>
        </S.Container>
      );
    }
  )
);
export default Issue;
