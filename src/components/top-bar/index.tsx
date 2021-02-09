import React, { ReactNode } from "react";
import Button from "../../elements/button";
import { StyledText, TopBarContainer } from "./styled";

type TopBarProps = {
  height: string;
  icon: ReactNode;
  text: string;
  backgroundColor: string;
  onClick: () => void;
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
  onClick,
}: TopBarProps) {
  return (
    <TopBarContainer height={height} backgroundColor={backgroundColor}>
      <Button
        height="auto"
        onClick={onClick}
        width="fit-content"
        backgroundColor="inherit"
      >
        {icon}
      </Button>

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
