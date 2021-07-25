/**
 * Form Dialog
 */
/* eslint-disable */
import React from 'react';
import { connect } from 'react-redux';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

//Actions
import { addNewUser } from "../../../../../actions/action";

class AddUser extends React.Component {

   state = {
      open: false,
      fields: {},
      errors: {}
   };

   handleClickOpen = () => {
      this.setState({
         open: true,
         fields: {},
         errors: {}
      });
   };
   onHandleClose = () => {
      this.setState({ open: false });
   };

   handleClose = () => {
      this.setState({ open: false });
      this.setState({
         fields: {},
         errors: {}
      });
   };
   //handle form validation
   handleValidation() {
      let fields = this.state.fields;
      let errors = {};
      let formIsValid = true;

      //FName
      if (!fields["name"]) {
         formIsValid = false;
         errors["name"] = "Cannot be empty";
      }

      if (typeof fields["name"] !== "undefined") {
         if (!fields["name"].match(/^[a-zA-Z]+$/)) {
            formIsValid = false;
            errors["name"] = "Only letters";
         }
      }

      //Email
      if (!fields["email"]) {
         formIsValid = false;
         errors["email"] = "Cannot be empty";
      }

      if (typeof fields["email"] !== "undefined") {
         let lastAtPos = fields["email"].lastIndexOf('@');
         let lastDotPos = fields["email"].lastIndexOf('.');

         if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') === -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
            formIsValid = false;
            errors["email"] = "Email is not valid";
         }
      }
      if (!fields["access"]) {
         formIsValid = false;
         errors["access"] = "Cannot be empty";
      }

      if (typeof fields["access"] !== "undefined") {
         if (!fields["access"].match(/^[a-zA-Z]+$/)) {
            formIsValid = false;
            errors["access"] = "Only letters";
         }
      }

      this.setState({ errors: errors });
      return formIsValid;
   }

   handleChange(field, e) {
      let fields = this.state.fields;
      fields[field] = e.target.value;
      this.setState({ fields });
      //this.setState({ [e.target.name]: e.target.value });
   }

   //submit form data
   onFormSubmit(e) {
      e.preventDefault();
      if (this.handleValidation()) {
         this.props.addNewUser(this.state.fields);
         this.setState({ open: false });
      } else {
         alert("Form has errors.")
      }
   }

   render() {
      return (
         <div>
            <Button className="rounded-circle px-20 text-capitalize btn-primary " onClick={this.handleClickOpen}>
               add user
            </Button>
            <Dialog
               className="add-user-dialog admin-invoice-wrap"
               open={this.state.open}
               onClose={this.onHandleClose}
               aria-labelledby="form-dialog-title"
            >
               <DialogTitle id="form-dialog-title">Add New User</DialogTitle>
               <DialogContent>
                  <div>
                     <form onSubmit={this.onFormSubmit.bind(this)}>
                        <div className="row">
                           <div className="col-sm-12 col-md-12 col-lg-12 mb-20">
                              <TextField
                                 fullWidth
                                 id="standard-name"
                                 label="Name"
                                 className="iron-form-input-wrap"
                                 error={this.state.errors["name"]}
                                 ref="name"
                                 onChange={this.handleChange.bind(this, "name")}
                                 value={this.state.fields["name"] ? this.state.fields["name"] : ''}
                              />
                              <span className="error">{this.state.errors["name"]}</span>
                           </div>
                           <div className="col-sm-12 col-md-12 col-lg-12 mb-20">
                              <TextField
                                 fullWidth
                                 id="standard-email"
                                 label="email"
                                 className="iron-form-input-wrap"
                                 error={this.state.errors["email"]}
                                 refs="email"
                                 onChange={this.handleChange.bind(this, "email")}
                                 value={this.state.fields["email"] ? this.state.fields["email"] : ''}
                              />
                              <span className="error">{this.state.errors["email"]}</span>
                           </div>
                           <div className="col-sm-12 col-md-12 col-lg-12 mb-20">
                              <FormControl className="w-100 iron-form-input-wrap">
                                 <InputLabel htmlFor="age-simple">access</InputLabel>
                                 <Select
                                    ref="access"
                                    error={this.state.errors["access"]}
                                    value={this.state.fields["access"] ? this.state.fields["access"] : ''}
                                    onChange={this.handleChange.bind(this, "access")}
                                    inputProps={{
                                       name: 'age',
                                       id: 'age-simple',
                                    }}
                                 >
                                    <MenuItem value={'read'}>read</MenuItem>
                                    <MenuItem value={'write'}>write</MenuItem>
                                    <MenuItem value={'admin'}>admin</MenuItem>
                                 </Select>
                              </FormControl>
                           </div>
                        </div>
                        <div className="pt-25 text-right">
                           <Button variant="contained" onClick={this.handleClose} className="btn-primary mr-15 text-capitalize">
                              Cancel
            		         </Button>
                           <Button variant="contained" className="btn-active text-white text-capitalize" type="submit">Submit</Button>
                        </div>
                     </form>
                  </div>
               </DialogContent>
            </Dialog>
         </div>
      );
   }
}

const mapStateToProps = ({ ecommerce }) => {
   const { collaborationData } = ecommerce;
   return { collaborationData };
}

export default connect(mapStateToProps, {
   addNewUser
})(AddUser);