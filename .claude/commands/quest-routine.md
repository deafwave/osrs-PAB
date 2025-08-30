---
description: Create a quest routine from OSRS wiki URL
argument-hint: <wiki-url>
allowed-tools: WebFetch(domain:oldschool.runescape.wiki), Read, Write, Glob, Grep, TodoWrite
---

# Quest Routine Generator

Create a PAB routine file from an Old School RuneScape wiki quest URL.

**Usage:** `/quest-routine <wiki-url>`

**Example:** `/quest-routine https://oldschool.runescape.wiki/w/Song_of_the_Elves`

This command will:

1. **Extract quest requirements** from the provided wiki URL
2. **Recursively fetch all prerequisite quest requirements** by following the quest dependency chain
3. **Check against PAB capabilities** to verify which tasks are supported
4. **Generate a complete routine file** with:
   - All skill requirements with target levels
   - Complete quest dependency chain in proper order
   - Combat preparation notes
   - Special requirements and items needed
   - Comments for unsupported features

The generated routine will be saved as `routines/{quest-name}.r` with proper PAB task syntax.

**Target URL:** $ARGUMENTS

Process the quest at the provided wiki URL and create a comprehensive routine file following PAB conventions.