import './App.css'
import React from "react"
import { useState } from 'react'

function App(){
const [counter, setCounter] = useState(0)
const [fontSize, setFontSize] = useState("18px")
const [fontColor, setFontColor] = useState("green")
const [inputFontSize, setInputFontSize] = useState("18px")
const [inputFontColor, setInputFontColor] = useState("green")

const inkrementacja = () => {
  setCounter(counter + 1)
}

const zmienFont = () => {
  setFontSize(inputFontSize)
  setFontColor(inputFontColor)
}

const zmienFont30px = () => {
  setFontSize("30px")
}

  return(
    <div className='grid-parent'>
      <div className='header'>
        <h1>Nagłówek</h1>
        <p>Aktualny rozmiar czcionki: <strong>{fontSize}</strong></p>
        <p>Aktualny kolor czcionki: <strong>{fontColor}</strong></p>
        <p>Liczba lajków: <strong>{counter}</strong></p>
      </div>

      <div className='sidebar'>
        <h1>Pasek boczny</h1>
        
        <input type='text' 
        value = {inputFontSize}
        onChange ={(e) => {setInputFontSize(e.target.value)}}/> <br />

        <input type='text' 
        value = {inputFontColor}
        onChange ={(e) => {setInputFontColor(e.target.value)}}/> <br />

        <button
        onClick={zmienFont}>
          Ustaw parametry tekstu na {fontSize} i {fontColor}.
          </button>

      </div>

      <div className='main-area'style={{ fontSize, color: fontColor }}>
        <h1>Główna część strony</h1>
        <p>Szkielety programistyczne w aplikacjach interetowych: Node, MongoDB, Express, React</p>
      </div>
      <footer className='footer'>
        <p>Stopka</p>
        
        <button
        onClick = {zmienFont30px}>Ustaw parametry tekstu na 30px, a kolor pozostaw bez zmian.</button>
        
        <button 
        onClick={inkrementacja}>Polub tą stronę!</button>
      </footer>
    </div>
  )
}

export default App