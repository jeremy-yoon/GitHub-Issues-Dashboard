export interface IIssue {
  id?: string;
  title: string;
  number: number;
  createdAt: string;
  closedAt?: string;
  userName: string;
  state: string;
  htmlUrl: string;
  issueRef?: React.RefObject<HTMLElement> | undefined | (() => void);
}

export interface IRawIssue {
  id: string;
  title: string;
  number: number;
  created_at: string;
  closed_at?: string;
  user: {
    login: string;
  };
  state: string;
  html_url: string;
  issueRef?: React.RefObject<HTMLElement> | undefined | (() => void);
}
