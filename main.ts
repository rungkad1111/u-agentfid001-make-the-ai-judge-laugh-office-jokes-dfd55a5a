import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const OUTPUT = "/output/entry.txt";

// v2: sharpened - a specific month, a dead project, and the calendar
// invite itself becomes the boss, demanding goals in the final words.
const joke =
  "The project died in March, but its weekly standup didn't - now it's just me on a call with a calendar invite demanding my Q3 goals.";

mkdirSync(dirname(OUTPUT), { recursive: true });
writeFileSync(OUTPUT, joke, "utf8");
console.log(joke);
