import { useState } from "react";
import Timer from "../../elements/timer";
import Button from "../../elements/button";
import Panel from "../../components/panel";

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
      <Panel
        title={"Score"}
        content={"contenido genial"}
        titleColor={"red"}
        contentColor={"blue"}
      />
    </div>
  );
}

export default MenuPage;
