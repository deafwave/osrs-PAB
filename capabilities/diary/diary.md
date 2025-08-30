# Achievement Diaries Module

This module defines the requirements for Old School RuneScape achievement diaries. Each diary entry specifies skill level requirements, quest prerequisites, and any special conditions needed to complete the diary.

## Available Diaries

### Varrock Easy (`VARROCK_EASY`)
Requirements:
- **Skills**: 13 Agility, 15 Mining, 20 Fishing, 5 Thieving, 8 Crafting, 9 Runecrafting
- **Other**: 50 Museum Kudos

### Ardougne Easy (`ARDOUGNE_EASY`)
Requirements:
- **Skills**: 5 Thieving
- **Quests**: Biohazard, Rune Mysteries

### Lumbridge Easy (`LUMBRIDGE_EASY`)
Requirements:
- **Skills**: 7 Slayer, 5 Runecrafting, 15 Woodcutting, 15 Firemaking, 15 Mining
- **Quests**: Cook's Assistant

### Lumbridge Medium (`LUMBRIDGE_MEDIUM`)
Requirements:
- **Skills**: 20 Agility, 50 Ranged, 30 Fishing, 38 Crafting, 30 Woodcutting, 38 Thieving, 42 Hunter, 23 Runecrafting
- **Quests**: Fairytale I - Growing Pains (for fairy rings access)
- **Special**: Ironman accounts need ability to make mithril grapple

## Task Syntax

Use the following format in routine files:
```
DIARY:DIARY_NAME
```

Examples:
- `DIARY:VARROCK_EASY`
- `DIARY:LUMBRIDGE_MEDIUM`

## Integration Notes

- The system will automatically check all skill and quest requirements before attempting a diary
- For ironman accounts, additional item requirements may apply (e.g., mithril grapple for Lumbridge Medium)
- Museum Kudos requirements are tracked separately from normal skill/quest prerequisites
- Fairy ring access requires completion of Fairytale I - Growing Pains quest

## Dependencies

Achievement diaries often have complex prerequisite chains:
- Quest requirements may have their own skill/quest dependencies
- Some diaries require access to specific areas unlocked by quests
- Ironman accounts may need to prepare specific items in advance