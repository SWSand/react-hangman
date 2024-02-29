import { useState } from 'react'
import './App.css'
import Puzzle from './Puzzle.jsx'
import GuessedLetters from './GuessedLetters.jsx'
import Input from './Input.jsx'

// create random word here and pass as a prop to other components
// create a state for each component

let word = ["hello","good","jose","neka"]
let randWord = Math.floor(Math.random()* word.length)
//  word[randWord]
let randomWord = word[randWord]
let newWord = randomWord.split('').map((letter) => letter + " " )
console.log(newWord)

function App() {

  return (
    <>
    <h1>HANGMAN</h1>
    <Puzzle/>
    <p className="hideWord">{newWord}</p>
    <Input/>
    <GuessedLetters/>
    </>
  )
}

export default App

//  space &nbsp