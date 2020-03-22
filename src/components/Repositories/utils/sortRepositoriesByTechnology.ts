import { TechnologyObject } from "./getNumberOfReposInEachTechnology";

export function sortRepositoriesByTechnology(result: TechnologyObject[]): any {
  return result.sort((a, b) => b[Object.keys(b)[0]] - a[Object.keys(a)[0]]);
}
