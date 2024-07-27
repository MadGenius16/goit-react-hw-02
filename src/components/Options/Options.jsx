

const Options = ({updateFeedback, feedbackReset, totalFeedback}) => {
  return (
    <div>
      <button type='button' onClick={()=> updateFeedback("good")}>Good</button>

      <button type='button' onClick={()=> updateFeedback("neutral")}>Neutral</button>

      <button type='button' onClick={()=> updateFeedback("bad")}>Bad</button>

      {totalFeedback !==0 ? <button type='button' onClick={feedbackReset} > Reset </button> : <div></div>}
    </div>
  
  )
}

export default Options