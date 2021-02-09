import React from "react";
import UnderlinedText from "../../components/underlined-text";
import { UnderlinedLettersContainer } from "./styled";

type KeyboardProps = {
  width: string;
  height: string;
  letterBoxSize: string;
  letters: string[];
  textColor: string;
  fontSize?: string;
};

function UnderlinedLetters({
  height,
  width,
  letterBoxSize,
  letters,
  fontSize,
  textColor,
}: KeyboardProps) {
  return (
    <UnderlinedLettersContainer height={height} width={width}>
      {letters.map((letter, index) => (
        <UnderlinedText
          key={index}
          textColor={textColor}
          height={letterBoxSize}
          width={letterBoxSize}
          text={letter}
          fontSize={fontSize}
          selectable={false}
        />
      ))}
    </UnderlinedLettersContainer>
  );
}

export default UnderlinedLetters;
