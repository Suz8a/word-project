import React, { ReactNode } from "react";
import Button from "../../elements/button";
import Text from "../../elements/text";
import { StyledCard, StyledCircle } from "./styled";

type NotificationButtonProps = {
  size: string;
  backgroundColor: string;
  circleColor: string;
  textColor: string;
  text: string;
  children: ReactNode;
  fontSize: string;
  disabled?: boolean;
  onClick: () => void;
};

function NotificationButton({
  size,
  backgroundColor,
  circleColor,
  textColor,
  disabled,
  text,
  children,
  fontSize,
  onClick,
}: NotificationButtonProps) {
  return (
    <StyledCard width={size} height={size} padding="0px" borderRadius="10px">
      <Button
        disabled={disabled}
        backgroundColor={backgroundColor}
        width={"100%"}
        height={"100%"}
        onClick={onClick}
      >
        {children}
        <StyledCircle size="40%" backgroundColor={circleColor}>
          <Text
            text={text}
            fontSize={fontSize}
            fontWeight="bold"
            color={textColor}
          />
        </StyledCircle>
      </Button>
    </StyledCard>
  );
}

export default NotificationButton;
