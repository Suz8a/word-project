import React from "react";
import Button from "../../elements/button";
import Text from "../../elements/text";
import { StyledCard } from "./styled";

type TextButtonProps = {
  width: string;
  height: string;
  text: string;
  backgroundColor: string;
  textColor?: string;
  disabled?: boolean;
  fontSize?: string;
  borderRadius?: string;
  onClick: () => void;
};

function TextButton({
  width,
  height,
  text,
  backgroundColor,
  textColor,
  fontSize,
  disabled,
  borderRadius,
  onClick,
}: TextButtonProps) {
  return (
    <StyledCard
      width={width}
      height={height}
      padding="0px"
      borderRadius={borderRadius}
    >
      <Button
        disabled={disabled}
        backgroundColor={backgroundColor}
        width={"100%"}
        height={"100%"}
        flexDirection="column"
        borderRadius={borderRadius}
        onClick={onClick}
      >
        <Text
          text={text}
          fontSize={fontSize}
          fontWeight="bold"
          color={textColor}
        />
      </Button>
    </StyledCard>
  );
}

export default TextButton;
