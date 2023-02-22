import React, { useState, useEffect } from "react";
import {
  GithubAuthProvider,
  getAuth,
  signInWithRedirect,
  getRedirectResult,
  signOut,
} from "firebase/auth";
import { db } from "../firebase";
import { addDoc, collection } from "firebase/firestore";

export default function SignIn() {
  const provider = new GithubAuthProvider();
  const auth = getAuth();

  const [signInSuccess, setSignInSuccess] = useState(null);
  const [signOutSuccess, setSignOutSuccess] = useState(null);
  const [user, setUser] = useState(null);

  // console.log(db instanceof firebase.firestore.Firestore);

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      setUser(user);
      // handleAddingNewUser(user);
      // db.collection("users").add({ id : user.id, name : user.name, email : user.email })
      // .then(docRef => { console.log('Document written with ID: ', docRef.id)})
      // .catch (error => {console.error('Error adding document: ', error)});
    });
  }, []);

  // const handleAddingNewUser = async (result) => {
  //   await addDoc(collection(db, "users"), { id : result.id, name : result.name, email : result.email } );
  // };

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
        setSignInSuccess(`You've successfully signed in as ${result.user.email}!`);
        // addDoc(collection(db, "users"), { id : result.user.id, name : result.user.name, email : result.user.email } )
        console.log({ id : result.user.id, name : result.user.name, email : result.user.email })
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
      <div className="text-center sm:mx-auto sm:rounded-lg mx-auto flex flex-col justify-between h-fit w-3/5">
        <h1 className="text-3xl font-light text-center">Sign In</h1>
        {signInSuccess}
        <form onSubmit={doSignIn}>
          <button
            type="submit"
            className="rounded-full ring-offset-2 focus:ring-1 bg-amber-500 text-stone-800 shadow-md h-10 w-72 m-6"
          >
            Sign In With GitHub
          </button>
          <hr />
        </form>
        {signOutSuccess}
      </div>
      <div className="text-center sm:mx-auto sm:rounded-lg mx-auto flex flex-col justify-center items-center h-fit w-3/5">
        <h1 className="text-3xl font-light text-center m-4">Sign Out</h1>
        <button
          onClick={doSignOut}
          className="rounded-full border border-amber-400 focus:ring-1 bg-amber-500 text-stone-800 shadow-md h-10 w-60 m-2"
        >
          Sign Out
        </button>
      </div>
    </React.Fragment>
  );
}
