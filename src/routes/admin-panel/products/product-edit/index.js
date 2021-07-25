/**
 * post detail component
*/
/* eslint-disable */
import React, { Fragment } from 'react';
import { Grid, Button } from '@material-ui/core';
import Input from '@material-ui/core/Input';
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import ImageUploader from 'react-images-upload';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

//components
import SocialIcons from '../../../../components/widgets/SocialIcons';
import firebase from '../../../../firebase';
import {updateData} from '../../../../firebase/auth';
import ContentLoader from '../../../../components/global/loaders/ContentLoader';

class ProductEdit extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         pictures: [],
         age: 5,
         allProducts: [],
         productId: this.props.match.params.id,
         productType: this.props.match.params,
         currentDataItem: null,
         firstData:null
      };
   }

   componentDidMount() {
      this.getProducts();
   }

   //getproducts
   getProducts() {
      const allProductsRef = firebase.database().ref('goldnederland/products');
      allProductsRef.on('value', (snapshot) => {

         let allProducts = snapshot.val();
         let toppro=[];
         Object.keys(allProducts).map((key,index)=>{
            toppro=toppro.concat(allProducts[key])
         })
         
         this.getProductItem(toppro);
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

   onDrop(picture) {
      this.setState({
         pictures: this.state.pictures.concat(picture),
      });
   }

   handleChange = (event) => {
      this.setState({currentDataItem:{...this.state.currentDataItem,[event.target.name]: event.target.value}
         
      });
   };

   discard=()=>{
      this.setState({
         currentDataItem:this.state.firstData
      })
   }
   //Fonksiyona ekleyince firebaseler çakışıyor en son ekle
   changeData=()=>{
      updateData(this.state.currentDataItem,"products")
   }

   render() {
      const { currentDataItem } = this.state;
      return (
         <Fragment>
            {currentDataItem !== null ?
               <div className="iron-product-add-wrap iron-product-edit-wrap pt-50 px-sm-50 px-md-0">
                  <Grid container spacing={32} className="my-0">
                     <Grid item xs={12} sm={12} md={10} lg={9} className="py-0 mx-auto">
                        <Grid container spacing={32} className="my-0">
                           <Grid item xs={12} sm={12} md={6} lg={6} className="py-0 mb-md-0 mb-30">
                              <Grid container spacing={24} className="iron-product-gallery my-0">
                                 <Grid item xs={3} sm={2} md={2} lg={2} className="py-0">
                                    <div className="product-gallery-nav">
                                       {currentDataItem.image_gallery && currentDataItem.image_gallery.map((gallery, index) => {
                                          return (
                                             <div key={index} className="product-gallery-item">
                                                <div className="image-upload">
                                                   <a href="javascript:void(0)">
                                                      <img
                                                         src={gallery}
                                                         alt="product-item"
                                                         height="50"
                                                      />
                                                   </a>
                                                   
                                                </div>
                                             </div>
                                          )
                                       })}
                                    </div>
                                 </Grid>
                                 <Grid item xs={9} sm={10} md={10} lg={10} className="py-0">
                                    <div className="preview-full-image">
                                       <div className="iron-shadow product-gallery-item ">
                                          <div>
                                             <a href="javascript:void(0)">
                                                <img
                                                   src={currentDataItem.image}
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
                                 <Link to="/admin-panel/admin/products" className="text-14 d-inline-block font-medium py-10 mb-10">Back to products</Link>
                                 <form className="product-values">
                                    <div className="d-flex justify-content-start align-items-start mb-10">
                                       <i className="zmdi zmdi-edit mr-5 primary-color pt-10 text-h4 "></i>
                                       <Input
                                          defaultValue={currentDataItem.name}
                                          name="name"
                                          className="text-capitalize add-product-input text-h3"
                                          inputProps={{
                                             'aria-label': 'name',
                                          }}
                                          onChange={this.handleChange}
                                       />
                                    </div>
                                    <div className="d-flex justify-content-start align-items-start mb-10">
                                       <i className="zmdi zmdi-edit mr-5 primary-color pt-5 text-h5"></i>
                                       <Input
                                          defaultValue={`${currentDataItem.price}`}
                                          name="price"
                                          className="text-capitalize add-product-input text-h4 active-input"
                                          inputProps={{
                                             'aria-label': 'price',
                                          }}
                                          onChange={this.handleChange}
                                       />
                                    </div>
                                    <div className="mb-10">
                                       <h6 className="text-14 mb-0 edit-text">availability :</h6>
                                       <Input
                                          defaultValue={currentDataItem.availablity}
                                          name="availablity"
                                          className="text-capitalize add-product-input pl-30"
                                          inputProps={{
                                             'aria-label': 'Description',
                                          }}
                                          onChange={this.handleChange}
                                       />
                                    </div>
                                    <div className="mb-10">
                                       <h6 className="text-14 mb-0 edit-text">product code :</h6>
                                       <Input
                                          defaultValue={currentDataItem.productCode}
                                          name="product_code"
                                          className="text-capitalize add-product-input pl-30"
                                          inputProps={{
                                             'aria-label': 'Description',
                                          }}
                                          onChange={this.handleChange}
                                       />
                                    </div>
                                    <div className="mb-10">
                                       <h6 className="text-14 mb-0 edit-text">Description :</h6>
                                       <Input
                                          defaultValue={currentDataItem.summary}
                                          name="features"
                                          className="text-capitalize add-product-input pl-30"
                                          inputProps={{
                                             'aria-label': 'Description',
                                          }}
                                          onChange={this.handleChange}
                                       />
                                    </div>
                                    <div className="mb-10">
                                       <h6 className="text-14 mb-0 edit-text">Color Varients :</h6>
                                       <Input
                                          defaultValue={currentDataItem.color}
                                          name="color"
                                          className="text-capitalize add-product-input pl-30"
                                          inputProps={{
                                             'aria-label': 'Description',
                                          }}
                                          onChange={this.handleChange}
                                       />
                                    </div>
                                    
                                    
                                 </form>
                                 <div className="mb-sm-50 mb-20 detail-btns pl-25">
                                    <Button
                                       className="button btn-active btn-lg mr-15 mb-20 mb-sm-0"
                                       onClick={this.changeData}
                                    >
                                       save
                              </Button>
                                    <Button
                                       className="button btn-base btn-lg mb-20 mb-sm-0"
                                       onClick={this.discard}
                                    >
                                       discard
                              </Button>
                                 </div>
                                 <div className="d-flex justify-content-start align-items-center pl-25">
                                    <span className="d-inline-block mr-15 text-14">Share Now</span>
                                    <div className="detail-product-share">
                                       <SocialIcons></SocialIcons>
                                    </div>
                                 </div>
                              </div>
                           </Grid>
                        </Grid>
                     </Grid>
                  </Grid>
               </div >
               :
               <ContentLoader />
            }
         </Fragment>
      )
   }
}

export default ProductEdit;