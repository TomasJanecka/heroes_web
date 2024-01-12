import {IHero} from "../@types/api";
import {ECastType} from "../@types/enums";

export const Crystal: IHero = {
    id: 'crystal',
    name: "Crystal",
    cards: [{image: 'crystalHero.png', castType: ECastType.none}, {
        image: 'f15.png',
        castType: ECastType.none
    }, {image: 'f1.png', castType: ECastType.red}, {image: 'f2.png', castType: ECastType.red}, {
        image: 'f3.png',
        castType: ECastType.red
    }, {image: 'f4.png', castType: ECastType.red}, {image: 'f5.png', castType: ECastType.red}, {
        image: 'f6.png',
        castType: ECastType.blue
    }, {image: 'f7.png', castType: ECastType.blue}, {image: 'f8.png', castType: ECastType.blue}, {
        image: 'f9.png',
        castType: ECastType.light
    }, {image: 'f10.png', castType: ECastType.blue}, {image: 'f11.png', castType: ECastType.light}, {
        image: 'f12.png',
        castType: ECastType.black
    }, {image: 'f13.png', castType: ECastType.black}, {image: 'f14.png', castType: ECastType.black}],
    redCards: "13",
    blueCards: "8",
    blackCards: "5",
    lightCards: "5",
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

export const Toxic: IHero = {
    id: 'toxic',
    name: "Toxic",
    cards: [{image: 'toxicHero.png', castType: ECastType.none}, {
        image: 'f15.png',
        castType: ECastType.none
    }, {image: 'f1.png', castType: ECastType.red}, {image: 'f2.png', castType: ECastType.red}, {
        image: 'f3.png',
        castType: ECastType.red
    }, {image: 'f4.png', castType: ECastType.red}, {image: 'f5.png', castType: ECastType.blue}, {
        image: 'f6.png',
        castType: ECastType.blue
    }, {image: 'f7.png', castType: ECastType.blue}, {image: 'f8.png', castType: ECastType.blue}, {
        image: 'f11.png',
        castType: ECastType.light
    }, {image: 'f10.png', castType: ECastType.light}, {image: 'f9.png', castType: ECastType.light}, {
        image: 'f12.png',
        castType: ECastType.black
    }, {image: 'f13.png', castType: ECastType.black}, {image: 'f14.png', castType: ECastType.black},
    ],
    redCards: "13",
    blueCards: "8",
    blackCards: "5",
    lightCards: "5",
    damage: "12-22-30",
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

// export const Druid: IHero = {
//     id: 'druid',
//     name: "Druid",
//     cards: [{image: 'druidHero.png'}, {image: 'f15.png'}, {image: 'f1.png'}, {image: 'f2.png'}, {image: 'f3.png'}, {image: 'f4.png'}, {image: 'f5.png'}, {image: 'f6.png'}, {image: 'f7.png'}, {image: 'f8.png'}, {image: 'f11.png'}, {image: 'f10.png'}, {image: 'f9.png'}, {image: 'f12.png'}, {image: 'f13.png'}, {image: 'f14.png'}],
//     damage: "13-16, penetration",
//     redCards: "0",
//     blueCards: "0",
//     blackCards: "0",
//     lightCards: "0",
//     singleTargetAttackCount: "9",
//     singleTargetAttackDmg: "11",
//     healAndBonusLife: "4",
//     friendHeal: "4",
//     blockHero: "0",
//     blockUnit: "0",
//     unitCount: "2",
//     movementCardsHero: "12",
//     lifeSafeCardsCount: "4",
//     movementUnit: "0",
//     buffAndDebuff: "silence, debuff",
//     debuffCount: "2, 2",
//     attackRangeType: "range",
//     castRangeType: "middle"
// }

// export const Knight: IHero = {
//     id: 'knight',
//     name: "Knight",
//     cards: [{image: 'knightHero.png'}, {image: 'f15.png'}, {image: 'f1.png'}, {image: 'f2.png'}, {image: 'f3.png'}, {image: 'f4.png'}, {image: 'f5.png'}, {image: 'f6.png'}, {image: 'f7.png'}, {image: 'f8.png'}, {image: 'f11.png'}, {image: 'f10.png'}, {image: 'f9.png'}, {image: 'f12.png'}, {image: 'f13.png'}, {image: 'f14.png'}],
//     damage: "15-17",
//     redCards: "0",
//     blueCards: "0",
//     blackCards: "0",
//     lightCards: "0",
//     singleTargetAttackCount: "13",
//     singleTargetAttackDmg: "13",
//     healAndBonusLife: "4",
//     friendHeal: "0",
//     blockHero: "0",
//     blockUnit: "2",
//     unitCount: "11",
//     movementCardsHero: "8",
//     lifeSafeCardsCount: "4",
//     movementUnit: "6",
//     buffAndDebuff: "disarm",
//     debuffCount: "3-5",
//     attackRangeType: "middle",
//     castRangeType: "close"
// }

export const AllHeroes: Record<string, IHero> = {
    crystal: Crystal,
    toxic: Toxic,
    // druid: Druid,
    // knight: Knight
}