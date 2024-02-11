import React from "react";
import styled from "styled-components";
import {IHero} from "../../@types/api";
import {ESidePanelItem} from "../../@types/enums";

type Props = {
    hero: IHero;
    selectedPanelItem: ESidePanelItem | undefined;
};

export const HeroCards: React.FC<Props> = ({hero, selectedPanelItem}) => {
    const getHeroCards = () => {
        // console.log(selectedPanelItem)
        return hero.cards.map((card) => (
             <Card key={card.image} src={require(`../../heroes/${hero.name.toLowerCase()}/images/${card.image}`)}
                  alt={"card"}/>
            // <CardBlock key={card.image}>
            // {Object.values(hero).map((value) => value !== hero.cards && <span>{value}{"  "}</span>)}
            //     </CardBlock>
    ))}

    return <StyledHeroCards>
        {getHeroCards()}
    </StyledHeroCards>
}

const StyledHeroCards = styled.div`
    width: 100%;
    height:fit-content;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
`

const Card = styled.img`
    width: 14rem;
    height: 20rem;
    margin: 5px auto auto auto;
`

const CardBlock = styled.div`
    width: 14rem;
    height: 20rem;
    margin: 5px auto auto auto;
`




