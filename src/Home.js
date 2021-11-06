import { Link } from "react-router-dom";
import React from 'react';
import { render } from "@testing-library/react";

function handleClick() {
  return
}

function Home() {
  return (
    <div className="Home">

     <h1>
       Task
     </h1>
    <form onSubmit={handleClick}>
      <input type="text" name="name"></input>
    </form>

    </div>
  );
}

export default Home;