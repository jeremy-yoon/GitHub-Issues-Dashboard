import * as S from "./HomePage.style";
import { SearchInput } from "~/components";
import { useNavigate, createSearchParams } from "react-router-dom";
import { SavedRepositoryList } from "./SavedRepositoryList";

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
      <SearchInput onKeyPressEnter={goToSearchPage} />
      <SavedRepositoryList />
    </S.Container>
  );
};

export default HomePage;
