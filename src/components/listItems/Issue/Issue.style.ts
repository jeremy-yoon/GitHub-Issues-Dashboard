import styled, { css } from "styled-components";
import { colors } from "~/styles/colors";

const textDefaultStyle = css`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: pre-wrap;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const Container = styled.article`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 24px 16px;
  align-items: center;
  justify-content: center;
  cursor: pointer;

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
`;

export const Title = styled.span<{ isClosed?: Boolean }>`
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  color: ${(props) => (props.isClosed ? colors.green : colors.primary)};
  ${textDefaultStyle}

  margin-top: 4px;
`;

export const Description = styled.span`
  font-size: 14px;
  line-height: 18px;
  color: ${colors.g1};
  ${textDefaultStyle}
`;

export const Information = styled.span`
  font-size: 12px;
  line-height: 18px;
  color: ${colors.g3};
  ${textDefaultStyle}

  margin-top: 8px;
`;
