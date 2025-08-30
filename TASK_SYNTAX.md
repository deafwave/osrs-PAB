# PAB Task Syntax Reference

This document provides a complete reference for the task syntax used in PAB account progression scripts (`.r` files).

## Basic Format

Tasks are processed sequentially from top to bottom. If requirements for a task are not met, the system stops with an error message. Multiple entries for the same skill work fine for fine-grained control.

Example:
```
SKILL:FISHING:30
SKILL:WOODCUTTING:30  
QUEST:DORICS_QUEST
SKILL:WOODCUTTING:40
```

This trains fishing to 30, woodcutting to 30, completes Doric's quest, then trains woodcutting to 40.

## Skill Training Tasks

### Basic Syntax
`SKILL:SKILLNAME:TARGETLVL`

### Combat Skills
**Attack, Strength, Defence, Ranged**
- Location: Zeah sand crab spots
- Special mode: `:NO_HP` for combat without HP gain (currently strength only)
- Example: `SKILL:STRENGTH:80:NO_HP`

### Thieving
- **Levels 1-5**: Pickpocket men
- **Levels 5-25**: Cake stall  
- **Levels 25-45**: Fruit stalls (requires Client of Kourend)
- **Levels 45-99**: Blackjacking (requires The Feud) or Varlamore thieving

**Parameters**:
- `:BJ` - Force blackjacking method (e.g., `SKILL:THIEVING:99:BJ` for ironmen)
- `:VARLAMORE` - Force varlamore thieving (e.g., `SKILL:THIEVING:99:VARLAMORE` for regular accounts)

