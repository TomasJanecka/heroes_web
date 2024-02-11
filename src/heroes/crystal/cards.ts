import { ICardWeb } from "../../@types/api";

export const CrystalCard1: ICardWeb = {
  id: "ladovaGula",
  name: "Ľadová guľa",
  keywords: ["red", "attackR", "attack", "enemy", "disable"],
  image: "f1.png",
  description:
    "Zaútoč na nepriateľa, ak už je nepriateľ spomalený, zakoreníš ho (dolož túto kartu k prvej karte so spomalením)",
  additionalInfo: "",
  count: 5,
};

export const LadovaGula = {
  id: "ladovaGula",
  name: "Ľadová guľa",
  hero: "crystal",
  image: "f1.png",
  keywords: ["red", "attackR", "attack", "enemy", "disable"],
  target: ["enemy"],
  description:
    "Zaútoč na nepriateľa, ak už je nepriateľ spomalený, zakoreníš ho (dolož túto kartu k prvej karte so spomalením)",
  additionalInfo: "",
  count: 5,
  specialNeed: [],
};

export const CrystalHero = {
  id: "crystal",
  name: "Crystal",
  image: "crystalHero.png",
  states: [], // stavy hrdinu
  position: 0,
  attackRange: 0,
  castRange: 0,
  attack: 1,
  hp: 4,
  maxHp: 4,
  hand: [], // karty na ruke
  deck: [], // tahaci balicek
  discard: [], // odhadzovaci balicek
  team: 1,
  movement: 1,
  hasEffects: ["ladovyKrystal"], // id karty ktore maju na neho effekt a daju sa zahrat
};

export const CrystalCard2: ICardWeb = {
  id: "ladovyMeteor",
  name: "Ľadový meteor",
  keywords: ["red", "attackR", "attack", "enemy"],
  image: "f2.png",
  description: "Zaútoč na dvoch nepriateľov na rovnakej pozícií",
  additionalInfo: "Zaútoč na dvoch nepriateľov na rovnakej pozícií",
  count: 3,
};

export const CrystalCard3: ICardWeb = {
  id: "ladoveOstne",
  name: "Ľadové ostne",
  keywords: ["red", "attackR", "unit", "enemy"],
  image: "f2.png",
  description: "Zaútoč na dvoch nepriateľov na rovnakej pozícií",
  additionalInfo: "Zaútoč na dvoch nepriateľov na rovnakej pozícií",
  count: 2,
};

export const CrystalCard4: ICardWeb = {
  id: "sneznaBurka",
  name: "Snežná búrka",
  keywords: ["red", "attackR", "enemy"],
  image: "f2.png",
  description: "Zaútoč na dvoch nepriateľov na rovnakej pozícií",
  additionalInfo: "Zaútoč na dvoch nepriateľov na rovnakej pozícií",
  count: 2,
};
