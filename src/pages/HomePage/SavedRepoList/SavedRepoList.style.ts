import { colors } from "~/styles/colors";
import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100%;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`;

export const Title = styled.h1`
  font-size: 20px;
  line-height: 32px;
  font-weight: bold;
  color: ${colors.g0};
  margin-left: 12px;
`;

export const Caption = styled.span`
  font-size: 14px;
  line-height: 20px;
  color: ${colors.g3};
  margin-top: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Button = styled.button<{ disabled?: boolean }>`
  padding: 8px 16px;
  font-size: 16px;
  line-height: 32px;
  font-weight: bold;
  color: ${(props) => (props.disabled ? colors.g4 : colors.primary)};
  margin-left: 12px;
`;
