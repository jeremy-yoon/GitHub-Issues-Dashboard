export interface IRepo {
  id: string;
  fullName: string;
  description: string;
  stargazersCount: number;
  language: string;
  licenseName: string;
  updatedAt: string;
  htmlUrl: string;
  RepoRef?: React.RefObject<HTMLElement> | undefined | (() => void);
}

export interface IRawRepo {
  id: string;
  full_name: string;
  description: string;
  stargazers_count: number;
  language: string;
  license: {
    name: string;
  };
  updated_at: string;
  html_url: string;
}

export interface IBookmarkButton extends IRepo {}
