import styled from "styled-components";
import { colors } from "~/styles/colors";

export const Container = styled.article`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 16px 0;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 688px;
  padding: 0 24px;
  display: flex;
  align-items: center;
`;

export const PostImage = styled.img`
  min-width: 72px;
  max-width: 72px;
  height: 72px;
  border-radius: 12px;
  object-fit: cover;
`;

export const PostContentWrapper = styled.div`
  max-width: 688px;
  min-width: calc(100% - 136px);
  height: 72px;
  padding-left: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Title = styled.span`
  font-weight: bold;
  font-size: 15px;
  line-height: 20px;

  text-overflow: ellipsis;
  overflow: hidden;
  white-space: pre-wrap;

  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  color: ${colors.g1};
`;

export const LinkWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  column-gap: 6px;
`;

export const Favicon = styled.img`
  width: 14px;
  height: 14px;
`;

export const Link = styled.span`
  font-size: 13px;
  line-height: 13px;
  color: ${colors.g3};

  text-overflow: ellipsis;
  overflow: hidden;
  white-space: pre-wrap;

  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;
