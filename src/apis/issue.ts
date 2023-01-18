import axios from "axios";

export const getIssues = (query: string, page: string) => {
  return axios.get(`https://api.github.com/search/issues?q=${query}`, {
    params: {
      per_page: 20,
      page,
    },
  });
};
