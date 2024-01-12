import {ECastType} from "./enums";

export interface IHero {
    id: string;
    name: string;
    redCards: string;
    blueCards: string;
    blackCards: string;
    lightCards: string;
    cards: ICard[];
    damage: string,
    singleTargetAttackCount: string,
    singleTargetAttackDmg: string,
    healAndBonusLife: string,
    friendHeal: string,
    blockHero: string,
    blockUnit: string,
    unitCount: string,
    movementCardsHero: string,
    lifeSafeCardsCount: string,
    movementUnit: string,
    buffAndDebuff: string,
    debuffCount: string,
    attackRangeType: string,
    castRangeType: string
}

export interface ICard {
    image: string;
    castType: ECastType;
}

export interface ICardWeb {
    id: string;
    name: string;
    keywords: string[];
    image: string;
    additionalInfo: string;
    count: number;
}