import type { MinigamesConfig } from './types';

export const minigamesConfig: MinigamesConfig = {
  "WINTERTODT": {
    "requirements": {"skills": {"firemaking": 50}, "quests": [], "other": []},
    "rewards": ["firemaking_xp", "pyromancer_outfit", "supplies"],
    "auto_rewards": {"conditions": ["<500k_gp", "<4_pyro_pieces"]}
  },
  "MLM": {
    "requirements": {"skills": {"mining": 30}, "quests": [], "other": []},
    "targets": ["level", "COALBAG", "GEMBAG", "SET", "HAT", "TOP", "LEGS", "BOOTS"],
    "auto_unlocks": {"on_level_target": ["coal_bag", "upper_level", "upper_hopper"]}
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
  }
};