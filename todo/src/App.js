import { createGlobalStyle } from 'styled-components';
import TodoHead from './components/TodoHead';
import TodoTemplate from './components/TodoTemplate';

const GlobalStyle = createGlobalStyle`
  body{
    background: #e9ecef;
  }
`;

function App() {
  return (
    <>
    <GlobalStyle/>
    <TodoTemplate>
      <TodoHead/>
    </TodoTemplate>
    </>
  );
}

export default App;
