export type CardObject = {
  id: CrystalCardId;
  name: string;
  hero: Hero,
  image: string,
  type: CardType,
  keywords: CardKeyword[],
  target: CardType[],
  effect?: CardEffect[],
  isDeactivated?: boolean
  description: string,
  count: number,
  aoe?: number;
  additionalInfo?: string,
  precondition?: CrystalCardId[],
  afterEffect?: () => {} | undefined
}

export type HeroType = {
  id: Hero,
  name: string,
  image: string,
  states?: CardEffect[], // stavy hrdinu
  position: number,
  attackRange: number,
  castRange: number,
  attack: number,
  hp: number,
  maxHp: number,
  hand: CardObject[], // karty na ruke
  deck: CardObject[], // tahaci balicek
  discard: CardObject[], // odhadzovaci balicek
  team: Team | undefined,
  movement: 1 | 2,
  hasEffects?: string[],
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

export enum CardType {
  card = "card",
  hero = "hero",
  unit = "unit",
  self = "self",
  enemy = "enemy",
  ally = "ally",
  battleground = "battleground" // specialny typ jendotky, hracia plocha
}

export enum CardKeyword {
  red = "red",
  blue = "blue",
  black = "black",
  light = "light",
  attackR = "attackR",
  castR = "castR",
  attack = "attack",
  other = "other",
  move = "move",
  unit = "unit",
  trap = "trap",
  tower = "tower",
  bomb = "bomb",
  enemy = "enemy",
  ally = "ally",
  arena = "arena",
  self = "self",
  card = "card",
  discard = "discard",
  buff = "buff",
  disable = "disable",
  block = "block",
  noBlack = "noBlack",
  movement = "movement",
  statusChange = "statusChange",
  heal = "heal",
  aoe = "aoe",
  yourPosition = "yourPosition"
}

// enum CardKeyword obsahuje vsetko z CardSpecialization
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

export enum Team {
  A = "A", B = "B", C = "C",
}

export enum Hero {
  crystal = "crystal",
  toxic = "toxic",
}

export enum CardEffect {
  slow = "slow",
  disarm = "disarm",
  root = "root",
  silence = "silence",
  block = "block",
}