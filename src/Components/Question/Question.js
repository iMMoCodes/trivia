import React from 'react'
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'

// Styling
const buttonStyles = {
	padding: '1rem',
	fontSize: '1.5rem',
	flex: '1',
	margin: '10px 10px',
	borderRadius: '20px',
	textTransform: 'capitalize',
}

const Question = ({ question, correctAns, wrongAnsOne, wrongAnsTwo, wrongAnsThree }) => {
	const answers = [correctAns, wrongAnsOne, wrongAnsTwo, wrongAnsThree]

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
					.replace('&eacute;', 'é')}
			</h1>
			<ButtonGroup
				variant='contained'
				color='primary'
				aria-label='contained primary button group'
				style={{ display: 'flex' }}
			>
				<Button style={buttonStyles}>
					{answers[0]
						.replace('&#039;', "'")
						.replace('&rsquo;', "'")}
				</Button>
				<Button style={buttonStyles}>
					{answers[1]
						.replace('&#039;', "'")
						.replace('&rsquo;', "'")}
				</Button>
			</ButtonGroup>
			<ButtonGroup
				variant='contained'
				color='primary'
				aria-label='contained primary button group'
				style={{ display: 'flex' }}
			>
				<Button style={buttonStyles}>
					{answers[2]
						.replace('&#039;', "'")
						.replace('&rsquo;', "'")}
				</Button>
				<Button style={buttonStyles}>
					{answers[3]
						.replace('&#039;', "'")
						.replace('&rsquo;', "'")}
				</Button>
			</ButtonGroup>
		</Container>
	)
}

export default Question
