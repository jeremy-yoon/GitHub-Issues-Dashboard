import styled from "styled-components";

//styles
import { colors } from "@styles/colors";

//assets
import { IcBack } from "~/assets/images";

export const Container = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 80px;
  background-color: ${colors.g10};
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 768px;
  padding: 0 12px;
  display: flex;
  align-items: center;
`;

export const IcBackButton = styled(IcBack)`
  cursor: pointer;
  padding: 8px;
  width: 40px;
  height: 40px;

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      background-color: ${colors.g6};
      border-radius: 12px;
    }
  }
`;
