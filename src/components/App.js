import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FlashCard from "./flashcard/Card";
import Collection from "./flashcard/Collection";
import SignIn from "./SignIn";

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/">
          <Route index element={<Home />}></Route>
        </Route>

        <Route path="/Collection">
          <Route index element={<Collection />}></Route>
          <Route path=":flashcardId" element={<FlashCard />} />
        </Route>

        <Route path="/FlashCard">
          <Route index element={<FlashCard />}></Route>
          <Route path=":flashcardId" element={<FlashCard />} />
        </Route>

        <Route path="/SignIn">
          <Route index element={<SignIn />}></Route>
          <Route path="SignIn" element={<SignIn />} />
        </Route>
      </Routes>
      <Footer />
    </Router>
  );
}
