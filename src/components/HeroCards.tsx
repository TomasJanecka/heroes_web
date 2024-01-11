import React from "react";
import styled from "styled-components";
import {IHero} from "../@types/api";

type Props = {
    hero: IHero;
};

export const HeroCards: React.FC<Props> = ({hero}) => {
    const getHeroCards = () => hero.cards.map((card) => (
        <Card key={card.image} src={require(`../heroes/${hero.name.toLowerCase()}/images/${card.image}`)} alt={"card"}/>
    ))

    return <StyledHeroCards>
        {getHeroCards()}
    </StyledHeroCards>
}

const StyledHeroCards = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
`

const Card = styled.img`
    width: 14rem;
    height: 20rem;
    margin: 5px auto auto auto;
`




