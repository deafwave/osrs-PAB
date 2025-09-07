import type { MinigamesConfig } from './types';

export const minigamesConfig: MinigamesConfig = {
  "WINTERTODT": {
    "requirements": {"skills": {"firemaking": 50}, "quests": [], "other": []},
    "rewards": ["firemaking_xp", "pyromancer_outfit", "supplies"],
    "auto_rewards": {"conditions": ["<500k_gp", "<4_pyro_pieces"]},
    "prerequisites": {
      "synergizes_with": ["SKILL:HITPOINTS:10+", "warm_clothing"],
      "unlocked_by": ["SKILL:FIREMAKING:50"]
    }
  },
  "MLM": {
    "requirements": {"skills": {"mining": 30}, "quests": [], "other": []},
    "targets": ["level", "COALBAG", "GEMBAG", "SET", "HAT", "TOP", "LEGS", "BOOTS"],
    "auto_unlocks": {"on_level_target": ["coal_bag", "upper_level", "upper_hopper"]},
    "prerequisites": {
      "recommended_before": ["SKILL:MINING:72"],
      "synergizes_with": ["MILESTONE:FAIRY_RINGS", "varrock_armour"]
    }
  },
  "MTA": {
    "requirements": {"skills": {"magic": "variable" as any}, "quests": [], "other": []},
    "presets": {
      "GREENLOG": ["all_rewards"],
      "EFFICIENT": ["B2P", "master_wand", "mages_book", "infinity_boots"],
      "ROBES": ["infinity_boots", "infinity_hat", "infinity_top", "infinity_bottom"]
    },
    "individual": ["B2P", "WAND", "BOOK", "TOP", "BOTTOM", "HAT", "BOOTS", "GLOVES", "POUCH"]
  },
  "GUARDIANS_OF_THE_RIFT": {
    "integrated_into": "SKILL:RUNECRAFTING",
    "requirements": {"skills": {"runecrafting": 27}, "quests": ["TEMPLE_OF_THE_EYE"], "other": []},
    "auto_enabled": true
  },
  "GIANTS_FOUNDRY": {
    "requirements": {"skills": {"smithing": 15}, "quests": ["SLEEPING_GIANTS"], "other": []},
    "targets": ["level", "MOULD", "TOP", "LEGS", "GLOVES", "BOOTS", "COLOSSAL", "STEEL_MITHRIL", "MITHRIL_ADAMANT", "ADAMANT_RUNE"],
    "rewards": ["smithing_xp", "smiths_outfit", "moulds"]
  }
};