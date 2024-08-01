/* eslint-disable no-undef */
/* eslint-disable no-mixed-operators */
import styled from 'styled-components';

export const ButtonContainer = styled.button`
  width: ${props => props.width || "4rem"};
  height: 4rem;
  padding: 0.6rem;
  margin: 1rem;
  border: none;
  border-radius: 2.5rem; 
  background-color: ${props => props.backgroundColor || "#505050"};
  color: ${props => props.color || "#FFFFFF"};
  font-family: "Montserrat", sans-serif;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    opacity: .5; 
  } 
    &.orangeButton {
      background-color: "#FF9500";
    }

`;



