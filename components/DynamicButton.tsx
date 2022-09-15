import React from "react";
import { useState, useEffect } from "react";
import { StyledDynamicButton } from "../styles/DynamicButton.styled";

interface props{
    callbackFunction : Function;
    inputName: string;
    greyOut: boolean;
}

//Component responsible for processing the input data from user.
export const DynamicButton = ({callbackFunction, inputName, greyOut}:props) => {
 
  if(greyOut===false)
  return (
    <StyledDynamicButton>
      <div className="dynamic-button" onClick={()=>callbackFunction()}>
          { inputName }
      </div>fdsfdfdsfsdfdsfsds
    </StyledDynamicButton>
  )
   else if(greyOut===true)
    return (
        <StyledDynamicButton>
          <div className="dynamic-button-grey">
              { inputName }
          </div>
        </StyledDynamicButton>
      )

    return (<div></div>)
};
