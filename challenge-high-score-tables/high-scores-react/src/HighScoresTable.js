import React from "react";

const HighScoresTable = ({ scores }) => {
  let eachCountry = scores.sort((a, b) => {
    return a.name < b.name ? -1 : 1;
  });
  return (
    <div className="container">
      <h1 className="header">High Scores of each Country</h1>
      {eachCountry.map(({ name, scores }, x) => {
        return (
          <div key={x} className="main-table">
            <h3 className="country">HIGH SCORES: {name}</h3>
            <ul className="table">
              {scores
                .sort((A, B) => {
                  return A.s > B.s ? -1 : 1;
                })
                .map((person, i) => {
                  return (
                    <li key={i} className="results">
                      <span className="name-place">
                        {person.n.toUpperCase()}{" "}
                      </span>
                      <span className="score-place">{person.s}</span>
                    </li>
                  );
                })}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default HighScoresTable;