### Magic
- **Levels 1-7**: Use quests (Witch's Potion, Imp Catcher)
- **Levels 7-55**: Enchant sapphire, emerald & topaz jewellery (profit)
- **Levels 55-99**: Tele-alching rune arrows & Camelot teleport (~2gp/xp)

### Prayer  
- **Levels 1-99**: Dragon bones at PoH Gilded altar (~15gp/xp)
- **Levels 30-99 (Ironman)**: Blessed bone shards

### Other Skills
See individual skill modules for complete method breakdowns and level splits.

## Quest Tasks

### Basic Syntax
`QUEST:QUESTNAME`

### Common Quests for XP Skips
- `QUEST:SEA_SLUG` - Skip firemaking/fishing levels 1-20
- `QUEST:WITCHS_POTION` and `QUEST:IMP_CATCHER` - Skip magic levels 1-9
- `QUEST:WATERFALL_QUEST` - Major attack/strength XP reward

## Milestone Tasks

### Basic Syntax  
`MILESTONE:MILESTONE_NAME`

### Available Milestones
- **`DRAGON_DEFENDER`** - Dragon defender from Warrior's Guild [Attack+Strength >= 130]
- **`RUNE_DEFENDER`** - Rune defender for zerker accounts [Attack+Strength >= 130]  
- **`FAIRY_RINGS`** - Unlock fairy rings [Fairytale I completed]
- **`UNLOCK_PIETY`** - Unlock chivalry & piety [King's Ransom, 60 att, 50 str]
- **`ROGUES_OUTFIT`** - Rogues outfit for thieving [50 agility, 50 thieving]
- **`ROCK_CAKE`** - Rock cake for HP manipulation [RFD Dwarf completed]

## Minigame Tasks

### Basic Syntax
`MINIGAME:GAMENAME:TARGET`

### Wintertodt
- **Syntax**: `MINIGAME:WINTERTODT:TARGETLVL`
- **Requirements**: 50 Firemaking
- **Auto-behaviors**: Pulls rewards if <500k gp or <4 pyro pieces

### Motherlode Mine (MLM)
- **Level targets**: `MINIGAME:MLM:90` (gets level + auto-buys upgrades)
- **Item targets**: `MINIGAME:MLM:COALBAG`, `MINIGAME:MLM:GEMBAG`
- **Set pieces**: `MINIGAME:MLM:SET`, `MINIGAME:MLM:HAT`, etc.
- **Requirements**: 30 Mining

### Mage Training Arena (MTA)
- **Presets**: 
  - `MINIGAME:MTA:GREENLOG` (everything)
  - `MINIGAME:MTA:EFFICIENT` (B2P, Master wand, Mage's book, Infinity boots)
  - `MINIGAME:MTA:ROBES` (Infinity set pieces)
- **Individual items**: `MINIGAME:MTA:B2P`, `MINIGAME:MTA:WAND`, etc.

### Guardians of the Rift
- **Auto-integrated** into runecrafting training (levels 27-99)
- **Requirements**: Temple of the Eye quest
- **Do not add as separate task** - handled automatically

## Achievement Diary Tasks

### Basic Syntax
`DIARY:DIARY_NAME`

### Available Diaries
- **`VARROCK_EASY`** - [50 Kudos, 13 agi, 15 mining, 20 fishing, 5 thieving, 8 crafting, 9 rc]
- **`ARDOUGNE_EASY`** - [Biohazard, 5 thieving]
- **`LUMBRIDGE_EASY`** - [7 Slayer, 5 RC, 15 WC, 15 FM, 15 Mining, Cook's Assistant]
- **`LUMBRIDGE_MEDIUM`** - [20 AGI, 50 Range, 30 Fishing, 38 Crafting, 30 WC, 38 Thieving, 42 Hunter, 23 RC, Fairy rings]

## Repeating Tasks

### Basic Syntax
`REPEATING:TASKTYPE:TARGET`

These tasks run between other activities until the target is reached.

### Available Repeating Tasks
- **`REPEATING:BIRDHOUSES:HUNTERLVL`** - Birdhouse runs [Bone Voyage, 9+ hunter]
- **`REPEATING:TREE_RUNS:FARMINGLVL`** - Tree runs [15+ farming]  
- **`REPEATING:HERB_RUNS:FARMINGLVL`** - Herb runs [38+ farming]
- **`REPEATING:SEAWEED_RUNS:FARMINGLVL`** - Seaweed runs [Bone Voyage, 22+ farming]
- **`REPEATING:COMPOST_RUNS`** - Compost bins until ~800 ultra compost
- **`REPEATING:HESPORI`** - Plant/kill Hespori [65+ farming, 59+ magic, prayer potion]

### Kingdom Management
`REPEATING:KINGDOM:WORKER1:WORKER2`

**Worker Options**: HERB, MINE, WOOD, TEAK, MAHOG, FISH, FARM
- Puts 10 workers in first choice, 5 in second
- MAHOG/FARM ignored before Royal Trouble completion
- Example: `REPEATING:KINGDOM:MAHOG:HERB` = 10 mahog, 5 herb after quest

## Item Acquisition Tasks

### Basic Syntax
`ACQUIRE:ITEMNAME,MIN-MAX`

Primarily for ironman accounts. Triggers when item quantity drops below minimum, acquires until maximum reached.

### Single Items
- `ACQUIRE:Dragon bones,500`
- `ACQUIRE:Oak logs,50-800`
- `ACQUIRE:Molten glass,20-500`

### Multiple Items (Same Source)
Use `&` separator for items from the same NPC/source:
- `ACQUIRE:Potato seed,40-400&Hammerstone seed,40-400&Onion seed,40-400`

### Common Examples
- **Seeds**: `ACQUIRE:Potato seed,40-400&Hammerstone seed,40-400`
- **Logs**: `ACQUIRE:Logs,50-500`, `ACQUIRE:Maple logs,50-500`
- **Bars**: `ACQUIRE:Silver bar,10-100`, `ACQUIRE:Gold bar,10-100`
- **Jewelry**: `ACQUIRE:Ring of dueling(8),2-5`, `ACQUIRE:Games necklace(8),2-5`

## Special Tasks

### Ironman Starter
`IRON_STARTER_PART1` - Special automation for fresh ironman accounts
- **Requirements**: Fresh tutorial island, no quests done, bank pin removed
- **Function**: Follows ironman guide route to Ardougne, buys quest items, sets up for wintertodt/blackjacking

## Task Ordering Guidelines

1. **Quest prerequisites first** - Ensure all required quests/skills are completed
2. **Skill requirements** - Meet level requirements before dependent tasks
3. **Equipment needs** - Acquire necessary items before tasks that use them
4. **Account progression** - Follow logical progression (early → mid → late game)
5. **Efficiency optimization** - Group related activities, minimize travel/setup time

## Account Type Considerations

### Regular Accounts
- Can use Grand Exchange for most items
- Focus on efficient training methods
- Default to profitable/fast methods

### Ironman Accounts  
- Require ACQUIRE tasks for most items
- Use self-sufficient training methods
- Alternative progression routes (e.g., blessed bone shards for prayer)

### Specialized Builds
- Zerker accounts: Use `MILESTONE:RUNE_DEFENDER` instead of dragon
- Pure accounts: Avoid defence-gaining quests/activities
- Skill-specific builds: Focus on relevant skills/unlocks