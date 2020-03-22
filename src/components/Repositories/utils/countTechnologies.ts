import { RootObject } from "../Repositories";

export function countTechnologies(data: RootObject[], language: string) {
  return data.filter(data => (language !== "Other" ? data["language"] === language : data["language"] === null))
    .length;
}
