import React from 'react'
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    // new code
    <React.Fragment>
      <h1> exQuizit</h1>
      <nav>
          <Link to="/">Home</Link>
          <Link to="/List">Flash Cards</Link>
      </nav>
    </React.Fragment>
  );
}
