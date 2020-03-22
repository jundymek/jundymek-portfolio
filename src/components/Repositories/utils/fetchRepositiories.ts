import axios from "axios";

function fetchRepositiories() {
  return axios.get("https://api.github.com/users/jundymek/repos")
}

export default fetchRepositiories
