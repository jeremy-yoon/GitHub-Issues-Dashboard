import React from "react";
import * as S from "./Repository.style";

//assets
import { defaultThumb } from "~/assets/images";

interface IRepository {
  id: string;
  title: string;
  displayLink: string;
  link: string;
  imageUrl?: string;
  initialIsSaved?: boolean;
}

export const Repository: React.FC<IRepository> = React.memo(
  ({
    id,
    title,
    displayLink,
    link,
    imageUrl = defaultThumb,
    initialIsSaved = false,
  }) => {
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
      <S.Container onClick={goToLink}>
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
);
export default Repository;
