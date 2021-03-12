import React from 'react'
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'

// Styling
const buttonStyles = {
	fontSize: '2rem',
	flex: '1',
	margin: '10px 10px',
	borderRadius: '20px',
	border: '1px solid black',
	textTransform: 'capitalize',
	background: 'blue',
	color: 'white',
}

const Question = ({
	question,
	correctAns,
	wrongAnsOne,
	wrongAnsTwo,
	wrongAnsThree,
	playerOneScore,
	setPlayerOneScore,
	playerTwoScore,
	setPlayerTwoScore,
	playerThreeScore,
	setPlayerThreeScore,
	playerFourScore,
	setPlayerFourScore,
	playerTurn,
	setPlayerTurn,
}) => {
	const answers = [correctAns, wrongAnsOne, wrongAnsTwo, wrongAnsThree]

	const handleClick = (e) => {
		console.log(e)
		if (
			e.target.innerHTML ===
			correctAns
				.replace('&#039;', "'")
				.replace('&rsquo;', "'")
				.replace('&aacute;', 'á')
				.replace('&iacute;', 'í')
				.replace('&Eacute;', 'é')
				.replace('&lrm;', '.')
				.replace('&oacute;', 'ó')
				.replace('&ouml;', 'ö')
				.replace('&amp;', '&')
		) {
			e.target.parentElement.style.background = 'green'
			if (playerTurn === 1) {
				setPlayerOneScore(playerOneScore + 1)
				setPlayerTurn(playerTurn + 1)
			} else if (playerTurn === 2) {
				setPlayerTwoScore(playerTwoScore + 1)
				setPlayerTurn(playerTurn + 1)
			} else if (playerTurn === 3) {
				setPlayerThreeScore(playerThreeScore + 1)
				setPlayerTurn(playerTurn + 1)
			} else {
				setPlayerFourScore(playerFourScore + 1)
				setPlayerTurn(1)
			}
		} else if (
			e.target.innerHTML ===
				wrongAnsOne
					.replace('&#039;', "'")
					.replace('&rsquo;', "'")
					.replace('&aacute;', 'á')
					.replace('&iacute;', 'í')
					.replace('&Eacute;', 'é')
					.replace('&lrm;', '.')
					.replace('&oacute;', 'ó')
					.replace('&ouml;', 'ö')
					.replace('&amp;', '&') ||
			e.target.innerHTML ===
				wrongAnsTwo
					.replace('&#039;', "'")
					.replace('&rsquo;', "'")
					.replace('&aacute;', 'á')
					.replace('&iacute;', 'í')
					.replace('&Eacute;', 'é')
					.replace('&lrm;', '.')
					.replace('&oacute;', 'ó')
					.replace('&ouml;', 'ö')
					.replace('&amp;', '&') ||
			e.target.innerHTML ===
				wrongAnsThree
					.replace('&#039;', "'")
					.replace('&rsquo;', "'")
					.replace('&aacute;', 'á')
					.replace('&iacute;', 'í')
					.replace('&Eacute;', 'é')
					.replace('&lrm;', '.')
					.replace('&oacute;', 'ó')
					.replace('&ouml;', 'ö')
					.replace('&amp;', '&')
		) {
			e.target.parentElement.style.background = 'red'
			if (playerTurn === 1 || playerTurn === 2 || playerTurn === 3) {
				setPlayerTurn(playerTurn + 1)
			} else {
				setPlayerTurn(1)
			}
		}
	}

	const shuffleAnswers = (array) => {
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

	shuffleAnswers(answers)

	return (
		<Container style={{ background: '#111', color: 'white' }}>
			<h1 style={{ fontSize: '3rem', padding: '2rem', textAlign: 'center' }}>
				{question
					.replace('&quot;', '"')
					.replace('&quot;', '"')
					.replace('&quot;', '"')
					.replace('&quot;', '"')
					.replace('&#039;', "'")
					.replace('&#039;', "'")
					.replace('&#039;', "'")
					.replace('&ldquo;', '"')
					.replace('&rsquo;', "'")
					.replace('&rdquo;', "'")
					.replace('&hellip;', '_')
					.replace('&pi;', 'pi')
					.replace('&eacute;', 'é')
					.replace('&shy;', '-')
					.replace('&shy;', '-')
					.replace('&shy;', '-')
					.replace('&shy;', '-')
					.replace('&shy;', '-')
					.replace('&shy;', '-')
					.replace('&shy;', '-')
					.replace('&shy;', '-')
					.replace('&amp;', '&')}
			</h1>
			<ButtonGroup
				variant='contained'
				aria-label='primary button group'
				style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}
			>
				{answers.map((answer) => (
					<Button
						key={answer}
						style={buttonStyles}
						onClick={handleClick}
					>
						{answer
							.replace(
								'&#039;',
								"'"
							)
							.replace(
								'&rsquo;',
								"'"
							)
							.replace(
								'&aacute;',
								'á'
							)
							.replace(
								'&iacute;',
								'í'
							)
							.replace(
								'&Eacute;',
								'é'
							)
							.replace(
								'&lrm;',
								'.'
							)
							.replace(
								'&oacute;',
								'ó'
							)
							.replace(
								'&ouml;',
								'ö'
							)
							.replace(
								'&amp;',
								'&'
							)}
					</Button>
				))}
			</ButtonGroup>
		</Container>
	)
}

export default Question
