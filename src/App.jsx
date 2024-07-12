import React from 'react';
import './App.css';
import Game from './game';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <h1>Towers of Hanoi</h1>
      <Game />
      <footer><p>Created by Jackson Halverson</p></footer>
      <ToastContainer />
    </>
  );
}

export default App;
