import * as S from "./HomePage.style";
import { SearchInput } from "~/components";
import { useNavigate, createSearchParams } from "react-router-dom";
import { SavedRepoList } from "./SavedRepoList";
import { IcLogo } from "~/assets/images";

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
        <IcLogo />
        <SearchInput onKeyPressEnter={goToSearchPage} />
      </S.Wrapper>
      <SavedRepoList />
    </S.Container>
  );
};

export default HomePage;
