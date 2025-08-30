import type { RepeatingConfig } from './types';

export const repeatingConfig: RepeatingConfig = {
  "BIRDHOUSES": {
    "syntax": "REPEATING:BIRDHOUSES:HUNTERLVL",
    "description": "Does birdhouse runs between tasks until target Hunter level is reached",
    "requirements": {
      "quests": ["BONE_VOYAGE"],
      "skills": {"hunter": 9},
      "other": []
    },
    "notes": ["Passive XP between other activities", "Requires bird nests and logs"]
  },
  "TREE_RUNS": {
    "syntax": "REPEATING:TREE_RUNS:FARMINGLVL", 
    "description": "Does tree runs between tasks until target Farming level is reached",
    "requirements": {
      "quests": ["RFD_GOBLINS", "FAIRYTALE_I"],
      "skills": {"farming": 15},
      "other": []
    },
    "notes": ["High XP/run but expensive", "Requires tree seeds and payment items"]
  },
  "HERB_RUNS": {
    "syntax": "REPEATING:HERB_RUNS:FARMINGLVL",
    "description": "Does herb runs between tasks until target Farming level is reached", 
    "requirements": {
      "quests": [],
      "skills": {"farming": 38},
      "other": []
    },
    "notes": ["Profitable farming method", "Requires herb seeds and compost"]
  },
  "SEAWEED_RUNS": {
    "syntax": "REPEATING:SEAWEED_RUNS:FARMINGLVL",
    "description": "Does seaweed runs until target Farming level is reached",
    "requirements": {
      "quests": ["BONE_VOYAGE"],
      "skills": {"farming": 22},
      "other": []
    },
    "notes": ["Underwater farming patches", "Requires giant seaweed seeds"]
  },
  "COMPOST_RUNS": {
    "syntax": "REPEATING:COMPOST_RUNS",
    "description": "Does compost bin runs until Tool Leprechaun contains ~800+ ultra compost",
    "requirements": {
      "quests": ["BONE_VOYAGE"],
      "skills": {"farming": 22},
      "other": []
    },
    "notes": ["Primarily for ironmen", "Creates ultracompost for farming efficiency"]
  },
  "HESPORI": {
    "syntax": "REPEATING:HESPORI",
    "description": "Plants and kills Hespori for farming XP and seeds",
    "requirements": {
      "quests": [],
      "skills": {"farming": 65, "magic": 59},
      "other": []
    },
    "items": ["prayer_potion"],
    "combat": {
      "magic": "fire_spells",
      "melee": "knives_for_plants"
    },
    "notes": ["Primarily for ironmen", "Good seed source", "Requires Hespori seeds"]
  },
  "KINGDOM": {
    "syntax": "REPEATING:KINGDOM[:WORKER1:WORKER2]",
    "description": "Manages Kingdom of Miscellania worker allocation",
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
    },
    "examples": {
      "REPEATING:KINGDOM:MAHOG:HERB": "10x herb before Royal Trouble, 10x mahog + 5x herb after",
      "REPEATING:KINGDOM": "Maintains kingdom without changing worker allocation"
    },
    "notes": ["Primarily for ironmen", "Provides passive resource generation", "Requires daily maintenance"]
  }
};