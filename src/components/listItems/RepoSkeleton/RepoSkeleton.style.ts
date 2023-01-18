import styled from "styled-components";
import { colors } from "~/styles/colors";
import { skeletonShimmer } from "~/animations";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 24px 16px;

  border-top: 1px solid ${colors.g6};
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

export const ContentWrapper = styled.div`
  width: 100%;
  min-width: calc(100% - 136px);
  display: flex;
  flex-direction: column;
  row-gap: 8px;
`;

export const Content = styled.div<{ width?: string }>`
  ${skeletonShimmer}
  height: 20px;
  border-radius: 4px;
  width: ${(props) => props.width || "100%"};
`;
