import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({onClick, text}) => (
  <button onClick = {onClick}>
    {text}
  </button>
)

const App = (props) => {
  
  const [votes, setVotes] = useState(new Array(props.anecdotes.length).fill(0))
  const random = Math.floor(Math.random() * props.anecdotes.length)
  const [selected, setSelected] = useState(props.anecdotes[random])

  const handleRandomAnecdote = () => {
    const selection = props.anecdotes[random]
    setSelected(selection)
  }

  const handleVote = () => {
    const copied_votes = [...votes]
    const index = props.anecdotes.indexOf(selected)
    copied_votes[index] += 1
    setVotes(copied_votes)
  }

  return (
    <div>
      <h2>{selected}</h2>
      <p>Has {votes[props.anecdotes.indexOf(selected)]} votes</p>
      <Button onClick = {handleRandomAnecdote} text = "Next anecdote"/>
      <Button onClick ={handleVote} text = "Vote"/>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)