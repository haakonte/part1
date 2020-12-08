import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({onClick, text}) => (
  <button onClick ={onClick}>
    {text}
  </button>
)

const Header = ({header}) => {
  return (
    <div>
      <h1>{header}</h1>
    </div>
  )
}

const Statistic = ({text, value}) => (
    <tr>
      <td colSpan='2' align='left'>{text}</td>
      <td colSpan='2' align='left'>{value}</td>
    </tr>
  
)

const Statistics = ({values}) => {
  const sum = values.reduce((a,b) => a+b, 0)
  
  const average = () => sum === 0 ? 0 : (values[0] + values[2] * (-1)) / sum 
  const positive = () => sum === 0 ? 0 : values[0] / sum

  if (sum === 0) {
    return (
      <div>
        <h4>No feedback given yet</h4>
      </div>
    )
  }
  return (
  <div>
    <table width='20%'>
      <tbody>
        <Statistic text = 'Good' value = {values[0]}/>
        <Statistic text = 'Neutral' value={values[1]}/>
        <Statistic text = 'Bad' value={values[2]}/>
        <Statistic text = 'Average' value={average().toPrecision(3)}/>
        <Statistic text = 'Positive' value={(positive() * 100).toPrecision(3)}/>
      </tbody>    
    </table>
  </div>
  )
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <Header header="Give feedback"/>
      <Button onClick={handleGoodClick} text="Good"/>
      <Button onClick={handleNeutralClick} text="Neutral"/>
      <Button onClick={handleBadClick} text = "Bad"/>
      <Header header="Statistics"/>
      <Statistics values = {[good, neutral, bad]}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
