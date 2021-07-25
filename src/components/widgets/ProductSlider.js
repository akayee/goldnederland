/**
 * product slider component
 */
/* eslint-disable */
import React from 'react';
import Slider from "react-slick";
import { Button } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from "@material-ui/core/IconButton";
import RatingStar from './RatingStar';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

// actions
import { addProductItem, showAlert, addToWishlist } from "../../actions/action";
import CurrencyIcon from '../global/currency/CurrencyIcon';

// helpers
import { isProductExist, productExitsInWishlist } from "../../helpers";

function ProductItem(props) {

   const { data, onProductAddToCart, onProductAddToWhislist, onPostDetail } = props;

   return (
      <Card>
         <div className="iron-overlay-wrap overflow-hidden d-flex justify-content-center align-items-center">
            <Link to={`/products/${data.type}/${data.objectID}`} className='d-block'>
               <CardMedia
                  height="140"
                  component="img"
                  image={require(`../../assets/images/${data.image}`)}
                  onClick={onPostDetail}
               />
            </Link>
            <div className="iron-overlay-content d-flex justify-content-end align-items-start">
               <div className="iron-overlay-holder">
                  {!productExitsInWishlist(data.objectID) ?
                     <Button
                        onClick={onProductAddToWhislist}
                     >
                        <i className="material-icons">favorite</i>
                     </Button>
                     :
                     <Button
                        className="active"
                     >
                        <i className="material-icons">favorite</i>
                     </Button>
                  }
               </div>
            </div>
         </div>
         <CardContent className="iron-product-content p-20 border">
            <h5 className="text-truncate" ><Link to={`/products/${data.type}/${data.objectID}`} >{data.name}</Link></h5>
            <div className="d-flex justify-content-between align-items-center">
               <div className="price-wrap">
                  <span> <CurrencyIcon /> {data.price}</span>
               </div>
               <RatingStar />
            </div>
            <div className="iron-btn-grp">
               {!isProductExist(data.objectID) ?
                  (
                     <IconButton className="btn-wrap" onClick={onProductAddToCart}>
                        <i className="material-icons">shopping_cart</i>
                     </IconButton>
                  )
                  :
                  (
                     <Link to='/cart'>
                        <IconButton className="btn-wrap">
                           <i className="material-icons">visibility</i>
                        </IconButton>
                     </Link>
                  )
               }
            </div>
         </CardContent>
      </Card>
   );
}

class ProductSlider extends React.Component {

   state = {
      selectedTab: 0,
      rtl: true
   }

   //define function for select tab
   onTabClick(index) {
      this.setState({ selectedTab: index })
   }

   // define function for add product in cart
   onAddToCart(product) {
      this.props.addProductItem(product);

      setTimeout(() => {
         this.props.showAlert('Your product Is Successfully added in cart', 'success')
      }, 500)
   }

   //add product to wishlist
   addProductToWishList(productdata) {
      this.props.addToWishlist(productdata);
      setTimeout(() => {
         this.props.showAlert('Your product Is Successfully added in whislist', 'success')
      }, 500)
   }

   render() {
      const { rtl } = this.state;
      const settings = {
         dots: true,
         infinite: true,
         arrows: false,
         speed: 500,
         autoplay: true,
         slidesToShow: 4,
         slidesToScroll: 1,
         rtl: rtl,
         responsive: [
            {
               breakpoint: 1200,
               settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
               }
            },
            {
               breakpoint: 961,
               settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
               }
            },
            {
               breakpoint: 500,
               settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
               }
            }
         ]
      };

      const { selectedTab } = this.state;
      const { productdata } = this.props;

      return (
         <div className="product-categories-slider">
            <div className="iron-custom-tab-container">
               <div className="iron-tab-bar mb-30 mb-sm-60 text-center">
                  {productdata && Object.keys(productdata).map((tab, index) => {
                     return (
                        <Button
                           variant={selectedTab === index ? "contained" : "text"}
                           key={index}
                           onClick={() => this.onTabClick(index)}
                           className={`mr-10 iron-tab-btn ${selectedTab === index ? "active" : ""}`}
                        >
                           {tab}
                        </Button>
                     )
                  })}
               </div>
               <div className="iron-tab-content">
                  <div className="iron-product-slider iron-product-wrap slider-style">
                     {productdata && Object.keys(productdata).map((tab, index) => {
                        if (index === selectedTab) {
                           return (
                              <div className="iron-tab-content" key={index}>
                                 <Slider {...settings}>
                                    {productdata && productdata[tab].map((productdata, objectID) => (
                                       <div key={objectID} className="iron-product-item post-rounded">
                                          <ProductItem
                                             data={productdata}
                                             onProductAddToCart={() => this.onAddToCart(productdata)}
                                             onProductAddToWhislist={() => this.addProductToWishList(productdata)}
                                          />
                                       </div>
                                    ))}
                                 </Slider>
                              </div>
                           )
                        }
                        return null;
                     })}
                  </div>
               </div>
            </div>
         </div>
      );
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
})(ProductSlider);