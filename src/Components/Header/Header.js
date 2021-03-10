import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import AllInclusiveIcon from '@material-ui/icons/AllInclusive'
import TheatersIcon from '@material-ui/icons/Theaters'
import TvIcon from '@material-ui/icons/Tv'
import VideogameAssetIcon from '@material-ui/icons/VideogameAsset'
import GamepadIcon from '@material-ui/icons/Gamepad'
import NatureIcon from '@material-ui/icons/Nature'
import SportsRugbyIcon from '@material-ui/icons/SportsRugby'
import FunctionsIcon from '@material-ui/icons/Functions'
import PetsIcon from '@material-ui/icons/Pets'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'

function TabPanel(props) {
	const { children, value, index, ...other } = props

	return (
		<div
			role='tabpanel'
			hidden={value !== index}
			id={`scrollable-force-tabpanel-${index}`}
			aria-labelledby={`scrollable-force-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box p={3}>
					<Typography
						style={{
							fontSize:
								'4rem',
							textAlign:
								'center',
							background:
								'#111',
							color:
								'white',
						}}
					>
						{children}
					</Typography>
				</Box>
			)}
		</div>
	)
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.any.isRequired,
	value: PropTypes.any.isRequired,
}

function a11yProps(index) {
	return {
		id: `scrollable-force-tab-${index}`,
		'aria-controls': `scrollable-force-tabpanel-${index}`,
	}
}

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		width: '100%',
		backgroundColor: theme.palette.background.paper,
	},
}))

const Header = () => {
	const classes = useStyles()
	const [value, setValue] = React.useState(0)

	const handleChange = (event, newValue) => {
		setValue(newValue)
	}

	return (
		<div className={classes.root}>
			<AppBar position='static' color='default'>
				<Tabs
					value={value}
					onChange={handleChange}
					variant='scrollable'
					scrollButtons='on'
					indicatorColor='primary'
					textColor='primary'
					aria-label='scrollable force tabs example'
				>
					<Tab
						label='General Knowledge'
						icon={<AllInclusiveIcon />}
						{...a11yProps(0)}
					/>
					<Tab
						label='Movies'
						icon={<TheatersIcon />}
						{...a11yProps(1)}
					/>
					<Tab
						label='TV'
						icon={<TvIcon />}
						{...a11yProps(2)}
					/>
					<Tab
						label='Video Games'
						icon={<VideogameAssetIcon />}
						{...a11yProps(3)}
					/>
					<Tab
						label='Board Games'
						icon={<GamepadIcon />}
						{...a11yProps(4)}
					/>
					<Tab
						label='Science and Nature'
						icon={<NatureIcon />}
						{...a11yProps(5)}
					/>
					<Tab
						label='Mathematics'
						icon={<FunctionsIcon />}
						{...a11yProps(6)}
					/>
					<Tab
						label='Sports'
						icon={<SportsRugbyIcon />}
						{...a11yProps(7)}
					/>
					<Tab
						label='Geography'
						icon={<NatureIcon />}
						{...a11yProps(8)}
					/>
					<Tab
						label='Animals'
						icon={<PetsIcon />}
						{...a11yProps(9)}
					/>
				</Tabs>
			</AppBar>
			<TabPanel value={value} index={0}>
				General Knowledge
			</TabPanel>
			<TabPanel value={value} index={1}>
				Movies
			</TabPanel>
			<TabPanel value={value} index={2}>
				TV
			</TabPanel>
			<TabPanel value={value} index={3}>
				Video Games
			</TabPanel>
			<TabPanel value={value} index={4}>
				Board Games
			</TabPanel>
			<TabPanel value={value} index={5}>
				Science and Nature
			</TabPanel>
			<TabPanel value={value} index={6}>
				Mathematics
			</TabPanel>
			<TabPanel value={value} index={7}>
				Sports
			</TabPanel>
			<TabPanel value={value} index={8}>
				Geography
			</TabPanel>
			<TabPanel value={value} index={9}>
				Animals
			</TabPanel>
		</div>
	)
}

export default Header
