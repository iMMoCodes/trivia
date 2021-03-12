import React from 'react'
import Container from '@material-ui/core/Container'
import TextField from '@material-ui/core/TextField'
import { withStyles, makeStyles } from '@material-ui/core/styles'

const CssTextField = withStyles({
	root: {
		'& .MuiFormLabel-root': {
			color: 'green',
		},
		'& .MuiInputBase-root': {
			color: 'green',
		},
		'& label.Mui-focused': {
			color: 'green',
		},
		'& .MuiInput-underline:after': {
			borderBottomColor: 'green',
		},
		'& .MuiOutlinedInput-root': {
			'& fieldset': {
				borderColor: 'green',
			},
			'&:hover fieldset': {
				borderColor: 'yellow',
			},
			'&.Mui-focused fieldset': {
				borderColor: 'green',
			},
		},
	},
})(TextField)

const Players = () => {
	const useStyles = makeStyles((theme) => ({
		root: {
			display: 'flex',
			flexWrap: 'wrap',
		},
		margin: {
			margin: theme.spacing(1),
		},
	}))
	const classes = useStyles()

	return (
		<>
			<Container
				style={{
					display: 'flex',
					background: '#111',
					justifyContent: 'space-around',
				}}
			>
				<CssTextField
					className={classes.margin}
					label='Player 1'
					variant='outlined'
				/>
				<CssTextField
					className={classes.margin}
					label='Player 2'
					variant='outlined'
				/>
				<CssTextField
					className={classes.margin}
					label='Player 3'
					variant='outlined'
				/>
				<CssTextField
					className={classes.margin}
					label='Player 4'
					variant='outlined'
				/>
			</Container>
		</>
	)
}

export default Players
