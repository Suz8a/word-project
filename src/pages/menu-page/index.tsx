import { useState } from "react";
import Note from "../../elements/note";
import Timer from "../../elements/timer";

function MenuPage() {
  const [reset, setReset] = useState(false);

  function changeFlag() {
    setReset(!reset);
  }

  return (
    <div>
      <Timer
        seconds={20}
        toggle={reset}
        height={"100px"}
        width={"100px"}
        color={"blue"}
      />
      <button onClick={() => changeFlag()}>Click me</button>
      <Note width={"100px"} height={"100px"} />
    </div>
  );
}

export default MenuPage;
