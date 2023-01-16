import "./@types/global.d.ts";
import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { HomePage, SearchPage } from "~/pages";

const queryClient = new QueryClient();

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={true} />
      <S.Container>
        <S.Wrapper>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/search" element={<SearchPage />} />
            </Routes>
          </BrowserRouter>
        </S.Wrapper>
      </S.Container>
    </QueryClientProvider>
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
