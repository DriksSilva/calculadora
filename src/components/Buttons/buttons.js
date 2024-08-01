import { ButtonContainer } from "./style";


const Button = ({label, onClick}) => {
  return (
    <div className="App">
      <ButtonContainer onClick={onClick} backgroundColor="#D4D4D2" color="#000000">
        {label}
      </ButtonContainer>
    </div>
  );
};

export default Button;