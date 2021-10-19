import * as React from "react";
import styled from "styled-components";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "primary" | "secondary" | "outline" | "text";
  size: "large" | "medium" | "small";
  label: String;
}
/**
 * Primary UI component for user interaction
 */

const BaseButton = styled.button<ButtonProps>`
  color: ${(props) => (props.variant == "primary" ? "#fff" : "#222")};
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);
  padding: 10px;
  border-radius: 8px;
  border: none;
  background-color: ${(props) =>
    props.variant == "primary" ? "#6db33f" : "#e9e9e9"};

  // Takes care of sticky hovers on mobile
  @media (any-hover: hover) {
    &:hover {
      cursor: pointer;
      box-shadow: none;
    }
  }
`;

export const Button = ({
  variant = "primary",
  size = "medium",
  label = "Default",
  ...props
}: ButtonProps) => {
  return (
    <BaseButton label={label} variant={variant} {...props} size={size}>
      {label}
    </BaseButton>
  );
};
