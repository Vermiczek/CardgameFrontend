import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useUserContext, useUserUpdateContext } from "../components/ContextProvider";
import { DynamicButton } from "../components/DynamicButton";
import { ErrorMessage } from "../components/ErrorMessage";
import { InputField } from "../components/InputField";
import { selectUser, setCurrentUser } from "../redux/redux";
import { StyledLogin } from "../styles/Login.styled";

const LoginWindow = ()=>{
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [messageColor, setMessageColor] = useState("")
    const [messagePwd, setMessagePwd] = useState("");
    const [messagePwdColor, setMessagePwdColor] = useState("")
    const [email, setEmail] = useState<string>("");
    const [error, setError] = useState<string>("");
    const [invalidData, setInvalidData] = useState(false);
    const setUser = useUserUpdateContext();
    const User = useUserContext();
    const router = useRouter();
    useEffect(()=>{
      console.log(User);
      console.log("UWERS?");
      console.log(user);
    },[user,User])

    return (
        <StyledLogin>
          <div className="window">
          <div className="wrapper-login">
            <InputField inputName="email" callbackFunction={setEmail}/>
            <InputField inputName="Password" callbackFunction={setPassword}/>
            <div className="buttons">
              <DynamicButton inputName="xd" greyOut={invalidData} callbackFunction={() => {
                  var payload = { email: email, password: password };
                  fetch("http://localhost:3000/user/login", {
                    method: "POST",
                    mode: "cors",
                    headers: {
                      "Content-Type": "application/json",
                      // 'Content-Type': 'application/x-www-form-urlencoded',
                    },
                    credentials: "include",
                    body: JSON.stringify(payload),
                  })
                    .then((res) => res.json())
                    .then((response) => {
                 
                      console.log(response);
                     
                      if(response.user!=null)
                      {
                        
                        setUser(response.user);
                        dispatch(setCurrentUser(response.user))
                        setMessage('');
                        router.replace('/userPanel');
                      }
                      else{
                        setMessage('Login unsuccesful!');
                        setMessageColor('Red');
                      }
                    })
                    .catch((error) => {
                      console.log(error);
                    });
                }}/>
              <ErrorMessage inputName={message} inputColor={messageColor}/>
              <div className="clickable-text"
                onClick={() => {
                  router.replace("/registerWindow");
                }}
              >
                Register new account
              </div>
            </div>
            <div className="message">{error}</div>
            <div></div>
            <div
              onClick={() => {
                fetch("http://localhost:3001/verifycookie", {
                  method: "GET",
                  mode: "cors",
                  headers: {
                    "Content-Type": "application/json",
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                  },
                  credentials: "include",
                })
                  .then((res) => res.json())
                  .then((response) => {
                    console.log("Cookie response.");
                    console.log(response);
                  })
                  .catch((error) => {
                    console.log(error);
                  });
              }}
            >
              Forgot your password?
            </div>
          </div>
          </div>
        </StyledLogin>
      );
}

export default LoginWindow