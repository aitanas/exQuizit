import React, { useEffect, useState } from "react";
import Card from "./Card";
import {
  collection,
  query,
  addDoc,
  onSnapshot,
  doc,
  updateDoc,
  getDocs,
} from "firebase/firestore";
import { db, auth } from "../../firebase";
import { Link } from 'react-router-dom'



export default function Collection() {
  const [cards, setCards] = useState([]);
  const [currentCard, setCurrentCard] = useState(0);
  const [isLoading, setLoading] = useState(true);
  const fetch = async () => {
    let array = [];
    const collectionArray = await getDocs(collection(db, "flashcards"));
    collectionArray.forEach((doc) => {
      array.push({ ...doc.data(), id: doc.id });
    });
    setCards(array);
    setLoading(false);
  };

  useEffect(() => {
    fetch();
  }, []);

  const handlePrev = () => {
    currentCard === 0
      ? setCurrentCard(cards.length - 1)
      : setCurrentCard((card) => (card -= 1));
    setQuestion(true);
  };
  const handleNext = () => {
    currentCard === cards.length - 1
      ? setCurrentCard(0)
      : setCurrentCard((card) => (card += 1));
    setQuestion(true);
  };

  const [question, setQuestion] = useState(true);

  const flip = () => {
    setQuestion((prev) => !prev);
  };

  if (auth.currentUser !== null) {
      if (!isLoading) {
        return (
          <div>
          <button onClick={() => handlePrev()}>Prev</button>
          <div onClick={flip}>{question && cards[currentCard].question}</div>
          <div onClick={flip}>{!question && cards[currentCard].answer}</div>
          <button onClick={() => handleNext()}>Next</button>
        </div>
      );
    } else {
      return (
        <section>
          {/* {cards.map((card) => (
            <div key={card.id}>
            <div>{card.question}</div>
            <div>{card.answer}</div>
            <br />
          </div>
        ))} */}
          <p>Loading...</p>
        </section>
      );
    }
} else {
  return (
    <div>
      <h1>401</h1>
      user not authorized. please sign in
    <div>
      <Link to='/signin'>sign in</Link>
    </div>
    </div>
  )
}
}
