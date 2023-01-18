import React, { forwardRef } from "react";
import * as S from "./Repo.style";
import { BookmarkButton } from "~/components";
import { savedReposAtom } from "~/store/atoms";
import { useRecoilState } from "recoil";
import moment from "moment";
import { notification } from "antd";

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

const Repo: React.FC<IRepo> = React.memo(
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

      const [api, contextHolder] = notification.useNotification();

      const openNotification = () => {
        api.info({
          message: `레포지토리는 최대 4개까지 저장할 수 있어요.`,
        });
      };

      const goToLink = () => {
        window.open(htmlUrl, "_blank");
      };

      const onClickSaveButton = (
        e: React.MouseEvent<SVGSVGElement, MouseEvent>,
        id: string,
        fullName: string
      ) => {
        e.stopPropagation();
        const isSaved = checkSaved(id);
        if (isSaved) {
          handleDelete(fullName);
        } else {
          handleSave();
        }
      };

      const checkSaved = (id: string) => {
        return savedRepos.find((repo: any) => repo.id === id);
      };

      const handleSave = () => {
        if (savedRepos.length >= 4) {
          openNotification();
        } else {
          saveRepo();
        }
      };

      const handleDelete = (fullName: string) => {
        if (window.confirm(`${fullName}을(를) 저장 목록에서 삭제하시겠어요?`)) {
          deleteRepo();
        }
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

      return (
        <S.Container onClick={goToLink} ref={RepoRef}>
          {contextHolder}
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
                onClickSaveButton(e, id, fullName)
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
