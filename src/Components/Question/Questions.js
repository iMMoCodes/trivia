import React, { useEffect, useState } from 'react'
import Question from './Question'

const Questions = () => {
	const [questions, setQuestions] = useState([])

	useEffect(() => {
		getQuestions()
	}, [])

	const getQuestions = async () => {
		const response = await fetch('https://opentdb.com/api.php?amount=1&category=9&difficulty=easy&type=multiple')
		const data = await response.json()
		console.log(data.results)
		setQuestions(data.results)
	}

	return (
		<>
			{questions.map((question) => (
				<Question
					question={question.question}
					correctAns={question.correct_answer}
					wrongAnsOne={question.incorrect_answers[0]}
					wrongAnsTwo={question.incorrect_answers[1]}
					wrongAnsThree={question.incorrect_answers[2]}
				/>
			))}
		</>
	)
}

export default Questions
