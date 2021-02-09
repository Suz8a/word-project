import React from "react";
import Button from "../../elements/button";
import Card from "../../elements/card";
import Text from "../../elements/text";

type TextButtonProps = {
  size: string;
  letter: string;
  backgroundColor: string;
  letterColor?: string;
  disabled?: boolean;
  fontSize?: string;
  onClick: () => void;
};

function TextButton({
  size,
  letter,
  backgroundColor,
  letterColor,
  fontSize,
  disabled,
  onClick,
}: TextButtonProps) {
  return (
    <Card width={size} height={size} padding="0px" borderRadius="10px">
      <Button
        disabled={disabled}
        backgroundColor={backgroundColor}
        width={"100%"}
        height={"100%"}
        flexDirection="column"
        onClick={onClick}
      >
        <Text
          text={letter}
          fontSize={fontSize}
          fontWeight="bold"
          color={letterColor}
        />
      </Button>
    </Card>
  );
}

export default TextButton;
