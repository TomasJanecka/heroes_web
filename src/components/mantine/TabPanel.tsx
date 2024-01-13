import {HeroesBody} from "../heroes/HeroesBody";
import {Tabs} from "@mantine/core";
import {FC} from "react";
import {AllHeroes} from "../../heroes/heroes";
import {HeroCards} from "../heroes/HeroCards";

type Props = {
    tabValue: string;
    activeHero: string;
}

export const TabPanel: FC<Props> = ({tabValue, activeHero}) => {
    return <Tabs.Panel value={tabValue}>
        <HeroCards hero={AllHeroes[activeHero]} selectedPanelItem={undefined}/>
    </Tabs.Panel>
}