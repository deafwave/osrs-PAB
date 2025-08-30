# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

PAB (Paisti's Account Builder) is a configuration system for Old School RuneScape (OSRS) account automation. The repository contains structured data files and scripts that define training methods, quest requirements, and account progression routes.

## Repository Structure

### Configuration System (`capabilities/`)
Contains paired JSON configuration files and documentation organized by capability type:
- `skill/skill.json` + `skill.md` - Training methods, level splits, account type variations
- `quest/quests.json` + `quest.md` - Quest prerequisites, skill requirements, special conditions  
- `minigame/minigame.json` + `minigame.md` - Minigame integration rules and reward targeting
- `milestone/milestone.json` + `milestone.md` - Special unlocks (defenders, fairy rings, etc.)
- `acquire/acquire.json` + `acquire.md` - Item acquisition strategies for ironman accounts
- `diary/diary.json` + `diary.md` - Achievement diary completion requirements
- `repeating/repeating.json` + `repeating.md` - Passive background activities (birdhouses, farm runs, kingdom)
- `other/other.json` + `other.md` - Special sequences (ironman starter, complex unlocks)

### Account Scripts (`routines/`)
Contains account-specific progression scripts (`.r` files) that combine the JSON configurations into complete task sequences for different account types and builds.

### Documentation
- `TASK_SYNTAX.md` - Complete reference for task syntax and parameters
- `docs/quest-list.md` - Human-readable quest requirements reference
- `README.md` - High-level project overview and usage guide

## Configuration Architecture

### JSON Data Structure
The system uses structured JSON files to define behavior patterns:

**Quest Dependencies** (`quest/quests.json`):
```json
{
  "THE_FEUD": {
    "skills": {"thieving": 30, "hitpoints": 15, "magic": 35}, 
    "quests": [],
    "other": ["Fire Bolt spell"]
  }
}
```

**Skill Training Methods** (`skill/skill.json`):
```json
{
  "thieving": {
    "methods": ["pickpocket_men", "cake_stall", "blackjacking", "varlamore_thieving"],
    "level_splits": {
      "1-5": "pickpocket_men",
      "25-45": "fruit_stalls",
      "45-99": "blackjacking"
    }
  }
}
```

### Task Syntax System
Account progression uses structured task format (see `TASK_SYNTAX.md` for complete reference):
- `SKILL:SKILLNAME:TARGETLVL[:PARAMETER]` - Train skill with optional method override
- `QUEST:QUESTNAME[:TAKEXP]` - Complete quest, optionally claim XP rewards
- `MILESTONE:MILESTONE_NAME` - Achieve complex unlocks (defenders, fairy rings)
- `MINIGAME:GAMENAME:TARGET` - Minigame objectives with level/item targets
- `REPEATING:TASKTYPE:TARGET` - Passive background activities (birdhouses, farm runs, kingdom management)
- `ACQUIRE:ITEMNAME,MIN-MAX` - Item acquisition for ironman accounts
- `DIARY:DIARY_NAME` - Achievement diary completion

## Common Patterns

### Account Progression
Account scripts follow a structured approach:
1. Early game quests for experience rewards
2. Skill requirements for higher-level content
3. Equipment and milestone acquisition
4. Advanced content unlocks

### Conditional Logic
- Ironman-specific alternatives (e.g., blessed bone shards vs dragon bones for Prayer)
- Level-based method transitions (e.g., different fishing spots by level)
- Quest-gated content (e.g., fairy rings requiring Fairytale I)

### Resource Management
- Repeating tasks maintain ongoing activities (birdhouses, farm runs)
- Item acquisition ensures required materials are available
- Kingdom management for passive resource generation

## Data Architecture and Relationships

### JSON Configuration System
The system is built on interconnected JSON files that define behavior:

**Quest Prerequisites**: `capabilities/quest/quests.json` creates a directed acyclic graph (DAG) where each quest defines:
- Required skill levels before starting
- Prerequisite quests that must be completed first
- Special conditions or recommendations

**Item Dependency Resolution**: The system automatically resolves item dependencies (e.g., if you need a steel bar, it will make one), but quest dependencies must be manually ordered in routines.

**Progressive Training**: `capabilities/skill/skill.json` defines level-based method transitions:
- Multiple training methods per skill with efficiency rankings
- Level splits determine when to change methods (e.g., "25-45": "fruit_stalls")
- Account type specialization (ironman vs regular paths)
- Quest requirements for specific training methods

**Cross-Module Dependencies**: Training methods can require quest completion, quests can unlock new training methods. The system automatically resolves item dependencies, but quest prerequisites must be manually sequenced in routines.

### Task Syntax Advanced Patterns

**Parameter Overrides**:
- `SKILL:THIEVING:99:BJ` - Force specific method (blackjacking)
- `SKILL:STRENGTH:80:NO_HP` - Special training modes
- `QUEST:MONKEY_MADNESS_I:TAKEXP` - Control XP reward claiming

**Specialized Sequences**:
- `IRON_STARTER_PART1` - Predefined efficient ironman opening
- `MILESTONE:DRAGON_DEFENDER` - Complex unlock sequences
- `MINIGAME:WINTERTODT:75` - Integration with existing training systems

### Validation and Constraints

**Implicit System Rules**:
- Tasks execute sequentially, preventing premature attempts
- Item dependencies auto-resolved (e.g., crafting materials), but quest order must be planned manually
- Account type filtering prevents inappropriate methods
- Level consistency validation (cannot train to lower level)

**Naming Conventions**:
- Quest names: `UPPER_CASE_WITH_UNDERSCORES`
- RFD quests: `RFD_QUESTNAME` prefix
- Skills: lowercase matching OSRS conventions
- Milestones: descriptive names for major unlocks

## Development Commands

This repository contains only configuration data - no build system or testing framework is required.

### JSON Validation
Validate JSON syntax when making configuration changes:
```bash
# Validate all capability JSON files
find capabilities/ -name "*.json" -exec python -m json.tool {} \; > /dev/null

# Validate specific configurations
python -m json.tool capabilities/skill/skill.json
python -m json.tool capabilities/quest/quests.json
```

### Configuration Consistency Checks
Ensure paired JSON/markdown files exist:
```bash
# Verify all JSON files have corresponding documentation
find capabilities/ -name "*.json" | sed 's/\.json$/.md/' | xargs ls -l

# Check for orphaned documentation files
find capabilities/ -name "*.md" | sed 's/\.md$/.json/' | xargs ls -l
```

### Routine Analysis
Examine task sequences in account progression scripts:
```bash
# Extract task structure from routine file
grep -E "^(SKILL|QUEST|MILESTONE|MINIGAME|ACQUIRE|DIARY|REPEATING):" routines/*.r

# Count task types in a routine
cat routines/example.r | cut -d: -f1 | sort | uniq -c
```

## Development Workflows

### Adding New Content
1. Update the relevant JSON configuration in appropriate `capabilities/` subdirectory
2. Define requirements, dependencies, and account type considerations  
3. Document changes in corresponding `.md` file for context and AI guidance
4. Test integration by creating or updating routine files
5. Validate JSON syntax and ensure item dependency resolution works correctly

### Modifying Training Methods
1. Update JSON configuration with new parameters or level splits
2. Consider impact on existing routine files that use the modified methods
3. Test changes with different account types (regular/ironman/specialized builds)
4. Update corresponding documentation to reflect method changes

### Creating Account Routines  
1. Define account goals, build type, and specialization requirements
2. Plan task progression considering quest/skill dependencies (quest order must be manually planned)
3. Structure progression: early game foundation → skill unlocks → advanced content → endgame goals
4. Integrate resource management with REPEATING tasks at appropriate progression points
5. Optimize task ordering for efficiency, logical flow, and minimal redundancy

## System Integration Patterns

### Quest-Skill Dependencies  
- Quest completion unlocks training methods (e.g., The Feud → blackjacking, Client of Kourend → fruit stalls)
- Skill levels gate quest requirements (defined in `quest/quests.json`)
- XP rewards from quests can skip early training levels (use `:TAKEXP` parameter)

### Account Type Specialization
- **Regular accounts**: Use Grand Exchange, focus on efficient/profitable methods
- **Ironman accounts**: Require ACQUIRE tasks for materials, use self-sufficient methods  
- **Specialized builds**: Zerkers use rune defenders, pures avoid defence XP

### Resource Management Integration
- REPEATING tasks run passively between main progression activities
- Kingdom management provides ongoing resource generation  
- Timing matters: start resource loops when requirements are met but continue throughout progression

### Method Progression Patterns
- Level-based transitions: switch training methods at optimal breakpoints
- Equipment upgrades: better methods unlock with quest completion or item acquisition
- Efficiency scaling: early methods prioritize accessibility, later methods prioritize speed/cost