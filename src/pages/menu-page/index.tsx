import { useState } from "react";
import Timer from "../../elements/timer";
import NotificationButton from "../../components/notification-button";
import { HiLightBulb } from "react-icons/hi";
import LetterButton from "../../components/letter-button";
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
      <LetterButton
        size="100px"
        letter="A"
        backgroundColor="white"
        fontSize="100px"
        onClick={() => {}}
      />
    </div>
  );
}

export default MenuPage;
