import React, { forwardRef } from "react";
import * as S from "./Repo.style";
import { BookmarkButton } from "~/components";
import moment from "moment";
import { IRepo } from "~/interfaces";

const Repo: React.FC<IRepo> = React.memo(
  forwardRef(
    ({
      id,
      fullName,
      description,
      stargazersCount,
      language,
      licenseName,
      updatedAt,
      htmlUrl,
      RepoRef,
    }) => {
      const goToLink = () => {
        window.open(htmlUrl, "_blank");
      };

      return (
        <S.Container onClick={goToLink} ref={RepoRef}>
          <S.Wrapper>
            <S.ContentWrapper>
              <S.Title>{fullName}</S.Title>
              <S.Description>{description}</S.Description>
              <S.Information>
                {stargazersCount}stars · {language} · {licenseName} ·{" "}
                {moment(updatedAt).format("YYYY-MM-DD")}
              </S.Information>
            </S.ContentWrapper>
            <BookmarkButton
              id={id}
              fullName={fullName}
              description={description}
              stargazersCount={stargazersCount}
              language={language}
              licenseName={licenseName}
              updatedAt={updatedAt}
              htmlUrl={htmlUrl}
            />
          </S.Wrapper>
        </S.Container>
      );
    }
  )
);
export default Repo;
