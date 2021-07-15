import { Dialog, DialogContentText, DialogTitle, DialogContent } from '@material-ui/core';
import React from 'react';

const DefaultDialog = (props) => {
  const { open, closeCallback, content, children, title } = props

  const handleClose = () => {
    closeCallback(!open)
  };

  return (
    <div>			
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {content}
						{children}
          </DialogContentText>
        </DialogContent>        
      </Dialog>
    </div>
  );
}

export default DefaultDialog
