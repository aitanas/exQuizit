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
          <div class="container m-6 p-0 relative bg-zinc-200 px-6 text-zinc-900 pt-10 pb-8 shadow-xl ring-3 ring-gray-900/5 sm:mx-auto sm:rounded-lg sm:px-10 sm:w-1/2 w-96 mx-auto h-[28rem] flex flex-col justify-between">
            <hr />
            <div className="text-2xl" onClick={flip}>
              {question && cards[currentCard].question}
            </div>
            <div className="text-2xl" onClick={flip}>
              {!question && cards[currentCard].answer}
            </div>
            <hr />
            <div className="text-center place-content-center bg-zinc-300 p-4 rounded-lg flex ">
              <button onClick={() => handlePrev()}>
                <i class="bi bi-arrow-left-circle-fill text-5xl text-amber-900 hover:text-amber-600"></i>
              </button>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <button onClick={() => handleNext()}>
                <i class="bi bi-arrow-right-circle-fill text-5xl text-amber-900 hover:text-amber-600"></i>
              </button>
            </div>
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
    <div className="text-left flex flex-col items-center">
      <h1 className="text-3xl">401</h1>
      user not authorized. please sign in
    <div>
      <Link to='/signin'>sign in</Link>
    </div>
    </div>
  )
}
}
