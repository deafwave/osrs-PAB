import type { MilestonesConfig } from './types';

export const milestonesConfig: MilestonesConfig = {
  "DRAGON_DEFENDER": {
    "requirements": {"skills": {"attack_strength_combined": 130}, "quests": [], "other": []},
    "location": "warriors_guild",
    "rewards": ["dragon_defender"],
    "unlocks": {
      "activities": ["high_level_melee_training"],
      "items": ["bis_melee_offhand"]
    },
    "prerequisites": {
      "recommended_before": ["SKILL:ATTACK:60", "SKILL:STRENGTH:60"]
    }
  },
  "RUNE_DEFENDER": {
    "requirements": {"skills": {"attack_strength_combined": 130}, "quests": [], "other": []},
    "location": "warriors_guild", 
    "account_types": ["zerker"],
    "rewards": ["rune_defender"]
  },
  "FAIRY_RINGS": {
    "requirements": {"skills": {}, "quests": ["FAIRYTALE_I"], "other": []},
    "unlocks": {
      "areas": ["fairy_ring_network", "all_fairy_ring_locations"],
      "activities": ["efficient_transportation"]
    },
    "completion": "partial_fairytale_ii",
    "prerequisites": {
      "synergizes_with": ["SKILL:AGILITY:70", "graceful_outfit"]
    }
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
  },
  "BLACK_MASK": {
    "requirements": {"skills": {"slayer": 58}, "quests": ["CABIN_FEVER"], "other": []},
    "location": "cave_horrors",
    "rewards": ["black_mask"],
    "unlocks": {
      "items": ["slayer_helmet", "black_mask_imbued"],
      "activities": ["efficient_slayer_training"]
    },
    "prerequisites": {
      "recommended_before": ["MILESTONE:FAIRY_RINGS"],
      "synergizes_with": ["SKILL:COMBAT:70+"]
    }
  }
};