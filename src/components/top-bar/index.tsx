import React, { ReactNode } from "react";
import { StyledText, TopBarContainer } from "./styled";

type TopBarProps = {
  height: string;
  icon: ReactNode;
  text: string;
  backgroundColor: string;
  textColor?: string;
  fontSize?: string;
};

function TopBar({
  height,
  icon,
  text,
  fontSize,
  textColor,
  backgroundColor,
}: TopBarProps) {
  return (
    <TopBarContainer height={height} backgroundColor={backgroundColor}>
      {icon}
      <StyledText
        text={text}
        fontSize={fontSize}
        color={textColor}
        fontWeight="bold"
      />
    </TopBarContainer>
  );
}

export default TopBar;
