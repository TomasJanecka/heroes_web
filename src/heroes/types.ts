export type CardObject = {
  id: CrystalCardId;
  name: string;
  hero: Hero,
  image: string,
  type: CardType,
  cardColor: CardColor,
  playRange: CardRange,
  target: CardTarget[],
  effect?: Effect[],
  isUnit?: UnitType,
  isDeactivated?: boolean
  count: number,
  aoe?: number;
  precondition?: CrystalCardId[],
  afterEffect?: () => {} | undefined
}

export enum UnitType {
  trap = "trap",
  tower = "tower",
  bomb = "bomb",
}

export enum CardRange {
  attackR = "attackR",
  castR = "castR",
  yourPosition = "yourPosition"
}

export enum CardTarget {
  enemy = "enemy",
  ally = "ally",
  self = "self",
  hero = "hero",
  unit = "unit",
  arena = "arena",
  card = "card"
}

export enum CardType {
  card = "card",
  hero = "hero",
  unit = "unit",
  battleground = "battleground" // specialny typ jendotky, hracia plocha
}

// tieto typy su na kartickach
export enum CardSpecialization {
  attack = "attack",
  range = "range",
  noBlack = "noBlack",
  unit = "unit",
  unitType = "unitType",
  tower = "tower",
  trap = "trap",
  bomb = "bomb",
  movement = "movement",
  statusChange = "statusChange",
  block = "block",
  heal = "heal",
  aoe = "aoe",
  yourPosition = "yourPosition",
}

export enum CardColor {
  red = "red",
  blue = "blue",
  black = "black",
  light = "light",
}

export type HeroType = {
  id: Hero,
  name: string,
  image: string,
  states?: HeroState[],  // stavy hrdinu
  position: number,
  attackRange: number,    // dosah utoku
  castRange: number,      // dosah kuzla
  attack: number,
  hp: number,
  maxHp: number,
  hand: CardObject[],     // karty na ruke
  deck: CardObject[],     // tahaci balicek
  discard: CardObject[],  // odhadzovaci balicek
  team: Team | undefined,
  movement: 1 | 2,
  hasEffects?: Effect[],
  heroPassive?: () => {} | undefined
}

export enum CrystalCardId {
  snowball = "snowball",
  iceMeteor = "iceMeteor",
  iceShards = "iceShards",
  snowstorm = "snowstorm",
  magicOrLife = "magicOrLife",
  iceGround = "iceGround",
  freeze = "freeze",
  iceCrystal = "iceCrystal",
  slide = "slide",
  move = "move",
  unitMove = "unitMove",
  blackAoe = "blackAoe",
  blackCastR = "blackCastR",
  blackAttackR = "blackAttackR",
  crystalPassive = "crystalPassive",
  crystalHero = "crystalHero",
}

export enum Team {
  A = "A", B = "B", C = "C",
}

export enum Hero {
  crystal = "crystal",
  toxic = "toxic",
}

export enum HeroState {
  slow = "slow",
  disarm = "disarm",
  root = "root",
  silence = "silence",
}

export enum Effect {
  block = "block",
  dispel = "dispel",
  bonusHp = "bonusHp",
  bonusAttack = "bonusAttack",
  bonusCastRange = "bonusCastRange",
  bonusAttackRange = "bonusCastRange",
  reincarnation = "reincarnation"
}