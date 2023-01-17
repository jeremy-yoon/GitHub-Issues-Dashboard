import React, { forwardRef } from "react";
import * as S from "./Repo.style";
import { BookmarkButton } from "~/components";
import { savedReposAtom } from "~/store/atoms";
import { useRecoilState } from "recoil";

//assets
import { defaultThumb } from "~/assets/images";

interface IRepo {
  id: string;
  title: string;
  displayLink: string;
  link: string;
  imageUrl?: string;
  RepoRef?: React.RefObject<HTMLElement> | undefined | (() => void);
}

export const Repo: React.FC<IRepo> = React.memo(
  forwardRef(
    ({ id, title, displayLink, link, imageUrl = defaultThumb, RepoRef }) => {
      const [savedRepos, setSavedRepos] = useRecoilState(savedReposAtom);

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

      const checkSaved = (id: string) => {
        return savedRepos.find((repo: any) => repo.id === id);
      };

      const saveRepo = () => {
        setSavedRepos([...savedRepos, { id, title, displayLink, link }]);
      };

      const deleteRepo = () => {
        setSavedRepos(savedRepos.filter((repo: any) => repo.id !== id));
      };

      const onClickSaveButton = (
        e: React.MouseEvent<SVGSVGElement, MouseEvent>,
        id: string
      ) => {
        e.stopPropagation();
        if (checkSaved(id)) {
          deleteRepo();
        } else {
          saveRepo();
        }
      };

      return (
        <S.Container onClick={goToLink} ref={RepoRef}>
          <S.Wrapper>
            <S.PostImage src={imageUrl} onError={handleImageError} />
            <S.PostContentWrapper>
              <S.Title>{title}</S.Title>
              <S.LinkWrapper>
                <S.Link>{displayLink}</S.Link>
              </S.LinkWrapper>
            </S.PostContentWrapper>
            <BookmarkButton
              onClick={(e: React.MouseEvent<SVGSVGElement, MouseEvent>) =>
                onClickSaveButton(e, id)
              }
              isSaved={checkSaved(id)}
            />
          </S.Wrapper>
        </S.Container>
      );
    }
  )
);
export default Repo;
