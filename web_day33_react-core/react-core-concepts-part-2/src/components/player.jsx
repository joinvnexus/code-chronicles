import React, { useState } from "react";

const Players = () => {
  const [runs, setRuns] = useState(0);
  const [sixes, setSixes] = useState(0);
  const [fours, setFours] = useState(0);
  const [balls, setBalls]  = useState(0)

  const divStyle = {
    border: "2px solid red",
    padding: "10px",
    margin: "10px",
    borderRadius: "10px",
    // width: "300px",
    textAlign: "center",
  };
  const handleSingles = () => {
    const newRuns = runs + 1;
    const newBalls = balls +1
    setBalls(newBalls)
    setRuns(newRuns);
  };
  const handleFours = () => {
    const newBalls = balls+1
    setBalls(newBalls)
    const newRuns = runs + 4;
    setRuns(newRuns);
    const newFours = fours + 1;
    setFours(newFours);
  };
  const handleSixes = () => {
    const newBalls = balls+1
    setBalls(newBalls)
    const newRuns = runs + 6;
    setRuns(newRuns);
    const newsix = sixes + 1;
    setSixes(newsix);
  };
  return (
    <div style={divStyle}>
      <h1>Players : bangla Team</h1>
      {runs >= 50 && runs < 60 &&<p>🎉 Congrats! Half Century!</p>}
      {runs >= 100 && runs < 150 && <p>🔥 Century! Outstanding!</p>}

      <p>Scores : {runs}</p>

      <p>Sixes : {sixes}</p>
      <p>Fours : {fours}</p>
      <p>Balls Played: {balls}</p>

      <button className="btn"onClick={handleSingles}>Single</button>
      <button className="btn"onClick={handleFours}>fours</button>
      <button className="btn" onClick={handleSixes}>Six</button>
    </div>
  );
};
export default Players;
