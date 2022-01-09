import { createGlobalStyle } from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import reset from 'styled-reset';
import Main from './pages/Main';
import Detail from './pages/Detail';
function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/main" element={<Main />} />
          <Route path="/detail" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
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
  background:#000000;
  }
  
`;

export default App;
