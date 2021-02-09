import React from "react";
import Button from "../../elements/button";
import Card from "../../elements/card";
import Line from "../../elements/line";
import Text from "../../elements/text";

type LetterButtonProps = {
  size: string;
  letter: string;
  backgroundColor: string;
  letterColor?: string;
  disabled?: boolean;
  fontSize?: string;
  onClick: () => void;
};

function LetterButton({
  size,
  letter,
  backgroundColor,
  letterColor,
  fontSize,
  disabled,
  onClick,
}: LetterButtonProps) {
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

export default LetterButton;
