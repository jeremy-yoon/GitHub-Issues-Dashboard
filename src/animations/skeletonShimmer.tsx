import { keyframes, css } from "styled-components";
import { colors } from "~/styles/colors";

const skeletonAnimation = keyframes`
  0% {
    background-position: -468px 0;
  }
  100% {
    background-position: 468px 0;
  }
`;

export const skeletonShimmer = css`
  animation-duration: 1s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-name: ${skeletonAnimation};
  animation-timing-function: linear;
  background: linear-gradient(
    to right,
    ${colors.g6} 8%,
    ${colors.g7} 36%,
    ${colors.g8} 66%
  );
  background-size: 800px 104px;
  position: relative;
`;
