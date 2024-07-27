import { useState } from 'react'
import './App.css'
import Description from './components/Description/Description'
import Options from './components/Options/Options'
import Feedback from './components/Feedback/Feedback'
import Notification  from './components/Notification/Notification'

function App() {
const [feedback, setFeedback] =useState({
  good: 0,
	neutral: 0,
	bad: 0
})

const updateFeedback = (feedbackType) => {
  setFeedback({...feedback, [feedbackType]: feedback[feedbackType]+1})
 }

 const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

const feedbackReset = ()=> setFeedback({
  good: 0,
	neutral: 0,
	bad: 0})


  return (
    <div>
    <Description />
    
    <Options 
      updateFeedback={updateFeedback}
      feedbackReset={feedbackReset}
      totalFeedback={totalFeedback}
    />

    {totalFeedback !==0 ? <Feedback feedback={feedback}/> : <Notification />}

    </div>
  )
}

export default App
