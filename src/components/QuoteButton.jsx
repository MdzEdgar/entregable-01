import React from 'react'

const QuoteButton = ({newQuote}) => {
  return (
    <button onClick={newQuote}>
      <i className='bx bxs-right-arrow'></i>
    </button>
  )
}

export default QuoteButton