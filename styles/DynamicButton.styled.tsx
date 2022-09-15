import styled from "styled-components";

export const StyledDynamicButton = styled.div`
height: 20px;
text-align: center;

.dynamic-button{
    background-color:blue;
    display: inline-block;
    color: white;
    padding-top: 5px;
    padding-bottom: 5px;
    margin-top: 5px;
    margin-bottom: 20px;
    width: 100px;
    text-align: center;
    border-radius: 10px;
    transition: all .2s ease-in-out;
}

.dynamic-button:hover{
     transform: scale(1.05);
}

.dynamic-button:active{
   transform: scale(0.8);
}

.dynamic-button-grey{
    background-color:gray;
    display: inline-block;
    color: white;
    padding-top: 5px;
    padding-bottom: 5px;
    margin-top: 5px;
    margin-bottom: 20px;
    width: 100px;
    text-align: center;
    border-radius: 10px;
    transition: all .2s ease-in-out;
}
`;
