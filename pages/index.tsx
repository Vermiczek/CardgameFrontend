import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useUserContext, useUserUpdateContext } from "../components/ContextProvider";
import { useRouter } from "next/router";
import { StyledLogin } from "../styles/Login.styled";
import { PasswordStrengthMeter } from "../components/PasswordStrengthMeter";
import { InputField } from "../components/InputField";
import { ErrorMessage } from "../components/ErrorMessage";
import { DynamicButton } from "../components/DynamicButton";
import {selectUser} from "../redux/redux"
import { useSelector } from "react-redux";

const validateEmail = (email: string) => {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
};

const LogIn = () => {
  


  const User = useUserContext();
  const user = useSelector(selectUser);
  const router = useRouter();

  // const setZero = ()=>{
  //   setMessage("");
  //   setPassword("");
  //   setName("");
  //   setSurname("");
  //   setEmail("");
  //   setRePassword("");
  // }

  // useEffect(()=>{if(rePassword!==""){
  //   if(rePassword!==password){
  //     setMessagePwd("Passwords don't match");
  //     setMessagePwdColor("red");}
  //   else if(rePassword===password){
  //     setMessagePwd("Passwords match");
  //     setMessagePwdColor("green");}
  //   }
  //   if(!validateEmail(email)&&email!=="")
  //   {
  //     setMessage("Email incorrect");
  //     setMessageColor("red");
  //   }
  //   else if(validateEmail(email)&&email!=="")
  //   { 
  //     setMessage("Email correct");
  //     setMessageColor("green");
  //   }
  //   },[rePassword, password, email])
 
  //   useEffect(()=>{
  //     console.log("Screen " + screen);
  //     if((surname===""||name===""||password===""||rePassword!==password||(!validateEmail(email)))){
  //     setInvalidData(true);
  //   }
  //   else
  //     setInvalidData(false);
  // }, [password, name, surname, rePassword, email])


  useEffect(() => {
    if (user != null) {
      router.push("/home");
    }
  }, [User, router]);

  return (
   <div>
     <button onClick={()=>{router.replace("/loginWindow")}}>LOGIN</button>
     <button onClick={()=>{router.replace("/registerWindow")}}>REGISTER</button>
   </div>
  );
 
 


};

export default LogIn;
