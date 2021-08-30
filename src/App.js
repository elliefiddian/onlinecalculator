
import { useState } from "react";
import styled from "styled-components";
import { evaluate } from "mathjs";

import buttons from "./buttons.json";

const App = () => {
  const [screen, setScreen] = useState([0]);

  const handleClick = (val) => {
    if (val === "clear") {
      setScreen([0])

    } else if (val === "=") {
      let currentStr = screen.join("")
      let total = evaluate(currentStr)
      setScreen([total])

    } else {
      let newArr = [...screen, val]
      if (newArr[0] === 0) {
        newArr.shift()
      }
      setScreen(newArr)
    }
  }

  < div className = "heading">
   <title> 
     online calulator 
   </title>
  </div>


  return (
    <div>
      <div className="screen-wrapper">
        <h1>{screen} </h1>
      </div>
      <ButtonWrapper>
        {buttons.map((item, index) => (
          <StyledButton
            key={index}
            className={item.style}
            onClick={() => handleClick(item.value)}
          >
            {item.displayValue}
          </StyledButton>
        ))}
      </ButtonWrapper>
    </div>
  );
};


const ButtonWrapper = styled.div`
  height: 50px;
  width: 350px;
  display: grid-auto-rows;
  grid-template-areas:
    "clear clear clear ."
    ". . . ."
    ". . . ."
    ". . . ."
    "zero zero . .";
  .clear {
    grid-area: clear;
  }
  .zero {
    grid-area: zero;
  }
`;

const StyledButton = styled.button`
  width: 87px;
  font-family: 'Orbitron', sans-serif;
  background-color: #64278f;
  color: white;
  border: solid black 0.5px;
  border-radius: 5px;
  height: 100%;
  outline: none;
  padding: 10px; 
  margin: auto; 
`;

export default App;