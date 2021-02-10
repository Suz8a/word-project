import React from "react";
import TextButton from "../../components/text-button";
import { KeyboardContainer } from "./styled";

type KeyboardProps = {
  width: string;
  height: string;
  letters: { value: string; disabled: boolean }[];
  buttonSize: string;
  fontSize?: string;
  onClick: (letterIndex: number) => void;
};

function Keyboard({
  height,
  width,
  letters,
  buttonSize,
  fontSize,
  onClick,
}: KeyboardProps) {
  return (
    <KeyboardContainer height={height} width={width}>
      {letters.map((letter, index) => (
        <TextButton
          key={index}
          backgroundColor="white"
          height={buttonSize}
          width={buttonSize}
          text={letter.value}
          disabled={letter.disabled}
          fontSize={fontSize}
          onClick={() => {
            onClick(index);
          }}
        />
      ))}
    </KeyboardContainer>
  );
}

export default Keyboard;
