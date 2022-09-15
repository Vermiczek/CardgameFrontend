import React from "react";
import { useState, useEffect } from "react";
import { StyledError} from "../styles/ErrorMessage.styled"
import { motion, useAnimation } from "framer-motion";


interface props{
    inputColor : string;
    inputName : string;
}

//Component responsible for processing the input data from user.
export const ErrorMessage = ({inputColor, inputName} : props) => {
  const changeMessage = useAnimation();
  useEffect(()=>{changeMessage.start({
    scale: [0, 1],
    opacity: [0, 1],
     transition: {duration: 0.2}
  })},[inputColor, inputName])

  const style = { 
      color: inputColor
  }
  return (
    <StyledError as={motion.div} exit={{opacity: 0}} animate={changeMessage}>
      <div className="error" style={style}>{inputName}</div>
    </StyledError>
  );
};
