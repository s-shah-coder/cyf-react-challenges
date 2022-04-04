import React from "react";
import HighScoresTable from "./HighScoresTable"
import scoresData from "./scores.js"


import './App.css';

function App() {
  return (
    
   <HighScoresTable scores={scoresData} />
  );
}

export default App;
