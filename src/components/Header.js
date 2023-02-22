import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { db, auth } from './../firebase.js';

export default function Header() {
  
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      setUser(user);
    });
  }, []);
  
  return (
    // new code
    <header className="flex items-center justify-between px-8 py-4 sticky top-0">
      <h1 className="text-5xl box-decoration-clone bg-gradient-to-r from-sky-700 to-amber-500 text-white px-2 hover:blur-[.05rem]">
        {" "}
        exQuizit
      </h1>
      {user ? user.email : ""}
      <nav className="space-x-4">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-amber-400 text-lg hover:text-amber-500 font-medium hover:blur-[.05rem]"
              : "text-zinc-400 text-lg hover:text-amber-500 font-medium hover:blur-[.05rem]"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/Collection"
          className={({ isActive }) =>
            isActive
              ? "text-amber-400 text-lg hover:text-amber-500 font-medium hover:blur-[.05rem]"
              : "text-zinc-400 text-lg hover:text-amber-500 font-medium hover:blur-[.05rem]"
          }
        >
          Collection
        </NavLink>
        <NavLink
          to="/SignIn"
          className={({ isActive }) =>
            isActive
              ? "text-amber-400 text-lg hover:text-amber-500 font-medium hover:blur-[.05rem]"
              : "text-zinc-400 text-lg hover:text-amber-500 font-medium hover:blur-[.05rem]"
          }
        >
          Sign In
        </NavLink>
      </nav>
    </header>
  );
}


