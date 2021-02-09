import { useState } from "react";
import Timer from "../../elements/timer";
import NotificationButton from "../../components/notification-button";
import { HiLightBulb } from "react-icons/hi";
import TextButton from "../../components/text-button";
import UnderlinedText from "../../components/underlined-text";
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
      <UnderlinedText
        width="100px"
        height="100px"
        fontSize="40px"
        textColor="transparent"
        text=""
        selectable={false}
      />
    </div>
  );
}

export default MenuPage;
