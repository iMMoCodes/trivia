import React, { useEffect } from 'react'
import Question from './Question'

const Questions = (props) => {
	useEffect(() => {
		getQuestions()
	}, [props.category, props.difficulty])

	const getQuestions = async () => {
		const response = await fetch(
			`https://opentdb.com/api.php?amount=1&category=${props.category}&difficulty=${props.difficulty}&type=multiple`
		)
		const data = await response.json()
		console.log(data.results)
		props.setQuestions(data.results)
	}

	return (
		<>
			{props.questions.map((question) => (
				<Question
					question={question.question}
					correctAns={question.correct_answer}
					wrongAnsOne={question.incorrect_answers[0]}
					wrongAnsTwo={question.incorrect_answers[1]}
					wrongAnsThree={question.incorrect_answers[2]}
					key={question.question}
				/>
			))}
		</>
	)
}

export default Questions
