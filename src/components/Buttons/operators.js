import {ButtonContainer} from './style'

const Operators = ({label, onClick}) => {
  return (
    <div className="App">
      <ButtonContainer onClick={onClick} backgroundColor="#FF9500">
        {label}
      </ButtonContainer>
    </div>
  );
};


export default Operators;