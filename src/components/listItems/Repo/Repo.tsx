import React, { forwardRef } from "react";
import * as S from "./Repo.style";
import { BookmarkButton } from "~/components";
import { savedReposAtom } from "~/store/atoms";
import { useRecoilState } from "recoil";
import moment from "moment";

interface IRepo {
  id: string;
  fullName: string;
  description: string;
  stargazersCount: number;
  language: string;
  licenseName: string;
  updatedAt: string;
  htmlUrl: string;
  RepoRef?: React.RefObject<HTMLElement> | undefined | (() => void);
}

export const Repo: React.FC<IRepo> = React.memo(
  forwardRef(
    ({
      id,
      fullName,
      description,
      stargazersCount,
      language,
      licenseName,
      updatedAt,
      htmlUrl,
      RepoRef,
    }) => {
      const [savedRepos, setSavedRepos] = useRecoilState(savedReposAtom);

      const goToLink = () => {
        window.open(htmlUrl, "_blank");
      };

      const checkSaved = (id: string) => {
        return savedRepos.find((repo: any) => repo.id === id);
      };

      const saveRepo = () => {
        setSavedRepos([
          ...savedRepos,
          {
            id,
            fullName,
            description,
            stargazersCount,
            language,
            licenseName,
            updatedAt,
            htmlUrl,
            RepoRef,
          },
        ]);
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
            <S.ContentWrapper>
              <S.Title>{fullName}</S.Title>
              <S.Description>{description}</S.Description>
              <S.Information>
                {stargazersCount}stars · {language} · {licenseName} ·{" "}
                {moment(updatedAt).format("YYYY-MM-DD")}
              </S.Information>
            </S.ContentWrapper>
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
