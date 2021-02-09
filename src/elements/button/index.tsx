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
  padding?: string;
  flexDirection?: "row" | "row-reverse" | "column" | "column-reverse";
};

function Button({
  width,
  height,
  children,
  disabled,
  className,
  backgroundColor,
  flexDirection,
  padding,
  onClick,
}: ButtonProps) {
  return (
    <ClickableArea
      className={className}
      width={width}
      height={height}
      onClick={onClick}
      disabled={disabled}
      flexDirection={flexDirection}
      backgroundColor={backgroundColor}
      padding={padding}
    >
      {children}
    </ClickableArea>
  );
}

export default Button;
