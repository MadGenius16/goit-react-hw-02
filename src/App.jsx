import { useState } from 'react'
import css from '../src/App.module.css'
import Description from './components/Description/Description'
import Options from './components/Options/Options'
import Feedback from './components/Feedback/Feedback'
import Notification  from './components/Notification/Notification'


function App() {
const [feedback, setFeedback] =useState({
  good: 0,
	neutral: 0,
	bad: 0,
  total: 0,
  Positive: 0
})

const updateFeedback = (feedbackType) => {
  setFeedback({...feedback, [feedbackType]: feedback[feedbackType]+1})
 }

 const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
const positiveFeedback = Math.round((feedback.good / totalFeedback) * 100)


const feedbackReset = ()=> setFeedback({
  good: 0,
	neutral: 0,
	bad: 0,
  total: 0,
  Positive: 0})


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
