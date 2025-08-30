# Other Module - AI Instructions

## Purpose
This module defines special tasks that don't fit into standard categories (quests, skills, minigames, milestones, acquire). These are unique automation sequences with specific purposes.

## Data Structure  
```json
{
  "TASK_NAME": {
    "req": ["requirements"],
    "account_types": ["applicable_types"],
    "unlocks": ["features_enabled"],
    "description": "what_it_does"
  }
}
```

## AI Usage Rules

### 1. Special Task Recognition
- Other tasks are **unique automation sequences** not covered by standard categories
- They perform complex multi-step operations automatically
- Only use when the specific automation is needed

### 2. Account Type Filtering
- **IRON_STARTER_PART1**: Only for fresh ironman accounts
- Check `account_types` array before adding to builds
- Skip if not applicable to current account type

### 3. Prerequisite Checking
- Verify `req` array requirements are met
- These are usually account state requirements rather than skill/quest requirements
- Example: "fresh_tutorial_island" = account just completed tutorial

### 4. Strategic Placement
- Place special tasks at appropriate points in account progression
- Consider what they unlock for subsequent tasks
- Don't add too early or too late in progression

## Current Special Tasks

### IRON_STARTER_PART1
- **Purpose**: Automated ironman startup sequence
- **Requirements**: Fresh tutorial island completion, no quests done, bank pin removed
- **Function**: Follows Bruhsailer's ironman guide route to Ardougne
- **Unlocks**: Wintertodt access, blackjacking requirements, quest items
- **When to use**: Very beginning of ironman account builds
- **What it does**: 
  - Buys essential quest items
  - Completes starting quests
  - Sets up requirements for efficient early training

## Example AI Logic
```
For new ironman account build:
1. Check if account is fresh from tutorial island
2. Check other.json["IRON_STARTER_PART1"]["req"]
3. If requirements met, add as first task in build
4. This replaces manual early-game setup tasks
5. Subsequent tasks can assume wintertodt/blackjacking access
```

## Integration Strategy

### With Account Builds
- Place early in ironman builds when requirements are met
- Replaces multiple manual early-game tasks
- Provides foundation for subsequent training methods

### With Other Modules  
- Unlocks affect skill training method availability
- May satisfy requirements for other tasks
- Consider unlocks when planning subsequent tasks

### Timing Considerations
- These tasks often have strict timing requirements
- Account state must match exactly for proper function
- Place immediately when requirements are met

## Future Expansion
- Other special automation sequences could be added
- Each would have unique requirements and unlocks
- Follow same pattern: requirements → automation → unlocks

## Key Principles
1. **Unique automation** - not replaceable by standard task types
2. **Account state specific** - strict requirements about account condition
3. **Complex sequences** - performs multiple operations automatically  
4. **Progression enablers** - unlocks capabilities for future tasks
5. **Timing critical** - must be placed at correct progression point