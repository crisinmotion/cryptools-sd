import { Dialog, DialogContentText, DialogTitle, DialogContent, Typography, useTheme, DialogActions, Button } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import React, { useEffect } from 'react';

const UpdateBoard = (props) => {
  const { settings, requestUpdateStatus } = props
	const theme = useTheme()

  const handleClose = () => {
		let params = {
			...settings,
			updateNotice: false
		}		
    requestUpdateStatus(params);		
  };

	useEffect(()=>{
		const appVersion  = 'v1.0-beta.2'
		const updateSettings = {
			version: appVersion,
			updateNotice: true,
			updateContent: {
				title: "What's new in version "+ appVersion,
				content: [
					"<strong>Daily Match Tracker</strong> — You can now easily track how much matches you still left for the day (28 max daily). See how many matches you won and lost, the remaining matches and you can keep tabs of your per match earnings.",
					"<strong>Bugfixes and Chores</strong>"
				],
				warning: "This update may break your saved data or reset your board positions to default, please make sure you have a note of all the manual input data you specified on the App such as current earnings of the coin you are farming as well as the capital input and API Key from BSCScan",
				footer: "Enjoy! Feel free to send me your suggestions here at <strong>steeldemon026@gmail.com</strong>"
			} 
		}
		if((!Object.keys(settings)) || (settings && settings.version !== updateSettings.version) ) {			
			requestUpdateStatus(updateSettings)
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

  return (
    <div>			
      {settings && settings.updateContent && Object.keys(settings.updateContent).length > 0 &&
				<Dialog
					open={(settings && settings.updateNotice) || false }
					onClose={handleClose}
					aria-labelledby="update-dialog-title"
					aria-describedby="update-dialog-content"
				>
					<DialogTitle id="update-dialog-title">{settings.updateContent.title}</DialogTitle>
					<DialogContent>
						<DialogContentText id="update-dialog-content" component={'div'}>
							{settings && settings.updateContent.warning && <Alert severity="error" style={{marginBottom: theme.spacing(2)}}>{settings.updateContent.warning}</Alert>}
							<Typography variant={'h6'} color={'primary'}>Changelog</Typography>
							{settings && settings.updateContent && settings.updateContent.content &&
								<ul style={{paddingLeft: theme.spacing(2)}}>
									{
										settings.updateContent.content.map((item, idx)=>{
											return (
												<Typography key={idx} variant={'body1'} component={'li'} gutterBottom><span dangerouslySetInnerHTML={{__html: item}}></span></Typography>
											)
										})
									}

								</ul>
							}
							
						</DialogContentText>
						{settings && settings.updateContent.footer && <Alert severity="info" style={{marginBottom: theme.spacing(2)}}><span dangerouslySetInnerHTML={{__html: settings.updateContent.footer}}></span></Alert>}
					</DialogContent>   
					<DialogActions style={{padding: theme.spacing(2)}}>
						<Button variant={'contained'} color={'primary'} disableFocusRipple onClick={()=> {handleClose()}}>Confirm</Button>
					</DialogActions>     
				</Dialog>
			}
    </div>
  );
}

export default UpdateBoard
