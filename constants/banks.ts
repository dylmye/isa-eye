import Bank from "@/types/bank";

const banks: Bank[] = [
  {
    id: 'abbey',
    name: "Abbey National",
    iconFile: require("@/assets/images/bank-icons/abbey.svg"),
    aliases: ['abbey', 'santander', 'abbey road'],
  },
  {
    id: 'aegon',
    name: "Aegon",
    iconFile: require("@/assets/images/bank-icons/aegon.svg"),
    aliases: [],
  },
  {
    id: 'al-rayan',
    name: "Al Rayan Bank",
    iconFile: require("@/assets/images/bank-icons/al-rayan.svg"),
    aliases: ['al rayan'],
  },
  {
    id: 'aldermore',
    name: "Aldermore",
    iconFile: require("@/assets/images/bank-icons/aldermore.svg"),
    aliases: ['ruffler'],
  },
  {
    id: 'alliance-and-leicester',
    name: "Alliance & Leicester",
    iconFile: require("@/assets/images/bank-icons/alliance-and-leicester.svg"),
    aliases: ['a&l', 'alliance + leicester', 'alliance', 'leicester', 'santander', 'girobank', 'alliance leicester'],
  },
  {
    id: 'allied-irish',
    name: "Allied Irish Bank",
    iconFile: require("@/assets/images/bank-icons/allied-irish.svg"),
    aliases: ['aib', 'irish bank', 'allied irish', 'first trust', 'provincial bank of ireland', 'royal bank of ireland', 'munster & leinster', 'munster + leinster', 'belfast banking company'],
  },
  {
    id: 'anglo-irish',
    name: "Anglo Irish",
    iconFile: require("@/assets/images/bank-icons/anglo-irish.svg"),
    aliases: ['ibrc', 'anglo', 'irish nationwide', 'irish bank resolution', 'aib'],
  },
  {
    id: 'atom',
    name: "Atom",
    iconFile: require("@/assets/images/bank-icons/atom.svg"),
    aliases: [],
  },
  {
    id: 'aviva',
    name: "Aviva",
    iconFile: require("@/assets/images/bank-icons/aviva.svg"),
    aliases: ['norwich union', 'direct line', 'aig'],
  },
  {
    id: 'axa',
    name: "AXA",
    iconFile: require("@/assets/images/bank-icons/axa.svg"),
    aliases: ['acksa', 'a x a'],
  },
];

export const bankNames: (keyof typeof banks)[] = Object.keys(banks) as (keyof typeof banks)[];

export default banks;
