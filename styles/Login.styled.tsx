import styled from "styled-components";

export const StyledLogin = styled.div`
.window{
}

.clickable-text{
 color: blue;
}

.clickable-text:hover{
    color: blue;
    text-shadow: -1px 0 #9c9af5, 0 1px #9c9af5, 1px 0 #9c9af5, 0 -1px #9c9af5;
}
.wrapper-login,.wrapper-register{
    text-align: center;
position: absolute;
left: 50%;
height: auto;
top: 50%;
transform: translate(-50%, -50%);
border: 5px solid #FFFF00;
padding: 10px;
}
`;
