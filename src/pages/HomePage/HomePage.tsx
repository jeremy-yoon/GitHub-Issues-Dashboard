import * as S from "./HomePage.style";
import { SearchInput } from "~/components";
import { useNavigate, createSearchParams } from "react-router-dom";
import { SavedRepoList } from "./SavedRepoList";

const HomePage = () => {
  const navigate = useNavigate();

  const goToSearchPage = (query: string) => {
    navigate({
      pathname: "/search",
      search: createSearchParams({
        query,
      }).toString(),
    });
  };
  return (
    <S.Container>
      <S.Wrapper>
        <SearchInput onKeyPressEnter={goToSearchPage} />
        <SavedRepoList />
      </S.Wrapper>
    </S.Container>
  );
};

export default HomePage;
