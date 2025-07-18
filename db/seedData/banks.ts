interface BankSeedData {
  /** Unique name in db friendly format. */
  id: string;
  /** Friendly name. */
  name: string;
  /** Icon for the bank. */
  iconRelativeUrl: string;
  /** Other names and spellings for the bank, including initials and merged companies. */
  aliases: string[];
  /** Hex colour representing the bank's logo, for visualisations and gloss. */
  colour?: string;
}

/**
 * This data should not be read directly, instead use Tinybase as the source of truth.
 */
const banks: readonly BankSeedData[] = [
  {
    id: "PLACEHOLDER",
    name: "Other",
    iconRelativeUrl:
      "https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/placeholder.svg",
    aliases: ["building society", "credit union", "bs", "misc"],
    colour: "#333333",
  },
  {
    id: "abbey",
    name: "Abbey National",
    iconRelativeUrl:
      "https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/abbey.svg",
    aliases: ["abbey", "santander", "abbey road"],
    colour: "#cc2229",
  },
  {
    id: "aegon",
    name: "Aegon",
    iconRelativeUrl:
      "https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/aegon.svg",
    aliases: [],
    colour: "#0168b2",
  },
  {
    id: "al-rayan",
    name: "Al Rayan Bank",
    iconRelativeUrl:
      "https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/al-rayan.svg",
    aliases: ["al rayan"],
    colour: "#bd955a",
  },
  {
    id: "aldermore",
    name: "Aldermore",
    iconRelativeUrl:
      "https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/aldermore.svg",
    aliases: ["ruffler"],
    colour: "#ffda00",
  },
  {
    id: "alliance-and-leicester",
    name: "Alliance & Leicester",
    iconRelativeUrl:
      "https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/alliance-and-leicester.svg",
    aliases: [
      "a&l",
      "alliance + leicester",
      "alliance",
      "leicester",
      "santander",
      "girobank",
      "alliance leicester",
    ],
    colour: "#0055a0",
  },
  {
    id: "allica",
    name: "Allica",
    iconRelativeUrl:
      "https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/allica.svg",
    aliases: ["allica", "allied irish"],
    colour: "#001c33",
  },
  {
    id: "allied-irish",
    name: "Allied Irish Bank",
    iconRelativeUrl:
      "https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/allied-irish.svg",
    aliases: [
      "aib",
      "irish bank",
      "allied irish",
      "first trust",
      "provincial bank of ireland",
      "royal bank of ireland",
      "munster & leinster",
      "munster + leinster",
      "belfast banking company",
    ],
    colour: "#7e2f7a",
  },
  {
    id: "anglo-irish",
    name: "Anglo Irish",
    iconRelativeUrl:
      "https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/anglo-irish.svg",
    aliases: [
      "ibrc",
      "anglo",
      "irish nationwide",
      "irish bank resolution",
      "aib",
    ],
    colour: "#8a1d03",
  },
  {
    id: "arbuthnot-latham",
    name: "Arbuthnot Latham",
    iconRelativeUrl:
      "https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/arbuthnot-latham.svg",
    aliases: ["arbuthnot", "aitken hume", "hume"],
    colour: "#002d59",
  },
  {
    id: "atom",
    name: "Atom",
    iconRelativeUrl:
      "https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/atom.svg",
    aliases: [],
    colour: "#3c1053",
  },
  {
    id: "aviva",
    name: "Aviva",
    iconRelativeUrl:
      "https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/aviva.svg",
    aliases: ["norwich union", "direct line", "aig"],
    colour: "#fcca12",
  },
  {
    id: "axa",
    name: "AXA",
    iconRelativeUrl:
      "https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/axa.svg",
    aliases: ["acksa", "a x a"],
    colour: "#00008f",
  },
  {
    id: "bank-of-ireland-uk",
    name: "Bank of Ireland",
    iconRelativeUrl:
      "https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/bank-of-ireland-uk.svg",
    aliases: [
      "boi",
      "banc na héireann",
      "bnh",
      "bristol and west",
      "bristol & west",
      "post office",
    ],
    colour: "#0000ff",
  },
  {
    id: "bank-of-scotland",
    name: "Bank of Scotland",
    iconRelativeUrl:
      "https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/bank-of-scotland.svg",
    aliases: ["bos", "banca na h-alba", "alba", "lloyds", "hbos"],
    colour: "#05286a",
  },
  {
    id: "barclays",
    name: "Barclays",
    iconRelativeUrl:
      "https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/barclays.svg",
    aliases: [
      "barclay",
      "barklays",
      "barclay's",
      "woolwich",
      "ing direct",
      "tesco",
    ],
    colour: "#00aeef",
  },
  {
    id: "birmingham-midshires",
    name: "Birmingham Midshires",
    iconRelativeUrl:
      "https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/birmingham-midshires.svg",
    aliases: ["bm", "brum", "b mid"],
    colour: "#ee213b",
  },
  {
    id: "birmingham",
    name: "Birmingham",
    iconRelativeUrl:
      "https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/birmingham.svg",
    aliases: ["brum"],
    colour: "#2c4ef7",
  },
  {
    id: "blme",
    name: "BLME",
    iconRelativeUrl:
      "https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/blme.svg",
    aliases: ["bank of london & the middle east", "boubyan", "nomo"],
    colour: "#003f5f",
  },
  {
    id: "bny-mellon",
    name: "BNY Mellon",
    iconRelativeUrl:
      "https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/bny-mellon.svg",
    aliases: ["bny", "bnym"],
    colour: "#a49668",
  },
  {
    id: "bradford-and-bingley",
    name: "Bradford & Bingley",
    iconRelativeUrl:
      "https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/bradford-and-bingley.svg",
    aliases: ["b&m", "bnm"],
    colour: "#2d3192",
  },
  {
    id: "brewin-dolphin",
    name: "Brewin Dolphin",
    iconRelativeUrl:
      "https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/brewin-dolphin.svg",
    aliases: ["rbc", "bd"],
    colour: "#d3d3d3",
  },
  {
    id: "brown-shipley",
    name: "Brown Shipley",
    iconRelativeUrl:
      "https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/brown-shipley.svg",
    aliases: ["bs"],
    colour: "#00686b",
  },
  {
    id: "cahoot",
    name: "Cahoot",
    iconRelativeUrl:
      "https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/cahoot.svg",
    aliases: ["santander"],
    colour: "#6c207e",
  },
  {
    id: "castle-trust",
    name: "Castle Trust",
    iconRelativeUrl:
      "https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/castle-trust.svg",
    aliases: ["ct"],
    colour: "#152c49",
  },
  {
    id: "cater-allen",
    name: "Cater Allen",
    iconRelativeUrl:
      "https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/cater-allen.svg",
    aliases: ["ca", "santander"],
    colour: "#022151",
  },
  {
    id: "charity",
    name: "Charity",
    iconRelativeUrl:
      "https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/charity.svg",
    aliases: ["tcb"],
    colour: "#000000",
  },
  {
    id: "charter-savings",
    name: "Charter Savings",
    iconRelativeUrl:
      "https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/charter-savings.svg",
    aliases: ["cs"],
    colour: "#0093d6",
  },
  {
    id: "chase",
    name: "Chase",
    iconRelativeUrl:
      "https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/chase.svg",
    aliases: ["jpmorgan", "jp morgan", "jpm"],
    colour: "#126bc5",
  },
  {
    id: "cheltenham-and-gloucester",
    name: "Cheltenham & Gloucester",
    iconRelativeUrl:
      "https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/cheltenham-and-gloucester.svg",
    aliases: ["c&g", "c+g", "lloyds"],
    colour: "#2b74b8",
  },
  {
    id: "chip",
    name: "Chip",
    iconRelativeUrl:
      "https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/chip.svg",
    aliases: [],
    colour: "#000000",
  },
  {
    id: "circa5000",
    name: "Cira5000",
    iconRelativeUrl:
      "https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/circa5000.svg",
    aliases: [],
    colour: "#89f4ec",
  },
  {
    id: "close-brothers",
    name: "Close Brothers",
    iconRelativeUrl:
      "https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/close-brothers.svg",
    aliases: ["cb", "close bros"],
    colour: "#000a8b",
  },
  {
    id: "cmc",
    name: "CMC",
    iconRelativeUrl:
      "https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/cmc.svg",
    aliases: ["deal4free"],
    colour: "#03bbe1",
  },
  {
    id: "coop-bank",
    name: "The cooperative",
    iconRelativeUrl:
      "https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/coop-bank.svg",
    aliases: ["coop", "tcb"],
    colour: "#23254f",
  },
  {
    id: "coop-insurance-society",
    name: "Co-operative Insurance Society",
    iconRelativeUrl:
      "https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/coop-insurance-society.svg",
    aliases: ["coop", "cis"],
    colour: "#003f4e",
  },
  {
    id: "coutts",
    name: "Coutts",
    iconRelativeUrl:
      "https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/coutts.svg",
    aliases: [],
    colour: "#9e8d60",
  },
  {
    id: "credit-suisse",
    name: "Credit Suisse",
    iconRelativeUrl:
      "https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/credit-suisse.svg",
    aliases: ["cs"],
    colour: "#003662",
  },
  {
    id: "cynergy",
    name: "Cynergy",
    iconRelativeUrl:
      "https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/cynergy.svg",
    aliases: ["bank of cyprus", "boc"],
    colour: "#53c4a7",
  },
  {
    id: "danske",
    name: "Danske",
    iconRelativeUrl:
      "https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/danske.svg",
    aliases: ["national irish", "ni"],
    colour: "#003f63",
  },
  {
    id: "egg",
    name: "Egg",
    iconRelativeUrl:
      "https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/egg.svg",
    aliases: ["yorkshire", "ybs", "prudential", "citi", "barclays"],
    colour: "#70b323",
  },
  {
    id: "first-direct",
    name: "First Direct",
    iconRelativeUrl:
      "https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/first-direct.svg",
    aliases: [],
    colour: "#000000",
  },
  {
    id: "ford",
    name: "Ford Money",
    iconRelativeUrl:
      "https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/ford.svg",
    aliases: ["fm"],
    colour: "#00095b",
  },
  {
    id: "foresters-friendly",
    name: "Foresters Friendly",
    iconRelativeUrl:
      "https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/foresters-friendly.svg",
    aliases: [],
    colour: "#00635f",
  },
  {
    id: "freetrade",
    name: "Freetrade",
    iconRelativeUrl:
      "https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/freetrade.svg",
    aliases: ["ft"],
    colour: "#f7618b",
  },
  {
    id: "habib-zurich",
    name: "Habib Zurich",
    iconRelativeUrl:
      "https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/habib-zurich.svg",
    aliases: ["hbzuk", "hb", "zurich"],
    colour: "#00664a",
  },
  {
    id: "halifax",
    name: "Halifax",
    iconRelativeUrl:
      "https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/halifax.svg",
    aliases: [],
    colour: "#005eb8",
  },
  {
    id: "hampshire-trust",
    name: "Hampshire Trust",
    iconRelativeUrl:
      "https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/hampshire-trust.svg",
    aliases: ["ht"],
    colour: "#cd7537",
  },
  {
    id: "handelsbanken",
    name: "Handelsbanken",
    iconRelativeUrl:
      "https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/handelsbanken.svg",
    aliases: [],
    colour: "#005fa5",
  },
  {
    id: "hargreaves-lansdown",
    name: "Hargreaves Lansdown",
    iconRelativeUrl:
      "https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/hargreaves-lansdown.svg",
    aliases: ["hl"],
    colour: "#071d49",
  },
  {
    id: "healthy-investment",
    name: "Healthy Investment",
    iconRelativeUrl:
      "https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/healthy-investment.svg",
    aliases: ["hi"],
    colour: "#57559c",
  },
  {
    id: "hodge",
    name: "Hodge",
    iconRelativeUrl:
      "https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/hodge.svg",
    aliases: [],
    colour: "#f4b700",
  },
  {
    id: "hoist",
    name: "Hoist",
    iconRelativeUrl:
      "https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/hoist.svg",
    aliases: [],
    colour: "#b3267c",
  },
  {
    id: "hsbc",
    name: "HSBC",
    iconRelativeUrl:
      "https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/hsbc.svg",
    aliases: ["滙豐", "hong kong", "shanghai"],
    colour: "#db0011",
  },
  {
    id: "icesave",
    name: "Icesave",
    iconRelativeUrl:
      "https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/icesave.svg",
    aliases: ["landsbanki"],
    colour: "#57b9e9",
  },
  {
    id: "ing-direct",
    name: "ING Direct",
    iconRelativeUrl:
      "https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/ing-direct.svg",
    aliases: [],
    colour: "#ff6600",
  },
  {
    id: "intelligent-finance",
    name: "Intelligent Finance",
    iconRelativeUrl:
      "https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/intelligent-finance.svg",
    aliases: ["if"],
    colour: "#662374",
  },
  {
    id: "investec",
    name: "Investec",
    iconRelativeUrl:
      "https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/investec.svg",
    aliases: [],
    colour: "#0b1742",
  },
  {
    id: "investengine",
    name: "InvestEngine",
    iconRelativeUrl:
      "https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/investengine.svg",
    aliases: ["ie"],
    colour: "#3b3bf5",
  },
  {
    id: "jamaica-national",
    name: "Jamaica National",
    iconRelativeUrl:
      "https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/jamaica-national.svg",
    aliases: ["jnb", "jn"],
    colour: "#0053a0",
  },
  {
    id: "kent-reliance",
    name: "Kent Reliance",
    iconRelativeUrl:
      "https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/kent-reliance.svg",
    aliases: ["kr"],
    colour: "#50213f",
  },
  {
    id: "kroo",
    name: "Kroo",
    iconRelativeUrl:
      "https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/kroo.svg",
    aliases: [],
    colour: "#e3176f",
  },
  {
    id: "lhv",
    name: "LHV",
    iconRelativeUrl:
      "https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/lhv.svg",
    aliases: ["lõhmus haavel viisemann"],
    colour: "#202020",
  },
  {
    id: "lic-india",
    name: "Life Insurance Corporation of India",
    iconRelativeUrl:
      "https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/life-insurance-corp-india.svg",
    aliases: ["lic", "lici"],
    colour: "#f8c301",
  },
  {
    id: "lightyear",
    name: "Lightyear",
    iconRelativeUrl:
      "https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/lightyear.svg",
    aliases: [],
    colour: "#4e6abf",
  },
  {
    id: "lloyds-tsb",
    name: "Lloyds TSB",
    iconRelativeUrl:
      "https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/lloyds-tsb.svg",
    aliases: ["ltsb"],
    colour: "#2a74ba",
  },
  {
    id: "lloyds",
    name: "Lloyds",
    iconRelativeUrl:
      "https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/lloyds.svg",
    aliases: ["tsb", "loyds", "loids"],
    colour: "#11b67a",
  },
  {
    id: "london-victoria",
    name: "LV",
    iconRelativeUrl:
      "https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/london-victoria.svg",
    aliases: ["london victoria"],
    colour: "#b6cc00",
  },
  {
    id: "marcus",
    name: "Marcus",
    iconRelativeUrl:
      "https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/marcus.svg",
    aliases: ["goldman sachs", "gs"],
    colour: "#22263f",
  },
  {
    id: "marks-and-spencers",
    name: "M&S",
    iconRelativeUrl:
      "https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/marks-and-spencers.svg",
    aliases: ["m-s", "marks", "spencer", "ms"],
    colour: "#000000",
  },
  {
    id: "mbna",
    name: "MBNA",
    iconRelativeUrl:
      "https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/mbna.svg",
    aliases: ["maryland", "lloyds"],
    colour: "#107987",
  },
  {
    id: "metlife",
    name: "Metlife",
    iconRelativeUrl:
      "https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/metlife.svg",
    aliases: [],
    colour: "#afcb3a",
  },
  {
    id: "metro",
    name: "Metro",
    iconRelativeUrl:
      "https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/metro.svg",
    aliases: [],
    colour: "#2548af",
  },
  {
    id: "moneybox",
    name: "Moneybox",
    iconRelativeUrl:
      "https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/moneybox.svg",
    aliases: [],
    colour: "#58c4c6",
  },
  {
    id: "moneyfarm",
    name: "Moneyfarm",
    iconRelativeUrl:
      "https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/moneyfarm.svg",
    aliases: [],
    colour: "#320327",
  },
  {
    id: "monument",
    name: "Monument",
    iconRelativeUrl:
      "https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/monument.svg",
    aliases: [],
    colour: "#004048",
  },
  {
    id: "monzo",
    name: "Monzo",
    iconRelativeUrl:
      "https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/monzo.svg",
    aliases: [],
    colour: "#112231",
  },
  {
    id: "national-savings-and-investments",
    name: "NS&I",
    iconRelativeUrl:
      "https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/national-savings-and-investments.svg",
    aliases: ["ns-i", "nsi"],
    colour: "#00585c",
  },
  {
    id: "nationwide",
    name: "Nationwide",
    iconRelativeUrl:
      "https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/nationwide.svg",
    aliases: [],
    colour: "#011546",
  },
  {
    id: "natwest",
    name: "NatWest",
    iconRelativeUrl:
      "https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/natwest.svg",
    aliases: ["national westminster"],
    colour: "#3c1053",
  },
  {
    id: "nfu-mutual",
    name: "NFU Mutual",
    iconRelativeUrl:
      "https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/nfu-mutual.svg",
    aliases: ["nfum", "national farmers union"],
    colour: "#f7ca32",
  },
  {
    id: "northern-rock",
    name: "Northern Rock",
    iconRelativeUrl:
      "https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/northern-rock.svg",
    aliases: ["nr"],
    colour: "#eb008c",
  },
  {
    id: "northern",
    name: "Northern",
    iconRelativeUrl:
      "https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/northern.svg",
    aliases: [],
    colour: "#0d2a9e",
  },
  {
    id: "nutmeg",
    name: "Nutmeg",
    iconRelativeUrl:
      "https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/nutmeg.svg",
    aliases: ["jpm", "jp morgan"],
    colour: "#2fb053",
  },
  {
    id: "oak-north",
    name: "Oak North",
    iconRelativeUrl:
      "https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/oak-north.svg",
    aliases: ["on", "oaknorth"],
    colour: "#2adaa5",
  },
  {
    id: "octopus-investments",
    name: "Octopus Investments",
    iconRelativeUrl:
      "https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/octopus-investments.svg",
    aliases: ["oi", "octo"],
    colour: "#100030",
  },
  {
    id: "one-family",
    name: "One Family",
    iconRelativeUrl:
      "https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/onefamily.svg",
    aliases: ["of"],
    colour: "#1e193e",
  },
  {
    id: "oxbury",
    name: "Oxbury",
    iconRelativeUrl:
      "https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/oxbury.svg",
    aliases: [],
    colour: "#0ea149",
  },
  {
    id: "paragon",
    name: "Paragon",
    iconRelativeUrl:
      "https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/paragon.svg",
    aliases: ["paragon bank"],
    colour: "#75c92b",
  },
  {
    id: "phoenix-life",
    name: "Phoenix Life",
    iconRelativeUrl:
      "https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/phoenix-life.svg",
    aliases: ["pl"],
    colour: "#e2066f",
  },
  {
    id: "plum",
    name: "Plum",
    iconRelativeUrl:
      "https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/plum.svg",
    aliases: [],
    colour: "#1a0a2b",
  },
  {
    id: "post-office",
    name: "Post Office",
    iconRelativeUrl:
      "https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/post-office.svg",
    aliases: ["post office money"],
    colour: "#d71440",
  },
  {
    id: "prosper",
    name: "Prosper",
    iconRelativeUrl:
      "https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/prosper.svg",
    aliases: [],
    colour: "#000000",
  },
  {
    id: "punjab-national",
    name: "Punjab National",
    iconRelativeUrl:
      "https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/punjab-national.svg",
    aliases: ["pn"],
    colour: "#9f1a45",
  },
  {
    id: "qib",
    name: "QIB",
    iconRelativeUrl:
      "https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/qib.svg",
    aliases: ["qatar islamic"],
    colour: "#0075b0",
  },
  {
    id: "quilter",
    name: "Quilter",
    iconRelativeUrl:
      "https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/quilter.svg",
    aliases: [],
    colour: "#0f7b3f",
  },
  {
    id: "raisin",
    name: "Raisin",
    iconRelativeUrl:
      "https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/raisin.svg",
    aliases: [],
    colour: "#156cc4",
  },
  {
    id: "rbc-brewin-dolphin",
    name: "RBC Brewin Dolphin",
    iconRelativeUrl:
      "https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/rbc-brewin-dolphin.svg",
    aliases: ["rbc", "bd", "brewin"],
    colour: "#0059b3",
  },
  {
    id: "rbs",
    name: "RBS",
    iconRelativeUrl:
      "https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/rbs-ulster.svg",
    aliases: ["royal bank of scotland"],
    colour: "#3c1053",
  },
  {
    id: "rci",
    name: "RCI",
    iconRelativeUrl:
      "https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/rci.svg",
    aliases: ["renault", "mobilize", "nissan", "dacia"],
    colour: "#41d7eb",
  },
  {
    id: "royal-london",
    name: "Royal London",
    iconRelativeUrl:
      "https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/royal-london.svg",
    aliases: ["rl", "cis", "coop", "abbey", "santander"],
    colour: "#470054",
  },
  {
    id: "saga",
    name: "Saga",
    iconRelativeUrl:
      "https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/saga.svg",
    aliases: [],
    colour: "#1e3282",
  },
  {
    id: "sainsburys",
    name: "Sainsbury's",
    iconRelativeUrl:
      "https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/sainsburys.svg",
    aliases: ["sainsburys"],
    colour: "#f06c00",
  },
  {
    id: "santander",
    name: "Santander",
    iconRelativeUrl:
      "https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/santander.svg",
    aliases: ["abbey national", "satander"],
    colour: "#ec0000",
  },
  {
    id: "schroders",
    name: "Schroders",
    iconRelativeUrl:
      "https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/schroders.svg",
    aliases: [],
    colour: "#001e41",
  },
  {
    id: "scottish-friendly",
    name: "Scottish Friendly",
    iconRelativeUrl:
      "https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/scottish-friendly.svg",
    aliases: ["sf"],
    colour: "#472f92",
  },
  {
    id: "secure-trust",
    name: "Secure Trust",
    iconRelativeUrl:
      "https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/secure-trust.svg",
    aliases: ["st"],
    colour: "#003a67",
  },
  {
    id: "shawbrook",
    name: "Shawbrook",
    iconRelativeUrl:
      "https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/shawbrook.svg",
    aliases: ["sb"],
    colour: "#e10a93",
  },
  {
    id: "shepherds-friendly",
    name: "Shepherds Friendly",
    iconRelativeUrl:
      "https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/shepherds-friendly.svg",
    aliases: ["sf"],
    colour: "#f7a900",
  },
  {
    id: "skandia",
    name: "Skandia",
    iconRelativeUrl:
      "https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/skandia.svg",
    aliases: [],
    colour: "#005da8",
  },
  {
    id: "societe-generale",
    name: "Société Générale",
    iconRelativeUrl:
      "https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/societe-generale.svg",
    aliases: ["sg", "societe generale"],
    colour: "#e90031",
  },
  {
    id: "standard-life",
    name: "Standard Life",
    iconRelativeUrl:
      "https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/standard-life.svg",
    aliases: ["sl"],
    colour: "#0a2f73",
  },
  {
    id: "starling",
    name: "Starling",
    iconRelativeUrl:
      "https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/starling.svg",
    aliases: [],
    colour: "#6935d3",
  },
  {
    id: "state-bank-of-india",
    name: "SBI",
    iconRelativeUrl:
      "https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/state-bank-of-india.svg",
    aliases: ["state bank of india"],
    colour: "#2cb9f1",
  },
  {
    id: "stratiphy",
    name: "Stratiphy",
    iconRelativeUrl:
      "https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/stratiphy.svg",
    aliases: [],
    colour: "#6640ff",
  },
  {
    id: "strowz",
    name: "Strowz",
    iconRelativeUrl:
      "https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/strowz.svg",
    aliases: [],
    colour: "#140323",
  },
  {
    id: "tesco",
    name: "Tesco",
    iconRelativeUrl:
      "https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/tesco.svg",
    aliases: [],
    colour: "#0053a1",
  },
  {
    id: "trading-212",
    name: "Trading 212",
    iconRelativeUrl:
      "https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/trading-212.svg",
    aliases: ["t212"],
    colour: "#00a7e1",
  },
  {
    id: "transport-friendly",
    name: "Transport Friendly",
    iconRelativeUrl:
      "https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/transport-friendly.svg",
    aliases: ["tf"],
    colour: "#214393",
  },
  {
    id: "triodos",
    name: "Triodos",
    iconRelativeUrl:
      "https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/triodos.svg",
    aliases: [],
    colour: "#00937b",
  },
  {
    id: "tsb",
    name: "TSB",
    iconRelativeUrl:
      "https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/tsb.svg",
    aliases: ["trustee savings bank"],
    colour: "#00a8e1",
  },
  {
    id: "united-national",
    name: "United National",
    iconRelativeUrl:
      "https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/united-national.svg",
    aliases: ["un", "ubl"],
    colour: "#0083ca",
  },
  {
    id: "united-trust",
    name: "United Trust",
    iconRelativeUrl:
      "https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/united-trust.svg",
    aliases: ["ut"],
    colour: "#ffcf00",
  },
  {
    id: "ulster",
    name: "Ulster",
    iconRelativeUrl:
      "https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/rbs-ulster.svg",
    aliases: [],
    colour: "#3c1053",
  },
  {
    id: "vanguard",
    name: "Vanguard",
    iconRelativeUrl:
      "https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/vanguard.svg",
    aliases: ["vg"],
    colour: "#96151d",
  },
  {
    id: "vanquis",
    name: "Vanquis",
    iconRelativeUrl:
      "https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/vanquis.svg",
    aliases: ["vq"],
    colour: "#006edc",
  },
  {
    id: "vida",
    name: "Vida",
    iconRelativeUrl:
      "https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/vida.svg",
    aliases: [],
    colour: "#00003b",
  },
  {
    id: "virgin",
    name: "Virgin",
    iconRelativeUrl:
      "https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/virgin.svg",
    aliases: ["vm"],
    colour: "#e10a0a",
  },
  {
    id: "wealthify",
    name: "Wealthify",
    iconRelativeUrl:
      "https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/wealthify.svg",
    aliases: [],
    colour: "#53c0b1",
  },
  {
    id: "wealthtime",
    name: "Wealthtime",
    iconRelativeUrl:
      "https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/wealthtime.svg",
    aliases: [],
    colour: "#1dd698",
  },
  {
    id: "xtb",
    name: "XTB",
    iconRelativeUrl:
      "https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/xtb.svg",
    aliases: ["x trade brokers", "x-trade"],
    colour: "#fe0103",
  },
  {
    id: "zenith",
    name: "Zenith",
    iconRelativeUrl:
      "https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/zenith.svg",
    aliases: [],
    colour: "#ed1c24",
  },
  {
    id: "zopa",
    name: "Zopa",
    iconRelativeUrl:
      "https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/zopa.svg",
    aliases: [],
    colour: "#72e7c1",
  },
  {
    id: "habib",
    name: "Habib",
    iconRelativeUrl:
      "https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/habib.svg",
    aliases: ["hbp", "hbl"],
    colour: "#008269",
  },
  {
    id: "bpi",
    name: "Bank of the Philippine Islands",
    iconRelativeUrl:
      "https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/bpi.svg",
    aliases: ["bpi"],
    colour: "#008269",
  },
  {
    id: "nb-egypt",
    name: "National Bank of Egypt",
    iconRelativeUrl:
      "https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/nb-egypt.svg",
    aliases: ["nbe"],
    colour: "#fc8508",
  },
  {
    id: "ziraat",
    name: "Ziraat",
    iconRelativeUrl:
      "https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/ziraat.svg",
    aliases: ["bankası", "tcb"],
    colour: "#cc2229",
  },
  {
    id: "skipton",
    name: "Skipton",
    iconRelativeUrl:
      "https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/skipton.svg",
    aliases: [],
    colour: "#0072c5",
  },
  {
    id: "isbank",
    name: "İşbank",
    iconRelativeUrl:
      "https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/isbank.svg",
    aliases: ["Türkiye İş Bankası", "tib", "Business Bank of Turkey", "bbt"],
    colour: "#00428a",
  },
  {
    id: "bank-of-ceylon",
    name: "Bank of Ceylon",
    iconRelativeUrl:
      "https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/bank-of-ceylon.svg",
    aliases: ["boc", "sri lanka"],
    colour: "#ffc805",
  },
  {
    id: "british-arab-commercial",
    name: "BACB",
    iconRelativeUrl:
      "https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/british-arab-commercial.svg",
    aliases: ["ubaf"],
    colour: "#00a7cf",
  },
  {
    id: "first-city-monument",
    name: "First City Monument",
    iconRelativeUrl:
      "https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/first-city-monument.svg",
    aliases: ["fcmb"],
    colour: "#6f3f96",
  },
  {
    id: "st-james-place",
    name: "St James's Place",
    iconRelativeUrl:
      "https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/st-james-place.svg",
    aliases: ["sjp", "st james' place", "st james place"],
    colour: "#0a1428",
  },
  {
    id: "m-and-g",
    name: "M&G",
    iconRelativeUrl:
      "https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/m-and-g.svg",
    aliases: ["m and g", "m & g", "monument & general"],
    colour: "#2f6167",
  },
  {
    id: "interactive-investor",
    name: "Interactive Investor",
    iconRelativeUrl:
      "https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/interactive-investor.svg",
    aliases: ["ii", "ample", "aberdeen"],
    colour: "#0023e6",
  },
  {
    id: "gatehouse",
    name: "Gatehouse",
    iconRelativeUrl:
      "https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/gatehouse.svg",
    aliases: ["gh"],
    colour: "#a6c236",
  },
  {
    id: "smile",
    name: "smile",
    iconRelativeUrl:
      "https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/smile.svg",
    aliases: ["coop", "the co-operative"],
    colour: "#ff3399",
  },
  {
    id: "charles-stanley",
    name: "Charles Stanley",
    iconRelativeUrl:
      "https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/charles-stanley.svg",
    aliases: ["cs", "raymond james"],
    colour: "#000b49",
  },
  {
    id: "streambank",
    name: "StreamBank",
    iconRelativeUrl:
      "https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/streambank.svg",
    aliases: ["sb"],
    colour: "#0e786e",
  },
  {
    id: "castle-community",
    name: "Castle Community",
    iconRelativeUrl:
      "https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/castle-community.svg",
    aliases: ["ccb"],
    colour: "#ef1c2f",
  },
  {
    id: "prudential",
    name: "Prudential",
    iconRelativeUrl:
      "https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/prudential.svg",
    aliases: [],
    colour: "#e72139",
  },
] as const;

export default banks;
