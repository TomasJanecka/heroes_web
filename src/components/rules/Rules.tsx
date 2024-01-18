import { WordReader } from "./WordReader";
import styled from "styled-components";

export const Rules = () => {
  return (
    <StyledRules>
      <WordReader />
    </StyledRules>
  );
};

const StyledRules = styled.div`
  width: 100vw;
  height: 100vh;
`;
