import React from "react";
import Button from "../../elements/button";
import Card from "../../elements/card";
import Text from "../../elements/text";

type TextButtonProps = {
  width: string;
  height: string;
  text: string;
  backgroundColor: string;
  textColor?: string;
  disabled?: boolean;
  fontSize?: string;
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
  onClick,
}: TextButtonProps) {
  return (
    <Card width={width} height={height} padding="0px" borderRadius="10px">
      <Button
        disabled={disabled}
        backgroundColor={backgroundColor}
        width={"100%"}
        height={"100%"}
        flexDirection="column"
        onClick={onClick}
      >
        <Text
          text={text}
          fontSize={fontSize}
          fontWeight="bold"
          color={textColor}
        />
      </Button>
    </Card>
  );
}

export default TextButton;
