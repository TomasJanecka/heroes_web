export interface IHero {
    id: string;
    name: string;
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
}