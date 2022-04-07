import React, { useState } from "react";

import BabyNames from "./BabyNames.js";

import BabyNamesData from "./babyNamesData.json";

import "./App.css";


function App() {
  const [Value, setValue] = useState(BabyNamesData);

  const searchBabyNames = (input) => {
    const typed = input.target.value.toLowerCase();
    setValue(
      BabyNamesData.filter((name) => name.name.toLowerCase().includes(typed))
    );
  };
  

  return (
    <div className="App">
      <input type={"text"} onKeyUp={searchBabyNames} className="search" placeholder="search" />
      <BabyNames babyNames={Value} />
    </div>
  );
}

export default App;
