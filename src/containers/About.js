import { Container, Divider, Link, Typography } from "@material-ui/core";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import logo from '../assets/images/SteelDemonLogo.png';
import { makeStyles } from '@material-ui/core/styles';
import { Alert } from '@material-ui/lab';
import moment from "moment";
const useStyles = makeStyles((theme) => ({
	root: {    	
		width: '100%',
		padding: theme.spacing(2),		
	},
	headline: {
		marginBottom: theme.spacing(3)
	},
	subheading: {
		margin: theme.spacing(3,0,3)
	},
	contentTexts: {
		marginBottom: theme.spacing(2.5)
	},
	trivia: {
		marginBottom: theme.spacing(4)
	}
}))

const About = props => {
	const classes = useStyles();

	useEffect(() => {
		const script = document.createElement("script");
    script.src = "//cdn.jsdelivr.net/github-cards/latest/widget.js";
		script.id="gh-card"
    script.async = true;
    document.body.appendChild(script);
		return () => {
			var sc = document.getElementById("gh-card");
    			sc.parentNode.removeChild(sc);
		}
	}, [])

  return (
			<Container className={classes.root}>
				<div style={{textAlign: 'center'}}><img src={logo} alt="Cryptools by SteelDemon" style={{width: '100%', maxWidth: 100}}/></div>
				<Typography variant={'h4'} component={'h1'} color={'primary'} className={classes.headline} gutterBottom>About Cryptools</Typography>
				<Typography variant={'body1'} className={classes.contentTexts} gutterBottom>Cryptools is created for the purpose of having a single page where I can see and track all my current earnings in Crypto.
				 It started when I started playing Cryptoblades. I started using Google Sheet to put my records on and make basic calculations for me and some are just for pure data collection only.</Typography>
				<Typography variant={'body1'} className={classes.contentTexts} gutterBottom>I discovered a way to make API Calls from Google Sheet and this one opens up more opportunities for me to do more out of what I can see on Google Sheet. Like regularly 
				updated data of Skill exchange rate from Coingecko in it's Peso value. I was also able to utilize BSCScan Developers API to get relevant public details I need from my wallet address like may last transactions, my wallet current balance
				related to BNB and Cryptoblades.</Typography>
				<Typography variant={'body1'} className={classes.contentTexts} gutterBottom>
					I also used the exported CSV file from BSCScan from all the  transactions I had on my wallet but this is pretty tiresome because I had to manually download the CSV from BSCScan then re-upload it on Google Sheet. It's okay
					and bearable but then I've come to the point where the CSV is outdated and delayed by around 3 hours before new data comes into the downloaded file. 
				</Typography>
				<Typography variant={'body1'} className={classes.contentTexts} gutterBottom>
					I discovered the API of BSCScan to use and get the data directly. It was fun until I got to the point where I want to calculate hundreds of transaction values and Google Sheet wasn't able to sum data that are displayed from results of API as the data is Read Only. All sums results to 0. 
				</Typography>
				<Typography variant={'body1'} className={classes.contentTexts} gutterBottom>
					Cryptools has been conceived and I started developing it on my free time.
				</Typography>
				
				<Alert severity={'info'} className={classes.trivia}>The name <strong>Cryptools</strong> is suggested by Gie, a friend who joined CB almost the same time as me. He is my first tester of this app and concept contributor.</Alert>
				
				<Divider variant="middle" />
				<Typography variant={'h4'} component={'h2'} color={'primary'} className={classes.subheading} gutterBottom>Source Code</Typography>
				<div class="github-card" data-github="crisinmotion/cryptools-sd" data-width="400" data-height="150" data-theme="default"></div>
				<Typography variant={'body1'} gutterBottom>
					This project homepage is publicly published via Github Pages.
				</Typography>
				<Typography variant={'h6'} gutterBottom>
					Project Repository
				</Typography>
				<Typography variant={'body1'} className={classes.contentTexts} gutterBottom>
					Feel free to fork and submit pull request if you happen to have something to add and contribute to this Project or you can download the package and compile it on your machine. 
				</Typography>
				<Typography variant={'h6'} gutterBottom>
					License
				</Typography>
				<Typography variant={'body1'} className={classes.contentTexts} gutterBottom>
					This Application is licensed under <Link href={'https://github.com/crisinmotion/cryptools-sd/blob/gh-pages/LICENSE'} rel={'noreferrer noopener'} target={'_blank'}>MIT License</Link>. 
				</Typography>

				<Divider variant={'inset'}></Divider>
				<Typography variant={'body1'} className={classes.contentTexts} gutterBottom style={{textAlign: 'center', marginTop: '20px'}}>All Rights Reserved. &copy;&nbsp;{moment(Date.now()).format("YYYY")} Cris in Motion <br/> <img src={logo} alt="SteelDemon" style={{maxWidth: 10, verticalAlign: 'middle', marginBottom: 4}}/>teel&nbsp;Demon</Typography>
			</Container>
  );
};

const mapStateToProps = state => {
  return {    
  };
};

const mapDispatchToProps = dispatch => {
  return {}
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(About);
