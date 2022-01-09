import './App.css';
import { createGlobalStyle } from 'styled-components';

function App() {
  return (
    <>
      <GlobalStyle />
      <div>hello world</div>
    </>
  );
}
const GlobalStyle = createGlobalStyle`
  body{
    max-width: 425px;
    width: 100%;
    min-height: 100vh;
    margin: 0 auto;
  }
`;
export default App;
