import React from "react";
import Note from "../../elements/note";
import Text from "../../elements/text";

type TextNoteProps = {
  width: string;
  height: string;
  text: string;
  textColor?: string;
  fontSize?: string;
};

function TextNote({ width, height, text, textColor, fontSize }: TextNoteProps) {
  return (
    <Note width={width} height={height}>
      <Text
        text={`"${text.trim()}"`}
        color={textColor}
        fontWeight="bold"
        fontSize={fontSize}
      />
    </Note>
  );
}

export default TextNote;
