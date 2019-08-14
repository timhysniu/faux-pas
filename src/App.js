import React from 'react';
import Story from './components/Story/Story'
import data from './data.json'
import './App.css';

const { id, description, questions } = data[1]

function App() {
  return (
    <div className="App">
      <StoryList stories={data} />
      <Story id={id} description={description} questions={questions} />
    </div>
  );
}

export default App;
