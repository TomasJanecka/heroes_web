import {
  Stack,
  Button,
  Center,
  AspectRatio,
  createPolymorphicComponent,
  ButtonProps,
  StackProps,
} from "@mantine/core";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const HomePage: React.FC = () => {
  return (
    <StyledLandingPage
      $imagePath={require("../assets/images/landingPage.jpg")}
    ></StyledLandingPage>
  );
};

const StyledLandingPage = styled.div<{ $imagePath: string }>`
  width: 100vw;
  height: 100vh;
  background-position: center;
  background-image: url(${(props) => props.$imagePath});
  background-size: cover;
`;

const _StyledButton = styled(Button)`
  width: fit-content;
  height: fit-content;
  padding: 5px;
  border-width: 2px;
  color: ${({ theme }) =>
    theme.colorScheme === "dark" ? theme.white : theme.black};
  //margin-bottom: 5rem;

  font-size: 2.5rem;
  text-align: center;

  &:hover {
    background-color: lightgreen;
  }
`;

const StyledButton = createPolymorphicComponent<"button", ButtonProps>(
  _StyledButton,
);
