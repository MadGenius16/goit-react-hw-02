import css from '../Options/Options.module.css'

const Options = ({updateFeedback, feedbackReset, totalFeedback, }) => {
  return (
    <div className={css.container}>
      <button className={css.button} type='button' onClick={()=> updateFeedback("good")}>Good</button>

      <button className={css.button} type='button' onClick={()=> updateFeedback("neutral")}>Neutral</button>

      <button className={css.button} type='button' onClick={()=> updateFeedback("bad")}>Bad</button>

      {totalFeedback !==0 ? <button className={css.button} type='button' onClick={feedbackReset} > Reset </button> : <div></div>}
    </div>
  )
}

export default Options