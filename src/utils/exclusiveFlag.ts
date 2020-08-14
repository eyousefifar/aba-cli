import { TLayers } from "./types";

/**
 * a helper tool, for filtering flags in add command, 
 * it will restrict flags to be used together. 
 * you cannot add a package to entity as well as use case for example
 * if you want to which is really not recommended you should do it globally
 */

export function exclusiveFlag(flag: TLayers | "dev") {
  const flags = [
    "entities",
    "usecase",
    "controllers",
    "interface",
    "infra",
    "global",
  ];
  const filter = (item: string) => {
    return item !== flag;
  }
  return flags.filter(filter);
}



