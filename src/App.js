import React from 'react';
import Questionaire from './components/Questionaire/Questionaire'
import data from './data.json'
import './App.css';

const questions = data.map(qn => ({ id: qn.id, shown: false}))

function App() {
  return (
    <div className="App">
      <Questionaire questions={questions} data={data} />
    </div>
  );
}

export default App;
