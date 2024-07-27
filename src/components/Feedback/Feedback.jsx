

const Feedback = ({feedback: {good, neutral, bad},positiveFeedback,totalFeedback }) => {
  return (
    <div>
      <ul>
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