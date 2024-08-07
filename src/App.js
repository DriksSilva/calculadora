import {Container, Content, Row} from './styles';
import Input  from './components/Input'
import Button from './components/Buttons/buttons';
import Numbers from './components/Buttons/index';
import Operators from './components/Buttons/operators';
import Equal from './components/Buttons/equal';
import { useState } from 'react';

const App = () => {

  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOparation] = useState('');

// Add numbers
  const handleAddNumber = (num) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${num}`)
  };

// Clear display
  const handleOnClear = () => {
    setCurrentNumber('0')
    setFirstNumber('0')
    setOparation('')
  };

// Calculate sum
  const handleSum = () => {
    if (firstNumber === '0') {
      setFirstNumber(currentNumber)
      setCurrentNumber('0')
      setOparation('+')
      
    } else{
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum))    
    }
  }

  // Calculate subtraction
  const handleSubstraction = () => {
    if (firstNumber === '0') {
      setFirstNumber(currentNumber)
      setCurrentNumber('0')
      setOparation('-')
      
    } else{
      const substraction = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(substraction))   
    }
  }

  // Calculate multiplication
  const handleMultiplication = () => {
    if (firstNumber === '0') {
      setFirstNumber(currentNumber)
      setCurrentNumber('0')
      setOparation('x')
      
    } else{
      const multiplication = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(multiplication))   
    }
  }

  // Calculate division
  const handleDivision = () => {
    if (firstNumber === '0') {
      setFirstNumber(currentNumber)
      setCurrentNumber('0')
      setOparation('/')
      
    } else{
      const division = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(division))   
    }
  }

 // Show the result
 const handleEquals = () => {
  if (firstNumber !== '0' && operation !== '' && currentNumber !== '0') {
    switch (operation) {
      case '+':
        handleSum();
        break;

      case '-':
        handleSubstraction();
        break;

      case 'x':
        handleMultiplication();
        break;  

      case '/':
        handleDivision();
        break;
  
        default:
          break;
    }
  } 
}

  return (
    <Container> 
      <Content>
      <Input value={currentNumber}/>
      <Row>
        <Button label={"AC"} onClick={handleOnClear}/>
        <Button label={"+/-"} onClick={() => handleAddNumber ('')}/>
        <Button label={"%"} onClick={() => handleAddNumber ('')}/>
        <Operators label={"/"} onClick={handleDivision} />
      </Row>
      <Row>
        <Numbers label={'7'} onClick={() => handleAddNumber ('7')}/>
        <Numbers label={'8'} onClick={() => handleAddNumber ('8')}/>
        <Numbers label={'9'} onClick={() => handleAddNumber ('9')}/>
        <Operators label={"x"} onClick={handleMultiplication}/>
      </Row>
      <Row>
        <Numbers label={'4'} onClick={() => handleAddNumber ('4')}/>
        <Numbers label={'5'} onClick={() => handleAddNumber ('5')}/>
        <Numbers label={'6'} onClick={() => handleAddNumber ('6')}/>
        <Operators label={"-"} onClick={handleSubstraction}/>
      </Row>
      <Row>
        <Numbers label={'1'} onClick={() => handleAddNumber ('1')}/>
        <Numbers label={'2'} onClick={() => handleAddNumber ('2')}/>
        <Numbers label={'3'} onClick={() => handleAddNumber ('3')}/>
        <Operators label={"+"} onClick={handleSum}/>
      </Row>
      <Row>
        <Numbers label={'0'} onClick={() => handleAddNumber ('0')}/>
        <Numbers label={","} onClick={() => handleAddNumber (',')}/>
        <Equal label={"="} onClick={handleEquals}/>       
      </Row>
      
      </Content>
    </Container>
  );
}

export default App;
