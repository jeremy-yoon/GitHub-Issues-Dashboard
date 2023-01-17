import "./@types/global.d.ts";
import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { RecoilRoot } from "recoil";
import RecoilNexus from "recoil-nexus";
import { HomePage, SearchPage, IssuePage } from "~/pages";
import { Toast } from "~/components";

const queryClient = new QueryClient();

export const App = () => {
  return (
    <RecoilRoot>
      <RecoilNexus />
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={true} />
        <S.Container>
          <S.Wrapper>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/search" element={<SearchPage />} />
                <Route path="issue" element={<IssuePage />} />
              </Routes>
            </BrowserRouter>
            <Toast />
          </S.Wrapper>
        </S.Container>
      </QueryClientProvider>
    </RecoilRoot>
  );
};

const S = {} as any;

S.Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  height: 100%;
`;

S.Wrapper = styled.div`
  max-width: 768px;
  width: 100%;
  height: 100%;
`;
