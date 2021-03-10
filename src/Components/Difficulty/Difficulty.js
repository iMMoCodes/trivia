import React, { useState } from 'react'
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'

const Difficulty = (props) => {
	const [bgOne, setBgOne] = useState('green')
	const [bgTwo, setBgTwo] = useState('#111')
	const [bgThree, setBgThree] = useState('#111')
	const handleEasyDifficulty = () => {
		setBgOne('green')
		setBgTwo('#111')
		setBgThree('#111')
		props.setDifficulty('easy')
	}

	const handleMediumDifficulty = () => {
		setBgOne('#111')
		setBgTwo('blue')
		setBgThree('#111')
		props.setDifficulty('medium')
	}

	const handleHardDifficulty = () => {
		props.setDifficulty('hard')
		setBgOne('#111')
		setBgTwo('#111')
		setBgThree('red')
	}

	return (
		<Container style={{ margin: '10px auto', display: 'flex', justifyContent: 'center' }}>
			<ButtonGroup style={{ background: '#111' }} aria-label='outlined primary button group'>
				<Button
					onClick={handleEasyDifficulty}
					style={{
						fontSize: '1.5rem',
						color: 'white',
						background: bgOne,
					}}
				>
					Easy
				</Button>
				<Button
					onClick={handleMediumDifficulty}
					style={{
						fontSize: '1.5rem',
						color: 'white',
						background: bgTwo,
					}}
				>
					Medium
				</Button>
				<Button
					onClick={handleHardDifficulty}
					style={{
						fontSize: '1.5rem',
						color: 'white',
						background: bgThree,
					}}
				>
					Hard
				</Button>
			</ButtonGroup>
		</Container>
	)
}

export default Difficulty
