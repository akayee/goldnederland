/**
 * post detail component
*/
/* eslint-disable */
import React, { Fragment } from 'react';
import { Grid, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

//connect to store
import { connect } from 'react-redux';

//components
import SocialIcons from '../../widgets/SocialIcons';
import CurrencyIcon from '../../global/currency/CurrencyIcon';
import ProductReview from '../../global/review-popup/ProductReview';

// actions
import { addProductItem, showAlert, addToWishlist } from "../../../actions/action";

// helpers
import { isProductExist, productExitsInWishlist } from "../../../helpers";

class PostDetail extends React.Component {

   constructor(props) {
      super(props);
      this.reviewDialog = React.createRef();
   }

   state = {
      newImage: this.props.data.image,
      variations: {
         color: '',
         size: '',
         quantity: ''
      },
      data: this.props.data
   }

   componentDidMount() {
      this.setState({
         newImage: this.props.data.image,
         data: this.props.data
      })
   }

   componentDidUpdate() {
      this.updateData();
   }

   //update state data
   updateData() {
      let { data } = this.state;
      let newData = this.props.data;
      if (data.objectID !== newData.objectID) {
         this.setState({
            newImage: newData.image,
            data: newData
         })
      }
   }

   //function for preview images
   changePreviewImage(image) {
      this.setState({
         newImage: image
      });
   }

   //function for product variation
   changeProductVariation(type, e) {
      this.setState({
         variations: {
            ...this.state.variations,
            [type]: e.target.value
         }
      })
   }

   //function for review popup ref.
   postReviewOpen() {
      this.reviewDialog.current.open();
   }

   //add product to wishlist
   addProductToWishList(productdata) {
      this.props.addToWishlist(productdata);
      setTimeout(() => {
         this.props.showAlert('Your product Is Successfully added in whislist', 'success')
      }, 500)
   }

   // define function for add product in cart
   onAddToCart(product) {
      this.props.addProductItem(product);
      setTimeout(() => {
         this.props.showAlert('Your product Is Successfully added in cart', 'success')
      }, 500)
   }

   render() {
      const { newImage } = this.state;
      const { name, productCode, availablity, price, tags, summary, features, image_gallery, type, id } = this.state.data;
      return (
         < div >
            <Grid container spacing={32} className="my-0">
               <Grid item xs={12} sm={12} md={6} lg={6} className="py-0 mb-md-0 mb-sm-30">
                  <Grid container spacing={24} className="iron-product-gallery">
                     <Grid item xs={3} sm={2} md={2} lg={2}>
                        <div className="product-gallery-nav">
                           {image_gallery && image_gallery.map((gallery, index) => {
                              return (
                                 <div key={index} className="product-gallery-item">
                                    <div>
                                       <a href="javascript:void(0)"
                                          onMouseOver={() => this.changePreviewImage(gallery)}
                                       >
                                          <img
                                             src={gallery}
                                             alt="product-item"
                                          />
                                       </a>
                                    </div>
                                 </div>
                              )
                           })}
                        </div>
                     </Grid>
                     <Grid item xs={9} sm={10} md={10} lg={10}>
                        <div className="preview-full-image">
                           <div className="iron-shadow product-gallery-item ">
                              <div>
                                 <a href="javascript:void(0)">
                                    <img
                                       src={newImage}
                                       alt="poster-image"
                                    />
                                 </a>
                              </div>
                           </div>
                        </div>
                     </Grid>
                  </Grid>
               </Grid>
               <Grid item xs={12} sm={12} md={6} lg={6} className="py-0">
                  <div className="detail-content">
                     <Link to="/shop" className="text-14 d-inline-block mb-10">Back to shop</Link>
                     <h3>{name}</h3>
                    {/*<div className="mb-15">
                        <a href="javascript:void(0)" className="text-underline text-uppercase text-14 d-inline-block dark-color" onClick={() => this.postReviewOpen()}>add a review</a>
                        </div>*/}
                     

                     <h4 className="active-color"><CurrencyIcon /> {price}</h4>
                     <ul className="no-style mb-20">
                        <li className="mb-10"><span className="font-medium text-14"> Availablity </span> :
                                 {availablity ?
                              <span className="text-14 ml-5">In Stocks</span>
                              :
                              null
                           }
                        </li>
                        <li className="mb-10"><span className="font-medium text-14"> Product Code  </span> : <span className="text-14">{productCode}</span></li>
                        
                     </ul>
                     <div className="short-desc">
                        <p>{summary}</p>
                     </div>
                     <div>
                        <ul className="bullets-list mb-0">
                           {features && features.map((feature, index) => {
                              return (
                                 <li key={index} className="mb-10">{feature}</li>
                              )
                           })}
                        </ul>
                     </div>
                     <div>
                        <form className="product-values">
                           {type === 'men' || type === 'women' ?
                              <Fragment>
                                 <FormControl className="iron-select-width2">
                                    <InputLabel htmlFor="age-simple">color</InputLabel>
                                    <Select
                                       value={this.state.variations.color}
                                       onChange={(e) => this.changeProductVariation('color', e)}
                                       inputProps={{
                                          name: 'age',
                                          id: 'age-simple',
                                       }}
                                    >
                                       <MenuItem value={'red'}>red</MenuItem>
                                       <MenuItem value={'green'}>green</MenuItem>
                                       <MenuItem value={'blue'}>blue</MenuItem>
                                       <MenuItem value={'yellow'}>yellow</MenuItem>
                                    </Select>
                                 </FormControl>
                                 <FormControl className="iron-select-width2">
                                    <InputLabel htmlFor="age-simple">size</InputLabel>
                                    <Select
                                       value={this.state.variations.size}
                                       onChange={(e) => this.changeProductVariation('size', e)}
                                       inputProps={{
                                          name: 'age',
                                          id: 'age-simple',
                                       }}
                                    >
                                       <MenuItem value={36}>36</MenuItem>
                                       <MenuItem value={38}>38</MenuItem>
                                       <MenuItem value={40}>40</MenuItem>
                                       <MenuItem value={42}>42</MenuItem>
                                       <MenuItem value={44}>44</MenuItem>
                                       <MenuItem value={46}>46</MenuItem>
                                       <MenuItem value={48}>48</MenuItem>
                                    </Select>
                                 </FormControl>
                                 <FormControl className="iron-select-width2">
                                    <InputLabel htmlFor="age-simple">quantity</InputLabel>
                                    <Select
                                       value={this.state.variations.quantity}
                                       onChange={(e) => this.changeProductVariation('quantity', e)}
                                       inputProps={{
                                          name: 'age',
                                          id: 'age-simple',
                                       }}
                                    >
                                       <MenuItem value={1}>1</MenuItem>
                                       <MenuItem value={2}>2</MenuItem>
                                       <MenuItem value={3}>3</MenuItem>
                                       <MenuItem value={4}>4</MenuItem>
                                       <MenuItem value={5}>5</MenuItem>
                                    </Select>
                                 </FormControl>
                              </Fragment>
                              :
                              <FormControl className="iron-select-width2">
                                 <InputLabel htmlFor="age-simple">quantity</InputLabel>
                                 <Select
                                    value={this.state.variations.quantity}
                                    onChange={(e) => this.changeProductVariation('quantity', e)}
                                    inputProps={{
                                       name: 'age',
                                       id: 'age-simple',
                                    }}
                                 >
                                    <MenuItem value={1}>1</MenuItem>
                                    <MenuItem value={2}>2</MenuItem>
                                    <MenuItem value={3}>3</MenuItem>
                                    <MenuItem value={4}>4</MenuItem>
                                    <MenuItem value={5}>5</MenuItem>
                                 </Select>
                              </FormControl>
                           }
                        </form>
                     </div>
                     <div className="mb-20">
                        {!productExitsInWishlist(id) ?
                           <Button
                              onClick={() => this.addProductToWishList(this.state.data)}
                              className="wishlist-btn text-14 d-inline-block dark-color"
                           >
                              Add To Wishlist
                                    </Button>
                           :
                           <Button
                              className="wishlist-btn text-14 d-inline-block dark-color"
                           >
                              Add To Wishlist
                                    </Button>
                        }

                     </div>
                     <div className="mb-sm-50 mb-20 detail-btns">
                        {!isProductExist(id) ?
                           (
                              <Button
                                 className="button btn-active btn-lg mr-15 mb-20 mb-sm-0"
                                 onClick={() => this.onAddToCart(this.state.data)}
                              >
                                 add to cart
                                        </Button>
                           )
                           :
                           (
                              <Link to='/cart'>
                                 <Button
                                    className="button btn-active btn-lg mr-15 mb-20 mb-sm-0"
                                 >
                                    view cart
                                            </Button>
                              </Link>
                           )
                        }

                     </div>
                     <div className="d-flex justify-content-start align-items-center">
                        <span className="d-inline-block mr-15 text-14">Share Now</span>
                        <div className="detail-product-share">
                           <SocialIcons></SocialIcons>
                        </div>
                     </div>
                  </div>
               </Grid>
            </Grid>
            <ProductReview ref={this.reviewDialog} />
         </div >
      )
   }
}
const mapStateToProps = ({ ecommerce }) => {
   const { cart, wishlist } = ecommerce;
   return { cart, wishlist };
}

export default connect(mapStateToProps, {
   addProductItem,
   addToWishlist,
   showAlert
})(PostDetail);