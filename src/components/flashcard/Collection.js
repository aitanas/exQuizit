import React, { useEffect, useState } from 'react';
import Card from "./Card";
import { collection, query, addDoc, onSnapshot, doc, updateDoc, getDocs } from "firebase/firestore";
import db from '../../firebase';

export default  function Collection() { // 
//   const collections = [];

//   getData() async {
//     await 
//   }
  const [cards, setCards] = useState([]);

  useEffect(() => {
    let array = [];
    async function fetch() {
      const collectionArray = await getDocs(collection(db, 'flashcards'));
      collectionArray.forEach((doc) => {
        array.push({...doc.data(), id: doc.id})
        // console.log(array);
        setCards(array);
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
        {cards.map((card) => (
          <div key={card.id}>
            <div>{card.question}</div>
            <div>{card.answer}</div>
          </div>
        ))}
      </ul>       
    </div>
  )
}
