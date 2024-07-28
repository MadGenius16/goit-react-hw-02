import { useEffect, useState } from 'react'
import css from '../src/App.module.css'
import Description from './components/Description/Description'
import Options from './components/Options/Options'
import Feedback from './components/Feedback/Feedback'
import Notification  from './components/Notification/Notification'


function App() {

  const [feedback, setFeedback] = useState(() => {
    const localStorageData = localStorage.getItem("feedback")
    if (localStorageData !== null) {
      return JSON.parse(localStorageData)
    }
    return ({
      good: 0,
      neutral: 0,
      bad: 0
      })
});

useEffect(() => {
  localStorage.setItem("feedback", JSON.stringify(feedback))}, [feedback]
);

const updateFeedback = (feedbackType) => {
  setFeedback({...feedback, [feedbackType]: feedback[feedbackType]+1})
 }

 const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
 
 const positiveFeedback = Math.round((feedback.good / totalFeedback) * 100)


const feedbackReset = ()=> setFeedback({
  good: 0,
	neutral: 0,
	bad: 0,
 })


  return (
    <div className={css.container}>
    <Description />
    
    <Options 
      updateFeedback={updateFeedback}
      feedbackReset={feedbackReset}
      totalFeedback={totalFeedback}
    />

    {totalFeedback !==0 ? <Feedback feedback={feedback} totalFeedback={totalFeedback} positiveFeedback= {positiveFeedback}/> : <Notification />}

    </div>
  )
}

export default App
