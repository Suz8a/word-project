import React from "react";
import Card from "../../elements/card";
import { HiLightBulb } from "react-icons/hi";
import Button from "../../elements/button";

function NotificationButton() {
  return (
    <Card width={"100px"} height={"100px"} padding={"0px"}>
      <Button
        backgroundColor={"white"}
        width={"100%"}
        height={"100%"}
        onClick={() => {}}
      >
        <HiLightBulb color={"red"} size={"100%"} />
      </Button>
    </Card>
  );
}

export default NotificationButton;
