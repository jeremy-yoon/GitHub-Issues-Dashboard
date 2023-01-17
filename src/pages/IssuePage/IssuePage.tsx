import * as S from "./IssuePage.style";
import { BasicHeader } from "~/components";
import { useNavigate } from "react-router-dom";
import { IssueList } from "./IssueList";

const IssuePage = () => {
  const navigate = useNavigate();

  return (
    <S.Container>
      <BasicHeader />
      <IssueList />
    </S.Container>
  );
};

export default IssuePage;
