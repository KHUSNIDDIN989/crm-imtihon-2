import { readFileSync, writeFileSync } from "fs";
import { join } from "path";
import { cwd } from "process";

export const read = (file) => {
  return JSON.parse(
    readFileSync(join(cwd(), `./src/models/${file}.json`), {
      encoding: "utf8",
      flag: "r",
    })
  );
};

export const write = (file, data) => {
  writeFileSync(
    join(cwd(), `./src/models/${file}.json`),
    JSON.stringify(data, null, 2),
    (err) => {
      if (err) throw err;
      return "OK";
    }
  );
};
