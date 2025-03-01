import React, { useState } from "react";
import Flashcard from "./Flashcard";
import "./App.css";

const flashcardsData = [
  {
    id: 1,
    question: "What is the output of console.log(typeof NaN)?",
    answer: "Number",
  },
  {
    id: 2,
    question: "What does CSS stand for?",
    answer: "Cascading Style Sheets",
  },
  {
    id: 3,
    question: "What is the main purpose of React?",
    answer: "Building reusable UI components",
  },
  // Add more flashcards as needed
];

function App() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const nextCard = () => {
    setCurrentCardIndex((prevIndex) =>
      prevIndex < flashcardsData.length - 1 ? prevIndex + 1 : 0
    );
  };

  const prevCard = () => {
    setCurrentCardIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : flashcardsData.length - 1
    );
  };

  // Calculate progress so that at the first card (index 0) progress is 0%
  const progress =
    flashcardsData.length > 1
      ? (currentCardIndex / (flashcardsData.length - 1)) * 100
      : 100;

  return (
    <div className="app-container">
      <header>
        <h1>
          <span role="img" aria-label="smiley"></span> Flash Cards
        </h1>
        <div className="progress-bar">
          <div className="progress" style={{ width: `${progress}%` }}></div>
        </div>
      </header>
      <main>
        <Flashcard data={flashcardsData[currentCardIndex]} />
        <div className="navigation">
          <button onClick={prevCard}>Previous</button>
          <button onClick={nextCard}>Next</button>
        </div>
      </main>
    </div>
  );
}

export default App;
