import React, {useState} from "react";
import {AllHeroes} from "../heroes/heroes";
import {HeroCards} from "../components/HeroCards";
import {Header} from "../components/Header";
import styled from "styled-components";
import {SidePanel} from "../components/SidePanel";
import {ESidePanelItem} from "../@types/enums";
import {HeroStatsBlock} from "../components/HeroStatsBlock";
import {OriginalMenu} from "../components/manTine/menu/OriginalMenu";
import {Button, Stack} from "@mantine/core";

export const Main: React.FC = () => {
    const [activeHero, setActiveHero] = useState<string>('crystal')
    const [selectedItem, setSelectedItem] = useState<ESidePanelItem>(ESidePanelItem.all)
    const changeHero = (hero: string) => {
        setActiveHero(hero)
    }

    const togglePanel = (item: ESidePanelItem) => {
        setSelectedItem(item)
    }

    return <StyledMain>
        <SidePanel selectedItem={selectedItem} togglePanel={togglePanel}/>
        <Body>
            <Header activeHero={activeHero} changeHero={changeHero}/>
            <HeroStatsBlock hero={AllHeroes[activeHero]}/>
            <HeroCards hero={AllHeroes[activeHero]} selectedPanelItem={selectedItem}/>
        </Body>
        {/*<OriginalMenu/>*/}
    </StyledMain>
}



const StyledMain = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    
    //background-color: lightblue;
`

const Body = styled.div`
    display: flex;
    flex-flow: column;
    width: calc(100vw - 8rem);
    height: fit-content;
    max-height: 100vh;
    overflow-y: auto;
`