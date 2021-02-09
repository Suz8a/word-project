import React from "react";
import Card from "../../elements/card";
import { HiLightBulb } from "react-icons/hi";
import Button from "../../elements/button";
import Text from "../../elements/text";
import { StyledCircle } from "./styled";

type NotificationButtonProps = {
  size: string;
  backgroundColor: string;
  iconColor: string;
  circleColor: string;
  textColor: string;
  disabled?: boolean;
  onClick: () => void;
};

function NotificationButton({
  size,
  backgroundColor,
  iconColor,
  circleColor,
  textColor,
  disabled,
  onClick,
}: NotificationButtonProps) {
  return (
    <Card width={size} height={size} padding="0px">
      <Button
        disabled={disabled}
        backgroundColor={backgroundColor}
        width={"100%"}
        height={"100%"}
        onClick={onClick}
      >
        <HiLightBulb color={iconColor} size="100%" />
        <StyledCircle size="40%" backgroundColor={circleColor}>
          <Text text="0" fontWeight="bold" color={textColor} />
        </StyledCircle>
      </Button>
    </Card>
  );
}

export default NotificationButton;
