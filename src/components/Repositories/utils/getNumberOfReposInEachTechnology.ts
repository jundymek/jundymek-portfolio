import { RootObject } from "../Repositories";
import { getTechnologiesToSort } from "./getTechnologiesToSort";
import { sortRepositoriesByTechnology } from "./sortRepositoriesByTechnology";
import { countTechnologies } from "./countTechnologies";

export interface TechnologyObject {
  [key: string]: number
}

export function getNumberOfReposInEachTechnology(data: RootObject[]) {
  const technologies = getTechnologiesToSort(data)
  const respositoriesByTechnology = technologies.map((item) => {
    const numTech: TechnologyObject = {};
    numTech[item] = countTechnologies(data, item)
    return numTech
  })
  sortRepositoriesByTechnology(respositoriesByTechnology)
  return respositoriesByTechnology
}



