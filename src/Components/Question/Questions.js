import React, { useEffect, useState } from 'react'
import Question from './Question'

const Questions = (props) => {
	useEffect(() => {
		getQuestions()
	}, [props.category, props.difficulty, props.playerTurn])

	const [answers, setAnswers] = useState([])

	const getQuestions = async () => {
		const response = await fetch(
			`https://opentdb.com/api.php?amount=1&category=${props.category}&difficulty=${props.difficulty}&type=multiple`
		)
		const data = await response.json()
		setTimeout(() => {
			props.setQuestions(data.results)
			setAnswers(
				shuffleAnswers([
					data.results[0].correct_answer,
					...data.results[0].incorrect_answers,
				])
			)
		}, 1500)
	}

	function shuffleAnswers(array) {
		let currentIndex = array.length,
			temporaryValue,
			randomIndex

		while (0 !== currentIndex) {
			randomIndex = Math.floor(Math.random() * currentIndex)
			currentIndex -= 1

			temporaryValue = array[currentIndex]
			array[currentIndex] = array[randomIndex]
			array[randomIndex] = temporaryValue
		}
		return array
	}

	return (
		<>
			{props.questions.map((question) => (
				<Question
					question={question.question}
					answers={answers}
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
