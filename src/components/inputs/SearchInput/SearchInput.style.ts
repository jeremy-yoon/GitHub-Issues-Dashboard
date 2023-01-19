import styled from "styled-components";
import { colors } from "~/styles/colors";
import { IcSearch, IcDelete } from "~/assets/images";

export const Container = styled.div`
  position: relative;
  width: 100%;
`;

export const IcSearchButton = styled(IcSearch)`
  position: absolute;
  margin-left: 16px;
  top: 50%;
  transform: translateY(-50%);
`;

export const IcDeleteButton = styled(IcDelete)`
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
`;

export const Input = styled.input<{
  hasLeftPadding: boolean;
  isHighlight: boolean;
}>`
  border-radius: 1000px;
  font-size: 16px;
  outline: none;
  height: 48px;
  padding-left: ${({ hasLeftPadding }) => (hasLeftPadding ? "56px" : "16px")};
  padding-right: 48px;
  width: 100%;
  caret-color: ${colors.primary};
  &::placeholder {
    color: ${colors.g5};
  }
  border: 1.5px solid
    ${({ isHighlight }) => (isHighlight ? colors.primary : colors.g5)};
`;
