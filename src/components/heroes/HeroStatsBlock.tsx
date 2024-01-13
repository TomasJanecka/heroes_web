import styled from "styled-components";
import {IHero} from "../../@types/api";
import React from "react";


type Props = {
    hero: IHero;
}
export const HeroStatsBlock: React.FC<Props> = ({hero}) => {
    console.log(Object.keys(hero))
    const transformHeroStats = () =>
        Object.keys(hero).map((key) => {
            return <Stat key={key}>{key}:</Stat>
        })

    return <StyledHeroStatsBlock>{transformHeroStats()}</StyledHeroStatsBlock>;
    // return <StyledHeroStatsBlock>{hero.name} and her stat block</StyledHeroStatsBlock>;
}

const StyledHeroStatsBlock = styled.div`
    display: flex;
    flex-flow: row;
    width: 100%;
    height: fit-content;
    flex-wrap: wrap;
`

const Stat = styled.div`
    width: fit-content;
    height: 2rem;
    margin: 5px;
    padding: 2px;
    
    //border: 1px solid black;
    border-radius: 5px;

    text-align: center;
`