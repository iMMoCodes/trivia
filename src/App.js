import React, { useState } from 'react'
import Header from './Components/Header/Header'
import Questions from './Components/Question/Questions'

function App() {
	const [questions, setQuestions] = useState([])
	const [category, setCategory] = useState(9)
	const [difficulty, setDifficulty] = useState('easy')

	return (
		<>
			<Header
				category={category}
				setCategory={setCategory}
				difficulty={difficulty}
				setDifficulty={setDifficulty}
			/>
			<Questions
				questions={questions}
				setQuestions={setQuestions}
				difficulty={difficulty}
				setDifficulty={setDifficulty}
				category={category}
			/>
		</>
	)
}

export default App
