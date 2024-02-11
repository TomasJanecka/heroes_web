import {CardEffect, CardKeyword, CardObject, CardType, CrystalCardId, Hero, HeroType} from "../types";

export const Snowball: CardObject = {
  id: CrystalCardId.snowball,
  name: "Ľadová guľa",
  hero: Hero.crystal,
  image: "f1.png",
  type: CardType.card,
  keywords: [CardKeyword.red, CardKeyword.attackR, CardKeyword.attack, CardKeyword.enemy, CardKeyword.disable],
  target: [CardType.enemy],
  description:
    "Zaútoč na nepriateľa, ak už je nepriateľ spomalený, zakoreníš ho (dolož túto kartu k prvej karte so spomalením)",
  count: 5,
  // TODO: dorobit after effect
};

export const IceMeteor: CardObject = {
  id: CrystalCardId.iceMeteor,
  name: "Ľadový meteor",
  hero: Hero.crystal,
  image: "f2.png",
  type: CardType.card,
  keywords: [CardKeyword.red, CardKeyword.attackR, CardKeyword.attack, CardKeyword.enemy],
  target: [CardType.enemy],
  description:
    "Zaútoč na 2 nepriateľov na rovnakej pozícií",
  aoe: 2,
  count: 3,
};

export const IceShards: CardObject = {
  id: CrystalCardId.iceShards,
  name: "Ľadové ostne",
  hero: Hero.crystal,
  image: "f3.png",
  type: CardType.card,
  keywords: [CardKeyword.red, CardKeyword.attackR, CardKeyword.attack, CardKeyword.enemy],
  target: [CardType.enemy],
  description:
    "Jednotkou Zasnežená zem zaútoč útokom 1 na nepriateľa, ktorý stojí na rovnakej pozícií",
  aoe: 2,
  count: 2,
  precondition: [CrystalCardId.iceGround]
};

export const Snowstorm: CardObject = {
  id: CrystalCardId.snowstorm,
  name: "Snežná búrka",
  hero: Hero.crystal,
  image: "f4.png",
  type: CardType.card,
  keywords: [CardKeyword.blue, CardKeyword.yourPosition, CardKeyword.statusChange],
  target: [CardType.hero, CardType.enemy],
  description:
    "Každý Hrdina na tvojej pozícií sa musí pohnúť preč inak bude spomalený do konca tvojho ťahu",
  count: 2,
  // TODO: dorobit after effect
};

export const MagicOrLife: CardObject = {
  id: CrystalCardId.magicOrLife,
  name: "Kúzlo alebo život",
  hero: Hero.crystal,
  image: "f5.png",
  type: CardType.card,
  keywords: [CardKeyword.red, CardKeyword.attack, CardKeyword.yourPosition, CardKeyword.enemy],
  target: [CardType.hero, CardType.enemy],
  description:
    "Každý Hrdina na tvoj dosah musí vyhodiť Modrú kartu inak príde o 1 život",
  count: 1,
  // TODO: dorobit after effect
};

export const IceGround: CardObject = {
  id: CrystalCardId.iceGround,
  name: "Zasnežená zem",
  hero: Hero.crystal,
  image: "f6.png",
  type: CardType.unit,
  keywords: [CardKeyword.blue, CardKeyword.castR, CardKeyword.trap, CardKeyword.statusChange, CardKeyword.enemy],
  target: [CardType.hero, CardType.enemy],
  effect: [CardEffect.slow],
  description:
    "Polož Zasneženú zem do arény, keď nepriateľ odíde z tejto pozície, zostane spomalený",
  count: 3,
};

export const Freeze: CardObject = {
  id: CrystalCardId.freeze,
  name: "Zamrznutie",
  hero: Hero.crystal,
  image: "f7.png",
  type: CardType.card,
  keywords: [CardKeyword.blue, CardKeyword.castR, CardKeyword.statusChange, CardKeyword.enemy],
  target: [CardType.hero, CardType.enemy],
  effect: [CardEffect.slow],
  description:
    "Jednotkou Ľadový kryštál spomaľ nepriateľa",
  count: 3,
  precondition: [CrystalCardId.iceCrystal]
  // TODO: dorobit after effect
};

