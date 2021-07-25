import React from 'react';
import { Grid, Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import {addData} from '../../../../firebase/auth';
import firebase from '../../../../firebase/index';
// actions
import {  showAlert, finalPayment } from "../../../../actions/action";
// helpers
import {  getTotalPrice } from "../../../../helpers";
//connect to store
import { connect } from 'react-redux';

class AddressForm extends React.Component {

   state = {
      fields: {},
      errors: {},
      data:[],
      user:null
   };

   //handle form validation
   handleValidation() {
      let fields = this.state.fields;
      let errors = {};
      let formIsValid = true;

      //FName
      if (!fields["fname"]) {
         formIsValid = false;
         errors["fname"] = "Cannot be empty";
      }

      if (typeof fields["fname"] !== "undefined") {
         if (!fields["fname"].match(/^[a-zA-Z]+$/)) {
            formIsValid = false;
            errors["fname"] = "Only letters";
         }
      }

      //LName
      if (!fields["lname"]) {
         formIsValid = false;
         errors["lname"] = "Cannot be empty";
      }

      if (typeof fields["lname"] !== "undefined") {
         if (!fields["lname"].match(/^[a-zA-Z]+$/)) {
            formIsValid = false;
            errors["lname"] = "Only letters";
         }
      }

      //street name or num.
      if (!fields["street"]) {
         formIsValid = false;
         errors["street"] = "Cannot be empty";
      }

      if (typeof fields["street"] !== "undefined") {
         if (!fields["street"].match(/^[a-zA-Z]+$/)) {
            formIsValid = false;
            errors["street"] = "Only letters and numbers";
         }
      }

      //apt-building Name
      if (!fields["aptname"]) {
         formIsValid = false;
         errors["aptname"] = "Cannot be empty";
      }

      if (typeof fields["aptname"] !== "undefined") {
         if (!fields["aptname"].match(/^[a-zA-Z]+$/)) {
            formIsValid = false;
            errors["aptname"] = "Only letters";
         }
      }
      //zip code
      if (!fields["zipcode"]) {
         formIsValid = false;
         errors["zipcode"] = "Cannot be empty";
      }

      if (typeof fields["zipcode"] !== "undefined") {
         if (!fields["zipcode"].match(/^\d{5}$|^\d{5}-\d{4}$/)) {
            formIsValid = false;
            errors["zipcode"] = "not a valid zip-code";
         }
      }

      //state
      if (!fields["state"]) {
         formIsValid = false;
         errors["state"] = "Cannot be empty";
      }

      if (typeof fields["state"] !== "undefined") {
         if (!fields["state"].match(/^[a-zA-Z]+$/)) {
            formIsValid = false;
            errors["state"] = "Only letters";
         }
      }

      //country
      if (!fields["country"]) {
         formIsValid = false;
         errors["country"] = "Cannot be empty";
      }

      if (typeof fields["country"] !== "undefined") {
         if (!fields["country"].match(/^[a-zA-Z]+$/)) {
            formIsValid = false;
            errors["country"] = "Only letters";
         }
      }

      //mobile num.
      if (!fields["mobile"]) {
         formIsValid = false;
         errors["mobile"] = "Cannot be empty";
      }

      if (typeof fields["mobile"] !== "undefined") {
         if (!fields["mobile"].match(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/)) {
            formIsValid = false;
            errors["mobile"] = "number is not valid";
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

      this.setState({ errors: errors });
      return formIsValid;
   }

   handleChange(field, e) {

      let fields = this.state.fields;
      fields[field] = e.target.value;
      //console.log(fields);
      this.setState({ fields });

   }

   onAddressFormSubmit(e) {
      var that=this;
      e.preventDefault();
      if (this.handleValidation()) {
         let data=this.state.fields


         var that=this;
         firebase.auth().onAuthStateChanged(function(user){
            if(user){
               that.setState({user:user.uid})
               data["userId"]=user.uid;
               data["status"]="order";
               data["price"]=getTotalPrice();
               var tempDate = new Date();
               var date = tempDate.getFullYear() + '-' + (tempDate.getMonth()+1) + '-' + tempDate.getDate() +' '+ tempDate.getHours()+':'+ tempDate.getMinutes()+':'+ tempDate.getSeconds();
               data["date"]=date;
               data["cart"]=that.props.cart;
               addData(data,"orders");
            }else{
               data["status"]="order";
               addData(data,"orders");
            }
         }); 
         
         setTimeout(() => {
            this.props.showAlert('Your order Is Successfully added!', 'success')
         }, 500)

      } else {
         alert("Form has errors.")
      }
   }

   render() {
      
      return (
         <form onSubmit={this.onAddressFormSubmit.bind(this)}>
            <Grid container spacing={32}>
               <Grid item xs={12} sm={6} md={6} lg={4}>
                  <TextField
                     fullWidth
                     id="standard-name"
                     label="first Name"
                     className="iron-form-input-wrap"
                     error={this.state.errors["fname"]}
                     ref="fname"
                     onChange={this.handleChange.bind(this, "fname")}
                     value={this.state.fields["fname"] ? this.state.fields["fname"] : ''}
                  />
                  <span className="error">{this.state.errors["fname"]}</span>
               </Grid>
               <Grid item xs={12} sm={6} md={6} lg={4}>
                  <TextField
                     fullWidth
                     id="standard-name"
                     label="last Name"
                     className="iron-form-input-wrap"
                     error={this.state.errors["lname"]}
                     ref="lname"
                     onChange={this.handleChange.bind(this, "lname")}
                     value={this.state.fields["lname"] ? this.state.fields["lname"] : ''}
                  />
                  <span className="error">{this.state.errors["lname"]}</span>
               </Grid>
               <Grid item xs={12} sm={6} md={6} lg={4}>
                  <TextField
                     fullWidth
                     id="standard-name"
                     label="Street Name"
                     className="iron-form-input-wrap"
                     error={this.state.errors["street"]}
                     ref="street"
                     onChange={this.handleChange.bind(this, "street")}
                     value={this.state.fields["street"] ? this.state.fields["street"] : ''}
                  />
                  <span className="error">{this.state.errors["street"]}</span>
               </Grid>
               <Grid item xs={12} sm={6} md={6} lg={6}>
                  <TextField
                     fullWidth
                     id="standard-name"
                     label="Apt Building Name"
                     className="iron-form-input-wrap"
                     error={this.state.errors["aptname"]}
                     ref="aptname"
                     onChange={this.handleChange.bind(this, "aptname")}
                     value={this.state.fields["aptname"] ? this.state.fields["aptname"] : ''}
                  />
                  <span className="error">{this.state.errors["aptname"]}</span>
               </Grid>
               <Grid item xs={12} sm={6} md={6} lg={6}>
                  <TextField
                     fullWidth
                     id="standard-name"
                     label="zip code"
                     className="iron-form-input-wrap"
                     error={this.state.errors["zipcode"]}
                     ref="zipcode"
                     onChange={this.handleChange.bind(this, "zipcode")}
                     value={this.state.fields["zipcode"] ? this.state.fields["zipcode"] : ''}
                  />
                  <span className="error">{this.state.errors["zipcode"]}</span>
               </Grid>

               <Grid item xs={12} sm={6} md={6} lg={6}>
                  <TextField
                     fullWidth
                     id="standard-name"
                     label="city and state"
                     className="iron-form-input-wrap"
                     error={this.state.errors["state"]}
                     ref="state"
                     onChange={this.handleChange.bind(this, "state")}
                     value={this.state.fields["state"] ? this.state.fields["state"] : ''}
                  />
                  <span className="error">{this.state.errors["state"]}</span>
               </Grid>
               <Grid item xs={12} sm={6} md={6} lg={6}>
                  <TextField
                     fullWidth
                     id="standard-name"
                     label="country"
                     className="iron-form-input-wrap"
                     error={this.state.errors["country"]}
                     ref="country"
                     onChange={this.handleChange.bind(this, "country")}
                     value={this.state.fields["country"] ? this.state.fields["country"] : ''}
                  />
                  <span className="error">{this.state.errors["country"]}</span>
               </Grid>
            </Grid>
            <h4 className="mb-0 mt-40">enter your contact information</h4>
            <Grid container spacing={32}>
               <Grid item xs={12} sm={6} md={6} lg={6}>
                  <TextField
                     fullWidth
                     id="standard-name"
                     label="mobile no"
                     className="iron-form-input-wrap"
                     error={this.state.errors["mobile"]}
                     ref="mobile"
                     onChange={this.handleChange.bind(this, "mobile")}
                     value={this.state.fields["mobile"] ? this.state.fields["mobile"] : ''}
                  />
                  <span className="error">{this.state.errors["mobile"]}</span>
               </Grid>
               <Grid item xs={12} sm={6} md={6} lg={6}>
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
               </Grid>
            </Grid>
            <Grid container spacing={0} className="mt-20">
               <Grid item xs={12} sm={6} md={6} lg={6}>
                  <h4 className="mb-5">Share with other?</h4>
                  <p className="mb-10">If you want to share order and shipping details with someone else then enter the email of that person. We will send order updates to this email also.</p>
                  <TextField
                     fullWidth
                     id="standard-email"
                     label="email"
                     className="iron-form-input-wrap"
                  />
                  <span className="error">{this.state.errors["refemail"]}</span>
               </Grid>
            </Grid>
            <Button className="button btn-active btn-lg mb-40 mt-15" type="submit">create order</Button>
         </form>
      )
   }
}
// map state to props
const mapStateToProps = ({ ecommerce }) => {
   const { cart, wishlist } = ecommerce;
   return { cart, wishlist };
}
export default connect(mapStateToProps,  {
   showAlert,
   finalPayment
})(AddressForm);