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
}

const Question = ({ question, correctAns, wrongAnsOne, wrongAnsTwo, wrongAnsThree }) => {
	return (
		<Container style={{ background: '#111', color: 'white' }}>
			<h1 style={{ fontSize: '3rem', padding: '2rem', textAlign: 'center' }}>{question}</h1>
			<ButtonGroup
				variant='contained'
				color='primary'
				aria-label='contained primary button group'
				style={{ display: 'flex' }}
			>
				<Button style={buttonStyles}>{correctAns}</Button>
				<Button style={buttonStyles}>{wrongAnsOne}</Button>
			</ButtonGroup>
			<ButtonGroup
				variant='contained'
				color='primary'
				aria-label='contained primary button group'
				style={{ display: 'flex' }}
			>
				<Button style={buttonStyles}>{wrongAnsTwo}</Button>
				<Button style={buttonStyles}>{wrongAnsThree}</Button>
			</ButtonGroup>
		</Container>
	)
}

export default Question