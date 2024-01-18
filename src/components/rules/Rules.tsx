import { WordReader } from "./WordReader";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const Rules = () => {
  return (
    <StyledRules>
      <NavBar>
        <Link to={`/heroes`}>
          {/*<HomeButton $heroColor={'grey'} $justify={'start'}><HomeIcon sx={{color: "brown"}}/></HomeButton>*/}
          <HeroesButton>Heroes</HeroesButton>
        </Link>
      </NavBar>
      <WordReader />
    </StyledRules>
  );
};

const StyledRules = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-flow: column;
`;

const NavBar = styled.div`
  width: 100vw;
  height: 48px;
  display: flex;
  align-items: center;

  background-color: black;
`;

const HeroesButton = styled.button`
  width: fit-content;
  margin-left: 0.5rem;
  justify-self: start;
  padding: 5px;

  border: none;
  font-weight: bold;
  text-align: center;
  color: white;
  border-radius: 10px;
  background-color: inherit;

  &:hover {
    color: brown;
    background-color: whitesmoke;
  }
`;

const PdfBlock = styled.div`
  width: 100vw;
  height: calc(100vh - 48px);
`;
