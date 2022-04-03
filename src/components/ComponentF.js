import React from "react";

// import { UserContext } from "../App";
import { UserContext } from "./ComponentC";

function ComponentF() {
  return (
    <div>
      <UserContext.Consumer>
        {(data) => {
          return (
            <div className="user">
              <p>My name is : {data.name}</p>
              <p>My age is : {data.age}</p>
            </div>
          );
        }}
      </UserContext.Consumer>
    </div>
  );
}

export default ComponentF;
