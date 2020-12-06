import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {

  const [people,setPeople] = useState(data);
  
  
  return <main>
    <section className="container">
    <h4>{people.length} Birthdays today</h4>
    <List people={people}/>
    <button onClick={(people)=>{
      setPeople([]);
      
    }}>Clear All </button>
    </section>
  </main>;
}

export default App;
