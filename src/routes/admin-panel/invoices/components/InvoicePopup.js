//Invoice popup
/* eslint-disable */
import React, { Fragment } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import CurrencyIcon from '../../../../components/global/currency/CurrencyIcon';

// helpers
import {  getSubTotalPrice,getTotalPrice } from "../../../../helpers";

class InvoicePopup extends React.Component {
   state = {
      open: false,
      cart:this.props.cart
   };

   //Define function for open confirmation dialog box
   handleClickOpen = () => {
      this.setState({
         open: true,
      });
   };

   //Define function for close confirmation dialog box and callback for delete item 
   closeDialog() {
      this.setState({ open: false });
   };

   render() {
      const {data}=this.props;
      return (
         <Fragment>
            <Button
               className="action-btn"
               onClick={this.handleClickOpen}
            >
               <i className="material-icons primary-color">remove_red_eye</i>
            </Button>
            <Dialog
               className="admin-invoice-wrap"
               open={this.state.open}
               onClose={() => this.closeDialog()}
               aria-labelledby="responsive-dialog-title"
            >
               <DialogContent className="p-20 text-center">
                  <div className="iron-invoice-wrap bg-base">
                     <div id="payment-receipt">
                        <div className="text-center bg-secondary px-sm-50 px-15 py-sm-50 py-20">
                           <h4 className="mb-sm-20 mb-10">Payment Status</h4>
                           <h5 className="mb-sm-25 mb-10">Order is successfully processsed</h5>
                           <h6 className="mb-sm-25 mb-10">Transaction ID:{data.id}  </h6>
                           <img
                              src={require("../../../../assets/images/checked.png")} alt="success"
                           />
                        </div>
                        <div className="p-sm-30 p-15">
                           <div className="pt-sm-20 pb-sm-40 pb-15">
                              <Grid container spacing={0}>
                                 <Grid item xs={12} sm={6} md={6} lg={6} >
                                    <div className="mb-md-0 mb-20 text-left">
                                       <h6>Summary</h6>
                                       <p className="mb-5">Order ID: {data.id} </p>
                                       <p className="mb-5">Order Date: {data.date} </p>
                                       <p className="mb-5">Order Total: <CurrencyIcon /> {data.price} </p>
                                    </div>
                                 </Grid>
                                 <Grid item xs={12} sm={6} md={6} lg={6} >
                                    <div className="text-sm-right text-left">
                                       <h6>Ship To</h6>
                                       <p className="mb-5 text-capitalize">
                                          {data.fname,data.lname}
                                    </p>
                                       <p className="mb-5 text-capitalize">{data.state} </p>
                                       <p className="mb-5 text-capitalize">{data.country, data.zipcode} </p>
                                       <p className="mb-5 text-capitalize">Contact No. {data.mobile} </p>
                                    </div>
                                 </Grid>
                              </Grid>
                           </div>
                           <div className="py-25 px-15  text-center bg-secondary mb-sm-50 mb-30">
                              <h4 className="mb-sm-15 mb-0">Expected Date of Delivery</h4>
                              <h3 className="mb-sm-15 mb-0">{data.date} </h3>
                           </div>
                           <div>
                              <h4 className="pt-5">Your Ordered Details</h4>
                              <Grid container spacing={24} className="my-0">
                               
                                 {data.cart&& data.cart.map(item=>(
                                    <div>
                                    <Grid item xs={12} sm={12} md={3} lg={3} className="py-0  d-flex justify-content-center align-items-center mb-md-0 mb-20">
                                    <img
                                       src={item.image}
                                       alt='cart-item'
                                       width="100"
                                    />
                                 </Grid>
                                    <Grid item xs={6} sm={6} md={3} lg={3} className="py-0 d-flex justify-content-center align-items-center" >
                                    <div className="text-center">
                                       <h6 className="mb-5">  product  </h6>
                                       <p className="mb-0">{item.name}</p>
                                    </div>
                                    </Grid>
                                    <Grid item xs={6} sm={6} md={3} lg={3} className="py-0 d-flex justify-content-center align-items-center" >
                                       <div className="text-center">
                                          <h6 className="mb-5"> quantity </h6>
                                          <p className="mb-0">{item.quantity}</p>
                                       </div>
                                    </Grid>
                                    </div>
                                ))}
                                 
                                 <Grid item xs={12} sm={12} md={3} lg={3} className="py-0 d-flex justify-content-center align-items-center" >
                                    <div className="text-center">
                                       <h6 className="mb-5">price</h6>
                                       <p className="mb-0"><CurrencyIcon /> {data.price} </p>
                                    </div>
                                 </Grid>
                              </Grid>
                              <Divider className="my-20" />
                           </div>
                           <div>
                              <Grid container spacing={0}>
                                 <Grid item xs={12} sm={12} md={12} lg={12} className="pt-10" >
                                  
                                    <Divider className="my-sm-30 my-15"></Divider>
                                    <div className="d-flex justify-content-between align-items-center mb-sm-50 mb-0">
                                       <h4>Total</h4>
                                       <h4><CurrencyIcon /> {data.price} </h4>
                                    </div>
                                 </Grid>
                              </Grid>
                           </div>
                        </div>
                     </div>
                     <div className="p-sm-30 p-15 d-sm-flex justify-content-between align-items-center">
                        <Button className="button btn-active btn-lg mb-20 mr-20">download PDF</Button>
                        <Button className="button btn-active btn-lg  mb-20 ">go to home</Button>
                     </div>
                  </div>
               </DialogContent>
            </Dialog >
         </Fragment>
      );
   }
}

export default InvoicePopup;