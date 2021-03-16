import React from 'react'
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'

const End = (props) => {
	const resetScores = () => {
		props.setPlayerOneScore(0)
		props.setPlayerTwoScore(0)
		props.setPlayerThreeScore(0)
		props.setPlayerFourScore(0)
		props.setPlayerTurn(1)
	}

	let playerName = ''
	if (props.playerOneScore === 10) {
		playerName = 'Player One'
	}
	if (props.playerTwoScore === 10) {
		playerName = 'Player Two'
	}
	if (props.playerThreeScore === 10) {
		playerName = 'Player Three'
	}
	if (props.playerFourScore === 10) {
		playerName = 'PlayerFour'
	}
	return (
		<Container
			style={{
				margin: '0 auto',
				background: '#111',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
				zIndex: '999',
			}}
		>
			<h1 style={{ fontSize: '4rem', color: 'white' }}>Game Over!</h1>
			<h1 style={{ fontSize: '3rem', color: 'white' }}>{playerName} has Won</h1>
			<Button
				onClick={resetScores}
				style={{
					fontSize: '2rem',
					margin: '10px 10px',
					padding: '20px',
					borderRadius: '20px',
					border: '1px solid black',
					textTransform: 'capitalize',
					background: 'blue',
					color: 'white',
				}}
			>
				Replay
			</Button>
		</Container>
	)
}

export default End
