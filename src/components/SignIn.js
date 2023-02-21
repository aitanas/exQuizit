import React, { useState } from "react";
import {
  GithubAuthProvider,
  getAuth,
  signInWithRedirect,
  getRedirectResult,
  signOut,
} from "firebase/auth";

export default function SignIn() {
  const provider = new GithubAuthProvider();
  const auth = getAuth();

  const [signInSuccess, setSignInSuccess] = useState(null);
  const [signOutSuccess, setSignOutSuccess] = useState(null);

  function doSignIn(e) {
    e.preventDefault();
    signInWithRedirect(auth, provider);

    getRedirectResult(auth)
      .then((result) => {
        const credential = GithubAuthProvider.credentialFromResult(result);
        if (credential) {
          // This gives you a GitHub Access Token. You can use it to access the GitHub API.
          const token = credential.accessToken;
          // ...
        }
        // The signed-in user info.
        setSignInSuccess(`You've successfully signed in as ${result.user}!`);
      })
      .catch((error) => {
        // Handle Errors here.
        setSignInSuccess(`There was an error signing in: ${error.message}!`);
      });
  }

  function doSignOut() {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        setSignOutSuccess("successful sign out");
      })
      .catch((error) => {
        // An error happened.
        setSignOutSuccess(`nope, try again: ${error.message}`);
      });
  }

  return (
    <React.Fragment>
      <h1>Sign In</h1>
        {signInSuccess}
      <form onSubmit={doSignIn}>
        {/* <input
          type='text'
          name='email'
          placeholder='email' />
        <input
          type='password'
          name='password'
          placeholder='Password' /> */}
        <button type="submit">Sign In With GitHub</button>
      </form>
      {signOutSuccess}
      <h1>Sign Out</h1>
      <button onClick={doSignOut}>Sign Out</button>
    </React.Fragment>
  );
}
