import { useState } from "react";
import { StyledLogin } from "../styles/Login.styled";

import { ErrorMessage } from "../components/ErrorMessage";
import { InputField } from "../components/InputField";
import { useUserContext, useUserUpdateContext } from "../components/ContextProvider";
import { PasswordStrengthMeter } from "../components/PasswordStrengthMeter";
import { DynamicButton } from "../components/DynamicButton";
import { useRouter } from "next/router";

const RegisterWindow = ()=>{
    const [name, setName] = useState<string>("");
    const [surname, setSurname] = useState<string>("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [messageColor, setMessageColor] = useState("")
    const [messagePwd, setMessagePwd] = useState("");
    const [messagePwdColor, setMessagePwdColor] = useState("")
    const [email, setEmail] = useState<string>("");
    const [rePassword, setRePassword] = useState("");
    const [error, setError] = useState<string>("");
    const [invalidData, setInvalidData] = useState(false);
    const [screen, setScreen] = useState<number>(0);
    const setUser = useUserUpdateContext();
    const User = useUserContext();
    const router = useRouter();

  const setZero = ()=>{
    setMessage("");
    setPassword("");
    setName("");
    setSurname("");
    setEmail("");
    setRePassword("");
  }
  
    return (
      <StyledLogin>
        <div className="window">
        <div className="wrapper-register">
          <div onClick={() => {setZero();}}>BACK</div>
          <div>Login</div>
          <InputField inputName="E-mail" callbackFunction={setEmail}/>
          <InputField inputName="Name" callbackFunction={setName}/>
          <InputField inputName="Surname" callbackFunction={setSurname}/>
          <InputField inputName="Password" callbackFunction={setPassword}/>
          <PasswordStrengthMeter password={password} />
          <InputField inputName="Repeat password" callbackFunction={setRePassword}/>
          <ErrorMessage inputName={messagePwd} inputColor={messagePwdColor}/>
          <ErrorMessage inputName={message} inputColor={messageColor}/>
          <div className="buttons">
            <DynamicButton inputName="Register" greyOut={invalidData} callbackFunction={()=>{ 
                var payload = { name: name, username: surname, password: password, email:email };
                fetch("http://localhost:3000/user/register", {
                  method: "POST",
                  mode: "cors",
                  headers: {
                    "Content-Type": "application/json",
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                  },
                  credentials: "same-origin",
                  body: JSON.stringify(payload),
                })
                  .then((res) => res.json())
                  .then((response) => {
                    console.log("uwers");
                    console.log(payload);
                    console.log(response);
                    setMessage(response.message);
                    setMessageColor("green");
                    if(response.message==="Username taken!"){
                      setMessageColor("red");
                    }
                    if(response.message==="Email taken!"){
                      setMessageColor("red");
                    }
                  })
                  .catch((error) => {
                    console.log(error);
                  });}}/>
          </div>
        </div>
        </div>
      </StyledLogin>
    );
}

export default RegisterWindow