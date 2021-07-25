/**
 * Confirmation dialog component
*/
/* eslint-disable */
import React from 'react';
import { Button, Dialog, DialogActions, DialogContent } from '@material-ui/core';

class ConfirmationBox extends React.Component {
   state = {
      open: false,
   };

   //Define function for open confirmation dialog box
   openDialog() {
      this.setState({ open: true });
   };
   //Define function for close confirmation dialog box
   closeDialog() {
      this.setState({ open: false });
   };
   //Define function for close confirmation dialog box and callback for delete item 
   onCloseDialog(isTrue) {
      this.setState({ open: false });
      this.props.onConfirm(isTrue)
   };

   render() {

      return (
         <Dialog
            open={this.state.open}
            onClose={this.closeDialog.bind(this)}
            aria-labelledby="responsive-dialog-title"
         >
            <DialogContent className="p-20 text-center">
               <h5 className="pt-sm-20 mb-0">Are you sure you want to delete this invoice permanently?</h5>
            </DialogContent>
            <DialogActions className="px-20 pb-20 pt-sm-15 justify-content-center">

               <Button onClick={() => this.onCloseDialog(true)} className="button btn-active mr-15">
                  yes
               </Button>
               <Button onClick={() => this.onCloseDialog(false)} className="button btn-active mr-15" autoFocus>
                  no
               </Button>
            </DialogActions>
         </Dialog >
      );
   }
}

export default ConfirmationBox;