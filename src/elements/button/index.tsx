import React, { ReactNode } from "react";
import { ClickableArea } from "./styled";

type ButtonProps = {
  width: string;
  height: string;
  onClick: () => void;
  backgroundColor?: string;
  children?: ReactNode;
  disabled?: boolean;
  className?: string;
};

function Button({
  width,
  height,
  children,
  disabled,
  className,
  backgroundColor,
  onClick,
}: ButtonProps) {
  return (
    <ClickableArea
      className={className}
      width={width}
      height={height}
      onClick={onClick}
      disabled={disabled}
      backgroundColor={backgroundColor}
    >
      {children}
    </ClickableArea>
  );
}

export default Button;
