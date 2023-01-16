import * as S from "./SearchPage.style";
import { SearchHeader } from "~/components";
import { RepositoryList } from "./RepositoryList";

const SearchPage = () => {
  return (
    <>
      <S.Container>
        <SearchHeader />
        <RepositoryList />
      </S.Container>
    </>
  );
};

export default SearchPage;
