import React, { useState, useContext, useEffect } from "react";

//Interface used for search.
export interface GlobalSearch {
  search: string;
}

//Interface for storing user data.
export interface User {
  name: string;
  avatarUrl: string;
  githubLink: string;
}

//Interface which allows me to pass components as props.
interface ParentCompProps {
  children?: React.ReactNode;
}

//Search state context, Search setState context, user state context and user setState context.
const UserContext = React.createContext<any>("");
const UserUpdateContext = React.createContext<any>("");

export const useUserContext = () => useContext(UserContext);
export const useUserUpdateContext = () => useContext(UserUpdateContext);

//Component acting like a custom hook giving me access to a "global" memory thorough the whole project.
export const ContextProvider: React.FC<ParentCompProps> = ({ children }) => {
  const [user, setUser] = useState(null);
  
  useEffect(() => console.log(user));

  return (
    <UserContext.Provider value={user}>
      <UserUpdateContext.Provider value={setUser}>
        {children}
      </UserUpdateContext.Provider>
    </UserContext.Provider>
  );
};
