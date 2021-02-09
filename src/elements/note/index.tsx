import React, { ReactNode } from "react";
import { NoteContainer, NoteArea, Border } from "./styled";

type NoteProps = {
  width: string;
  height: string;
  children?: ReactNode;
};

function Note({ width, height, children }: NoteProps) {
  return (
    <NoteContainer width={width} height={height}>
      <NoteArea>{children}</NoteArea>
      <Border />
    </NoteContainer>
  );
}

export default Note;
