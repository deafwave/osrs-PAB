import type { SkillsConfig } from './types';

export const skillsConfig: SkillsConfig = {
  "firemaking": {
    "methods": ["burn_logs", "wintertodt"],
    "quest_skip": ["SEA_SLUG"],
    "wintertodt_requirements": {"firemaking": 50}
  },
  "crafting": {
    "methods": ["glassblowing", "gem_cutting"],
    "level_splits": {
      "1-20": "glassblowing",
      "20-99": "gem_cutting"
    }
  },
  "fishing": {
    "methods": ["shrimps_anchovies", "trout_salmon", "barbarian_fishing"],
    "quest_skip": ["SEA_SLUG"],
    "level_splits": {
      "1-20": "shrimps_anchovies",
      "20-99": "trout_salmon",
      "58-99": "barbarian_fishing"
    },
    "barbarian_requirements": {"strength": 30, "agility": 30}
  },
  "magic": {
    "methods": ["enchanting", "alching_teleports"],
    "quest_skip": ["WITCHS_POTION", "IMP_CATCHER"],
    "level_splits": {
      "1-7": "use_quests",
      "7-55": "enchanting",
      "55-99": "alching_teleports"
    }
  },
  "prayer": {
    "methods": ["dragon_bones_altar", "blessed_bone_shards"],
    "level_splits": {
      "1-99": "dragon_bones_altar",
      "30-99_ironman": "blessed_bone_shards"
    }
  },
  "herblore": {
    "methods": ["attack_potions", "energy_potions", "prayer_potions", "super_energy_potions"],
    "level_splits": {
      "3-26": "attack_potions",
      "26-38": "energy_potions", 
      "38-52": "prayer_potions",
      "52-99": "super_energy_potions"
    }
  },
  "thieving": {
    "methods": ["pickpocket_men", "cake_stall", "fruit_stalls", "blackjacking", "varlamore_thieving"],
    "level_splits": {
      "1-5": "pickpocket_men",
      "5-25": "cake_stall",
      "25-45": "fruit_stalls",
      "45-99": "blackjacking",
      "45-99_varlamore": "varlamore_thieving"
    },
    "fruit_stalls_requirements": {"skills": {}, "quests": ["CLIENT_OF_KOUREND"], "other": []},
    "blackjacking_requirements": {"skills": {}, "quests": ["THE_FEUD"], "other": []},
    "parameters": {
      "BJ": "Force blackjacking method (e.g. SKILL:THIEVING:99:BJ)",
      "VARLAMORE": "Force varlamore thieving method (e.g. SKILL:THIEVING:99:VARLAMORE)"
    }
  },
  "woodcutting": {
    "methods": ["oaks", "teaks"],
    "level_splits": {
      "1-35": "oaks",
      "35-99": "teaks"
    }
  },
  "mining": {
    "methods": ["copper", "iron_isle", "iron_guild", "mlm"],
    "level_splits": {
      "1-15": "copper",
      "15-60": "iron_isle",
      "60-99": "iron_guild",
      "30-99_optional": "mlm"
    }
  },
  "cooking": {
    "methods": ["fish_rogues", "wine_ge"],
    "level_splits": {
      "1-35": "fish_rogues",
      "35-99": "wine_ge"
    }
  },
  "agility": {
    "methods": ["courses_progressive"],
    "rewards": ["graceful_outfit"],
    "alching": {"min_magic": 21}
  },
  "fletching": {
    "methods": ["headless_arrows", "stringing_low", "stringing_high"],
    "level_splits": {
      "1-10": "headless_arrows",
      "10-50": "stringing_low",
      "50-99": "stringing_high"
    }
  },
  "runecrafting": {
    "methods": ["air_runes_ironman", "air_tiaras", "gotr"],
    "level_splits": {
      "1-10_ironman": "air_runes_ironman",
      "1-27": "air_tiaras",
      "27-99": "gotr"
    },
    "gotr_requirements": {"skills": {}, "quests": ["TEMPLE_OF_THE_EYE"], "other": []}
  },
  "attack": {
    "methods": ["sand_crabs"],
    "special_modes": ["no_hp"]
  },
  "strength": {
    "methods": ["sand_crabs"],
    "special_modes": ["no_hp"]
  },
  "defence": {
    "methods": ["sand_crabs"]
  },
  "ranged": {
    "methods": ["sand_crabs"]
  },
  "hunter": {
    "methods": ["crimson_swifts", "copper_longtails", "ruby_harvest", "falconry"],
    "level_splits": {
      "1-9": "crimson_swifts",
      "9-15": "copper_longtails", 
      "15-43": "ruby_harvest",
      "43-99": "falconry"
    }
  },
  "smithing": {
    "methods": ["anvil", "blast_furnace_steel", "blast_furnace_gold"],
    "level_splits": {
      "1-40": "anvil",
      "30-40_ironman": "blast_furnace_steel",
      "40-99": "blast_furnace_gold"
    },
    "blast_furnace_requirements": {"mining": 50},
    "steel_requirements": {"other": ["coal_bag"]},
    "gold_benefits": {"skills": {}, "quests": ["FAMILY_CREST"], "other": []}
  },
  "construction": {
    "methods": ["mahogany_homes"],
    "requirements": {"skills": {}, "quests": ["PLAGUE_CITY"], "other": []}
  },
  "farming": {
    "methods": ["bagged_plants", "farm_runs"],
    "level_splits": {
      "1-36": "bagged_plants",
      "ongoing": "farm_runs"
    }
  }
};