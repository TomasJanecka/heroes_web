import styled from "styled-components";
import React from "react";
import {Center} from "@mantine/core";
import { ESidePanelItem } from "../../@types/enums";

type Props = {
    selectedItem: ESidePanelItem;
    togglePanel: (item: ESidePanelItem) => void;
}

export const SidePanel: React.FC<Props> = ({selectedItem, togglePanel}) => {
    const panelItems = [ESidePanelItem.all, ESidePanelItem.redCards, ESidePanelItem.blueCards, ESidePanelItem.blackCards, ESidePanelItem.lightCards, ESidePanelItem.attackCards, ESidePanelItem.unitCards, ESidePanelItem.disableCards, ESidePanelItem.buffDebuffCards]

    const getPanelItems = () => {
        return panelItems.map((item: ESidePanelItem) => (
            <PanelItem key={item} $isActive={selectedItem === item} onClick={() => togglePanel(item)}>{item}</PanelItem>
        ))
    }

    return <StyledSidePanel>{getPanelItems()}</StyledSidePanel>;
}

const StyledSidePanel = styled.div`
    display: flex;
    flex-flow: column;
    width: 8rem;
    height: fit-content;
    margin: auto auto auto auto;

    background-color: bisque;
    border: 1px solid black;
    border-radius: 5px;
`

const PanelItem = styled.div<{ $isActive: boolean }>`
    width: 90%;
    height: 2rem;
    margin: 0.5rem auto;

    border: 1px solid black;
    border-radius: 5px;
    background-color: ${(props) => (props.$isActive ? "lightgreen" : "none")};

    text-align: center;
`