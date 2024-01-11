import {IHero} from "../@types/api";

export const Crystal: IHero = {
    id:'crystal',
    name: "Crystal",
    cards: [{image: 'crystalHero.png'}, {image: 'f15.png'},{image: 'f1.png'}, {image: 'f2.png'}, {image: 'f3.png'}, {image: 'f4.png'}, {image: 'f5.png'}, {image: 'f6.png'}, {image: 'f7.png'}, {image: 'f8.png'}, {image: 'f9.png'}, {image: 'f10.png'}, {image: 'f11.png'}, {image: 'f12.png'}, {image: 'f13.png'}, {image: 'f14.png'}],
    damage: "17-24",
    singleTargetAttackCount: "11",
    singleTargetAttackDmg: "11-16",
    healAndBonusLife: "0",
    friendHeal: "0",
    blockHero: "4",
    blockUnit: "3",
    unitCount: "7",
    movementCardsHero: "11",
    lifeSafeCardsCount: "4",
    movementUnit: "3",
    buffAndDebuff: "slow, root, discard",
    debuffCount: "5-7, 0-5, 1-3",
    attackRangeType: "middle",
    castRangeType: "middle"
}

export const Toxic: IHero = {
    id:'toxic',
    name: "Toxic",
    cards: [{image: 'toxicHero.png'}, {image: 'f15.png'},{image: 'f1.png'}, {image: 'f2.png'}, {image: 'f3.png'}, {image: 'f4.png'}, {image: 'f5.png'}, {image: 'f6.png'}, {image: 'f7.png'}, {image: 'f8.png'}, {image: 'f9.png'}, {image: 'f10.png'}, {image: 'f11.png'}, {image: 'f12.png'}, {image: 'f13.png'}, {image: 'f14.png'},
    ],damage: "12-22-30",
    singleTargetAttackCount: "10",
    singleTargetAttackDmg: "12-22-30",
    healAndBonusLife: "2",
    friendHeal: "0",
    blockHero: "4",
    blockUnit: "2",
    unitCount: "7",
    movementCardsHero: "8",
    lifeSafeCardsCount: "3",
    movementUnit: "7",
    buffAndDebuff: "silence",
    debuffCount: "2",
    attackRangeType: "close",
    castRangeType: "middle"
}

export const Druid: IHero = {
    id:'druid',
    name: "Druid",
    cards: [{image: 'druidHero.png'}, {image: 'f15.png'},{image: 'f1.png'}, {image: 'f2.png'}, {image: 'f3.png'}, {image: 'f4.png'}, {image: 'f5.png'}, {image: 'f6.png'}, {image: 'f7.png'}, {image: 'f8.png'}, {image: 'f9.png'}, {image: 'f10.png'}, {image: 'f11.png'}, {image: 'f12.png'}, {image: 'f13.png'}, {image: 'f14.png'}],
    damage: "13-16, penetration",
    singleTargetAttackCount: "9",
    singleTargetAttackDmg: "11",
    healAndBonusLife: "4",
    friendHeal: "4",
    blockHero: "0",
    blockUnit: "0",
    unitCount: "2",
    movementCardsHero: "12",
    lifeSafeCardsCount: "4",
    movementUnit: "0",
    buffAndDebuff: "silence, debuff",
    debuffCount: "2, 2",
    attackRangeType: "range",
    castRangeType: "middle"
}

export const Knight: IHero = {
    id:'knight',
    name: "Knight",
    cards: [{image: 'knightHero.png'}, {image: 'f15.png'},{image: 'f1.png'}, {image: 'f2.png'}, {image: 'f3.png'}, {image: 'f4.png'}, {image: 'f5.png'}, {image: 'f6.png'}, {image: 'f7.png'}, {image: 'f8.png'}, {image: 'f9.png'}, {image: 'f10.png'}, {image: 'f11.png'}, {image: 'f12.png'}, {image: 'f13.png'}, {image: 'f14.png'}],
    damage: "15-17",
    singleTargetAttackCount: "13",
    singleTargetAttackDmg: "13",
    healAndBonusLife: "4",
    friendHeal: "0",
    blockHero: "0",
    blockUnit: "2",
    unitCount: "11",
    movementCardsHero: "8",
    lifeSafeCardsCount: "4",
    movementUnit: "6",
    buffAndDebuff: "disarm",
    debuffCount: "3-5",
    attackRangeType: "middle",
    castRangeType: "close"
}

export const AllHeroes: Record<string, IHero> = {
    crystal: Crystal,
    toxic: Toxic,
    druid: Druid,
    knight: Knight
}