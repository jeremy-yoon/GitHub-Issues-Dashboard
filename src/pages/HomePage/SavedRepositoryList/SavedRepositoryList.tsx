import React, { useEffect, useState } from "react";
import * as S from "./SavedRepositoryList.style";
import { Repository } from "~/components";
import { useReposQuery } from "~/hooks";
import { useSearchParams } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { savedReposAtom } from "~/store/atoms";
import { useRecoilState } from "recoil";

type repositoryType = {
  id: string;
  full_name: string;
  link: string;
};

const SavedRepositoryList = ({}) => {
  const [savedRepos, setSavedRepos] = useRecoilState(savedReposAtom);

  const renderData = () => {
    if (savedRepos !== undefined) {
      return savedRepos.map((repo: repositoryType, index: number) => (
        <Repository
          key={repo.id}
          id={repo.id}
          title={"repo.full_name"}
          imageUrl={"repo.link"}
          displayLink={"repo.link"}
          link={"repo.link"}
        />
      ));
    }
  };

  return <S.Container>{renderData()}</S.Container>;
};

export default SavedRepositoryList;
