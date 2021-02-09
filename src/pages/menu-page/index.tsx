import { useState } from "react";
import Timer from "../../elements/timer";
import NotificationButton from "../../components/notification-button";
import { HiLightBulb } from "react-icons/hi";
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
        text="10"
        backgroundColor="white"
        circleColor="blue"
        textColor="white"
        onClick={() => {}}
      >
        <HiLightBulb color="red" size="100%" />
      </NotificationButton>
    </div>
  );
}

export default MenuPage;
