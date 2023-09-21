import './App.css';
import Botsito from './components/Botsito';
import {Container,Row,Col} from 'react-bootstrap';
import Header from './components/Header';

function App() {
  return (
    <div style={{backgroundColor:"black",height:"100vw"}}>
      <Container>
        <Row>
          <Col>
            <Header/>
          </Col>
        </Row>
        <Row>
          <Col>
            <Botsito/>
          </Col>
        </Row>
        <Row>
          <Col>
            PIE
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
