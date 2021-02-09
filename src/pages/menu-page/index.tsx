import { useState } from "react";
import Timer from "../../elements/timer";
import TextNote from "../../components/text-note";
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
      <button onClick={() => changeFlag()}>Reset timer</button>
      <TextNote width="200px" height="100px" text="holiwis" />
    </div>
  );
}

export default MenuPage;
