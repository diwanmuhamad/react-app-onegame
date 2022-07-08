import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [tries, setTries] = useState(false);

  useEffect(() => {
    console.log("When mounting");

    return () => {
      console.log("when unmounting");
    }
  },[])

  return (
    <div style={{cursor: "pointer"}} onClick={() => {setTries(!tries)}} className="App">
      Diwan wonderful
    </div>
  );
}

export default App;
