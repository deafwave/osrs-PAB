# Skill Module - AI Instructions

## Purpose
This module defines skill training methods, level splits, and requirements for generating efficient `SKILL:SKILLNAME:TARGETLVL` tasks in `.r` files.

## Data Structure
```json
{
  "skill_name": {
    "methods": ["method1", "method2"],
    "level_splits": {"1-20": "method1", "20-99": "method2"},
    "quest_skip": ["QUEST_NAME"],
    "method_req": {"requirements": "for_specific_method"},
    "special_modes": ["no_hp"]
  }
}
```

## AI Usage Rules

### 1. Method Selection Logic
- Use `level_splits` to determine appropriate method for target level
- Example: For `SKILL:THIEVING:50`, use `"25-45": "fruit_stalls"` method
- Consider account progression - don't use advanced methods too early

### 2. Quest Skip Optimization
- Check `quest_skip` array for experience shortcuts
- Example: `fishing.quest_skip: ["SEA_SLUG"]` means add `QUEST:SEA_SLUG` before fishing training
- Calculate if quest XP makes training more efficient

### 3. Method Requirements Processing
- Before using a method, ensure its requirements are met
- Example: `thieving.fruit_stalls_req: {"quests": ["CLIENT_OF_KOUREND"]}`
- Add prerequisite quests/skills before the training method

### 4. Account Type Handling
- `*_ironman` entries are for ironman accounts only
- Example: `"30-99_ironman": "blessed_bone_shards"` for prayer
- Use regular methods for non-ironman accounts

### 5. Special Training Modes
- `special_modes: ["no_hp"]` = combat training without gaining hitpoints
- Format: `SKILL:STRENGTH:80:NO_HP`
- Only available for specific skills (currently strength)

### 6. Method Override Parameters
- Some skills support parameters to override default method selection
- Example: `thieving.parameters: {"BJ": "Force blackjacking", "VARLAMORE": "Force varlamore thieving"}`
- Format: `SKILL:THIEVING:99:BJ` or `SKILL:THIEVING:99:VARLAMORE`
- Allows ironmen to force blackjacking or regular accounts to force varlamore thieving

### 7. Minigame Integration
- Some skills auto-use minigames (e.g., runecrafting → Guardians of the Rift)
- Check `*_req` fields for minigame prerequisites
- Don't add separate minigame tasks if auto-integrated

## Example AI Logic
```
To add SKILL:THIEVING:75:
1. Check skill.json["thieving"]["level_splits"]
2. See "45-99": "blackjacking" 
3. Check "blackjacking_req": {"quests": ["THE_FEUD"]}
4. Ensure THE_FEUD is completed first
5. Add SKILL:THIEVING:75 knowing it will use blackjacking method

To force varlamore thieving for ironman:
1. Use SKILL:THIEVING:99:VARLAMORE parameter
2. Overrides default blackjacking method for ironmen

To force blackjacking for regular account:
1. Use SKILL:THIEVING:99:BJ parameter
2. Overrides default varlamore thieving for regular accounts
```

## Efficiency Considerations
- **Level splits exist for efficiency** - switching methods at optimal levels
- **Quest skips save time** - always check for quest XP shortcuts
- **Method requirements prevent failures** - ensure prerequisites are met
- **Progressive training** - don't jump to high-level methods too early

## Integration Notes
- Cross-reference with quests.json for method unlock requirements
- Some skills unlock others (e.g., barbarian fishing needs strength/agility)
- Consider minigame.json for alternative training methods
- Account for skill rewards from quests when planning training sequences

## Common Patterns
- `"1-X": "early_method", "X-99": "efficient_method"` = method progression
- `quest_skip: ["QUEST"]` = XP shortcut available
- `*_req: {"quests": [...]}` = method locked behind quest
- `*_ironman` = ironman-specific method