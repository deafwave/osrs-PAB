# Repeating Tasks Configuration

Repeating tasks run passively between other activities until their target is reached or conditions are met. These are particularly useful for ironman accounts to maintain resource generation and XP gains during main progression.

## Task Types

### Birdhouse Runs
**Syntax**: `REPEATING:BIRDHOUSES:HUNTERLVL`
- **Function**: Maintains birdhouse runs for passive Hunter XP
- **Requirements**: Bone Voyage quest, 9+ Hunter
- **Resources**: Requires logs and bird nests
- **Usage**: Excellent passive XP source, essential for Hunter training efficiency

### Tree Runs  
**Syntax**: `REPEATING:TREE_RUNS:FARMINGLVL`
- **Function**: Plant and harvest trees for high Farming XP
- **Requirements**: RFD Goblins, Fairytale I, 15+ Farming
- **Resources**: Tree seeds, payment items (bananas, apples, etc.)
- **Usage**: Most efficient Farming XP but expensive, good for fast leveling

### Herb Runs
**Syntax**: `REPEATING:HERB_RUNS:FARMINGLVL` 
- **Function**: Plant and harvest herbs for Farming XP and profit
- **Requirements**: 38+ Farming
- **Resources**: Herb seeds, compost
- **Usage**: Profitable farming method, self-sustaining with proper seed management

### Seaweed Runs
**Syntax**: `REPEATING:SEAWEED_RUNS:FARMINGLVL`
- **Function**: Underwater farming for Farming XP and seaweed
- **Requirements**: Bone Voyage quest, 22+ Farming  
- **Resources**: Giant seaweed seeds
- **Usage**: Alternative farming method, provides crafting materials

### Compost Runs
**Syntax**: `REPEATING:COMPOST_RUNS`
- **Function**: Manages compost bins to maintain ultracompost supply
- **Requirements**: Bone Voyage quest, 22+ Farming
- **Target**: Maintains ~800+ ultracompost in Tool Leprechaun
- **Usage**: Essential for ironmen to ensure farming efficiency

### Hespori
**Syntax**: `REPEATING:HESPORI`
- **Function**: Plants and kills Hespori for XP and seed drops
- **Requirements**: 65+ Farming, 59+ Magic, prayer potions
- **Combat**: Uses fire magic spells and knives for plant phases
- **Usage**: Excellent seed source for ironmen, significant XP reward

### Kingdom of Miscellania
**Syntax**: `REPEATING:KINGDOM[:WORKER1:WORKER2]`
- **Function**: Manages kingdom worker allocation and maintenance
- **Requirements**: Throne of Miscellania quest

#### Worker Options
- **HERB** - Herb collection (profitable)
- **MINE** - Ore and gem collection  
- **WOOD** - Log collection
- **TEAK** - Teak log collection
- **MAHOG** - Mahogany log collection (requires Royal Trouble)
- **FISH** - Fish collection
- **FARM** - Farming produce (requires Royal Trouble)

#### Worker Allocation Rules
- **With parameters**: 10 workers in first choice, 5 in second choice
- **Pre-Royal Trouble**: MAHOG/FARM are ignored, 10 workers go to second choice
- **No parameters**: Maintains kingdom without changing worker settings

#### Examples
```
REPEATING:KINGDOM:MAHOG:HERB
# Before Royal Trouble: 10 herb workers  
# After Royal Trouble: 10 mahogany + 5 herb workers

REPEATING:KINGDOM:HERB:MINE  
# Always: 10 herb + 5 mining workers

REPEATING:KINGDOM
# Maintains kingdom, no worker changes
```

## Integration Guidelines

### Timing Considerations
- Start repeating tasks when requirements are first met
- Continue throughout progression until target levels reached
- Consider resource availability before starting expensive methods

### Account Type Usage
- **Ironmen**: All repeating tasks provide essential resource generation
- **Regular accounts**: Focus on XP-efficient tasks (birdhouses, tree runs)
- **Specialized builds**: Select tasks that don't interfere with build restrictions

### Resource Management
- Ensure adequate startup resources before beginning repeating tasks
- Monitor consumption rates vs generation for sustainability
- Balance multiple repeating tasks to avoid resource conflicts

### Task Interaction
- Repeating tasks run between main progression activities
- Do not block progression if resources run low
- Automatically resume when conditions are met again

## Common Patterns

### Early Game (Levels 1-40)
```
# Start with accessible repeating tasks
REPEATING:BIRDHOUSES:70      # As soon as Bone Voyage + 9 hunter
REPEATING:HERB_RUNS:60       # At 38+ farming  
```

### Mid Game (Levels 40-70)
```
# Add resource generation
REPEATING:TREE_RUNS:70       # High XP method
REPEATING:SEAWEED_RUNS:70    # Alternative farming
REPEATING:COMPOST_RUNS       # Maintain ultracompost
```

### Late Game (Levels 70+)
```
# Advanced resource management
REPEATING:HESPORI            # Seed generation
REPEATING:KINGDOM:MAHOG:HERB # Passive income
```

## Optimization Notes

- Repeating tasks complement main progression without blocking it
- Choose tasks based on account goals and resource availability  
- Monitor efficiency: stop tasks that become resource-negative
- Layer multiple compatible repeating tasks for maximum benefit
- Consider quest unlocks that improve repeating task efficiency