// Skill names as they appear in OSRS
export type SkillName = 
  | 'attack' | 'strength' | 'defence' | 'ranged' | 'prayer' | 'magic'
  | 'runecrafting' | 'construction' | 'hitpoints' | 'agility' | 'herblore'
  | 'thieving' | 'crafting' | 'fletching' | 'slayer' | 'hunter' | 'mining'
  | 'smithing' | 'fishing' | 'cooking' | 'firemaking' | 'woodcutting' | 'farming';

// Special skill combinations
export type SpecialSkillRequirement = 'attack_strength_combined';

export type AllSkillNames = SkillName | SpecialSkillRequirement;

// Requirements structure (standardized across all capabilities)
export interface Requirements {
  skills: Partial<Record<AllSkillNames, number>>;
  quests: string[];
  other: string[];
}

// Quest data structure
export interface QuestData {
  requirements: Requirements;
}

export interface QuestsConfig {
  [questName: string]: QuestData;
}

// Skill training method configuration
export interface SkillMethodConfig {
  methods: string[];
  quest_skip?: string[];
  level_splits?: Record<string, string>;
  parameters?: Record<string, string>;
  special_modes?: string[];
  rewards?: string[];
  requirements?: Requirements;
  wintertodt_requirements?: Partial<Record<SkillName, number>>;
  barbarian_requirements?: Partial<Record<SkillName, number>>;
  fruit_stalls_requirements?: Requirements;
  blackjacking_requirements?: Requirements;
  gotr_requirements?: Requirements;
  blast_furnace_requirements?: Partial<Record<SkillName, number>>;
  steel_requirements?: { other: string[] };
  gold_benefits?: Requirements;
  alching?: { min_magic: number };
}

export interface SkillsConfig {
  [skillName: string]: SkillMethodConfig;
}

// Minigame configuration
export interface MinigameAutoRewards {
  conditions: string[];
}

export interface MinigameAutoUnlocks {
  on_level_target?: string[];
}

export interface MinigamePresets {
  [presetName: string]: string[];
}

export interface MinigameData {
  requirements: Requirements;
  rewards?: string[];
  auto_rewards?: MinigameAutoRewards;
  targets?: string[];
  auto_unlocks?: MinigameAutoUnlocks;
  presets?: MinigamePresets;
  individual?: string[];
  integrated_into?: string;
  auto_enabled?: boolean;
}

export interface MinigamesConfig {
  [minigameName: string]: MinigameData;
}

// Milestone configuration
export interface MilestoneData {
  requirements: Requirements;
  location?: string;
  account_types?: string[];
  rewards?: string[];
  unlocks?: string[];
  completion?: string;
}

export interface MilestonesConfig {
  [milestoneName: string]: MilestoneData;
}

// Other/Special sequence configuration
export interface OtherSequenceData {
  requirements: Requirements;
  account_types?: string[];
  unlocks?: string[];
  description?: string;
}

export interface OtherConfig {
  [sequenceName: string]: OtherSequenceData;
}

// Repeating task configuration
export interface RepeatingTaskData {
  syntax: string;
  description: string;
  requirements: Requirements;
  notes?: string[];
  items?: string[];
  combat?: {
    magic?: string;
    melee?: string;
  };
  worker_options?: string[];
  worker_allocation?: {
    default?: string;
    pre_royal_trouble?: string;
    no_parameters?: string;
  };
  examples?: Record<string, string>;
}

export interface RepeatingConfig {
  [taskName: string]: RepeatingTaskData;
}

// Diary configuration
export interface DiaryRequirements {
  skills?: Partial<Record<SkillName, number>>;
  quests?: string[];
  other?: Record<string, any>;
}

export interface DiaryData {
  requirements: DiaryRequirements;
}

export interface DiaryConfig {
  [diaryName: string]: DiaryData;
}

// Acquire (item acquisition) configuration
export interface AcquisitionMethod {
  method: string;
  location: string;
  requirements: string[];
  skill?: string;
  account_type?: string;
  notes?: string;
  cost?: string;
}

export interface AcquireConfig {
  [itemName: string]: AcquisitionMethod[];
}

// Generic capability interface for user information
export interface Capabilities {
    requirements: Requirements;
    level_splits?: {
        [key: number]: {
            methods: {
                name: string;
                requirements: Requirements;
            }[];
            quests: string[];
        }
    };
}