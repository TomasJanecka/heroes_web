import {FC, useState} from 'react';
import {Button, ButtonProps, createPolymorphicComponent, rem, Stack, Tabs, TabsProps} from '@mantine/core';
import {IconPhoto} from "@tabler/icons-react";
import {IconArrowLeft} from '@tabler/icons-react';
import {IHero} from "../../@types/api";
import {HeroCards} from "../heroes/HeroCards";
import {AllHeroes} from "../../heroes/heroes";
import {useNavigate} from "react-router-dom";
import styled from "styled-components";
import {HeroesBody} from "../heroes/HeroesBody";


type Props = {
    activeHero: string;
    changeHero: (hero: string) => void;
}
export const TopNavbar: FC<Props> = ({activeHero, changeHero}) => {
    const iconStyle = {width: rem(12), height: rem(12)};
    const [activeTab, setActiveTab] = useState<string | null>('first');
    const navigate = useNavigate();

    return (
        <Tabs defaultValue="crystal" onChange={setActiveTab}>
            <Tabs.List>
                <StyledButton mr={'1rem'} color={'brown'} onClick={() => navigate('/home')}>Home</StyledButton>
                <Tabs.Tab color="blue" value="crystal" onClick={() => changeHero('crystal')}
                          leftSection={<IconPhoto style={iconStyle}/>}>
                    Crystal
                </Tabs.Tab>
                <Tabs.Tab color="teal" value="toxic" onClick={() => changeHero('toxic')}
                          leftSection={<IconPhoto style={iconStyle}/>}>
                    Toxic
                </Tabs.Tab>
            </Tabs.List>

            {/*<Tabs.Panel value="crystal">*/}
            {/*    /!*<HeroCards hero={AllHeroes[activeHero]} selectedPanelItem={undefined}/>*!/*/}
            {/*    <HeroesBody/>*/}
            {/*</Tabs.Panel>*/}

            {/*<Tabs.Panel value="toxic">*/}
            {/*    <HeroCards hero={AllHeroes[activeHero]} selectedPanelItem={undefined}/>*/}
            {/*</Tabs.Panel>*/}
        </Tabs>
    );
}

const _StyledButton = styled(Button)`
    width: fit-content;
    height: fit-content;
    padding: 5px;
    border-width: 2px;
    color: ${({theme}) => (theme.colorScheme === 'dark' ? theme.white : theme.black)};
    margin: 5px;

    text-align: center;

    &:hover {
        background-color: lightblue;
        color: #282c34;
    }
`;

const StyledButton = createPolymorphicComponent<'button', ButtonProps>(_StyledButton);

