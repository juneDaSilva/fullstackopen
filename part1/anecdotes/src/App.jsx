import React from "react";
import { createLogger } from "vite";

function App() {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = React.useState(0);
  const [points, setPoints] = React.useState({
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
  });
  const [most, setMost] = React.useState(0);

  console.log(most);

  const getNumber = () => {
    const randomNum = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomNum);
  };

  const addVote = () => {
    const changed = points[selected] + 1;

    console.log(`points.${selected}: ${changed}`);
    setPoints((prev) => ({
      ...prev,
      [selected]: prev[selected] + 1,
    }));

    changed > points[most] ? setMost(selected) : changed;
  };

  return (
    <div>
      <p>{anecdotes[selected]}</p>
      <button onClick={addVote}>vote</button>
      <button onClick={getNumber}>next anecdote</button>
      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[most]}</p>
    </div>
  );
}

export default App;
