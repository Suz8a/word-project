import React from "react";
import TextButton from "../../components/text-button";
import { KeyboardContainer } from "./styled";

type KeyboardProps = {
  width: string;
  height: string;
  letters: string[];
  buttonSize: string;
  fontSize?: string;
};

function Keyboard({
  height,
  width,
  letters,
  buttonSize,
  fontSize,
}: KeyboardProps) {
  return (
    <KeyboardContainer height={height} width={width}>
      {letters.map((letter, index) => (
        <TextButton
          key={index}
          backgroundColor="white"
          height={buttonSize}
          width={buttonSize}
          text={letter}
          fontSize={fontSize}
          onClick={() => {}}
        />
      ))}
    </KeyboardContainer>
  );
}

export default Keyboard;
