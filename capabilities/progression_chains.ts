import type { Requirements } from './types';

// Progression chains showing interconnected unlock sequences
export interface ProgressionChain {
  name: string;
  description: string;
  steps: {
    step: number;
    tasks: string[];
    unlocks: string[];
    enables: string[];
  }[];
  synergies?: string[];
}

export interface ProgressionChainsConfig {
  [chainName: string]: ProgressionChain;
}

export const progressionChainsConfig: ProgressionChainsConfig = {
  "SLAYER_PROGRESSION": {
    name: "Slayer Progression Chain",
    description: "Complete slayer unlock sequence from basic access to efficient training",
    steps: [
      {
        step: 1,
        tasks: ["QUEST:PRIEST_IN_PERIL"],
        unlocks: ["slayer_assignments", "morytania_access"],
        enables: ["SKILL:SLAYER:1+"]
      },
      {
        step: 2,
        tasks: ["QUEST:CABIN_FEVER", "SKILL:SLAYER:58"],
        unlocks: ["cave_horrors_access"],
        enables: ["MILESTONE:BLACK_MASK"]
      },
      {
        step: 3,
        tasks: ["MILESTONE:BLACK_MASK"],
        unlocks: ["slayer_helmet", "efficient_slayer_training"],
        enables: ["high_level_slayer_tasks"]
      }
    ],
    synergies: ["MILESTONE:FAIRY_RINGS", "graceful_outfit"]
  },
  "MELEE_COMBAT_PROGRESSION": {
    name: "Melee Combat Progression",
    description: "Optimal melee training progression with key unlocks",
    steps: [
      {
        step: 1,
        tasks: ["QUEST:WATERFALL_QUEST"],
        unlocks: ["30_attack_strength_experience"],
        enables: ["mid_level_combat"]
      },
      {
        step: 2,
        tasks: ["SKILL:ATTACK:60", "SKILL:STRENGTH:60"],
        unlocks: ["dragon_weapons", "high_level_training"],
        enables: ["MILESTONE:DRAGON_DEFENDER"]
      },
      {
        step: 3,
        tasks: ["MILESTONE:DRAGON_DEFENDER"],
        unlocks: ["bis_melee_offhand"],
        enables: ["efficient_melee_training"]
      }
    ],
    synergies: ["QUEST:ANIMAL_MAGNETISM", "graceful_outfit"]
  },
  "TRANSPORTATION_NETWORK": {
    name: "Transportation Network Setup",
    description: "Establish efficient transportation methods",
    steps: [
      {
        step: 1,
        tasks: ["QUEST:FAIRYTALE_I"],
        unlocks: ["fairy_ring_access"],
        enables: ["MILESTONE:FAIRY_RINGS"]
      },
      {
        step: 2,
        tasks: ["MILESTONE:FAIRY_RINGS"],
        unlocks: ["fairy_ring_network", "fast_transportation"],
        enables: ["efficient_skilling", "questing"]
      },
      {
        step: 3,
        tasks: ["SKILL:AGILITY:70", "graceful_outfit"],
        unlocks: ["energy_efficient_movement"],
        enables: ["endgame_efficiency"]
      }
    ],
    synergies: ["DIARY:VARROCK_MEDIUM", "DIARY:LUMBRIDGE_MEDIUM"]
  },
  "HERBLORE_UNLOCK_CHAIN": {
    name: "Herblore Unlock Chain",
    description: "From skill unlock to efficient training methods",
    steps: [
      {
        step: 1,
        tasks: ["QUEST:DRUIDIC_RITUAL"],
        unlocks: ["herblore_skill", "taverley_dungeon"],
        enables: ["SKILL:HERBLORE:1+"]
      },
      {
        step: 2,
        tasks: ["SKILL:HERBLORE:3+"],
        unlocks: ["basic_potions", "barbarian_training"],
        enables: ["combat_enhancement"]
      }
    ],
    synergies: ["farming_runs", "ACQUIRE:herbs"]
  },
  "IRONMAN_EARLY_GAME": {
    name: "Ironman Early Game Setup",
    description: "Essential early game progression for ironman accounts",
    steps: [
      {
        step: 1,
        tasks: ["OTHER:IRON_STARTER_PART1"],
        unlocks: ["basic_tools", "initial_resources"],
        enables: ["early_skilling"]
      },
      {
        step: 2,
        tasks: ["QUEST:WATERFALL_QUEST", "QUEST:DRUIDIC_RITUAL"],
        unlocks: ["combat_levels", "herblore_access"],
        enables: ["mid_game_content"]
      },
      {
        step: 3,
        tasks: ["MINIGAME:WINTERTODT"],
        unlocks: ["firemaking_levels", "early_supplies"],
        enables: ["resource_generation"]
      }
    ],
    synergies: ["QUEST:ANIMAL_MAGNETISM", "thieving_training"]
  }
};

// Helper function to find chains that include a specific task
export function findChainsForTask(taskName: string): string[] {
  const chains: string[] = [];
  
  for (const [chainName, chain] of Object.entries(progressionChainsConfig)) {
    const hasTask = chain.steps.some(step => 
      step.tasks.includes(taskName) || 
      step.unlocks.includes(taskName) || 
      step.enables.includes(taskName)
    );
    
    if (hasTask || chain.synergies?.includes(taskName)) {
      chains.push(chainName);
    }
  }
  
  return chains;
}

// Helper function to get prerequisites for a chain
export function getChainPrerequisites(chainName: string): string[] {
  const chain = progressionChainsConfig[chainName];
  if (!chain) return [];
  
  const prerequisites: string[] = [];
  
  // Get all tasks from step 1 as these are the starting requirements
  if (chain.steps.length > 0) {
    prerequisites.push(...chain.steps[0].tasks);
  }
  
  return prerequisites;
}

// Helper function to get what a chain enables
export function getChainEnabledContent(chainName: string): string[] {
  const chain = progressionChainsConfig[chainName];
  if (!chain) return [];
  
  const enabled: string[] = [];
  
  for (const step of chain.steps) {
    enabled.push(...step.unlocks);
    enabled.push(...step.enables);
  }
  
  return enabled;
}