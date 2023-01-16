import axios from "axios";

export const getRepos = (query: string) => {
  return axios.get(`https://api.github.com/search/repositories?q=${query}`);
};
