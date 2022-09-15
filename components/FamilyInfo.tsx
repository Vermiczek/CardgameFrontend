import React from "react";
import {Family} from "../interfaces/family"



interface props{
    Family: Family|undefined;
}

const FamilyInfo = ({
  Family
}: props) => {

  return (
    <div>
      <h1>Family</h1>
      <div><div>{Family?.familyId}</div>
      <div>{Family?.familyFunds}</div>
      </div>
    </div>
  );
};

export default FamilyInfo;
