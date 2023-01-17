import React, { useState } from "react";
import * as S from "./BookmarkButton.style";
import { colors } from "~/styles/colors";

interface IBookMarkButton {
  onClick: (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => void;
  isSaved?: boolean;
}

const BookmarkButton: React.FC<IBookMarkButton> = ({ onClick, isSaved }) => {
  return (
    <>
      <S.IcSaveButton
        onClick={onClick}
        fill={isSaved ? colors.primary : colors.g10}
        stroke={isSaved ? colors.primary : colors.g3}
      />
    </>
  );
};

export default BookmarkButton;
