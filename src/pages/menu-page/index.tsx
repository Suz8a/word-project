import { useState } from "react";
import Timer from "../../elements/timer";

function MenuPage() {
  const [reset, setReset] = useState(false);

  function changeFlag() {
    setReset(!reset);
    console.log(reset);
  }

  return (
    <div>
      <Timer seconds={20} toggle={reset} />
      <button onClick={() => changeFlag()}>Click me</button>
    </div>
  );
}

export default MenuPage;
