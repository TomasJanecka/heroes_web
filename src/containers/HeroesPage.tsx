import React, {useEffect, useState} from "react";
import {AllHeroes} from "../heroes/heroes";
import {HeroCards} from "../components/heroes/HeroCards";
import {Header} from "../components/Header";
import styled from "styled-components";
import {SidePanel} from "../components/heroes/SidePanel";
import {ESidePanelItem} from "../@types/enums";
import {HeroStatsBlock} from "../components/heroes/HeroStatsBlock";
import {Button, Center, Grid, Group, Stack} from "@mantine/core";
import {SidePanelMantine} from "../components/mantine/SidePanelMantine";
import {HeroesBody} from "../components/heroes/HeroesBody";
import {LandingPage} from "./LandingPage";
import {Outlet, useNavigate} from "react-router-dom";
import {TopNavbar} from "../components/mantine/TopNavbar";

export const HeroesPage: React.FC = () => {
    const [activeHero, setActiveHero] = useState<string>('crystal')
    const [selectedItem, setSelectedItem] = useState<ESidePanelItem>(ESidePanelItem.all)
    const changeHero = (hero: string) => {
        setActiveHero(hero)
    }

    const togglePanel = (item: ESidePanelItem) => {
        setSelectedItem(item)
    }

    console.log(activeHero)

    return <StyledHeroes>
        <TopNavbar activeHero={activeHero} changeHero={changeHero}/>
        <Grid align={'center'}>
            <Grid.Col span={2}><SidePanel togglePanel={togglePanel} selectedItem={selectedItem}/></Grid.Col>
            <Grid.Col span={10}><HeroesBody activeHero={activeHero}/></Grid.Col>
        </Grid>
        {/*<Grid>*/}
        {/*    <Grid.Col span={1}>Side Panel*/}
        {/*    </Grid.Col>*/}
        {/*    <Grid.Col span={11}>*/}
        {/*        <HeroesBody/>*/}
        {/*    </Grid.Col>*/}
        {/*</Grid>*/}
        {/*<SidePanel selectedItem={selectedItem} togglePanel={togglePanel}/>*/}
        {/*<Body>*/}
        {/*    <Header activeHero={activeHero} changeHero={changeHero}/>*/}
        {/*    <HeroStatsBlock hero={AllHeroes[activeHero]}/>*/}
        {/*    <HeroCards hero={AllHeroes[activeHero]} selectedPanelItem={selectedItem}/>*/}
        {/*</Body>*/}
    </StyledHeroes>
}


const StyledHeroes = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-flow: column;
    overflow-x: hidden;

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