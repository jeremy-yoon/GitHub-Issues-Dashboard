import styled from "styled-components";
import { colors } from "~/styles/colors";

export const Container = styled.div`
  position: relative;
  width: 100%;
  margin-top: 80px;
  margin-bottom: 120px;
`;

export const EmptyMessage = styled.span`
  font-size: 14px;
  color: ${colors.g4};
  text-align: center;
  display: flex;
  justify-content: center;
`;
