import React from "react";
import * as S from "./SearchHeader.style";
import {
  createSearchParams,
  useNavigate,
  useSearchParams,
} from "react-router-dom";

//components
import { SearchInput } from "~/components";
import { BottomLine } from "./components/BottomLine";

interface ISearchHeader {
  query?: string;
}

const SearchHeader: React.FC<ISearchHeader> = ({ query }) => {
  const navigate = useNavigate();

  const goToBackPage = () => {
    navigate("/", { replace: true });
  };

  const goToSearchPage = (query: string) => {
    navigate({
      pathname: "/search",
      search: createSearchParams({
        query,
      }).toString(),
    });
    scrollToTop();
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <S.Container>
      <S.Wrapper>
        <S.IcBackButton onClick={goToBackPage} />
        <SearchInput
          hasSearchButton={false}
          initialValue={query}
          onKeyPressEnter={goToSearchPage}
        />
      </S.Wrapper>
      <BottomLine />
    </S.Container>
  );
};

export default SearchHeader;
