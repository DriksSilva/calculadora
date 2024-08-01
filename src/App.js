import {Container, Content, Row} from './styles';
import Input  from './components/Input'
import Button from './components/Button/index';
import { useState } from 'react';

const App = () => {

  const [currentNumber, setCurrentNumber] = useState(0);

// Add numbers
  const handleAddNumber = (number) => {
    console.log(number)
    setCurrentNumber(prev => `${number} ${prev === '0' ? '' : prev}`)
  };

// Clear display removing numbers
  const handleClear = () => {
    setCurrentNumber('0')
  };

// Calculate percent
  

  return (
    <Container> 
      <Content>
      <Input value={currentNumber}/>
      <Row>
        <Button label={"A/C"} onClick={handleClear} className="operators"/>
        <Button label={"+/-"} onClick={() => handleAddNumber ('')} className="operators"/>
        <Button label={"%"} onClick={''} className="operators"/>
        <Button label={"/"} onClick={() => handleAddNumber ('')} className="operators"/>
      </Row>
      <Row>
        <Button label={"7"} onClick={() => handleAddNumber ('7')}/>
        <Button label={"8"} onClick={() => handleAddNumber ('8')}/>
        <Button label={"9"} onClick={() => handleAddNumber ('9')}/>
        <Button label={"X"} onClick={() => handleAddNumber ('')}/>
      </Row>
      <Row>
        <Button label={"4"} onClick={() => handleAddNumber ('4')}/>
        <Button label={"5"} onClick={() => handleAddNumber ('5')}/>
        <Button label={"6"} onClick={() => handleAddNumber ('6')}/>
        <Button label={"-"} onClick={() => handleAddNumber ('=')}/>
      </Row>
      <Row>
        <Button label={"1"} onClick={() => handleAddNumber ('1')}/>
        <Button label={"2"} onClick={() => handleAddNumber ('2')}/>
        <Button label={"3"} onClick={() => handleAddNumber ('3')}/>
        <Button label={"+"} onClick={() => handleAddNumber ('')} backgroundColor='#FF9500'/>
      </Row>
      <Row>
        <Button label={"0"} onClick={() => handleAddNumber ('')}/>
        <Button label={","} onClick={() => handleAddNumber ('')}/>
        <Button label={"="} onClick={() => handleAddNumber ('')} background-color='#FF9500' width="10rem"/>       
      </Row>
      
      </Content>
    </Container>
  );
}

export default App;
