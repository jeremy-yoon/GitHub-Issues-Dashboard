import React, { useState, useEffect } from "react";
import { colors } from "~/styles/colors";
import * as S from "./SearchInput.style";

interface ISearchInput {
  inputType?: "text" | "password" | "email" | "number";
  placeholder?: string;
  initialValue?: string | null;
  hasSearchButton?: boolean;
  onKeyPressEnter?: (value: string) => void;
}

const SearchInput: React.FC<ISearchInput> = ({
  inputType,
  placeholder = "레포지토리를 검색해보세요.",
  initialValue,
  hasSearchButton = true,
  onKeyPressEnter,
}) => {
  const [isHighlight, setIsHighlight] = useState(false);
  const [value, setValue] = useState("");

  const onKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (onKeyPressEnter && value) onKeyPressEnter(value);
    }
  };

  const deleteValue = () => {
    setValue("");
  };

  const onChangeInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    if (initialValue) setValue(initialValue);
  }, [initialValue]);

  return (
    <S.Container>
      {hasSearchButton && (
        <S.IcSearchButton fill={isHighlight ? colors.primary : colors.g3} />
      )}
      <S.Input
        type={inputType}
        placeholder={placeholder}
        maxLength={100}
        value={value}
        onChange={onChangeInput}
        onKeyPress={onKeyPress}
        onFocus={() => setIsHighlight(true)}
        onBlur={() => setIsHighlight(false)}
        hasLeftPadding={hasSearchButton}
        isHighlight={isHighlight}
      />
      {value && <S.IcDeleteButton onClick={deleteValue} />}
    </S.Container>
  );
};

export default SearchInput;
