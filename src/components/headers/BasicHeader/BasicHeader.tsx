import React from "react";
import * as S from "./BasicHeader.style";
import { useNavigate } from "react-router-dom";
import { BottomLine } from "./components/BottomLine";

interface IBasicHeader {}

const BasicHeader: React.FC<IBasicHeader> = ({}) => {
  const navigate = useNavigate();

  const goToBackPage = () => {
    navigate("/", { replace: true });
  };

  return (
    <S.Container>
      <S.Wrapper>
        <S.IcBackButton onClick={goToBackPage} />
      </S.Wrapper>
      <BottomLine />
    </S.Container>
  );
};

export default BasicHeader;
