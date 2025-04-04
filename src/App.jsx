import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/Button';
import Input from './components/Input';

function App() {
  const [inputValue, setInputValue] = useState('');

  const onInputChange  = (event) => {
    setInputValue(event.target.value);
  };

  const onButtonClick = () => {
    alert(`Button clicked! Hello ${inputValue}`);
  };
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div className="container">
        <h1>Homework 38</h1>
        <Input placeholder="Type name..." onChange={onInputChange}/>
        <Button text="Click Me" onClick={onButtonClick}/>
        <p>Text online: {inputValue}</p>
      </div>
    </>
  )
}

export default App
