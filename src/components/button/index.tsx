import * as React from "react";
import styled from "styled-components";

interface ButtonProps {
  type: String;
}

const BaseButton = styled.button``;

export const Button = (type) => {
  return <BaseButton>{type}</BaseButton>;
};
