import React, { useState, useEffect } from "react";
import { getNumberOfReposInEachTechnology } from "./utils/getNumberOfReposInEachTechnology";
import fetchRepositiories from "./utils/fetchRepositiories";
import { TechnologyObject } from "../../helpers/types";



function Repositories() {
  const [numberRepos, setNumberRepos] = useState<TechnologyObject[]>();

  useEffect(() => {
    fetchRepositiories().then(res => {
      const data = getNumberOfReposInEachTechnology(res.data);
      setNumberRepos(data);
    });
  }, []);
  return (
    <div>
      {numberRepos &&
        numberRepos.map((item, index) => {
          return Object.keys(item).map((key, index) => (
            <p key={index}>
              {key}, {item[key]}
            </p>
          ));
        })}
    </div>
  );
}

export default Repositories;
