import {Button, Grid, Stack} from '@mantine/core';
import React, {FC} from "react";
import {TopNavbar} from "../mantine/TopNavbar";
import {TabPanel} from "../mantine/TabPanel";
import {HeroCards} from "./HeroCards";
import {AllHeroes} from "../../heroes/heroes";


type Props = {
activeHero: string;
}
export const HeroesBody:FC<Props> = ({activeHero}) =>  {
    return (
        <Stack
            h={'90%'}
            bg="var(--mantine-color-body)"
        >
            <HeroCards hero={AllHeroes[activeHero]} selectedPanelItem={undefined}/>
        </Stack>
    );
}