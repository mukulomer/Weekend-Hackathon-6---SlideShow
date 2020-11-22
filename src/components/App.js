import React, { Component, useState } from "react";
import "../styles/App.css";

const App = ({ slides }) => {
  const [index, setIndex] = useState(0);
  const [disPrev, setDisPrev] = useState(true);
  const [disNext, setDisNext] = useState(false);
  const [disRestart, setdisRestart] = useState(true);
  const handleNext = () => {
    if (index === slides.length - 1) {
      setDisNext(true);
    } else {
      setDisPrev(false);
      setdisRestart(false);
      let inc = index + 1;
      setIndex(inc);
    }
  };
  const handlePrev = () => {
    if (index === 0) {
      setDisPrev(true);
    } else {
      setDisNext(false);
      setdisRestart(false);
      let dec = index - 1;
      setIndex(dec);
    }
  };
  const handleRestart = () => {
    setIndex(0);
    setDisNext(false);
    setDisPrev(true);
    setdisRestart(true);
  };

  return (
    <>
      <h1 data-testid="title">{slides[index].title} </h1>
      <p data-testid="text">{slides[index].text} </p>
      <button onClick={handlePrev} disabled={disPrev} data-testid="button-prev">
        Prev{" "}
      </button>
      <button onClick={handleNext} disabled={disNext} data-testid="button-next">
        {" "}
        Next
      </button>
      <button
        onClick={handleRestart}
        disabled={disRestart}
        data-testid="button-restart"
      >
        {" "}
        Restart
      </button>
    </>
  );
};

export default App;