export const IceCrystal: CardObject = {
  id: CrystalCardId.iceCrystal,
  name: "Ľadový kryštál",
  hero: Hero.crystal,
  image: "f8.png",
  type: CardType.unit,
  keywords: [CardKeyword.blue, CardKeyword.castR, CardKeyword.tower, CardKeyword.block, CardKeyword.ally],
  target: [CardType.hero, CardType.ally, CardType.unit],
  effect: [CardEffect.block],
  isDeactivated: true,
  description:
    "Jednotkou Ľadový kryštál spomaľ nepriateľa",
  count: 2,
  // TODO: dorobit after effect
};

export const Slide: CardObject = {
  id: CrystalCardId.slide,
  name: "Skĺznutie",
  hero: Hero.crystal,
  image: "f9.png",
  type: CardType.card,
  keywords: [CardKeyword.light, CardKeyword.tower, CardKeyword.block, CardKeyword.ally],
  target: [CardType.self, CardType.ally, CardType.unit],
  effect: [CardEffect.block],
  description:
    "Pohni sa a na predchádzajúcej pozícií polož túto kartu z ktorej sa stane jednotka Ľadový kryštál",
  count: 3,
  // TODO: dorobit after effect
};

export const UnitMove: CardObject = {
  id: CrystalCardId.unitMove,
  name: "Pohyb s jednotkou",
  hero: Hero.crystal,
  image: "f11.png",
  type: CardType.card,
  keywords: [CardKeyword.light, CardKeyword.ally, CardKeyword.unit],
  target: [CardType.self, CardType.ally, CardType.unit],
  description:
    "Pohni sa a na predchádzajúcej pozícií polož túto kartu z ktorej sa stane jednotka Ľadový kryštál",
  count: 3,
  // TODO: dorobit after effect
};

export const BlackAoe: CardObject = {
  id: CrystalCardId.blackAoe,
  name: "Väčšia trefa",
  hero: Hero.crystal,
  image: "f12.png",
  type: CardType.card,
  keywords: [CardKeyword.black, CardKeyword.card],
  target: [CardType.card],
  description:
    "Zaútoč na ďaľšieho nepriateľa na rovnakej pozícií ako je pôvodný cieľ (Zahraj túto kartu spolu s inou Červenou kartou)",
  count: 2,
  // TODO: dorobit after effect
};

export const blackCastR: CardObject = {
  id: CrystalCardId.blackCastR,
  name: "Dosah kúzla",
  hero: Hero.crystal,
  image: "f13.png",
  type: CardType.card,
  keywords: [CardKeyword.black, CardKeyword.card],
  target: [CardType.card],
  description:
    "Dosah kúzla + 1 (Zahraj túto kartu spolu s inou Modrou kartou)",
  count: 2,
  // TODO: dorobit after effect
};

export const BlackAttackR: CardObject = {
  id: CrystalCardId.blackAttackR,
  name: "Dosah útoku",
  hero: Hero.crystal,
  image: "f13.png",
  type: CardType.card,
  keywords: [CardKeyword.black, CardKeyword.card],
  target: [CardType.card],
  description:
    "Dosah útoku + 1 (Zahraj túto kartu spolu s inou Červenou kartou)",
  count: 2,
  // TODO: dorobit after effect
};

export const CrystalHero: HeroType = {
  id: Hero.crystal,
  name: "Crystal",
  image: "crystalHero.png",
  position: 0,
  attackRange: 0,
  castRange: 0,
  attack: 1,
  hp: 4,
  maxHp: 4,
  hand: [], // karty na ruke
  deck: [], // tahaci balicek
  discard: [], // odhadzovaci balicek
  team: undefined,
  movement: 1,
};

