import React from 'react'
import Container from '@material-ui/core/Container'

const PlayerTurn = (props) => {
	return (
		<Container
			style={{
				display: 'flex',
				background: '#111',
				color: 'white',
				justifyContent: 'center',
				fontSize: '1.5rem',
			}}
		>
			{props.playerTurn === 1 ? (
				<h1>Player 1</h1>
			) : props.playerTurn === 2 ? (
				<h1>Player 2</h1>
			) : props.playerTurn === 3 ? (
				<h1>Player 3</h1>
			) : (
				<h1>Player 4</h1>
			)}
		</Container>
	)
}

export default PlayerTurn
