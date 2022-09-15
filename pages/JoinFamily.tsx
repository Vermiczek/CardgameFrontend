import React, { useEffect, useState } from "react";
import { getCookie } from "../common/cookies";
import { useUserContext } from "../components/ContextProvider";

const joinFamily =()=>{
  const [familyId, setFamilyId] = useState("");
  const user = useUserContext();
  const [invitation, setInvitation] = useState("")

  const FetchFamily = () => {
    if (document.cookie !== null) {
      let value = getCookie("token");
      let payload = {familyId: familyId,password:invitation}
      fetch("http://localhost:3000/family/join", {
        method: "POST",
        mode: "cors",
        headers: {
          Authorization: "Bearer " + value,
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        credentials: "same-origin",
        body: JSON.stringify(payload),
      })
        .then((res) => res.json())
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  return (
    <div>
      <h1>Index</h1>
      <form>
        <div></div>
        <input
          onChange={(e) => {
            setFamilyId(e.target.value);
          }}
        ></input>
        <div></div>
        <input
          onChange={(e) => {
            setInvitation(e.target.value);
          }}
        ></input>
        <div onClick={()=>{console.log("Attempting to create a family...");
      FetchFamily();}}>Join</div>
      </form>
    </div>
  );
}

export default joinFamily
