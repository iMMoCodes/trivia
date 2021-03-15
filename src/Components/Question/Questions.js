import React, { useEffect } from 'react'
import Question from './Question'

const Questions = (props) => {
	useEffect(() => {
		getQuestions()
	}, [props.category, props.difficulty, props.playerTurn])

	const getQuestions = async () => {
		const response = await fetch(
			`https://opentdb.com/api.php?amount=1&category=${props.category}&difficulty=${props.difficulty}&type=multiple`
		)
		const data = await response.json()
		setTimeout(() => {
			props.setQuestions(data.results)
		}, 1500)
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
					playerOneScore={props.playerOneScore}
					setPlayerOneScore={props.setPlayerOneScore}
					playerTwoScore={props.playerTwoScore}
					setPlayerTwoScore={props.setPlayerTwoScore}
					playerThreeScore={props.playerThreeScore}
					setPlayerThreeScore={props.setPlayerThreeScore}
					playerFourScore={props.playerFourScore}
					setPlayerFourScore={props.setPlayerFourScore}
					playerTurn={props.playerTurn}
					setPlayerTurn={props.setPlayerTurn}
				/>
			))}
		</>
	)
}

export default Questions
