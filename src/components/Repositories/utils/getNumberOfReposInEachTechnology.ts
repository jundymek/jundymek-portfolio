import { RootObject } from "../../../helpers/types";
import { getTechnologiesToSort } from "./getTechnologiesToSort";
import { sortRepositoriesByTechnology } from "./sortRepositoriesByTechnology";
import { countTechnologies } from "./countTechnologies";
import { TechnologyObject } from "../../../helpers/types"



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



