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
      <NotificationButton
        size="100px"
        backgroundColor="white"
        iconColor="blue"
        circleColor="blue"
        textColor="white"
        onClick={() => {}}
      />
    </div>
  );
}

export default MenuPage;
