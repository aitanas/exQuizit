import React from "react";
import { Link } from "react-router-dom";
import { db, auth } from './../firebase.js';

export default function Header() {
  return (
    // new code
    <React.Fragment>
      <h1> exQuizit</h1>     
      <div>
      {auth.currentUser && auth.currentUser.email}
      </div> 
      <nav>
        <Link to="/">Home</Link>
        <Link to="/Collection">Collection</Link>
        <Link to="/SignIn">Sign In</Link>
      </nav>
    </React.Fragment>
  );
}


