import type { SkillsConfig } from './types';

export const skillsConfig: SkillsConfig = {
  "firemaking": {
    methods: [{
      name: "burn_logs",
      requirements: {
        skills: {
          firemaking: 1
        }
      },
    },
    {
      name: "wintertodt",
      requirements: {
        skills: {
          firemaking: 50
        }
      },
      unlocked_by: {
        quests: ["DRUIDIC_RITUAL"]
      }
    }],
    suggested_quests: ["SEA_SLUG"],
    prerequisites: {
      recommended_quests: ["SEA_SLUG"],
      unlocks: ["MINIGAME:WINTERTODT"]
    }
  },
  "crafting": {
    methods: [{
      name: "glassblowing",
      requirements: {
        skills: {
          crafting: 1
        },
        items: ["molten_glass", "glassblowing_pipe"]
      }
    },
    {
      name: "gem_cutting",
      requirements: {
        skills: {
          crafting: 20
        }
      }
    }]
  },
  "fishing": {
    methods: [{
      name: "shrimps_anchovies",
      requirements: {
        skills: {
          fishing: 1
        }
      }
    },
    {
      name: "trout_salmon",
      requirements: {
        skills: {
          fishing: 20
        }
      }
    },
    {
      name: "barbarian_fishing",
      requirements: {
        skills: {
          fishing: 58,
          strength: 30,
          agility: 30
        }
      }
    }],
    suggested_quests: ["SEA_SLUG"]
  },
  "magic": {
    methods: [{
      name: "use_quests",
      requirements: {
        skills: {
          magic: 1
        }
      }
    },
    {
      name: "enchanting",
      requirements: {
        skills: {
          magic: 7
        }
      }
    },
    {
      name: "alching_teleports",
      requirements: {
        skills: {
          magic: 55
        }
      }
    }],
    suggested_quests: ["WITCHS_POTION", "IMP_CATCHER"]
  },
  "prayer": {
    methods: [{
      name: "dragon_bones_altar",
      requirements: {
        skills: {
          prayer: 1
        }
      }
    },
    {
      name: "blessed_bone_shards",
      requirements: {
        skills: {
          prayer: 30
        }
      }
    }]
  },
  "herblore": {
    methods: [{
      name: "attack_potions",
      requirements: {
        skills: {
          herblore: 3
        }
      }
    },
    {
      name: "energy_potions",
      requirements: {
        skills: {
          herblore: 26
        }
      }
    },
    {
      name: "prayer_potions",
      requirements: {
        skills: {
          herblore: 38
        }
      }
    },
    {
      name: "super_energy_potions",
      requirements: {
        skills: {
          herblore: 52
        }
      }
    }]
  },
  "thieving": {
    methods: [{
      name: "pickpocket_men",
      requirements: {
        skills: {
          thieving: 1
        }
      }
    },
    {
      name: "cake_stall",
      requirements: {
        skills: {
          thieving: 5
        }
      }
    },
    {
      name: "fruit_stalls",
      requirements: {
        skills: {
          thieving: 25
        },
        quests: ["CLIENT_OF_KOUREND"]
      }
    },
    {
      name: "blackjacking",
      requirements: {
        skills: {
          thieving: 45
        },
        quests: ["THE_FEUD"]
      }
    },
    {
      name: "varlamore_thieving",
      requirements: {
        skills: {
          thieving: 45
        }
      }
    }],
    parameters: {
      "BJ": "Force blackjacking method (e.g. SKILL:THIEVING:99:BJ)",
      "VARLAMORE": "Force varlamore thieving method (e.g. SKILL:THIEVING:99:VARLAMORE)"
    }
  },
  "woodcutting": {
    methods: [{
      name: "oaks",
      requirements: {
        skills: {
          woodcutting: 1
        }
      }
    },
    {
      name: "teaks",
      requirements: {
        skills: {
          woodcutting: 35
        }
      }
    }]
  },
  "mining": {
    methods: [{
      name: "copper",
      requirements: {
        skills: {
          mining: 1
        }
      }
    },
    {
      name: "iron_isle",
      requirements: {
        skills: {
          mining: 15
        }
      }
    },
    {
      name: "iron_guild",
      requirements: {
        skills: {
          mining: 60
        }
      }
    },
    {
      name: "mlm",
      requirements: {
        skills: {
          mining: 30
        }
      }
    }]
  },
  "cooking": {
    methods: [{
      name: "fish_rogues",
      requirements: {
        skills: {
          cooking: 1
        }
      }
    },
    {
      name: "wine_ge",
      requirements: {
        skills: {
          cooking: 35
        }
      }
    }]
  },
  "agility": {
    methods: [{
      name: "courses_progressive",
      requirements: {
        skills: {
          agility: 1
        }
      }
    }]
  },
  "fletching": {
    methods: [{
      name: "headless_arrows",
      requirements: {
        skills: {
          fletching: 1
        }
      }
    },
    {
      name: "stringing_low",
      requirements: {
        skills: {
          fletching: 10
        }
      }
    },
    {
      name: "stringing_high",
      requirements: {
        skills: {
          fletching: 50
        }
      }
    }]
  },
  "runecrafting": {
    methods: [{
      name: "air_runes_ironman",
      requirements: {
        skills: {
          runecrafting: 1
        }
      }
    },
    {
      name: "air_tiaras",
      requirements: {
        skills: {
          runecrafting: 1
        }
      }
    },
    {
      name: "gotr",
      requirements: {
        skills: {
          runecrafting: 27
        },
        quests: ["TEMPLE_OF_THE_EYE"]
      }
    }]
  },
  "attack": {
    methods: [{
      name: "sand_crabs",
      requirements: {
        skills: {
          attack: 1
        }
      }
    }]
  },
  "strength": {
    methods: [{
      name: "sand_crabs",
      requirements: {
        skills: {
          strength: 1
        }
      }
    },{
      name: "blast_furnace",
      requirements: {
        skills: {
          strength: 1
        }
      }
    }],
    parameters: {
      "NO_HP": "Train without gaining HP XP"
    }
  },
  "defence": {
    methods: [{
      name: "sand_crabs",
      requirements: {
        skills: {
          defence: 1
        }
      }
    }]
  },
  "ranged": {
    methods: [{
      name: "sand_crabs",
      requirements: {
        skills: {
          ranged: 1
        }
      }
    }]
  },
  "hunter": {
    methods: [{
      name: "crimson_swifts",
      requirements: {
        skills: {
          hunter: 1
        }
      }
    },
    {
      name: "copper_longtails",
      requirements: {
        skills: {
          hunter: 9
        }
      }
    },
    {
      name: "ruby_harvest",
      requirements: {
        skills: {
          hunter: 15
        }
      }
    },
    {
      name: "falconry",
      requirements: {
        skills: {
          hunter: 43
        }
      }
    }]
  },
  "smithing": {
    methods: [{
      name: "anvil",
      requirements: {
        skills: {
          smithing: 1
        }
      }
    },
    {
      name: "blast_furnace_steel",
      requirements: {
        skills: {
          smithing: 30,
          mining: 50
        },
        other: ["coal_bag"]
      }
    },
    {
      name: "blast_furnace_gold",
      requirements: {
        skills: {
          smithing: 40,
          mining: 50
        }
      }
    }],
    suggested_quests: ["FAMILY_CREST"]
  },
  "construction": {
    methods: [{
      name: "mahogany_homes",
      requirements: {
        skills: {
          construction: 1
        },
        quests: ["PLAGUE_CITY"]
      }
    }]
  },
  "farming": {
    methods: [{
      name: "bagged_plants",
      requirements: {
        skills: {
          farming: 1
        }
      }
    }]
  }
};