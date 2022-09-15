import React from "react";
import { useState, useEffect } from "react";
import { StyledInput } from "../styles/InputField.styled";

interface props{
    callbackFunction : Function;
    inputName : string;
}

//Component responsible for processing the input data from user.
export const InputField = ({callbackFunction, inputName} : props) => {
    if(inputName ==="Password" || inputName==="Repeat password")
    {
        return (
            <StyledInput>
              <input
                type="password"
                //value={copy}
                onChange={(e) => {callbackFunction(e.target.value);
                }}
                required
              />
              <span className="placeholder">{inputName}</span>
              <div className="suggestions">
              </div>
            </StyledInput>
          );
    }
  else
  return (
    <StyledInput>
      <input
        type="text"
        //value={copy}
        onChange={(e) => {callbackFunction(e.target.value);
        }}
        required
      />
      <span className="placeholder">{inputName}</span>
      <div className="suggestions">
      </div>
    </StyledInput>
  );
};
