# PAB (Paisti's Account Builder)

PAB is a configuration system for Old School RuneScape (OSRS) account automation. It provides structured data files and scripts that define training methods, quest requirements, and account progression routes for automated account building.

## Overview

PAB uses a domain-specific language to create account progression scripts (`.r` files) that define the sequence of tasks needed to build OSRS accounts. The system supports various account types including regular accounts, ironmen, and specialized builds like zerkers.

## Repository Structure

### Core Configuration (`modules/`)

The `modules/` directory contains JSON configuration files and their corresponding documentation:

- **`skill.json` / `skill.md`** - Skill training methods, level splits, and requirements
- **`quests.json` / `quests.md`** - Quest requirements and prerequisite mapping  
- **`minigame.json` / `minigame.md`** - Minigame integration rules and reward targeting
- **`milestone.json` / `milestone.md`** - Special milestone tasks (defenders, fairy rings, etc.)
- **`acquire.json` / `acquire.md`** - Item acquisition strategies (primarily for ironmen)
- **`other.json` / `other.md`** - Special automation sequences (like ironman starter)
- **`quest-list.md`** - Human-readable list of supported quests with requirements

### Account Scripts (`routines/`)

Contains account-specific progression scripts (`.r` files) that define the complete task sequence for building different types of accounts.

## Task Syntax

PAB uses a structured task format to define account progression:

### Core Task Types

- **`SKILL:SKILLNAME:TARGETLVL`** - Train skill to target level
  - Example: `SKILL:FISHING:60`
  - Parameters: `SKILL:THIEVING:99:BJ` (force blackjacking), `SKILL:THIEVING:99:VARLAMORE` (force varlamore thieving)
  - Special modes: `SKILL:STRENGTH:80:NO_HP` (combat without HP)

- **`QUEST:QUESTNAME`** - Complete specified quest
  - Example: `QUEST:WATERFALL_QUEST`
  - XP rewards: `QUEST:MONKEY_MADNESS_I:TAKEXP` (claim XP reward)

- **`MILESTONE:MILESTONE_NAME`** - Achieve specific milestone
  - Example: `MILESTONE:DRAGON_DEFENDER`, `MILESTONE:FAIRY_RINGS`

- **`MINIGAME:GAMENAME:TARGET`** - Complete minigame objectives
  - Level targets: `MINIGAME:WINTERTODT:60`
  - Item targets: `MINIGAME:MLM:COALBAG`
  - Presets: `MINIGAME:MTA:EFFICIENT`

### Advanced Task Types

- **`REPEATING:TASKTYPE:TARGET`** - Ongoing tasks between other activities
  - Examples: `REPEATING:BIRDHOUSES:70`, `REPEATING:HERB_RUNS:85`

- **`ACQUIRE:ITEMNAME,MIN-MAX`** - Item acquisition (mainly ironmen)
  - Single items: `ACQUIRE:Dragon bones,500`
  - Multiple items: `ACQUIRE:Potato seed,40-400&Onion seed,40-400`

- **`DIARY:DIARY_NAME`** - Achievement diary completion
  - Examples: `DIARY:VARROCK_EASY`, `DIARY:LUMBRIDGE_MEDIUM`

## Key Features

### Account Type Support
- **Regular accounts** - Use Grand Exchange, focus on efficient methods
- **Ironman accounts** - Self-sufficient progression with acquisition tasks
- **Specialized builds** - Zerker accounts, pures with appropriate restrictions

### Intelligent Progression
- **Dependency resolution** - Automatic quest prerequisite handling
- **Level-based method transitions** - Switch training methods at optimal levels
- **Quest XP optimization** - Use quest rewards to skip early training levels
- **Conditional logic** - Different approaches based on account type and progression

### Training Method Optimization
- **Progressive methods** - Start with accessible methods, upgrade as requirements are met
- **Alternative paths** - Multiple options for different account types and situations  
- **Equipment integration** - Consider quest unlocks and gear requirements
- **Efficiency focus** - Optimized level splits and method transitions

## Configuration System

### Skill Training Configuration
Skills are configured with multiple training methods and level-based transitions:

```json
{
  "thieving": {
    "methods": ["pickpocket_men", "cake_stall", "blackjacking", "varlamore_thieving"],
    "level_splits": {
      "1-5": "pickpocket_men",
      "45-99": "blackjacking"
    },
    "parameters": {
      "BJ": "Force blackjacking method",
      "VARLAMORE": "Force varlamore thieving method"
    }
  }
}
```

### Quest Dependency System
Quests define skill requirements, prerequisite quests, and special conditions:

```json
{
  "WATERFALL_QUEST": {
    "skills": {},
    "quests": [],
    "other": ["43 prayer recommended", "20+ hitpoints recommended"]
  }
}
```

## Usage

1. **Choose or create a routine** - Select from existing `.r` files or create custom progression
2. **Configure parameters** - Modify tasks based on account type and goals  
3. **Execute with automation** - Use with compatible OSRS automation tools
4. **Monitor progress** - Track completion and adjust as needed

## Contributing

When adding new content:

1. Update relevant JSON configuration files
2. Document changes in corresponding `.md` files
3. Follow existing naming conventions and structure
4. Test with different account types where applicable

## Architecture Notes

The system uses a modular architecture where:
- **JSON files** provide structured data for automation systems
- **Markdown files** provide human-readable documentation and AI instructions
- **Routine files** combine modules into complete account progression scripts
- **Dependency resolution** ensures proper task ordering and prerequisites

This design allows for flexible, maintainable account progression definitions that can adapt to different account types and goals while ensuring all requirements are properly handled.