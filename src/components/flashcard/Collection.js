import React from 'react';
import Card from "./Card";
import { collection, addDoc, onSnapshot, doc, updateDoc } from "firebase/firestore";

export default function Collection() { // 

  return (
    <div>
      <ul>
        
      </ul>        {/* display: collection title, collection cards */}
    </div>
  )
}
