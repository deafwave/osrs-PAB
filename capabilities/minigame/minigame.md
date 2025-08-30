# Minigame Module - AI Instructions

## Purpose
This module defines minigame integration rules, requirements, and reward targeting for generating `MINIGAME:NAME:TARGET` tasks in `.r` files.

## Data Structure
```json
{
  "MINIGAME_NAME": {
    "req": {"skill": level_required, "quests": ["QUEST_NAME"]},
    "targets": ["available_target_options"],
    "presets": {"PRESET_NAME": ["included_rewards"]},
    "auto_*": {"automatic_behaviors"},
    "integrated_into": "SKILL:NAME"
  }
}
```

## AI Usage Rules

### 1. Requirement Checking
- **ALWAYS** verify requirements before adding minigame tasks
- Example: `WINTERTODT.req: {"firemaking": 50}` = need 50 firemaking first
- Add prerequisite skills/quests before the minigame task

### 2. Integration vs Standalone
- **Integrated minigames** (like GUARDIANS_OF_THE_RIFT) are automatic - don't add separate tasks
- **Standalone minigames** need explicit `MINIGAME:NAME:TARGET` tasks
- Check `integrated_into` field to determine handling

### 3. Target Selection Logic
- Use `targets` array to see available options
- **Level targets**: `MINIGAME:MLM:75` (trains to specific level)
- **Item targets**: `MINIGAME:MLM:COALBAG` (gets specific reward)
- **Preset targets**: `MINIGAME:MTA:EFFICIENT` (gets preset combination)

### 4. Auto-behavior Consideration
- `auto_rewards` = minigame handles reward claiming automatically
- `auto_unlocks` = certain targets auto-purchase other items
- Example: MLM level targets auto-buy coal bag + unlocks

### 5. Preset vs Individual Rewards
- **Presets** are efficient combinations (EFFICIENT, GREENLOG, ROBES)
- **Individual** items available for specific needs
- Choose based on account goals and efficiency

## Example AI Logic
```
To add MLM for coal bag:
1. Check minigame.json["MLM"]["req"]: {"mining": 30}
2. Ensure SKILL:MINING:30 completed first
3. Add MINIGAME:MLM:COALBAG for specific reward
4. OR add MINIGAME:MLM:40 for level + auto coal bag purchase
```

## Minigame-Specific Rules

### WINTERTODT
- Alternative to regular firemaking training
- Auto-pulls rewards based on account state
- Use after level 50 for variety/efficiency

### MLM (Motherlode Mine)
- Alternative to regular mining training
- Level targets auto-purchase upgrades
- Consider coal bag necessity for smithing

### MTA (Mage Training Arena)
- Essential for magic upgrades (B2P, infinity gear)
- Choose presets for efficiency or individual items for specific needs
- Variable magic requirements per room

### GUARDIANS_OF_THE_RIFT
- **Never add as separate task** - auto-integrated into runecrafting
- Requires Temple of the Eye quest completion
- Handles levels 27-99 automatically

## Integration Strategy
1. **Check if integrated** - don't duplicate auto-handled minigames
2. **Verify prerequisites** - ensure requirements are met first
3. **Choose appropriate targets** - level vs item vs preset based on goals
4. **Consider account progression** - don't add minigames too early
5. **Account for auto-behaviors** - some minigames handle multiple rewards

## Efficiency Notes
- Minigames often provide variety from regular training
- Some are essential for progression (MTA for B2P, MLM for coal bag)
- Level targets in minigames often more efficient than pure item farming
- Preset combinations usually more efficient than individual items