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
  inputType?: "text" | "password" | "email" | "number";
  placeholder?: string;
  initialValue?: string | null;
  onClickInputEnter?: (value: string) => void;
}

const SearchHeader: React.FC<ISearchHeader> = ({
  inputType,
  placeholder = "레포지토리를 검색해보세요.",
  initialValue,
  onClickInputEnter,
}) => {
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
          inputType={inputType}
          initialValue={initialValue}
          placeholder={placeholder}
          onKeyPressEnter={onClickInputEnter}
        />
      </S.Wrapper>
      <BottomLine />
    </S.Container>
  );
};

export default SearchHeader;
