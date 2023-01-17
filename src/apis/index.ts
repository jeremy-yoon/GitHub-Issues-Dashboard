import axios from "axios";

export const getRepos = (query: string, page: string) => {
  return axios.get(`https://api.github.com/search/repositories`, {
    params: {
      q: query,
      per_page: 20,
      page,
    },
  });
};

export const getIssues = (query: string, page: string) => {
  return axios.get(`https://api.github.com/search/issues?q=${query}`, {
    params: {
      per_page: 20,
      page,
    },
  });
};
