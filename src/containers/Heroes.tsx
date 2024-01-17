import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {Button, Center, Grid, Group, Stack} from "@mantine/core";
import {TopNavbar} from "../components/navigation/TopNavbar";
import {EHero, EScrollColor, ESidePanelItem} from "../@types/enums";
import {SidePanel} from "../components/heroes/SidePanel";
import {Header} from "../components/Header";
import {HeroStatsBlock} from "../components/heroes/HeroStatsBlock";
import {AllHeroes} from "../heroes/heroes";
import {HeroCards} from "../components/heroes/HeroCards";

export const Heroes: React.FC = () => {
    const [activeHero, setActiveHero] = useState<string>('crystal')
    const [selectedItem, setSelectedItem] = useState<ESidePanelItem>(ESidePanelItem.all)
    const changeHero = (hero: string) => {
        setActiveHero(hero)
    }

    const togglePanel = (item: ESidePanelItem) => {
        setSelectedItem(item)
    }

    console.log(activeHero)

    return <StyledHeroes $scrollColor={activeHero === EHero.crystal ? EScrollColor.crystal : EScrollColor.toxic}>
        <TopNavbar activeHero={activeHero} changeHero={changeHero}/>
        {/*<Header activeHero={activeHero} changeHero={changeHero}/>*/}
        <Body>
            {/*<SidePanel selectedItem={selectedItem} togglePanel={togglePanel}/>*/}
            {/*<HeroStatsBlock hero={AllHeroes[activeHero]}/>*/}
            <HeroCards hero={AllHeroes[activeHero]} selectedPanelItem={selectedItem}/>
        </Body>
    </StyledHeroes>
}


const StyledHeroes = styled.div<{$scrollColor: string}>`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-flow: column;
    overflow-x: hidden;
    
    align-items: center;

    //background-color: lightblue;

    ::-webkit-scrollbar {
        width: 10px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 5px grey;
        border-radius: 10px;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: ${props => props.$scrollColor};
        border-radius: 10px;
    }
`

const Body = styled.div`
    display: flex;
    flex-flow: row;
    width: 100vw;
    height: calc(100vh - 4rem);
    max-height: 100vh;
    padding: 0.5rem;
    overflow-y: auto;

    /* width */
   
`