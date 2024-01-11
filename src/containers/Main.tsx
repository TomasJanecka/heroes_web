import React, {useState} from "react";
import {AllHeroes} from "../heroes/heroes";
import {HeroCards} from "../components/HeroCards";
import {Header} from "../components/Header";
import styled from "styled-components";
import {SidePanel} from "../components/SidePanel";

export const Main: React.FC = () => {
    const [activeHero, setActiveHero] = useState<string>('crystal')
    const changeHero = (hero: string) => {
        setActiveHero(hero)
    }

    return <StyledMain>
        <SidePanel/>
        <Body>
            <Header activeHero={activeHero} changeHero={changeHero}/>
            <HeroCards hero={AllHeroes[activeHero]}/>
        </Body>
    </StyledMain>
}

const StyledMain = styled.div`
    display: flex;
    flex-flow: row;
`

const Body = styled.div`
    display: flex;
    flex-flow: column;
    width: fit-content;
    height: fit-content;
    max-height: 100vh;
    overflow-y: auto;
`