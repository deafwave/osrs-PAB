import type { AcquireConfig } from './types';

export const acquireConfig: AcquireConfig = {
  /** Available from seed shops or by pickpocketing Master Farmers */
  "Potato seed": {
    skills: { thieving: 38 },
    other: ["Pickpocket Master Farmers for ironman"]
  },
  /** Available from seed shops or by pickpocketing Master Farmers */
  "Hammerstone seed": {
    skills: { thieving: 38 },
    other: ["Pickpocket Master Farmers for ironman"]
  },
  /** Available from seed shops or by pickpocketing Master Farmers */
  "Onion seed": {
    skills: { thieving: 38 },
    other: ["Pickpocket Master Farmers for ironman"]
  },
  /** Made by using bucket of sand + soda ash at furnace */
  "Molten glass": {
    skills: { crafting: 1 }
  },
  /** Cut from trees with any axe */
  "Logs": {
    skills: { woodcutting: 1 }
  },
  /** Cut from oak trees with any axe */
  "Oak logs": {
    skills: { woodcutting: 15 }
  },
  /** Cut from willow trees with any axe */
  "Willow logs": {
    skills: { woodcutting: 30 }
  },
  /** Cut from maple trees with any axe */
  "Maple logs": {
    skills: { woodcutting: 45 }
  },
  /** Smelt silver ore at furnace */
  "Silver bar": {
    skills: { smithing: 20 }
  },
  /** Smelt gold ore at furnace */
  "Gold bar": {
    skills: { smithing: 40 },
    other: ["Goldsmith gauntlets recommended"]
  },
  /** Mine from iron rocks with pickaxe or buy from shops */
  "Iron ore": {
    skills: { mining: 15 }
  },
  /** Made from molten glass with glassblowing pipe at furnace */
  "Unpowered orb": {
    skills: { crafting: 46 }
  },
  /** Kill dragons or buy from shops */
  "Dragon bones": {
    other: ["Anti-dragon protection required"]
  },
  /** Made from willow logs + bowstring with knife */
  "Willow longbow": {
    skills: { fletching: 40 }
  },
  /** Made from emerald + gold bar at furnace with ring mould */
  "Ring of dueling(8)": {
    skills: { crafting: 40 }
  },
  /** Made from sapphire + gold bar at furnace with ring mould */
  "Ring of recoil": {
    skills: { crafting: 20 }
  },
  /** Made from sapphire + gold bar at furnace with necklace mould */
  "Games necklace(8)": {
    skills: { crafting: 20 }
  },
  /** Buy from tool shops or smith from bronze bar at anvil with hammer */
  "Bronze axe": {
    skills: { smithing: 1 }
  },
  /** Mine from gem rocks or buy from shops */
  "Sapphire": {
    skills: { mining: 40 },
    quests: ["Shilo Village"]
  },
  /** Smith from 3 steel bars at anvil or buy from armor shops */
  "Steel chainbody": {
    skills: { smithing: 26 }
  },
  /** Smith from 1 steel bar at anvil or buy from armor shops */
  "Steel med helm": {
    skills: { smithing: 20 }
  },
  /** Smith from 3 steel bars at anvil or buy from armor shops */
  "Steel platelegs": {
    skills: { smithing: 26 }
  },
  /** Fish with net at fishing spots */
  "Raw mackerel": {
    skills: { fishing: 16 }
  },
  /** Monster drop from killing snails */
  "Fat snail": {},
  /** Buy from Canifis general store */
  "Swamp paste": {},
  /** Buy from shops or mine sandstone and grind */
  "Bucket of sand": {
    skills: { mining: 35 },
    quests: ["Desert Treasure access"],
    other: ["Ironman preferred method: mine sandstone and grind"]
  },
  /** Buy from magic shops or runecraft at altars */
  "Runes": {},
  /** Buy from various shops */
  "Wines": {},
  /** Buy from food shops */
  "Cheese potatoes": {},
  /** Quest reward from Icthlarin's Little Helper */
  "Catspeak amulet": {
    quests: ["Icthlarin's Little Helper"]
  },
  /** Buy from magic shops or runecraft at death altar */
  "Death rune": {
    skills: { runecrafting: 65 },
    items: ["Death talisman"]
  },
  /** Buy from cooking shops or cook with cake tin + chocolate bar */
  "Chocolate cake": {
    skills: { cooking: 40 },
    items: ["Cake tin", "Chocolate bar"]
  },
  /** Buy from general stores */
  "Tinderbox": {},
  /** Buy from cooking shops or milk cows with bucket */
  "Bucket of milk": {
    items: ["Bucket"]
  },
  /** Buy from crafting shops */
  "Shears": {},
  /** Buy from herblore shops or fill vials at water sources */
  "Vial of water": {
    items: ["Vial"]
  },
  /** Buy from Canifis general store */
  "Bullseye lantern": {},
  /** Buy from Canifis general store */
  "Swamp tar": {},
  /** Buy from crafting shops */
  "Chisel": {},
  /** Buy from mining shops */
  "Pickaxe": {},
  /** Buy from general stores */
  "Rope": {},
  /** Buy from Freda in Burthorpe */
  "Climbing boots": {},
  /** Buy from Barbarian Outpost */
  "Vodka": {},
  /** Buy from cooking shops */
  "Pineapple chunks": {},
  /** Buy from cooking shops */
  "Grain": {},
  /** Buy from meat shops or kill chickens */
  "Raw chicken": {},
  /** Buy from herblore shops */
  "Pestle and mortar": {},
  /** Mix ranarr weed + vial of water */
  "Ranarr potion (unf)": {
    skills: { herblore: 25 },
    items: ["Ranarr weed", "Vial of water"]
  },
  "Seal of passage": {
    quests: ["Lunar Diplomacy"],
    other: ["Quest reward"]
  },
  "Goutweed": {
    quests: ["Eadgar's Ruse"],
    other: ["Quest reward"]
  },
  "Astral rune": {
    skills: { runecrafting: 40 },
    quests: ["Lunar Diplomacy"],
    other: ["Buy from Lunar Isle", "Runecraft at astral altar (ironman)"]
  },
  "Hammer": {
    other: ["Buy from general stores"]
  },
  "Mith grapple": {
    skills: { smithing: 59, fletching: 59 },
    other: ["Smith mithril bar then fletch with rope"]
  },
  "Crossbow": {
    other: ["Buy from crossbow shops"]
  },
  "Ring of charos": {
    quests: ["Creature of Fenkenstrain"],
    other: ["Quest reward"]
  },
  "Ring of charos(a)": {
    quests: ["Creature of Fenkenstrain", "Garden of Tranquillity"],
    other: ["Activate Ring of charos during Garden of Tranquillity"]
  },
  "Spade": {
    other: ["Buy from general stores"]
  },
  "Secateurs": {
    other: ["Buy from farming shops"]
  },
  "Watering can": {
    other: ["Buy from farming shops"]
  },
  "Gardening trowel": {
    other: ["Buy from farming shops"]
  },
  "Plant cure": {
    other: ["Buy from farming shops"]
  },
  "Marigold seed": {
    skills: { thieving: 38 },
    other: ["Buy from seed shops", "Pickpocket Master Farmers (ironman)"]
  },
  "Cabbage seed": {
    skills: { thieving: 38 },
    other: ["Buy from seed shops", "Pickpocket Master Farmers (ironman)"]
  },
  "Rune essence": {
    skills: { mining: 1 },
    quests: ["Rune Mysteries"],
    other: ["Buy from magic shops", "Mine at Rune Essence Mine (ironman)"]
  },
  "Filled plant pot": {
    other: ["Buy from farming shops", "Fill plant pot with soil using gardening trowel (ironman)"]
  },
  "Ultracompost": {
    other: ["Buy from farming shops", "Make at compost bin with volcanic ash + supercompost (ironman)"]
  },
  "Cooked meat": {
    skills: { cooking: 1 },
    other: ["Buy from meat shops", "Cook raw meat (ironman)"]
  },
  "Bread": {
    other: ["Buy from food shops"]
  },
  "Knife": {
    other: ["Buy from general stores"]
  },
  "Beer": {
    other: ["Buy from pub shops"]
  },
  "Lantern lens": {
    skills: { crafting: 49 },
    other: ["Make from molten glass with glassblowing pipe at furnace"]
  },
  "Bronze med helm": {
    skills: { smithing: 3 },
    other: ["Buy from armor shops", "Smith from 1 bronze bar at anvil"]
  },
  "Iron chainbody": {
    skills: { smithing: 26 },
    other: ["Buy from armor shops", "Smith from 3 iron bars at anvil"]
  },
  "Sapphire lantern": {
    skills: { crafting: 49 },
    other: ["Combine sapphire + lantern lens at furnace"]
  },
  "Rake": {
    other: ["Buy from farming shops"]
  },
  "Seed dibber": {
    other: ["Buy from farming shops"]
  }
};