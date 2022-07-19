import './App.css';
import { useState } from 'react'
import MainMenu from './components/MainMenu';
import CreateACharacter from './components/CreateACharacter';



function App() {
  // UseState is a function that returns an array of two elements
  // on the left is the state(variable)
  // on the right is the function that updates the variable on the left
  // This syntax is called JSX = Javascript XML
  // returns a state variable and a function
  // to update it
  const [screen, setScreen] = useState('main')

  return (
    <div>
    {  
    (screen === 'main') ? <MainMenu setScreen={setScreen} /> : <CreateACharacter />
    }
    </div>
    );
}

export default App;
