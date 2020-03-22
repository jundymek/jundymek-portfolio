import { RootObject } from "../Repositories";

export function getTechnologiesToSort(data: RootObject[]) {
  const technologies: Array<string> = data.map((item) => {
    return item.language !== null ? item.language : "Other";
  });
  return Array.from(new Set(technologies));
}
