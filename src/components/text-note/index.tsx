import React from "react";
import Note from "../../elements/note";
import Text from "../../elements/text";

type TextNoteProps = {
  width: string;
  height: string;
  text: string;
  textColor?: string;
};

function TextNote({ width, height, text, textColor }: TextNoteProps) {
  return (
    <Note width={width} height={height}>
      <Text text={`"${text}"`} color={textColor} fontWeight="bold" />
    </Note>
  );
}

export default TextNote;
