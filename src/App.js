import React, { useState } from 'react'
import Header from './Components/Header/Header'
import Questions from './Components/Question/Questions'
import Scores from './Components/Scores/Scores'
import Players from './Components/Players/Players'

function App() {
	const [questions, setQuestions] = useState([])
	const [category, setCategory] = useState(9)
	const [difficulty, setDifficulty] = useState('easy')
	const [playerOneScore, setPlayerOneScore] = useState(0)
	const [playerTwoScore, setPlayerTwoScore] = useState(0)
	const [playerThreeScore, setPlayerThreeScore] = useState(0)
	const [playerFourScore, setPlayerFourScore] = useState(0)
	const [playerTurn, setPlayerTurn] = useState(1)

	return (
		<>
			<Header
				category={category}
				setCategory={setCategory}
				difficulty={difficulty}
				setDifficulty={setDifficulty}
				setPlayerOneScore={setPlayerOneScore}
				setPlayerTwoScore={setPlayerTwoScore}
				setPlayerThreeScore={setPlayerThreeScore}
				setPlayerFourScore={setPlayerFourScore}
				setPlayerTurn={setPlayerTurn}
			/>
			<Questions
				questions={questions}
				setQuestions={setQuestions}
				difficulty={difficulty}
				setDifficulty={setDifficulty}
				category={category}
				playerOneScore={playerOneScore}
				setPlayerOneScore={setPlayerOneScore}
				playerTwoScore={playerTwoScore}
				setPlayerTwoScore={setPlayerTwoScore}
				playerThreeScore={playerThreeScore}
				setPlayerThreeScore={setPlayerThreeScore}
				playerFourScore={playerFourScore}
				setPlayerFourScore={setPlayerFourScore}
				playerTurn={playerTurn}
				setPlayerTurn={setPlayerTurn}
			/>
			<Scores
				playerOneScore={playerOneScore}
				playerTwoScore={playerTwoScore}
				playerThreeScore={playerThreeScore}
				playerFourScore={playerFourScore}
			/>
			<Players />
		</>
	)
}

export default App
