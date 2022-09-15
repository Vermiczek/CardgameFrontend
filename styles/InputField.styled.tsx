import styled from "styled-components";

export const StyledInput = styled.div`
  position: relative;
  font-size: 14px;
  padding-top: 20px;
  margin-bottom: 5px;
  input {
    background: linear-gradient(90deg, #5b115e, #e44d4d) center bottom/0% 2px
        no-repeat,
      linear-gradient(90deg, #f0acac, #e27ac0) left bottom/100% 2px no-repeat,
      linear-gradient(90deg, #eed7d7, #e9b5d8) left bottom/100% no-repeat;
    padding: 12px;
    width: 250px;
    outline: none;
    border-radius: 0px;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    border: none;
    font-size: 15px;
    transition: background-size 0.5s ease;
  }

  .placeholder {
    position: absolute;
    left: 1rem;
    top: calc(50% + 0.5rem);
    transform: translateY(-50%);
    color: #9869b3;
    transition: top 0.5s ease, font-size 0.5s ease, color 0.5s ease;
  }

  .suggestions {
    position: absolute;
    top: 50%;
  }

  input:valid + .placeholder,
  input:focus + .placeholder {
    top: 0.3rem;
    font-size: 10px;
    color: #490b52;
  }

  .suggestions {
    visibility: hidden;
  }

  input:focus ~ .suggestions,
  .suggestions:hover {
    visibility: visible;
  }

  input:valid,
  input:focus {
    background-size: 100% 2px, 100% 2px, 100%;
  }
`;