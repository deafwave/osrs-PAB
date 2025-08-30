# Acquire Module - AI Instructions

## Purpose
This module defines item acquisition strategies and methods for generating `ACQUIRE:ITEM,min-max` tasks in `.r` files. Primarily used for ironman accounts where Grand Exchange isn't available.

## Data Structure
```json
{
  "Item Name": [
    {
      "method": "acquisition_method",
      "location": "where_to_get",
      "requirements": ["prerequisites"],
      "skill": "related_skill",
      "account_type": "account_restriction"
    }
  ]
}
```

## AI Usage Rules

### 1. Account Type Logic
- **Ironman accounts**: Use ACQUIRE tasks extensively - cannot use Grand Exchange
- **Regular accounts**: Rarely need ACQUIRE tasks - can buy from Grand Exchange
- Check `account_type` field to determine appropriate methods

### 2. Method Selection
- Each item may have multiple acquisition methods
- Choose based on account progression and available requirements
- Prioritize methods that match current account capabilities

### 3. Requirement Processing
- Check `requirements` array for each method
- Add prerequisite skills/quests before ACQUIRE task if needed
- Some methods require specific quest completions

### 4. Multi-Item Syntax
- Use `&` separator for items from same NPC: `ACQUIRE:Potato seed,40-400&Hammerstone seed,40-400`
- Groups items purchased from same location for efficiency
- Triggers when ANY item drops below minimum, acquires ALL to maximum

## Example AI Logic
```
For ironman needing seeds:
1. Check acquire.json["Potato seed"]
2. See methods: NPC shop, Master Farmer pickpocketing
3. Master Farmer requires 38 Thieving - check if met
4. If thieving available, prefer thieving method for ironman
5. Add ACQUIRE:Potato seed,40-400 (will use best available method)
```

## Method Categories

### NPC Shop Purchase
- Most reliable method
- Often grouped with other items from same shop
- No skill requirements usually
- Available to all account types

### Skill-Based Acquisition
- **Mining**: Ores, gems (requires Shilo Village for gems)
- **Woodcutting**: Various log types
- **Crafting**: Processed materials, jewelry
- **Smithing**: Bars, equipment
- **Thieving**: Seeds from Master Farmer

### Special Cases
- **Jewelry**: Requires gems AND crafting capability
- **Processed items**: Need raw materials AND processing skill
- **Quest-locked items**: Specific quest completions required

## Strategic Placement

### Early Game (Ironman)
- Focus on basic materials: logs, ores, basic crafting supplies
- Build foundation for skill training

### Mid Game (Ironman)  
- Specialized items: jewelry, processed materials
- Items for specific training methods

### Late Game (Ironman)
- High-level materials for advanced content
- Specialized gear components

## Quantity Guidelines
- **Seeds**: Large ranges (40-400) for farming efficiency  
- **Logs**: Medium ranges (50-500) for skill training batches
- **Ores**: Large ranges (200-5000) for extensive smithing
- **Jewelry**: Small ranges (2-5) for utility items
- **Bones**: Large quantities (500+) for prayer training

## Integration Strategy
1. **Account type check** - only add for ironman unless specifically needed
2. **Method availability** - ensure requirements are met for chosen method
3. **Quantity planning** - choose ranges based on intended usage
4. **Efficiency grouping** - combine items from same source with & syntax
5. **Timing placement** - add before the items are needed, not after

## Common Patterns
- Seeds for farming: group multiple types from same source
- Crafting materials: ensure processing skills are available
- Combat supplies: plan quantities based on training duration
- Utility items: smaller quantities, replaced as needed