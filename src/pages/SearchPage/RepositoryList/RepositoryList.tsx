import React, { useEffect } from "react";
import * as S from "./RepositoryList.style";
import { Repository } from "~/components";
import { useReposQuery } from "~/hooks";
import {
  createSearchParams,
  useNavigate,
  useSearchParams,
} from "react-router-dom";

type RepositoryType = {
  full_name: string;
  link: string;
};

const RepositoryList = ({}) => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query") as string;

  const { data } = useReposQuery(query);

  const renderData = () => {
    if (data !== undefined) {
      return data.pages.map((page: any) => {
        return page?.data?.items.map((post: RepositoryType) => {
          return (
            <Repository
              key={post.link}
              id={post.link}
              title={post.full_name}
              imageUrl={post.link}
              displayLink={post.link}
              link={post.link}
              initialIsSaved={false}
            />
          );
        });
      });
    }
  };

  useEffect(() => {
    if (data !== undefined) {
      console.log(data.pages[0].data.items);
    }
  }, [data]);

  return <S.Container>{renderData()}</S.Container>;
};

export default RepositoryList;
