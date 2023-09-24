import styled from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';

const H1 = styled.h1`
  font-size: 48px;
  font-weight: 600;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <div>
        <H1>Hello Kris</H1>
      </div>
    </>
  );
}

export default App;
