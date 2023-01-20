import QuoteButton from "./QuoteButton"

const QuoteBox = ({quote, newQuote}) => {
  return (
    <div className="quote-box">
      <p>{quote.quote}</p>
      <h3>{quote.author}</h3>
      <i className='bx bxs-quote-alt-left'></i>
      <QuoteButton newQuote={newQuote}/>
    </div>
  )
}

export default QuoteBox