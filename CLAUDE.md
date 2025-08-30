# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

PAB (Player Account Builder) is a task syntax and configuration system for Old School RuneScape (OSRS) account progression scripts. The project consists of:

- **TypeScript configuration files** (`/capabilities/`) - Type-safe data definitions for quests, skills, items, etc.
- **Routine files** (`.r` files in `/routines/`) - Account progression scripts using PAB task syntax
- **Task syntax documentation** (`TASK_SYNTAX.md`) - Complete reference for the `.r` file format

This is **not a buildable application** - the TypeScript files serve as structured data storage with type safety, not executable code.

## Architecture

### Core Data Structure (`/capabilities/`)

The TypeScript files define the game's mechanics and requirements:

- **`types.ts`** - Central type definitions for all game elements (skills, quests, requirements, etc.)
- **`quests.ts`** - Quest prerequisites and requirements data
- **`skill.ts`** - Skill training methods and level splits
- **`milestone.ts`** - Major account milestones (defenders, fairy rings, etc.)
- **`minigame.ts`** - Minigame configurations (Wintertodt, MLM, MTA, etc.)
- **`diary.ts`** - Achievement diary requirements
- **`repeating.ts`** - Background tasks (birdhouses, tree runs, kingdom management)
- **`acquire.ts`** - Item acquisition methods for ironman accounts

### Progression Scripts (`/routines/`)

Account progression files using PAB task syntax:
- **`.r` files** - Main progression scripts (e.g., `deafwave_pab_list_gim.r`)
- **`modules/`** - Reusable task modules (e.g., `fairy_ring_rush.r`)
- **`.md` files** - Documentation for specific routes (e.g., `optimal_quest_guide_ironman.md`)

## Task Syntax

Tasks follow the format documented in `TASK_SYNTAX.md`. Key task types:

- `SKILL:SKILLNAME:TARGETLVL` - Train skills to target levels
- `QUEST:QUESTNAME` - Complete quests
- `MILESTONE:MILESTONE_NAME` - Achieve major milestones
- `MINIGAME:GAMENAME:TARGET` - Participate in minigames
- `DIARY:DIARY_NAME` - Complete achievement diaries
- `REPEATING:TASKTYPE:TARGET` - Set up recurring activities
- `ACQUIRE:ITEMNAME,MIN-MAX` - Acquire items (mainly for ironman)

Special sequences:
- `IRON_STARTER_PART1` - Fresh ironman account setup

## Account Type Considerations

- **Regular accounts** - Use Grand Exchange, focus on efficiency
- **Ironman accounts** - Self-sufficient methods, require ACQUIRE tasks
- **Specialized builds** - Zerkers use `MILESTONE:RUNE_DEFENDER`, pures avoid defence

## File Organization

When working with this codebase:

1. **Adding new quests/skills** - Update corresponding TypeScript config files
2. **Creating progression routes** - Add new `.r` files in `/routines/`
3. **Modifying requirements** - Update the `Requirements` interface and related data
4. **Task syntax changes** - Document in `TASK_SYNTAX.md`

## Common Operations

- **Validate task syntax** - Reference `TASK_SYNTAX.md` for proper formatting
- **Check quest prerequisites** - Look up quest data in `capabilities/quests.ts`
- **Understand skill methods** - Review level splits in `capabilities/skill.ts`
- **Account route planning** - Examine existing `.r` files for progression patterns