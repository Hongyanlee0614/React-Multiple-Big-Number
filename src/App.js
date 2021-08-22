import React, { useState } from "react";
import Input from "./components/Input";
// import "./App.css";
import State from "./components/State";

function App() {
  const [numState, setNumState] = useState();

  //our data
  const states = [
    { state: "Pulau Pinang", sum: 1037490, percent: 58.5 },
    { state: "Kedah", sum: 898428, percent: 41.1 },
    { state: "Johor", sum: 1786581, percent: 47.3 },
    { state: "Kelantan", sum: 658559, percent: 34.5 },
    { state: "Melaka", sum: 493888, percent: 53.0 },
    { state: "Negeri Sembilan", sum: 717707, percent: 63.6 },
    { state: "Pahang", sum: 689157, percent: 41.1 },
    { state: "Perak", sum: 1068749, percent: 42.6 },
    { state: "Perlis", sum: 137325, percent: 53.9 },
    { state: "Sabah", sum: 1408702, percent: 36.0 },
    { state: "Sarawak", sum: 1830314, percent: 65.0 },
    { state: "Selangor", sum: 3849703, percent: 58.9 },
    { state: "Terengganu", sum: 556782, percent: 44.2 },
    { state: "WP Kuala Lumpur", sum: 2636691, percent: 100.0 },
    { state: "WP Labuan", sum: 68258, percent: 68.5 },
    { state: "WP Putrajaya", sum: 123266, percent: 100.0 },
  ];

  //to sort the data based on percentage
  states.sort((a, b) => (a.percent > b.percent ? -1 : 1));

  return (
    <div>
      {/* Input */}
      <Input
        numState={numState}
        onChange={(e) => setNumState(e.target.value)}
      />
      {/* Display the number of states based on input */}
      {states
        .map((state) => <State state={state} />)
        .filter(
          function (item) {
            if (this.count < numState) {
              this.count++;
              return true;
            }
            return false;
          },
          { count: 0 }
        )}
    </div>
  );
}

export default App;
