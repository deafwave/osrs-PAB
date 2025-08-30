import type { MilestonesConfig } from './types';

export const milestonesConfig: MilestonesConfig = {
  "DRAGON_DEFENDER": {
    "requirements": {"skills": {"attack_strength_combined": 130}, "quests": [], "other": []},
    "location": "warriors_guild",
    "rewards": ["dragon_defender"]
  },
  "RUNE_DEFENDER": {
    "requirements": {"skills": {"attack_strength_combined": 130}, "quests": [], "other": []},
    "location": "warriors_guild", 
    "account_types": ["zerker"],
    "rewards": ["rune_defender"]
  },
  "FAIRY_RINGS": {
    "requirements": {"skills": {}, "quests": ["FAIRYTALE_I"], "other": []},
    "unlocks": ["fairy_ring_network"],
    "completion": "partial_fairytale_ii"
  },
  "UNLOCK_PIETY": {
    "requirements": {"skills": {"attack": 60, "strength": 50}, "quests": ["KINGS_RANSOM"], "other": []},
    "unlocks": ["chivalry", "piety"],
    "completion": "knight_waves_training_grounds"
  },
  "ROGUES_OUTFIT": {
    "requirements": {"skills": {"agility": 50, "thieving": 50}, "quests": [], "other": []},
    "location": "rogues_den",
    "rewards": ["full_rogues_outfit"]
  },
  "ROCK_CAKE": {
    "requirements": {"skills": {}, "quests": ["RFD_DWARF"], "other": []},
    "rewards": ["dwarven_rock_cake"]
  }
};