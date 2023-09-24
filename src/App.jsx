import styled from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import Heading from './ui/Heading';
import Button from './ui/Button';
import Input from './ui/Input';
import Row from './ui/Row';

const StyledApp = styled.main`
  padding: 20px;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Row>
          <Row type='horizontal'>
            <Heading as='h1'>The Wild Oasis</Heading>

            <div>
              <Heading as='h2'>Check in and out</Heading>
              <Button>Check in</Button>
              <Button variation='secondary' size='small'>
                Check out
              </Button>
            </div>
          </Row>

          <Row>
            <Heading as='h3'>Form</Heading>
            <form>
              <Input type='number' placeholder='Number of Guests' />
              <Input type='number' placeholder='Number of Guests' />
            </form>
          </Row>
        </Row>
      </StyledApp>
    </>
  );
}

export default App;
