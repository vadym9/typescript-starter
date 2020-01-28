import React from 'react';
import user from '../img/user.png';
import bgLines from '../img/bg-lines.svg';


const bool = true;

const App = () => (
  <div>
    <h1>My 84848HH</h1>
    <img src={user} alt="user" />
    <img src={bgLines} alt="bg-lines" />
    {
      bool && <h1>123</h1>
    }
  </div>
);


export default App;
