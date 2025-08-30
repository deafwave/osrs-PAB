# Quest Module - AI Instructions

## Purpose
This module provides quest requirements for dependency resolution when generating `.r` files. Use it to determine quest prerequisites and build proper task sequences.

## Data Structure
```json
{
  "QUEST_NAME": {
    "skills": {"skill_name": level_required},
    "quests": ["PREREQUISITE_QUEST_1", "PREREQUISITE_QUEST_2"],
    "other": ["special_requirement_1", "special_requirement_2"]
  }
}
```

## AI Usage Rules

### 1. Dependency Resolution
- **BEFORE** adding a quest to a `.r` file, check ALL requirements
- Add prerequisite quests first (recursive dependency checking)
- Add skill training tasks to meet skill requirements
- Handle "other" requirements as comments or manual tasks

### 2. Skill Requirements Processing
- If quest requires `{"magic": 35}`, ensure `SKILL:MAGIC:35` appears before the quest
- Multiple skills: ensure ALL are met before the quest
- Consider quest XP rewards that might reduce training needs

### 3. Quest Prerequisite Chains
- Example: `HOLY_GRAIL` requires `["MERLINS_CRYSTAL"]`
- Must resolve: `QUEST:MERLINS_CRYSTAL` → `QUEST:HOLY_GRAIL`
- Handle complex chains like RFD subquests automatically

### 4. Special Requirements ("other" array)
- Quest points: Track cumulative QP from completed quests
- Combat stats: Add appropriate skill training
- Items/spells: Add as comments for manual preparation
- Recommendations: Include as comments but don't block quest

### 5. Account Type Considerations
- No ironman-specific quest restrictions in this data
- All quests available to all account types
- Handle quest reward choices (like Monkey Madness XP) via task format

## Example AI Logic
```
To add QUEST:HOLY_GRAIL:
1. Check quests.json["HOLY_GRAIL"]
2. See requires: skills{"magic":35,"hitpoints":20}, quests["MERLINS_CRYSTAL"]
3. First ensure MERLINS_CRYSTAL requirements are met
4. Add SKILL:MAGIC:35 if not already at that level
5. Add SKILL:HITPOINTS:20 if not already at that level  
6. Then add QUEST:HOLY_GRAIL
```

## Key Patterns
- **Empty requirements** (`{}`, `[]`) = no prerequisites
- **Skill levels** = exact minimum required
- **Quest arrays** = ALL must be completed first
- **Other array** = human-readable special conditions

## Integration Notes
- Cross-reference with milestone.json for quest unlocks (fairy rings, etc.)
- Some quests unlock skill training methods (check skill.json)
- Quest completion order affects efficiency - optimize for logical progression