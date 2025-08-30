# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

PAB (Paisti's Account Builder) is a configuration system for Old School RuneScape (OSRS) account automation. The repository contains structured data files and scripts that define training methods, quest requirements, and account progression routes.

## Architecture

### Core Structure
- `capabilities/` - Contains JSON configuration files and documentation organized by capability type:
  - `skill/` - Skill training methods, level splits, and requirements
  - `quest/` - Quest requirements and prerequisites mapping
  - `minigame/` - Minigame integration rules and reward targeting
  - `milestone/` - Special milestone tasks (defenders, fairy rings, etc.)
  - `acquire/` - Item acquisition strategies (primarily for ironmen)
  - `diary/` - Achievement diary completion requirements
  - `other/` - Special automation sequences and miscellaneous tasks
- `routines/` - Contains account-specific progression scripts (`.r` files)
- `docs/` - Additional documentation including quest lists
- `TASK_SYNTAX.md` - Complete reference for task syntax and formats

### Key Components

**Quest System**: The quest configuration defines a dependency graph where each quest specifies required skills, prerequisite quests, and other conditions. Quest names use standardized format (e.g., `COOKS_ASSISTANT`, `RFD_COOK`).

**Skill Training**: Skills are configured with multiple training methods, level-based transitions, and conditional requirements. Each skill can specify quest prerequisites, equipment needs, and alternative paths for different account types (regular/ironman).

**Task Syntax**: The system uses a domain-specific language with formats like:
- `SKILL:SKILLNAME:TARGETLVL` - Train skill to target level
- `QUEST:QUESTNAME` - Complete specified quest
- `MILESTONE:MILESTONE_NAME` - Achieve specific milestone
- `MINIGAME:GAMENAME:TARGET` - Complete minigame objectives
- `REPEATING:TASKTYPE:TARGET` - Ongoing tasks between other activities
- `ACQUIRE:ITEMNAME,MIN-MAX` - Item acquisition tasks

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

**Dependency Resolution**: `capabilities/quest/quests.json` creates a directed acyclic graph (DAG) where each quest defines:
- Required skill levels before starting
- Prerequisite quests that must be completed first
- Special conditions or recommendations

**Progressive Training**: `capabilities/skill/skill.json` defines level-based method transitions:
- Multiple training methods per skill with efficiency rankings
- Level splits determine when to change methods (e.g., "25-45": "fruit_stalls")
- Account type specialization (ironman vs regular paths)
- Quest requirements for specific training methods

**Cross-Module Dependencies**: Training methods can require quest completion, quests can unlock new training methods, creating complex interdependencies that the system resolves automatically.

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
- All prerequisites auto-checked before task execution
- Account type filtering prevents inappropriate methods
- Level consistency validation (cannot train to lower level)

**Naming Conventions**:
- Quest names: `UPPER_CASE_WITH_UNDERSCORES`
- RFD quests: `RFD_QUESTNAME` prefix
- Skills: lowercase matching OSRS conventions
- Milestones: descriptive names for major unlocks

## Common Development Commands

### JSON Validation
Since this repository consists primarily of JSON configuration files, validate JSON syntax when making changes:
```bash
# Validate all JSON files
find capabilities/ -name "*.json" -exec python -m json.tool {} \; > /dev/null

# Validate specific capability JSON
python -m json.tool capabilities/skill/skill.json
python -m json.tool capabilities/quest/quests.json
```

### File Structure Validation
Ensure all capability directories have both JSON configuration and documentation:
```bash
# Check for missing .md files
find capabilities/ -name "*.json" | sed 's/\.json$/.md/' | xargs ls -l

# Check for orphaned documentation
find capabilities/ -name "*.md" | sed 's/\.md$/.json/' | xargs ls -l
```

### Routine Testing
Test routine files by examining their task sequences:
```bash
# View routine file structure
cat routines/example_account.r | grep -E "^(SKILL|QUEST|MILESTONE|MINIGAME|ACQUIRE|DIARY):"
```

## Development Workflows

### Adding New Content
1. Update relevant JSON file in appropriate `capabilities/` subdirectory
2. Add requirements and dependencies
3. Document in corresponding `.md` file for AI context
4. Test integration in routine files
5. Validate dependency resolution works correctly

### Modifying Existing Methods
1. Update JSON configuration with new parameters
2. Consider impact on existing routines
3. Test with different account types (regular/ironman)
4. Update documentation to reflect changes

### Creating New Routines
1. Define account goals and build type specialization  
2. Plan progression considering quest/skill dependencies
3. Structure: early game foundation → skill unlocks → advanced content
4. Add resource management (REPEATING tasks) at appropriate points
5. Optimize task ordering for efficiency and logical flow

### Common Integration Points
- **Quest unlocks**: Often enable new training methods or areas
- **Skill milestones**: Required for equipment, quests, or new content
- **Account type branches**: Different optimal paths for regular vs ironman
- **Resource loops**: REPEATING tasks should complement main progression