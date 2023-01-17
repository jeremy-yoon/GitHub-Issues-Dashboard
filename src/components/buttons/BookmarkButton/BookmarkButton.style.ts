import styled from "styled-components";
import { IcSave } from "~/assets/images";
import { colors } from "~/styles/colors";

export const IcSaveButton = styled(IcSave)`
  cursor: pointer;
  margin-left: 40px;
  padding: 8px;
  min-width: 40px;
  height: 40px;

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      background-color: ${colors.g6};
      border-radius: 12px;
    }
  }
`;
