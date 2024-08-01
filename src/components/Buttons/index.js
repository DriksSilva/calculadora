import { ButtonContainer } from "./style";

const Numbers = ({label, onClick}) => {
  return (
    <div className="App">
      <ButtonContainer onClick={onClick}>
        {label}
      </ButtonContainer>
    </div>
  );
};


export default Numbers;
