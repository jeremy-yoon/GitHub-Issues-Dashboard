import React from "react";
import * as S from "./BookmarkButton.style";
import { colors } from "~/styles/colors";
import { savedReposAtom } from "~/store/atoms";
import { useRecoilState } from "recoil";
import { notification } from "antd";
import { IBookmarkButton } from "~/interfaces";

const BookmarkButton: React.FC<IBookmarkButton> = ({
  id,
  fullName,
  description,
  stargazersCount,
  language,
  licenseName,
  updatedAt,
  htmlUrl,
}) => {
  const [savedRepos, setSavedRepos] = useRecoilState(savedReposAtom);

  const [api, contextHolder] = notification.useNotification();

  const openSaveSuccessNotification = () => {
    api.success({
      message: `성공적으로 저장되었어요.`,
    });
  };

  const openLimitWarningNotification = () => {
    api.warning({
      message: `최대 4개까지만 저장할 수 있어요.`,
    });
  };

  const openDeleteSuccessNotification = () => {
    api.success({
      message: `성공적으로 삭제되었어요.`,
    });
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
      openLimitWarningNotification();
    } else {
      openSaveSuccessNotification();
      saveRepo();
    }
  };

  const handleDelete = (fullName: string) => {
    if (window.confirm(`${fullName}을(를) 저장 목록에서 삭제하시겠어요?`)) {
      openDeleteSuccessNotification();
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
      },
    ]);
  };

  const deleteRepo = () => {
    setSavedRepos(savedRepos.filter((repo: any) => repo.id !== id));
  };

  return (
    <>
      {contextHolder}
      <S.IcSaveButton
        onClick={(e: React.MouseEvent<SVGSVGElement, MouseEvent>) =>
          onClickSaveButton(e, id, fullName)
        }
        fill={checkSaved(id) ? colors.primary : colors.g10}
        stroke={checkSaved(id) ? colors.primary : colors.g3}
      />
    </>
  );
};

export default BookmarkButton;
