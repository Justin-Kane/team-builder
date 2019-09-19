import React, {useState} from 'react';
import './App.css';
import Form from './Components/Form';
import './App.css';

function App() {
  const [team, setTeam] = useState([]);

  return (
    <div className="App">
      {team.map((element) => {
        // console.log(element);
        return (
          <div className="App">
            <p>{element.name}</p>
            <p>{element.email}</p>
            <p>{element.role}</p>
          </div>
        )
      })}
      <Form team={team} setTeam={setTeam} />
    </div>
  );
}

export default App;
