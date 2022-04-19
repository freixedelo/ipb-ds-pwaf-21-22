import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  const dados = [
    {
      id: "1",
      question: "Whats the best thing about a Boolean?",
      punchline: "Even if youre wrong, youre only off by a bit",
    },
    {
      id: "2",
      question: "Why do programmers wear glasses?",
      punchline: "Because they need to C#",
    },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <p>O valor atual do counter é: {counter}</p>
        <button onClick={() => setCounter(counter + 1)}>Contador +</button>
        {dados.map((item, index) => {
          console.log(index);
          return (
            <div key={index} style={{ display: "flex" }}>
              <h1 className="">{item.question}</h1>
              <p>{item.punchline}</p>
            </div>
          );
        })}
      </header>
    </div>
  );
}

export default App;
