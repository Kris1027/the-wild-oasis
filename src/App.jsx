import styled from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import Heading from './ui/Heading';
import Button from './ui/Button';
import Input from './ui/Input';

const StyledApp = styled.main`
  background-color: orangered;
  padding: 20px;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Heading as='h1'>The Wild Oasis</Heading>
        <Heading as='h2'>Check in and out</Heading>
        <Button>Check in</Button>
        <Button>Check out</Button>
        <Heading as='h3'>Form</Heading>
        <Input type='number' placeholder='Number of Guests' />
        <Input type='number' placeholder='Number of Guests' />
      </StyledApp>
    </>
  );
}

export default App;
