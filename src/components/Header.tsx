import {AllHeroes} from "../heroes/heroes";
import styled from "styled-components";
import React from "react";

type Props = {
    activeHero: string;
    changeHero: (hero: string) => void;
};

export const Header:React.FC<Props> = ({activeHero, changeHero}) => {
    const heroes = Object.keys(AllHeroes)

    console.log(heroes)

    return <StyledHeader>
        {heroes.map((hero) => (
            <Button key={hero} onClick={() => changeHero(hero)}>{hero}</Button>
        ))}
    </StyledHeader>
}

const StyledHeader = styled.div`
    display: flex;
    flex-flow: row;
    width: 30rem;
    height: 3rem;
    margin: 1rem auto auto auto;
    justify-content: space-around;
    
    border: 1px solid black;
    border-radius: 5px;
    background-color: antiquewhite;
`

const Button = styled.button`
    width: 5rem;
    height: 2rem;
    border: none;
    margin: auto;
    background-color: #fefff5;
    border-radius: 5px;
    
    &:hover {
        background-color: lightblue;
    }
`