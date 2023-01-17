import * as S from "./SearchPage.style";
import { SearchHeader } from "~/components";
import { SearchResultList } from "./SearchResultList";

const SearchPage = () => {
  return (
    <>
      <S.Container>
        <SearchHeader />
        <SearchResultList />
      </S.Container>
    </>
  );
};

export default SearchPage;
