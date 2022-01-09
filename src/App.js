import './App.css';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

function App() {
  return (
    <>
      <GlobalStyle />
      <div>hello world</div>
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
  }
  
`;

export default App;
