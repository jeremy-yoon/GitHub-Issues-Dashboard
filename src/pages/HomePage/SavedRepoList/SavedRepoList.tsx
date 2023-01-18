import * as S from "./SavedRepoList.style";
import { Repo } from "~/components";
import { savedReposAtom } from "~/store/atoms";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import { IRepo } from "~/interfaces";

const SavedRepoList = () => {
  const navigate = useNavigate();

  const [savedRepos] = useRecoilState(savedReposAtom);

  const goToIssuePage = () => {
    navigate("/issue");
  };

  const renderData = () => {
    if (savedRepos !== undefined) {
      if (savedRepos.length === 0) {
        return (
          <S.Caption>
            <span>저장한 레포지토리가 없어요.</span>
            <span>검색창을 이용해 탐색해보세요.</span>
          </S.Caption>
        );
      }
      return savedRepos.map((repo: IRepo) => (
        <Repo
          key={repo.id}
          id={repo.id}
          fullName={repo.fullName}
          description={repo.description}
          stargazersCount={repo.stargazersCount}
          language={repo.language}
          licenseName={repo.licenseName}
          updatedAt={repo.updatedAt}
          htmlUrl={repo.htmlUrl}
        />
      ));
    }
  };

  return (
    <S.Container>
      <S.Header>
        <S.Title>저장한 레포지토리</S.Title>
        <S.Button onClick={goToIssuePage} disabled={savedRepos.length === 0}>
          이슈 모아보기
        </S.Button>
      </S.Header>
      {renderData()}
    </S.Container>
  );
};

export default SavedRepoList;
