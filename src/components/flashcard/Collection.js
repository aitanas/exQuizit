import React, { useEffect } from 'react';
import Card from "./Card";
import { collection, query, addDoc, onSnapshot, doc, updateDoc, getDocs } from "firebase/firestore";
import db from '../../firebase';

export default function Collection() { // 
//   const collections = [];

//   getData() async {
//     await 
//   }
  useEffect(() => {
    async function fetch() {
      const collectionArray = await getDocs(collection(db, 'flashcards'));
      collectionArray.forEach((doc) => {
        console.log(doc.data())
      })
    }
    fetch();
  },[])

  // const collections = query(collection(db, "flashcards"));
  // const collectionsSnapshot = await getDocs(collections);

  {/* {collectionsSnapshot.forEach((e) => {
    <li>
    {e.data().question}
    </li>
  })}; */}
  return (
    <div>
      <ul>
      </ul>       
    </div>
  )
}
