/**
 * Sign up Page Page
 */
import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Link,Redirect } from 'react-router-dom';

// firebase
import {auth} from '../../../firebase/auth';

export default class SignUp extends Component {
  
      

      
   
signup = async  event=>{
         event.preventDefault();
         const {firstname,lastname, email, password } = event.target.elements;
         try {
           const user = await auth(email.value, password.value).then( this.props.history.push("/shop"));
          
         } catch (error) {
           alert(error);
         }
       }
   render() {
      return (
         
         <div className="iron-sign-up-page-wrap">
            <div className="inner-container section-pad bg-base">
               <div className="container">
                  <Grid container spacing={0}>
                     <Grid item xs={12} sm={12} md={10} lg={9} className="mx-auto">
                        <Grid container spacing={0} className="d-flex justify-content-center align-items-center">
                           <Grid item xs={12} sm={12} md={6} lg={6}>
                              <div className="register-image">
                              </div>
                           </Grid>
                           <Grid item xs={12} sm={12} md={6} lg={6}>
                              <div className="iron-sign-up-form form-margin iron-shadow bg-base p-sm-25 py-20 px-15 rounded">
                                 <h4>Enter your details</h4>
                                 <form onSubmit={ this.signup.bind(this)}>
                                    <TextField
                                       required
                                       id="firstname"
                                       name="firstname"
                                       label="first Name"
                                       className="iron-form-input-wrap"
                                       type="name"
                                       autoComplete="current-name"
                                    />
                                    <TextField
                                       required
                                       id="lastname"
                                       name="lastname"
                                       label="last Name"
                                       className="iron-form-input-wrap"
                                       type="name"
                                       autoComplete="current-name"
                                       
                                    />
                                    <TextField
                                       required
                                       id="email"
                                       name="email"
                                       label="email"
                                       className="iron-form-input-wrap"
                                       type="email"
                                       autoComplete="current-email"
                                    />
                                    <TextField
                                       required
                                       id="password"
                                       name="password"
                                       label="Password"
                                       className="iron-form-input-wrap"
                                       type="password"
                                    //autoComplete="current-password"
                                    />
                                    <div className="mb-25">
                                       <TextField
                                          required
                                          id="standard-repassword-input"
                                          label="retype Password"
                                          className="iron-form-input-wrap"
                                          type="password"
                                          autoComplete="current-password"
                                       />
                                    </div>
                                    <Button type="submit" variant="contained" className="button btn-active btn-lg mb-10">
                                       sign up
                                                </Button>
                                 </form>
                                 <span className="text-14 text-capitalize pt-10 d-inline-block">already have an account ? then <Link to="/sign-in">sign in</Link></span>
                              </div>
                           </Grid>
                        </Grid>
                     </Grid>
                  </Grid>
               </div>
            </div>
         </div>
      );
   }
}
