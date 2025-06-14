interface BankSeedData {
  /** Unique name in db friendly format. */
  id: string;
  /** Friendly name. */
  name: string;
  /** Icon for the bank. */
  iconRelativeUrl: string;
  /** Other names and spellings for the bank, including initials and merged companies. */
  aliases: string[];
}

/**
 * This data should not be read directly, instead use Tinybase as the source of truth.
 */
const banks: readonly BankSeedData[] = [
  {
    id: "PLACEHOLDER",
    name: "Other",
    iconRelativeUrl: 'https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/placeholder.svg',
    aliases: [],
  },
  {
    id: "abbey",
    name: "Abbey National",
    iconRelativeUrl: 'https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/abbey.svg',
    aliases: ["abbey", "santander", "abbey road"],
  },
  {
    id: "aegon",
    name: "Aegon",
    iconRelativeUrl: 'https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/aegon.svg',
    aliases: [],
  },
  {
    id: "al-rayan",
    name: "Al Rayan Bank",
    iconRelativeUrl: 'https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/al-rayan.svg',
    aliases: ["al rayan"],
  },
  {
    id: "aldermore",
    name: "Aldermore",
    iconRelativeUrl: 'https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/aldermore.svg',
    aliases: ["ruffler"],
  },
  {
    id: "alliance-and-leicester",
    name: "Alliance & Leicester",
    iconRelativeUrl: 'https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/alliance-and-leicester.svg',
    aliases: [
      "a&l",
      "alliance + leicester",
      "alliance",
      "leicester",
      "santander",
      "girobank",
      "alliance leicester",
    ],
  },
  {
    id: "allica",
    name: "Allica",
    iconRelativeUrl: 'https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/allica.svg',
    aliases: ["allica", "allied irish"],
  },
  {
    id: "allied-irish",
    name: "Allied Irish Bank",
    iconRelativeUrl: 'https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/allied-irish.svg',
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
  },
  {
    id: "anglo-irish",
    name: "Anglo Irish",
    iconRelativeUrl: 'https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/anglo-irish.svg',
    aliases: [
      "ibrc",
      "anglo",
      "irish nationwide",
      "irish bank resolution",
      "aib",
    ],
  },
  {
    id: "arbuthnot-latham",
    name: "Arbuthnot Latham",
    iconRelativeUrl: 'https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/arbuthnot-latham.svg',
    aliases: ["arbuthnot", "aitken hume", "hume"],
  },
  {
    id: "atom",
    name: "Atom",
    iconRelativeUrl: 'https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/atom.svg',
    aliases: [],
  },
  {
    id: "aviva",
    name: "Aviva",
    iconRelativeUrl: 'https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/aviva.svg',
    aliases: ["norwich union", "direct line", "aig"],
  },
  {
    id: "axa",
    name: "AXA",
    iconRelativeUrl: 'https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/axa.svg',
    aliases: ["acksa", "a x a"],
  },
  {
    id: "bank-of-ireland-uk",
    name: "Bank of Ireland",
    iconRelativeUrl: 'https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/bank-of-ireland-uk.svg',
    aliases: [
      "boi",
      "banc na héireann",
      "bnh",
      "bristol and west",
      "bristol & west",
      "post office",
    ],
  },
  {
    id: "bank-of-scotland",
    name: "Bank of Scotland",
    iconRelativeUrl: 'https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/bank-of-scotland.svg',
    aliases: ["bos", "banca na h-alba", "alba", "lloyds", "hbos"],
  },
  {
    id: "barclays",
    name: "Barclays",
    iconRelativeUrl: 'https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/barclays.svg',
    aliases: [
      "barclay",
      "barklays",
      "barclay's",
      "woolwich",
      "ing direct",
      "tesco",
    ],
  },
  {
    id: "birmingham-midshires",
    name: "Birmingham Midshires",
    iconRelativeUrl: 'https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/birmingham-midshires.svg',
    aliases: ["bm", "brum", "b mid"],
  },
  {
    id: "birmingham",
    name: "Birmingham",
    iconRelativeUrl: 'https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/birmingham.svg',
    aliases: ["brum"],
  },
  {
    id: "blme",
    name: "BLME",
    iconRelativeUrl: 'https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/blme.svg',
    aliases: ["bank of london & the middle east", "boubyan", "nomo"],
  },
  {
    id: "bny-mellon",
    name: "BNY Mellon",
    iconRelativeUrl: 'https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/bny-mellon.svg',
    aliases: ["bny", "bnym"],
  },
  {
    id: "bradford-and-bingley",
    name: "Bradford & Bingley",
    iconRelativeUrl: 'https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/bradford-and-bingley.svg',
    aliases: ["b&m", "bnm"],
  },
  {
    id: "brewin-dolphin",
    name: "Brewin Dolphin",
    iconRelativeUrl: 'https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/brewin-dolphin.svg',
    aliases: ["rbc", "bd"],
  },
  {
    id: "brown-shipley",
    name: "Brown Shipley",
    iconRelativeUrl: 'https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/brown-shipley.svg',
    aliases: ["bs"],
  },
  {
    id: "cahoot",
    name: "Cahoot",
    iconRelativeUrl: 'https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/cahoot.svg',
    aliases: ["santander"],
  },
  {
    id: "castle-trust",
    name: "Castle Trust",
    iconRelativeUrl: 'https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/castle-trust.svg',
    aliases: ["ct"],
  },
  {
    id: "cater-allen",
    name: "Cater Allen",
    iconRelativeUrl: 'https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/cater-allen.svg',
    aliases: ["ca", "santander"],
  },
  {
    id: "charity",
    name: "Charity",
    iconRelativeUrl: 'https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/charity.svg',
    aliases: ["tcb"],
  },
  {
    id: "charter-savings",
    name: "Charter Savings",
    iconRelativeUrl: 'https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/charter-savings.svg',
    aliases: ["cs"],
  },
  {
    id: "chase",
    name: "Chase",
    iconRelativeUrl: 'https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/chase.svg',
    aliases: ["jpmorgan", "jp morgan", "jpm"],
  },
  {
    id: "cheltenham-and-gloucester",
    name: "Cheltenham & Gloucester",
    iconRelativeUrl: 'https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/cheltenham-and-gloucester.svg',
    aliases: ["c&g", "c+g", "lloyds"],
  },
  {
    id: "chip",
    name: "Chip",
    iconRelativeUrl: 'https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/chip.svg',
    aliases: [],
  },
  {
    id: "circa5000",
    name: "Cira5000",
    iconRelativeUrl: 'https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/circa5000.svg',
    aliases: [],
  },
  {
    id: "close-brothers",
    name: "Close Brothers",
    iconRelativeUrl: 'https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/close-brothers.svg',
    aliases: ["cb", "close bros"],
  },
  {
    id: "cmc",
    name: "CMC",
    iconRelativeUrl: 'https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/cmc.svg',
    aliases: ["deal4free"],
  },
  {
    id: "coop-bank",
    name: "The cooperative",
    iconRelativeUrl: 'https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/coop-bank.svg',
    aliases: ["coop", "tcb"],
  },
  {
    id: "coop-insurance-society",
    name: "Co-operative Insurance Society",
    iconRelativeUrl: 'https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/coop-insurance-society.svg',
    aliases: ["coop", "cis"],
  },
  {
    id: "coutts",
    name: "Coutts",
    iconRelativeUrl: 'https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/coutts.svg',
    aliases: [],
  },
  {
    id: "credit-suisse",
    name: "Credit Suisse",
    iconRelativeUrl: 'https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/credit-suisse.svg',
    aliases: ["cs"],
  },
  {
    id: "cynergy",
    name: "Cynergy",
    iconRelativeUrl: 'https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/cynergy.svg',
    aliases: ["bank of cyprus", "boc"],
  },
  {
    id: "danske",
    name: "Danske",
    iconRelativeUrl: 'https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/danske.svg',
    aliases: ["national irish", "ni"],
  },
  {
    id: "egg",
    name: "Egg",
    iconRelativeUrl: 'https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/egg.svg',
    aliases: ["yorkshire", "ybs", "prudential", "citi", "barclays"],
  },
  {
    id: "first-direct",
    name: "First Direct",
    iconRelativeUrl: 'https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/first-direct.svg',
    aliases: ["fd", "hsbc"],
  },
  {
    id: "ford",
    name: "Ford Money",
    iconRelativeUrl: 'https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/ford.svg',
    aliases: ["fm"],
  },
  {
    id: "foresters-friendly",
    name: "Foresters Friendly",
    iconRelativeUrl: 'https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/foresters-friendly.svg',
    aliases: ["fd", "hsbc"],
  },
  {
    id: "freetrade",
    name: "Freetrade",
    iconRelativeUrl: 'https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/freetrade.svg',
    aliases: ["ft"],
  },
  {
    id: "habib-zurich",
    name: "Habib Zurich",
    iconRelativeUrl: 'https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/habib-zurich.svg',
    aliases: ["hbzuk", "hb", "zurich"],
  },
  {
    id: "halifax",
    name: "Halifax",
    iconRelativeUrl: 'https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/halifax.svg',
    aliases: [],
  },
  {
    id: "hampshire-trust",
    name: "Hampshire Trust",
    iconRelativeUrl: 'https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/hampshire-trust.svg',
    aliases: ["ht"],
  },
  {
    id: "handelsbanken",
    name: "Handelsbanken",
    iconRelativeUrl: 'https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/handelsbanken.svg',
    aliases: ["fd", "hsbc"],
  },
  {
    id: "hargreaves-lansdown",
    name: "Hargreaves Lansdown",
    iconRelativeUrl: 'https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/hargreaves-lansdown.svg',
    aliases: ["hl"],
  },
  {
    id: "healthy-investment",
    name: "Healthy Investment",
    iconRelativeUrl: 'https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/healthy-investment.svg',
    aliases: ["hi"],
  },
  {
    id: "hodge",
    name: "Hodge",
    iconRelativeUrl: 'https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/hodge.svg',
    aliases: [],
  },
  {
    id: "hoist",
    name: "Hoist",
    iconRelativeUrl: 'https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/hoist.svg',
    aliases: [],
  },
  {
    id: "hsbc",
    name: "HSBC",
    iconRelativeUrl: 'https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/hsbc.svg',
    aliases: ["滙豐", "hong kong", "shanghai"],
  },
  {
    id: "icesave",
    name: "Icesave",
    iconRelativeUrl: 'https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/icesave.svg',
    aliases: ["landsbanki"],
  },
  {
    id: "ing-direct",
    name: "ING Direct",
    iconRelativeUrl: 'https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/ing-direct.svg',
    aliases: [],
  },
  {
    id: "intelligent-finance",
    name: "Intelligent Finance",
    iconRelativeUrl: 'https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/intelligent-finance.svg',
    aliases: ["if"],
  },
  {
    id: "investec",
    name: "Investec",
    iconRelativeUrl: 'https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/investec.svg',
    aliases: [],
  },
  {
    id: "investengine",
    name: "InvestEngine",
    iconRelativeUrl: 'https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/investengine.svg',
    aliases: ["ie"],
  },
  {
    id: "jamaica-national",
    name: "Jamaica National",
    iconRelativeUrl: 'https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/jamaica-national.svg',
    aliases: ["jnb", "jn"],
  },
  {
    id: "kent-reliance",
    name: "Kent Reliance",
    iconRelativeUrl: 'https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/kent-reliance.svg',
    aliases: ["kr"],
  },
  {
    id: "kroo",
    name: "Kroo",
    iconRelativeUrl: 'https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/kroo.svg',
    aliases: [],
  },
  {
    id: "lhv",
    name: "LHV",
    iconRelativeUrl: 'https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/lhv.svg',
    aliases: ["lõhmus haavel viisemann"],
  },
  {
    id: "lic-india",
    name: "Life Insurance Corporation of India",
    iconRelativeUrl: 'https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/life-insurance-corp-india.svg',
    aliases: ["lic", "lici"],
  },
  {
    id: "lightyear",
    name: "Lightyear",
    iconRelativeUrl: 'https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/lightyear.svg',
    aliases: [],
  },
  {
    id: "lloyds-tsb",
    name: "Lloyds TSB",
    iconRelativeUrl: 'https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/lloyds-tsb.svg',
    aliases: ["ltsb"],
  },
  {
    id: "lloyds",
    name: "Lloyds",
    iconRelativeUrl: 'https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/lloyds.svg',
    aliases: ["tsb", "loyds", "loids"],
  },
  {
    id: "london-victoria",
    name: "LV",
    iconRelativeUrl: 'https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/london-victoria.svg',
    aliases: ["london victoria"],
  },
  {
    id: "marcus",
    name: "Marcus",
    iconRelativeUrl: 'https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/marcus.svg',
    aliases: ["goldman sachs", "gs"],
  },
  {
    id: "marks-and-spencers",
    name: "M&S",
    iconRelativeUrl: 'https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/marks-and-spencers.svg',
    aliases: ["m-s", "marks", "spencer", "ms"],
  },
  {
    id: "mbna",
    name: "MBNA",
    iconRelativeUrl: 'https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/mbna.svg',
    aliases: ["maryland", "lloyds"],
  },
  {
    id: "metlife",
    name: "Metlife",
    iconRelativeUrl: 'https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/metlife.svg',
    aliases: [],
  },
  {
    id: "metro",
    name: "Metro",
    iconRelativeUrl: 'https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/metro.svg',
    aliases: [],
  },
  {
    id: "moneybox",
    name: "Moneybox",
    iconRelativeUrl: 'https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/moneybox.svg',
    aliases: [],
  },
  {
    id: "moneyfarm",
    name: "Moneyfarm",
    iconRelativeUrl: 'https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/moneyfarm.svg',
    aliases: [],
  },
  {
    id: "monument",
    name: "Monument",
    iconRelativeUrl: 'https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/monument.svg',
    aliases: [],
  },
  {
    id: "monzo",
    name: "Monzo",
    iconRelativeUrl: 'https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/monzo.svg',
    aliases: [],
  },
  {
    id: "national-savings-and-investments",
    name: "NS&I",
    iconRelativeUrl: 'https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/national-savings-and-investments.svg',
    aliases: ["ns-i", "nsi"],
  },
  {
    id: "nationwide",
    name: "Nationwide",
    iconRelativeUrl: 'https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/nationwide.svg',
    aliases: [],
  },
  {
    id: "natwest",
    name: "NatWest",
    iconRelativeUrl: 'https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/natwest.svg',
    aliases: ["national westminster"],
  },
  {
    id: "nfu-mutual",
    name: "NFU Mutual",
    iconRelativeUrl: 'https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/nfu-mutual.svg',
    aliases: ["nfum", "national farmers union"],
  },
  {
    id: "northern-rock",
    name: "Northern Rock",
    iconRelativeUrl: 'https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/northern-rock.svg',
    aliases: ["nr"],
  },
  {
    id: "northern",
    name: "Northern",
    iconRelativeUrl: 'https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/northern.svg',
    aliases: [],
  },
  {
    id: "nutmeg",
    name: "Nutmeg",
    iconRelativeUrl: 'https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/nutmeg.svg',
    aliases: ["jpm", "jp morgan"],
  },
  {
    id: "oak-north",
    name: "Oak North",
    iconRelativeUrl: 'https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/oak-north.svg',
    aliases: ["on"],
  },
  {
    id: "octopus-investments",
    name: "Octopus Investments",
    iconRelativeUrl: 'https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/octopus-investments.svg',
    aliases: ["oi", "octo"],
  },
  {
    id: "one-family",
    name: "One Family",
    iconRelativeUrl: 'https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/onefamily.svg',
    aliases: ["of"],
  },
  {
    id: "oxbury",
    name: "Oxbury",
    iconRelativeUrl: 'https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/oxbury.svg',
    aliases: [],
  },
  {
    id: "paragon",
    name: "Paragon",
    iconRelativeUrl: 'https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/paragon.svg',
    aliases: ["paragon bank"],
  },
  {
    id: "phoenix-life",
    name: "Phoenix Life",
    iconRelativeUrl: 'https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/phoenix-life.svg',
    aliases: ["pl"],
  },
  {
    id: "plum",
    name: "Plum",
    iconRelativeUrl: 'https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/plum.svg',
    aliases: [],
  },
  {
    id: "post-office",
    name: "Post Office",
    iconRelativeUrl: 'https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/post-office.svg',
    aliases: ["post office money"],
  },
  {
    id: "prosper",
    name: "Prosper",
    iconRelativeUrl: 'https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/prosper.svg',
    aliases: [],
  },
  {
    id: "punjab-national",
    name: "Punjab National",
    iconRelativeUrl: 'https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/punjab-national.svg',
    aliases: ["pn"],
  },
  {
    id: "qib",
    name: "QIB",
    iconRelativeUrl: 'https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/qib.svg',
    aliases: ["qatar islamic"],
  },
  {
    id: "quilter",
    name: "Quilter",
    iconRelativeUrl: 'https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/quilter.svg',
    aliases: [],
  },
  {
    id: "raisin",
    name: "Raisin",
    iconRelativeUrl: 'https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/raisin.svg',
    aliases: [],
  },
  {
    id: "rbc-brewin-dolphin",
    name: "RBC Brewin Dolphin",
    iconRelativeUrl: 'https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/rbc-brewin-dolphin.svg',
    aliases: ["rbc", "bd", "brewin"],
  },
  {
    id: "rbs",
    name: "RBS",
    iconRelativeUrl: 'https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/rbs-ulster.svg',
    aliases: ["royal bank of scotland"],
  },
  {
    id: "rci",
    name: "RCI",
    iconRelativeUrl: 'https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/rci.svg',
    aliases: ["renault", "mobilize", "nissan", "dacia"],
  },
  {
    id: "royal-london",
    name: "Royal London",
    iconRelativeUrl: 'https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/royal-london.svg',
    aliases: ["rl", "cis", "coop", "abbey", "santander"],
  },
  {
    id: "saga",
    name: "Saga",
    iconRelativeUrl: 'https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/saga.svg',
    aliases: [],
  },
  {
    id: "sainsburys",
    name: "Sainsbury's",
    iconRelativeUrl: 'https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/sainsburys.svg',
    aliases: ["sainsburys"],
  },
  {
    id: "santander",
    name: "Santander",
    iconRelativeUrl: 'https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/santander.svg',
    aliases: ["abbey national", "satander"],
  },
  {
    id: "schroders",
    name: "Schroders",
    iconRelativeUrl: 'https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/schroders.svg',
    aliases: [],
  },
  {
    id: "scottish-friendly",
    name: "Scottish Friendly",
    iconRelativeUrl: 'https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/scottish-friendly.svg',
    aliases: ["sf"],
  },
  {
    id: "secure-trust",
    name: "Secure Trust",
    iconRelativeUrl: 'https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/secure-trust.svg',
    aliases: ["st"],
  },
  {
    id: "shawbrook",
    name: "Shawbrook",
    iconRelativeUrl: 'https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/shawbrook.svg',
    aliases: ["sb"],
  },
  {
    id: "shepherds-friendly",
    name: "Shepherds Friendly",
    iconRelativeUrl: 'https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/shepherds-friendly.svg',
    aliases: ["sf"],
  },
  {
    id: "skandia",
    name: "Skandia",
    iconRelativeUrl: 'https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/skandia.svg',
    aliases: [],
  },
  {
    id: "societe-generale",
    name: "Société Générale",
    iconRelativeUrl: 'https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/societe-generale.svg',
    aliases: ["sg", "societe generale"],
  },
  {
    id: "standard-life",
    name: "Standard Life",
    iconRelativeUrl: 'https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/standard-life.svg',
    aliases: ["sl"],
  },
  {
    id: "starling",
    name: "Starling",
    iconRelativeUrl: 'https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/starling.svg',
    aliases: [],
  },
  {
    id: "state-bank-of-india",
    name: "SBI",
    iconRelativeUrl: 'https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/state-bank-of-india.svg',
    aliases: ["standard bank of india"],
  },
  {
    id: "stratiphy",
    name: "Stratiphy",
    iconRelativeUrl: 'https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/stratiphy.svg',
    aliases: [],
  },
  {
    id: "strowz",
    name: "Strowz",
    iconRelativeUrl: 'https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/strowz.svg',
    aliases: [],
  },
  {
    id: "tesco",
    name: "Tesco",
    iconRelativeUrl: 'https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/tesco.svg',
    aliases: [],
  },
  {
    id: "trading-212",
    name: "Trading 212",
    iconRelativeUrl: 'https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/trading-212.svg',
    aliases: ["t212"],
  },
  {
    id: "transport-friendly",
    name: "Transport Friendly",
    iconRelativeUrl: 'https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/transport-friendly.svg',
    aliases: ["tf"],
  },
  {
    id: "triodos",
    name: "Triodos",
    iconRelativeUrl: 'https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/triodos.svg',
    aliases: [],
  },
  {
    id: "tsb",
    name: "TSB",
    iconRelativeUrl: 'https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/tsb.svg',
    aliases: ["trustee savings bank"],
  },
  {
    id: "united-national",
    name: "United National",
    iconRelativeUrl: 'https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/united-national.svg',
    aliases: ["un"],
  },
  {
    id: "united-trust",
    name: "United Trust",
    iconRelativeUrl: 'https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/united-trust.svg',
    aliases: ["ut"],
  },
  {
    id: "ulster",
    name: "Ulster",
    iconRelativeUrl: 'https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/rbs-ulster.svg',
    aliases: [],
  },
  {
    id: "vanguard",
    name: "Vanguard",
    iconRelativeUrl: 'https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/vanguard.svg',
    aliases: ["vg"],
  },
  {
    id: "vanquis",
    name: "Vanquis",
    iconRelativeUrl: 'https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/vanquis.svg',
    aliases: ["vq"],
  },
  {
    id: "vida",
    name: "Vida",
    iconRelativeUrl: 'https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/vida.svg',
    aliases: [],
  },
  {
    id: "virgin",
    name: "Virgin",
    iconRelativeUrl: 'https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/virgin.svg',
    aliases: ["vm"],
  },
  {
    id: "wealthify",
    name: "Wealthify",
    iconRelativeUrl: 'https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/wealthify.svg',
    aliases: [],
  },
  {
    id: "wealthtime",
    name: "Wealthtime",
    iconRelativeUrl: 'https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/wealthtime.svg',
    aliases: [],
  },
  {
    id: "xtb",
    name: "XTB",
    iconRelativeUrl: 'https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/xtb.svg',
    aliases: ["x trade brokers", "x-trade"],
  },
  {
    id: "zenith",
    name: "Zenith",
    iconRelativeUrl: 'https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/zenith.svg',
    aliases: [],
  },
  {
    id: "zopa",
    name: "Zopa",
    iconRelativeUrl: 'https://isa-eye-uploads-prod.dylmye.me/default-bank-icons/zopa.svg',
    aliases: [],
  },
] as const;

export default banks;