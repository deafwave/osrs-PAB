# Milestone Module - AI Instructions

## Purpose
This module defines special milestone tasks that unlock important features or provide essential items for account progression in `.r` files.

## Data Structure
```json
{
  "MILESTONE_NAME": {
    "req": {"skills": levels, "quests": ["QUEST_NAME"], "other": "requirements"},
    "location": "where_completed",
    "account_types": ["specific_builds"],
    "rewards": ["items_obtained"],
    "unlocks": ["features_unlocked"],
    "completion": "method_description"
  }
}
```

## AI Usage Rules

### 1. Strategic Placement
- Milestones are **high-impact tasks** - place them when their unlocks are needed
- Don't add milestones too early if their benefits won't be used immediately
- Consider milestone dependencies for other tasks

### 2. Requirement Resolution
- Check ALL requirement types: skills, quests, combined stats
- `attack_strength_combined: 130` = attack level + strength level >= 130
- Ensure requirements are met before adding milestone task

### 3. Account Type Filtering
- Some milestones are build-specific (e.g., RUNE_DEFENDER for zerker accounts)
- Apply account type filters when generating builds
- Skip irrelevant milestones for account type

### 4. Unlock Timing
- **FAIRY_RINGS**: Add when fairy ring teleports would be beneficial
- **UNLOCK_PIETY**: Add when prayer bonuses are needed for combat
- **ROGUES_OUTFIT**: Add before heavy thieving training
- **DRAGON_DEFENDER**: Add when melee combat becomes primary focus

## Example AI Logic
```
To add MILESTONE:DRAGON_DEFENDER:
1. Check milestone.json["DRAGON_DEFENDER"]["req"]
2. See requires attack_strength_combined: 130
3. Ensure current attack + strength >= 130 (add training if needed)
4. Add MILESTONE:DRAGON_DEFENDER when melee combat focus begins
5. Note: unlocks dragon defender for better combat efficiency
```

## Milestone-Specific Strategies

### DRAGON_DEFENDER / RUNE_DEFENDER
- Essential for melee combat builds
- Place before major combat training or PvM content
- Rune defender only for zerker (45 def) builds

### FAIRY_RINGS  
- Major transportation upgrade
- Place after FAIRYTALE_I when teleports become valuable
- Critical for efficient quest/skill training routing

### UNLOCK_PIETY
- Major prayer upgrade for combat
- Place before intensive combat training
- Requires high defence (65) - plan accordingly

### ROGUES_OUTFIT
- Doubles thieving success rate at certain NPCs
- Place before major thieving training (especially blackjacking)
- Cost-benefit analysis: effort vs thieving efficiency gained

### ROCK_CAKE
- HP lowering tool for specific training methods
- Usually needed for advanced combat training
- Place when HP manipulation becomes beneficial

## Integration Considerations

### With Combat Training
- Defenders before melee training
- Piety before prayer-dependent combat
- Consider combat level implications

### With Transportation
- Fairy rings before tasks requiring extensive travel
- Coordinate with quest progression for maximum benefit

### With Skill Training  
- Rogues outfit before intensive thieving
- Rock cake before specialized combat methods

## Timing Strategy
1. **Prerequisites first** - ensure all requirements can be met
2. **Benefit timing** - add when the unlock will be immediately useful
3. **Efficiency order** - group with related activities when possible
4. **Account progression** - align with natural account development

## Common Patterns
- Combat milestones after skill requirements are met
- Transportation milestones when travel efficiency matters
- Specialized gear milestones before intensive related training
- Account-specific milestones only for appropriate builds