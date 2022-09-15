import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ContextProvider } from "../components/ContextProvider";
import { useRouter } from "next/router";
import { useUserContext } from "../components/ContextProvider";
import { useEffect } from "react";
import {selectUser} from "../redux/redux"
import store from "../redux/store";
import { Provider, useDispatch, useSelector } from "react-redux";

function MyApp({ Component, pageProps }: AppProps) {
 
  const user = useUserContext();

  useEffect(()=>{
    console.log("USER")
    console.log(user);
  
  }, [user])

  return (
    <Provider store={store}>
    <ContextProvider>
      <Component {...pageProps} />
    </ContextProvider>
    </Provider>
  );
}

export default MyApp;
 