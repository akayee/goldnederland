/**
 * hit component
*/
/* eslint-disable */
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Divider, Card, CardContent, IconButton, CardMedia } from '@material-ui/core';
import { Link } from 'react-router-dom';

// actions
import { addProductItem, showAlert, addToWishlist } from "../../../../actions/action";

// helpers
import { isProductExist, productExitsInWishlist } from "../../../../helpers";

// components
import CurrencyIcon from '../../../global/currency/CurrencyIcon';
import RatingStar from '../../../widgets/RatingStar';

class Hit extends Component {

   //Function to add product in cart
   onAddToCart(hit) {
      this.props.addProductItem(hit);
      setTimeout(() => {
         this.props.showAlert('Your product Is Successfully added in cart', 'success')
      }, 500)
   }

   //Add product to wishlist
   addProductToWishList(product) {
      this.props.addToWishlist(product);
      setTimeout(() => {
         this.props.showAlert('Your product Is Successfully added in wishlist!', 'success')
      }, 500)
   }

   render() {
      const { hit } = this.props;
      return (
         <Card className="iron-product-item post-rounded iron-shadow">
            <div className="iron-overlay-wrap overflow-hidden d-flex justify-content-center align-items-center">
               <Link to={`/products/${hit.id}`} className='d-block'>
                  <CardMedia
                     component="img"
                     height="140"
                     component="img"
                     image={hit.image}
                  />
               </Link>
               <div className="iron-overlay-content d-flex justify-content-end align-items-start">
                  <div className="iron-overlay-holder">
                     {!productExitsInWishlist(hit.id) ?
                        (
                           <IconButton onClick={() => this.addProductToWishList(hit)}>
                              <i className="material-icons">favorite</i>
                           </IconButton>
                        )
                        :
                        (
                           <IconButton className="active">
                              <i className="material-icons">favorite</i>
                           </IconButton>
                        )
                     }
                  </div>
               </div>
            </div>
            <Divider />
            <CardContent className="iron-product-content p-20 pt-30 border">
               <h5 className="text-truncate"><Link to={`/products/${hit.id}`}>{hit.name}</Link></h5>
               <div className="d-flex justify-content-between align-items-center">
                  <div className="price-wrap">
                     <span><CurrencyIcon /> {hit.price}</span>
                  </div>
                  <RatingStar></RatingStar>
               </div>
               <div className="iron-btn-grp">
                  {!isProductExist(hit.id) ?
                     (
                        <Fragment>
                           <IconButton className="btn-wrap" onClick={() => this.onAddToCart(hit)}>
                              <i className="material-icons">shopping_cart</i>
                           </IconButton>
                        </Fragment>
                     )
                     :
                     (
                        <IconButton component={Link} to='/cart' className="btn-wrap">
                           <i className="material-icons">visibility</i>
                        </IconButton>
                     )
                  }
               </div>
            </CardContent>
         </Card>
      )
   }
}
// map state to props
const mapStateToProps = ({ ecommerce }) => {
   const { cart, wishlist } = ecommerce;
   return { cart, wishlist };
}
export default connect(mapStateToProps, { addProductItem, addToWishlist, showAlert })(Hit);