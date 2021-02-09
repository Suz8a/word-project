import { useState } from "react";
import Timer from "../../elements/timer";
import NotificationButton from "../../components/notification-button";

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
      <NotificationButton />
    </div>
  );
}

export default MenuPage;
