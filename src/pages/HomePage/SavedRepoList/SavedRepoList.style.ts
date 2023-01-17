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

export const Button = styled.button`
  padding: 8px 16px;
  font-size: 16px;
  line-height: 32px;
  font-weight: bold;
  color: ${colors.primary};
  margin-left: 12px;
`;
