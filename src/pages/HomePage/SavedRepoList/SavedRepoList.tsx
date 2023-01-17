import * as S from "./SavedRepoList.style";
import { Repo } from "~/components";
import { savedReposAtom } from "~/store/atoms";
import { useRecoilState } from "recoil";

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
  const [savedRepos] = useRecoilState(savedReposAtom);

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

  return <S.Container>{renderData()}</S.Container>;
};

export default SavedRepoList;
