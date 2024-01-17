import {AllHeroes} from "../heroes/heroes";
import styled from "styled-components";
import React from "react";
import {THeroColor} from "../@types/types";

type Props = {
    activeHero: string;
    changeHero: (hero: string) => void;
};

export const Header: React.FC<Props> = ({activeHero, changeHero}) => {
    const heroes = Object.keys(AllHeroes)

    console.log(activeHero)

    console.log(heroes)

    const getButtons = () => {
        return heroes.map((hero) => {
                console.log(hero === activeHero)
                return <Button key={hero} $isActive={hero === activeHero} $color={THeroColor[activeHero]}
                               onClick={() => changeHero(hero)}>{hero}</Button>
            }
        )
    }


    return <StyledHeader>
        {getButtons()}
    </StyledHeader>
}

const StyledHeader = styled.div`
    display: flex;
    flex-flow: row;
    width: 30rem;
    height: 3rem;
    margin: auto auto auto auto;
    padding: 0.5rem;
    justify-content: space-around;

    border: 1px solid black;
    border-radius: 5px;
    background-color: antiquewhite;
`

const Button = styled.button<{ $isActive: boolean, $color: string }>`
    width: 5rem;
    height: 2rem;
    border: none;
    margin: auto;
    background-color: ${(props) => (props.$isActive ? props.$color : "#fefff5")};
    border-radius: 5px;

    &:hover {
        background-color: lightblue;
    }
`