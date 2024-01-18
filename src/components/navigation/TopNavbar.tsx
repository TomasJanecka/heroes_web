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
      <Link to={`/rules`}>
        {/*<HomeButton $heroColor={'grey'} $justify={'start'}><HomeIcon sx={{color: "brown"}}/></HomeButton>*/}
        <HomeButton $heroColor={"grey"} $justify={"start"}>
          Rules
        </HomeButton>
      </Link>
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

  font-weight: bold;
  text-align: center;
  border-radius: 10px;
  color: ${(props) => props.$heroColor};

  &:hover {
    background-color: ${(props) => props.$heroColor};
    //color: #282c34;
    color: black;
  }
`;

const HomeButton = styled(StyledButton)`
  width: fit-content;
  height: inherit;
  background-color: inherit;
  border: none;
  margin-left: 0.5rem;
  padding: 5px;

  color: #dbe4ff;

  &:hover {
    background-color: whitesmoke;
    color: brown;
  }
`;
