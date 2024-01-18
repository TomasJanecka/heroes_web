import { FC, useState } from "react";
import { IconPhoto } from "@tabler/icons-react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import HomeIcon from "@mui/icons-material/Home";
import { THeroColor } from "../../@types/types";

type Props = {
  activeHero: string;
  changeHero: (hero: string) => void;
};
export const TopNavbar: FC<Props> = ({ activeHero, changeHero }) => {
  const [activeTab, setActiveTab] = useState<string | null>("first");
  const navigate = useNavigate();

  return (
    <StyledTopNavbar>
      {/*<Link to={`/home`}>*/}
      {/*    <HomeButton $heroColor={'grey'} $justify={'start'}><HomeIcon sx={{color: "brown"}}/></HomeButton>*/}
      {/*</Link>*/}
      <HeroButtons>
        <StyledButton
          $heroColor={THeroColor["crystal"]}
          $justify={"center"}
          onClick={() => changeHero("crystal")}
        >
          Crystal
        </StyledButton>
        <StyledButton
          $heroColor={THeroColor["toxic"]}
          $justify={"center"}
          onClick={() => changeHero("toxic")}
        >
          Toxic
        </StyledButton>
      </HeroButtons>
    </StyledTopNavbar>
  );
};

const StyledTopNavbar = styled.div`
  width: 100vw;
  height: 3rem;
  display: flex;
  flex-flow: row;
  align-items: center;

  background-color: black;
`;

const HeroButtons = styled.div`
  width: 12rem;
  height: inherit;
  display: flex;
  margin: auto;

  background-color: #61dafb;
  justify-content: space-around;
  align-items: inherit;
`;

const StyledButton = styled.button<{ $justify: string; $heroColor: string }>`
  width: 5rem;
  height: fit-content;
  padding: 5px;
  border-width: 2px;
  color: ${({ theme }) =>
    theme.colorScheme === "dark" ? theme.white : theme.black};
  justify-self: ${(props) => props.$justify};
  //justify-self: stretch;

  text-align: center;

  &:hover {
    background-color: ${(props) => props.$heroColor};
    color: #282c34;
  }
`;

const HomeButton = styled(StyledButton)`
  width: fit-content;
  background-color: inherit;
  border: none;
  border-radius: 10px;
  margin-left: 0.5rem;
  padding: 2px;
`;
