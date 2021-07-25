/**
 * product add page
*/
/* eslint-disable */
import React from 'react';
import { Grid, Button, Checkbox } from '@material-ui/core';
import {Input,Select,MenuItem} from '@material-ui/core';
import { Link } from 'react-router-dom';
import {addData} from '../../../../firebase/auth';
import firebase from "../../../../firebase/index"
import "firebase/storage"
import "firebase/auth"
import "firebase/database"
import FileUploader from "react-firebase-file-uploader";

//components
import SocialIcons from '../../../../components/widgets/SocialIcons';

const data = {
   Preview_Image: "https://via.placeholder.com/625x800",
   image_gallery: [
      "https://via.placeholder.com/625x800",
      "https://via.placeholder.com/625x800",
      "https://via.placeholder.com/625x800",
      "https://via.placeholder.com/625x800",
      "https://via.placeholder.com/625x800"
   ]
}
class ProductAdd extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         pictures: [],
         age: '',
         user:[],
         data:{},
         filenames: [],
         downloadURLs: [],
         isUploading: false,
         uploadProgress: 0
      };
      this.onDrop = this.onDrop.bind(this);
   }
   handleUploadStart = () =>
   this.setState({
     isUploading: true,
     uploadProgress: 0
   });


 handleUploadSuccess = async filename => {
   const downloadURL = await firebase
     .storage()
     .ref("products")
     .child(filename)
     .getDownloadURL();
   data.Preview_Image={downloadURL};
   this.setState(oldState => ({
     filenames: [...oldState.filenames, filename],
     downloadURLs: [...oldState.downloadURLs, downloadURL],
     uploadProgress: 100,
     isUploading: false
   }));
 };
   //function for upload image
   onDrop(picture,file) {
      this.setState({
         pictures: this.state.pictures.concat(picture)
      });

   }
  

   //function for change variation type
   handleChange =(event) => {
      this.setState({data:{...this.state.data,[event.target.name]: event.target.value}});
   };

   submitData=()=>{
      let data=this.state.data;
      data.image=this.state.downloadURLs[0];
      data.image_gallery=this.state.downloadURLs;
      this.setState({data:{},downloadURLs:[]})
      addData(data,"products").then(alert("Product added"))
      
   }
   render() {
      return (
         <div className="iron-product-add-wrap pt-50 px-sm-50 px-md-0">
            <Grid container spacing={32} className="my-0">
               <Grid item xs={12} sm={12} md={10} lg={9} className="py-0 mx-auto">
                  <Grid container spacing={32} className="my-0">
                     <Grid item xs={12} sm={12} md={6} lg={6} className="py-0 mb-md-0 mb-30">
                        <Grid container spacing={24} className="iron-product-gallery my-0">
                           <Grid item xs={3} sm={2} md={2} lg={2} className="py-0">
                              <div className="product-gallery-nav">
                                 {data.image_gallery && data.image_gallery.map((gallery, index) => {
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
                                             
                                             <div className="image-content d-flex justify-content-center align-items-center">
                                             <FileUploader
                                                withPreview
                                                accept="image/*"                                                
                                                name="image-uploader-multiple"
                                                randomizeFilename
                                                storageRef={firebase.storage().ref("products")}
                                                onUploadStart={this.handleUploadStart}
                                                onUploadError={this.handleUploadError}
                                                onUploadSuccess={this.handleUploadSuccess}
                                                onProgress={this.handleProgress}
                                             />
                                             
                                               
                                             </div>
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
                                      
                                          <img
                                             src={data.Preview_Image.downloadURL}
                                          />
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
                                 <i className="zmdi zmdi-plus mr-10 primary-color pt-10 text-h4 "></i>
                                 <Input
                                    defaultValue="Add Product Name"
                                    name="name"
                                    value={this.state.data.name}
                                    className="text-capitalize add-product-input text-h3"
                                    inputProps={{
                                       'aria-label': 'Name',
                                    }}
                                    onChange={this.handleChange}
                                 />
                              </div>
                              <div className="d-flex justify-content-start align-items-start mb-10">
                                 <i className="zmdi zmdi-plus mr-10 primary-color pt-5 text-h5"></i>
                                 <Input
                                    defaultValue="Price"
                                    value={this.state.data.description}
                                    name="description"
                                    className="text-capitalize add-product-input text-h4 active-input"
                                    inputProps={{
                                       'aria-label': 'price',
                                    }}
                                    onChange={this.handleChange}
                                 />
                              </div>
                              <div className="mb-10">
                                 <h6 className="text-14 mb-0 add-text">availability :</h6>
                                 <Checkbox
                                 checked={true}
                                 value={this.state.data.availability}
                                 name={"availability"}
                                 onChange={this.handleChange}
                                 />
                              </div>
                              <div className="mb-10">
                                 <h6 className="text-14 mb-0 add-text">category :</h6>
                                 <Select
                                    labelId="demo-simple-select-label"
                                    name="category"
                                    id="demo-simple-select"
                                    value={this.state.data.category}
                                    onChange={this.handleChange}
                                 >
                                    <MenuItem value={"Gia Bathroom Furniture"}>Gia Bathroom Furniture</MenuItem>
                                    <MenuItem value={"Gold Bathroom Furniture"}>Gold Bathroom Furniture</MenuItem>
                                    <MenuItem value={"Gia Mobili Da Bango"}>Gia Mobili Da Bango</MenuItem>
                                    <MenuItem value={"Viole For Gold"}>Viole For Gold</MenuItem>
                                 </Select>
                              </div>
                              <div className="mb-10">
                                 <h6 className="text-14 mb-0 add-text">product code :</h6>
                                 <Input
                                    defaultValue=""
                                    value={this.state.data.productCode}
                                    name="productCode"
                                    className="text-capitalize add-product-input pl-30"
                                    inputProps={{
                                       'aria-label': 'Description',
                                    }}
                                    onChange={this.handleChange}
                                 />
                              </div><div className="mb-10">
                                 <h6 className="text-14 mb-0 add-text">Description :</h6>
                                 <Input
                                    defaultValue=""
                                    value={this.state.data.summary}
                                    name="summary"
                                    className="text-capitalize add-product-input pl-30"
                                    inputProps={{
                                       'aria-label': 'Description',
                                    }}
                                    onChange={this.handleChange}
                                 />
                              </div>
                              <div className="mb-10">
                                 <h6 className="text-14 mb-0 add-text">color :</h6>
                                 <Input
                                    defaultValue=""
                                    value={this.state.data.color}
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
                                 onClick={e=>(this.submitData())}
                              >
                                 create
                              </Button>
                              <Button
                                 to={"/product-add"}
                                 component={Link}
                                 className="button btn-base btn-lg mb-20 mb-sm-0"
                                 onClick={()=>{this.setState({data:{}})}}
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
      )
   }
}

export default ProductAdd;