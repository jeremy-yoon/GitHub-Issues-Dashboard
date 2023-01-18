import * as S from "./SearchPage.style";
import { SearchHeader } from "~/components";
import { SearchResultList } from "./SearchResultList";
import { useSearchParams } from "react-router-dom";

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query") as string;

  return (
    <>
      <S.Container>
        <SearchHeader query={query} />
        <SearchResultList query={query} />
      </S.Container>
    </>
  );
};

export default SearchPage;
