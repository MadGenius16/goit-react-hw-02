import css from '../Feedback/Feedback.module.css'

const Feedback = ({feedback: {good, neutral, bad},positiveFeedback,totalFeedback }) => {
  return (
    <div >
      <ul className={css.list}>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {totalFeedback}</li>
        <li>Positive: {positiveFeedback}</li>
      </ul>
    </div>
  )
}

export default Feedback