import React from "react";
import * as S from "./RepoSkeleton.style";

interface IRepoSkeleton {
  repeat?: number;
}

const RepoSkeleton: React.FC<IRepoSkeleton> = ({ repeat = 1 }) => {
  return (
    <>
      {Array.from(Array(repeat).keys()).map((_, index) => (
        <S.Container key={index}>
          <S.Wrapper>
            <S.ContentWrapper>
              <S.Content width="20%" />
              <S.Content width="80%" />
              <S.Content width="40%" />
            </S.ContentWrapper>
          </S.Wrapper>
        </S.Container>
      ))}
    </>
  );
};

export default RepoSkeleton;
