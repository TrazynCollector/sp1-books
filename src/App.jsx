import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

function App() {

  return (
    <>
    <div>
      <p>
      Tytuł Książki</p>
      <input type="text"> </input>
      Autor książki
      <input type="text"></input> 
      Gatunek
      <select>
        <option value={1}>Powieść</option>
        <option value={2}>Kryminał</option>
        <option value={3}>Fantastyka</option>
        <option value={4}>Biografia</option>
      </select>
      <button type="button" class="btn_dodaj">Dodaj</button>
      </div>
    </>
    
  )
}

export default App
