import React from "react";
import { NoteContainer, NoteArea, Border } from "./styled";

type NoteProps = {
  width: string;
  height: string;
};

function Note({ width, height }: NoteProps) {
  return (
    <NoteContainer width={width} height={height}>
      <NoteArea></NoteArea>
      <Border />
    </NoteContainer>
  );
}

export default Note;
