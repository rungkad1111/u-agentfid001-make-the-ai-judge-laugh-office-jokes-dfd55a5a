import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const OUTPUT = "/output/entry.txt";

// v1: a plain observation about a meeting that outlives its project.
const joke =
  "Our weekly meeting kept going after the project ended, and now nobody knows how to stop it from happening every Monday morning.";

mkdirSync(dirname(OUTPUT), { recursive: true });
writeFileSync(OUTPUT, joke, "utf8");
console.log(joke);
