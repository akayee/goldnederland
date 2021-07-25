/**
 * Checkout Page
 */
/* eslint-disable */
import React, { Fragment } from 'react';
import { Button, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';

//Page Title
import PageTitle from '../../components/widgets/PageTitle';

//component
import RctCard from '../../components/global/rct-card';
import SignIn from '../../components/global/forms/SignIn';
import ViewCartSlide from '../../components/widgets/ViewCartSlide';
//firebase
import firebase from '../../firebase/index';

//connect to store
import { connect } from 'react-redux';

class CheckOut extends React.Component {

   render() {
      const { cart } = this.props;
      return (
         <div className="checkout-wrapper bg-base">
            <PageTitle
               title="checkout"
            />
            {(cart && cart.length > 0) ?
               (
                  <Fragment>
                     <div className="inner-container section-pad">
                        <div className="container">
                           <div className="view-cart text-right mb-60">
                              <ViewCartSlide />
                           </div>
                           <Grid container spacing={32}>
                              <Grid item xs={12} sm={12} md={6} lg={6}>
                                 <RctCard>
                                    { firebase.auth().onAuthStateChanged(function (user) {
                                       if(user)
                                       {
                                          return(null)
                                       }else{
                                          return(<SignIn ></SignIn>)
                                       }
                                       
                                    })}
                                    
                                 </RctCard>
                              </Grid>
                              <Grid item xs={12} sm={12} md={6} lg={6}>
                                 <RctCard>
                                    <h4>Guest Checkout/ Go Order</h4>
                                    <p>Proceed to checkout and create an account later.</p>
                                    <Button component={Link} to="/payment" className="button btn-active btn-lg">continue as guest / go order</Button>
                                 </RctCard>
                              </Grid>
                           </Grid>
                        </div>
                     </div>
                  </Fragment>
               )
               :
               (
                  <div className="section-pad text-center">
                     <div className="mb-30">
                        <img src={require("../../assets/images/empty-cart.png")} alt="shop-cart" />
                     </div>
                     <h4>Your Shopping Bag is empty.</h4>
                     <Link to='/shop' className="text-capitalize">go for shopping</Link>
                  </div>
               )

            }

         </div>
      )
   }
}

const mapStateToProps = ({ ecommerce }) => {
   const { cart } = ecommerce;
   return { cart };
}

export default connect(mapStateToProps)(CheckOut);
