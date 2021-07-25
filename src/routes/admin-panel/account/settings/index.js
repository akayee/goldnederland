/**
 * user profile page
 */
/* eslint-disable */
import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import Checkbox from '@material-ui/core/Checkbox';
import ImageUploader from 'react-images-upload';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';

export default class Settings extends React.Component {
   state = {
      value: '',
      pictures: [],
      multiline: '',
   };

   handleChange = event => {
      this.setState({ value: event.target.value });
   };

   onOtherReason = name => event => {
      this.setState({ [name]: event.target.value });
   };

   onDrop(picture) {
      this.setState({
         pictures: this.state.pictures.concat(picture),
      });
   }

   render() {
      return (
         <div>
            <div className="user-image-upload mb-10">
               <a href="javascript:void(0)">
                  <img
                     src={require("../../../../assets/avatars/user-edit.png")}
                     alt="product-item"
                     height="70"
                     width="70"
                  />
               </a>
               <div className="image-content d-flex justify-content-center align-items-center">
                  <ImageUploader
                     withPreview
                     withIcon={false}
                     buttonClassName="primary-color border-circle"
                     buttonText=""
                     onChange={() => this.onDrop()}
                     imgExtension={['.jpg', '.gif', '.png', '.gif']}
                     maxFileSize={5242880}
                  />
               </div>
            </div>
            <div className="iron-deactivate-wrap">
               <h5 className="mb-5">Notifications</h5>
               <div className="mb-20">
                  <FormControl component="fieldset">
                     <FormGroup>
                        <FormControlLabel
                           control={<Checkbox value="Enable Notifications" />}
                           label="Enable Notifications"
                        />
                        <FormControlLabel
                           control={<Checkbox value="Show Desktop Notifications" />}
                           label="Show Desktop Notifications"
                        />
                        <FormControlLabel
                           control={<Checkbox value="Get e-mail notification for my own activity Llorca" />}
                           label="Get e-mail notification for my own activity Llorca"
                        />
                        <FormControlLabel
                           control={<Checkbox value="Get e-mail notification for request and reviews" />}
                           label="Get e-mail notification for request and reviews"
                        />
                     </FormGroup>
                  </FormControl>
               </div>
               <div>
                  <h5 className="mb-10">Deactivate your account</h5>
                  <p className="mb-10">Reason for leaving :</p>
                  <FormControl component="fieldset" >
                     <RadioGroup
                        aria-label="deactivate"
                        name="deactivate"
                        value={this.state.value}
                        onChange={this.handleChange}
                     >
                        <FormControlLabel value="This is temporary. I'll be back" control={<Radio />} label="This is temporary. I'll be back." />
                        <FormControlLabel value="My account was hacked" control={<Radio />} label="My account was hacked." />
                        <FormControlLabel value="I have a privacy concern" control={<Radio />} label="I have a privacy concern." />
                        <FormControlLabel value="other" control={<Radio />} label="Other" />
                     </RadioGroup>
                  </FormControl>
               </div>
               <div className="d-sm-flex justify-content-start align-items-center mb-10">
                  <span className="mb-0 pr-10 text-14">If other then please explain further :</span>
                  <TextField
                     id="standard-multiline-flexible"
                     multiline
                     rowsMax="4"
                     className="mt-0"
                     value={this.state.multiline}
                     onChange={this.onOtherReason('multiline')}
                     margin="normal"
                  />
               </div>
               <Button className="button btn-active mb-10">deactivate account</Button>
            </div>
         </div>
      )
   }
}