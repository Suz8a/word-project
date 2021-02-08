import { useState } from "react";
import Timer from "../../elements/timer";
import Button from "../../elements/button";

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

      <Button
        width={"150px"}
        height={"50px"}
        onClick={() => {
          console.log("Button clicked");
        }}
      />
    </div>
  );
}

export default MenuPage;
