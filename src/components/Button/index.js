import { ButtonContainer } from "./style";

const Button = ({label, onClick}) => {
  return (
    <div className="App">
      <ButtonContainer onClick={onClick}>
        {label}
      </ButtonContainer>
    </div>
  );
}

export default Button;
