import React, { useState } from "react";
import "./Flashcard.css";

function Flashcard({ data }) {
  const [flipped, setFlipped] = useState(false);

  const flipCard = () => {
    setFlipped(!flipped);
  };

  return (
    <div className={`flashcard ${flipped ? "flipped" : ""}`} onClick={flipCard}>
      <div className="front">
        <p>{data.question}</p>
      </div>
      <div className="back">
        <p>{data.answer}</p>
      </div>
    </div>
  );
}

export default Flashcard;
