import React from 'react'
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    // new code
    <React.Fragment>
      <h1> exQuizit</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Control">Flash Cards</Link>
        </li>
      </ul>
    </React.Fragment>
  );
}
