import React from 'react'
import Container from '@material-ui/core/Container'

const Scores = (props) => {
	return (
		<Container
			style={{
				display: 'flex',
				background: '#111',
				justifyContent: 'space-around',
				color: 'green',
			}}
		>
			<h1>{props.playerOneScore}</h1>
			<h1>{props.playerTwoScore}</h1>
			<h1>{props.playerThreeScore}</h1>
			<h1>{props.playerFourScore}</h1>
		</Container>
	)
}

export default Scores
