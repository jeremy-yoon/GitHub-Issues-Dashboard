import * as S from "./SavedRepoList.style";
import { Repo } from "~/components";
import { savedReposAtom } from "~/store/atoms";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";

type RepoType = {
  id: string;
  fullName: string;
  description: string;
  stargazersCount: number;
  language: string;
  license: {
    name: string;
  };
  updated_at: string;
  htmlUrl: string;
};

const SavedRepoList = ({}) => {
  const navigate = useNavigate();

  const [savedRepos] = useRecoilState(savedReposAtom);

  const goToIssuePage = () => {
    navigate("/issue");
  };

  const renderData = () => {
    if (savedRepos !== undefined) {
      return savedRepos.map((repo: RepoType) => (
        <Repo
          key={repo.id}
          id={repo.id}
          fullName={repo.fullName}
          description={repo.description}
          stargazersCount={repo.stargazersCount}
          language={repo.language}
          licenseName={repo.license?.name}
          updatedAt={repo.updated_at}
          htmlUrl={repo.htmlUrl}
        />
      ));
    }
  };

  return (
    <S.Container>
      <S.Header>
        <S.Title>저장한 레포지토리</S.Title>
        <S.Button onClick={goToIssuePage}>이슈 모아보기</S.Button>
      </S.Header>
      {renderData()}
    </S.Container>
  );
};

export default SavedRepoList;
