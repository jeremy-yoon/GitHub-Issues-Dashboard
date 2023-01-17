import React, { useState, useEffect } from "react";
import styled from "styled-components";

//styles
import { colors } from "~/styles/colors";

export const BottomLine: React.FC = () => {
  const [showBottomLine, setShowBottomLine] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setShowBottomLine(true);
    } else {
      setShowBottomLine(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return <S.Container showBottomLine={showBottomLine} />;
};

const S: any = {};

S.Container = styled.nav<{ showBottomLine: boolean }>`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 1px;
  background-color: ${(props) =>
    props.showBottomLine ? colors.g6 : "transparent"};
`;
