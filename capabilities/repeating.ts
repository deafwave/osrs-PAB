import type { RepeatingConfig } from './types';

export const repeatingConfig: RepeatingConfig = {
  /**
   * Passive XP between other activities
   * Requires bird nests and logs
   */
  "BIRDHOUSES": {
    "syntax": "REPEATING:BIRDHOUSES:HUNTERLVL",
    "requirements": {
      "quests": ["BONE_VOYAGE"],
      "skills": {"hunter": 9},
      "other": []
    }
  },
  /**
   * High XP/run but expensive
   * Requires tree seeds and payment items
   */
  "TREE_RUNS": {
    "syntax": "REPEATING:TREE_RUNS:FARMINGLVL", 
    "requirements": {
      "quests": ["RFD_GOBLINS", "FAIRYTALE_I"],
      "skills": {"farming": 15},
      "other": []
    }
  },
  /**
   * Profitable farming method
   * Requires herb seeds and compost
   */
  "HERB_RUNS": {
    "syntax": "REPEATING:HERB_RUNS:FARMINGLVL",
    "requirements": {
      "quests": [],
      "skills": {"farming": 38},
      "other": []
    }
  },
  /**
   * Underwater farming patches
   * Requires giant seaweed seeds
   */
  "SEAWEED_RUNS": {
    "syntax": "REPEATING:SEAWEED_RUNS:FARMINGLVL",
    "requirements": {
      "quests": ["BONE_VOYAGE"],
      "skills": {"farming": 22},
      "other": []
    }
  },
  /**
   * Primarily for ironmen
   * Creates ultracompost for farming efficiency
   */
  "COMPOST_RUNS": {
    "syntax": "REPEATING:COMPOST_RUNS",
    "requirements": {
      "quests": ["BONE_VOYAGE"],
      "skills": {"farming": 22},
      "other": []
    }
  },
  /**
   * Primarily for ironmen
   * Good seed source
   * Requires Hespori seeds
   */
  "HESPORI": {
    "syntax": "REPEATING:HESPORI",
    "requirements": {
      "quests": [],
      "skills": {"farming": 65, "magic": 59},
      "other": []
    },
    "items": ["prayer_potion"],
    "combat": {
      "magic": "fire_spells",
      "melee": "knives_for_plants"
    }
  },
  /**
   * Primarily for ironmen
   * Provides passive resource generation
   * Requires daily maintenance
   */
  "KINGDOM": {
    "syntax": "REPEATING:KINGDOM[:WORKER1:WORKER2]",
    "requirements": {
      "quests": ["THRONE_OF_MISCELLANIA"],
      "skills": {},
      "other": []
    },
    "worker_options": ["HERB", "MINE", "WOOD", "TEAK", "MAHOG", "FISH", "FARM"],
    "worker_allocation": {
      "default": "10 workers in first choice, 5 in second choice",
      "pre_royal_trouble": "MAHOG/FARM ignored, 10 workers in second choice instead",
      "no_parameters": "Does not modify existing worker settings"
    }
  }
};