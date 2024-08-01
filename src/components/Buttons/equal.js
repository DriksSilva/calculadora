import { ButtonContainer } from "./style";

const Equal = ({label, onClick}) => {
  return (
    <div className="App">
      <ButtonContainer onClick={onClick} backgroundColor="#FF9500"   width="10rem">
        {label}
      </ButtonContainer>
    </div>
  );
};

export default Equal;