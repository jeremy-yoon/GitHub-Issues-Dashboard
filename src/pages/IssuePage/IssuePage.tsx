import * as S from "./IssuePage.style";
import { BasicHeader } from "~/components";
import { IssueList } from "./IssueList";

const IssuePage = () => {
  return (
    <S.Container>
      <BasicHeader />
      <IssueList />
    </S.Container>
  );
};

export default IssuePage;
