import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import db from './db/quotes.json'
import QuoteBox from './components/QuoteBox'

function App() {
  const getRandom = (arrayElements) => {
    const quantityValues = arrayElements.length;
    const randomIndex = Math.floor(Math.random() * quantityValues);
    return arrayElements[randomIndex];
  }

  const [quote, setQuote] = useState(getRandom(db))

  const newQuote = () => {
    setQuote(getRandom(db))
  }

  console.log(getRandom(db))

  return (
    <div className="App">
     <QuoteBox quote={quote} newQuote={newQuote}/>
    </div>
  )
}

export default App
