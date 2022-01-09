import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import Main from './pages/Main';

function App() {
  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
}

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/detail" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
};

const GlobalStyle = createGlobalStyle`
  ${reset};
  *{
    box-sizing: border-box;
    font-family: 'Noto Sans KR', sans-serif;
  }
  body{
    max-width: 425px;
    width: 100%;
    min-height: 100vh;
    margin: 0 auto;
    font-family: 'Noto Sans KR', sans-serif;
  }

  
`;

export default App;
