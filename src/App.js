import './App.css';
import React, {useState} from "react"
import Joke from "./Joke"
import jokesData from "./jokesData"

function App() {



  const jokeElements = jokesData.map(joke => {
      return (
        <Joke
          key={joke.id}
          setup={joke.setup}
          punchline={joke.punchline}
        />
      )
  })
  return (
    <div className="App">
        {jokeElements}
    </div>
  );
}

export default App;
