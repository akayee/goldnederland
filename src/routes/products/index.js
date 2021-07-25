/**
 * product detail page
 */
/* eslint-disable */
import React, { Fragment } from 'react';
import { Grid, Button } from '@material-ui/core';
import IconButton from "@material-ui/core/IconButton";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { Link } from 'react-router-dom';

//connect to store
import { connect } from 'react-redux';

//firebase
import firebase from '../../firebase';
import 'firebase/database';

//component
import RatingStar from '../../components/widgets/RatingStar';
import CurrencyIcon from '../../components/global/currency/CurrencyIcon';
import PostDetail from '../../components/templates/post-detail';

//page title
import PageTitle from '../../components/widgets/PageTitle';

// actions
import { addProductItem, showAlert, addToWishlist } from "../../actions/action";

// helpers
import { isProductExist, productExitsInWishlist } from "../../helpers";
import ContentLoader from '../../components/global/loaders/ContentLoader';


function ProductList(props) {

   const { data, onProductAddToCart, onProductAddToWhislist } = props;

   return (
      <Grid item xs={12} sm={6} md={6} lg={3} className="mb-30 py-0">
         <Card className="iron-product-item">
            <div className="iron-overlay-wrap overflow-hidden d-flex justify-content-center align-items-center">
               <Link to={`/products/${data.id}`} className='d-block'>
                  <CardMedia
                     component="img"
                     height="140"
                     component="img"
                     image={data.image}
                  />
               </Link>
               <div className="iron-overlay-content d-flex justify-content-end align-items-start">
                  <div className="iron-overlay-holder">
                     {!productExitsInWishlist(data.id) ?
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
               <h5 className="text-truncate"><Link to={`/products/${data.id}`}>{data.name}</Link></h5>
               <div className="d-flex justify-content-between align-items-center">
                  <div className="price-wrap">
                     <span><CurrencyIcon /> {data.price}</span>
                  </div>
                  <RatingStar></RatingStar>
               </div>
               <div className="iron-btn-grp">
                  {!isProductExist(data.id) ?
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
      </Grid>
   );
}

class ProductDetail extends React.Component {

   constructor(props) {
      super(props);
      this.state = {
         allProducts: [],
         productId: this.props.match.params.id,
         currentDataItem: null,
         relatedproduct: []
      }
   }

   componentDidMount() {
      this.getProducts();
   }

   //getproducts
   getProducts() {
      const allProductsRef = firebase.database().ref('goldnederland/products');
      allProductsRef.on('value', (snapshot) => {
         let allProducts = snapshot.val();
         let arr=[];
         Object.keys(allProducts).map((key,index)=>(
            arr=arr.concat(allProducts[key])
         ));
         this.setState({
            relatedproduct: arr
         })
         let newState = arr
         this.setState({
            allProducts: newState
         });
         this.getProductItem(newState);
      });
   }

   getProductItem(allProducts) {
      var that=this;
      let { productId } = this.state;
      if (allProducts) {
         Object.keys(allProducts).map((key,index)=>{
            if(allProducts[key].id===productId){
               that.setState({
                  currentDataItem:allProducts[key]
               })
            }
         })
      }
   }

   componentDidUpdate(prevProps) {
      let newId = this.props.match.params.id;
      if (prevProps.match.params.id !== this.props.match.params.id) {
         this.updateProductData(newId);
      }
   }

   updateProductData(newId) {
      let Id = newId
      let { allProducts } = this.state; 
      var that=this;
      if (allProducts) {
         Object.keys(allProducts).map((key,index)=>{
            if(allProducts[key].id===newId){
               that.setState({
                  currentDataItem:allProducts[key]
               })
            }
         })
      }
   }

   //add product to cart
   onAddToCart(dataItem) {
      this.props.addProductItem(dataItem);
      setTimeout(() => {
         this.props.showAlert('Your product Is Successfully added!', 'success')
      }, 500)
   }

   //add product to wishlist
   addProductToWishList(dataItem) {
      this.props.addToWishlist(dataItem);
      setTimeout(() => {
         this.props.showAlert('Your product Is Successfully added in whislist', 'success')
      }, 500)
   }

   render() {

      const { currentDataItem, relatedproduct } = this.state;
      return (
         <Fragment>
            {currentDataItem !== null ?
               <div className="product-detail-page" >
                  <PageTitle
                     title="product details"
                  />
                  <div className="inner-container">
                     <div className="bg-base section-pad">
                        <div className="container">
                           <Grid container spacing={0}>
                              <Grid item lg={12} className="mx-auto">
                                 {currentDataItem !== null &&
                                    <PostDetail
                                       data={currentDataItem}
                                    />
                                 }
                              </Grid>
                           </Grid>
                        </div>
                     </div>
                     <div className="bg-secondary section-gap">
                        <div className="container">
                           <div className="block-title text-center mb-50">
                              <h2>You Might Also Like</h2>
                           </div>
                           <Grid container spacing={32} className="iron-product-wrap my-0">
                              {
                                 relatedproduct.slice(0, 4).map((dataItem, index) => {
                                    return (
                                       <ProductList
                                          key={index}
                                          data={dataItem}
                                          onProductAddToCart={() => this.onAddToCart(dataItem)}
                                          onProductAddToWhislist={() => this.addProductToWishList(dataItem)}
                                       />
                                    )
                                 })
                              }
                           </Grid>
                           <div className="text-center mt-30">
                              <Link to="/shop">
                                 <Button className="button btn-base">show all</Button>
                              </Link>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               :
               <ContentLoader />
            }
         </Fragment>
      )
   }
}

const mapStateToProps = ({ ecommerce }) => {
   const { cart } = ecommerce;
   return { cart };
}

export default connect(mapStateToProps, {
   addToWishlist,
   addProductItem,
   showAlert
})(ProductDetail);