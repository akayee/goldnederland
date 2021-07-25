/**
 * Invoices List
 */
/* eslint-disable */
import React, { Component, Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';
import ReactTable from 'react-table';
import Button from '@material-ui/core/Button';

//firebase
import firebase from '../../firebase';

//component
import ContentLoader from '../../components/global/loaders/ContentLoader';
import Hit from '../../components/ecommerce/shop/hit';

export default class Shop extends Component {
   constructor(props) {
      super(props);
      this.confirmationDialog = React.createRef();
   }

   state = {
      name: '',
      allProducts: null,
      gridlayout: true,
      products: [],
      variations: {
         type: '',
         time_interval: '',
         quantity: ''
      },
   };

   componentDidMount() {
      this.getProducts();
   }
   //get products data
   getProducts() {
      const productsRef = firebase.database().ref('goldnederland/products');
      productsRef.on('value', (snapshot) => {
         let products = snapshot.val();
         let pro=[];
         Object.keys(products).map((key,index)=>{
            pro=pro.concat(products[key])
         })
         this.setState({
            products: pro
         });
      });
   }

   handleChange = name => event => {
      this.setState({ [name]: event.target.value });
   };

   // show list layout
   gridLayout = () => {
      this.setState({ gridlayout: true });
   };

   // show grid layout
   listLayout = () => {
      this.setState({ gridlayout: false });
   };

   //function for product variation
   changeProductVariation(type, e) {
      this.setState({
         variations: {
            ...this.state.variations,
            [type]: e.target.value
         }
      })
   }

   onDeleteProductItem(dataitem) {
      this.dataitem = dataitem;
      this.confirmationDialog.current.openDialog();
   }

   /**
    * function for delete cart product
    * @param {boolean} popupResponse 
    */
   deleteDataItem(popupResponse) {
      if (popupResponse) {
         let deleteItem = this.dataitem;
         let newData = this.state.products.filter((productsItem) => productsItem.objectID !== deleteItem.objectID)
         this.setState({
            products: newData
         })
      }
   }

   render() {
      const { products } = this.state;
      const columns = [
         {
            sortable: false,
            maxWidth: 100,
            Header: 'image',
            accessor: 'image',
            Cell: props =>
               <span className='avatar'>
                  <img src={props.value} alt="client-avatar" width="30" height="30" />
               </span>
         },
         {
            minWidth: 150,
            Header: 'name',
            accessor: 'name',
         },
         {
            Header: 'product code',
            accessor: 'product_code',
         },
         {
            Header: 'description',
            accessor: 'summary',
         },
         {
            Header: 'price',
            accessor: 'price',
         }
      ]
      return (
         <Fragment>
            {products !== null ?
               <div className="inner-container iron-Shop-page-wrap p-sm-20 p-25 mb-30">
                  <div className="iron-products-wrap product-list section-pad iron-shop-wrapper">
                     <div className="iron-shadow rounded p-sm-20 p-25 mb-30 bg-base">
                        <Grid container spacing={24} className="search-box-wrap my-0">
                           <Grid item sm={12} md={3} lg={3} className="py-0 d-flex justify-content-start align-items-center">
                              <h4 className="mb-lg-0 mb-5">Search</h4>
                           </Grid>
                           <Grid item sm={12} md={9} lg={9} className="py-0 d-sm-flex d-block">
                              <div className="search-box d-block d-sm-flex align-items-center">
                                 <TextField
                                    id="standard-name"
                                    label="Search Products"
                                    className="my-0 iron-form-input-wrap mr-5"
                                    fullWidth
                                    value={this.state.name}
                                    onChange={this.handleChange('name')}
                                 />
                                 <Button className="button btn-primary mx-sm-10 my-10 my-sm-0">search</Button>
                              </div>
                              
                           </Grid>
                        </Grid>
                     </div>
                     <div>
                        <div className="d-flex justify-content-between align-items-center my-15">
                           <h5 className="text-capitalize mb-0">
                              {this.state.gridlayout === true ?
                                 'product grid'
                                 :
                                 'product list'
                              }
                           </h5>
                           <div className="projects-icon">
                              <Button className={`btn-icon ${this.state.gridlayout === true ? 'active' : ''}`} onClick={() => this.gridLayout()}>
                                 <i className="material-icons">apps</i>
                              </Button>
                              <Button className={`btn-icon ${this.state.gridlayout === false ? 'active' : ''}`} onClick={() => this.listLayout()}>
                                 <i className="material-icons">list</i>
                              </Button>
                           </div>
                        </div>
                        <div className="mb-10">
                           <Grid container spacing={0}>
                              <Grid item xs={12} sm={12} md={6} lg={4}>
                                 <form className="product-values">
                                    
                                    <FormControl className="iron-select-width2">
                                       <InputLabel htmlFor="age-simple">Recent</InputLabel>
                                       <Select
                                          value={this.state.variations.time_interval}
                                          onChange={(e) => this.changeProductVariation('time_interval', e)}
                                          inputProps={{
                                             name: 'age',
                                             id: 'age-simple',
                                          }}
                                       >
                                          <MenuItem value={'this week'}>This week</MenuItem>
                                          <MenuItem value={'this month'}>This month</MenuItem>
                                          <MenuItem value={'past month'}>Past month</MenuItem>
                                          <MenuItem value={'this year'}>This year</MenuItem>
                                       </Select>
                                    </FormControl>
                                    <FormControl className="iron-select-width2">
                                       <InputLabel htmlFor="age-simple">No of items</InputLabel>
                                       <Select
                                          value={this.state.variations.quantity}
                                          onChange={(e) => this.changeProductVariation('quantity', e)}
                                          inputProps={{
                                             name: 'age',
                                             id: 'age-simple',
                                          }}
                                       >
                                          <MenuItem value={5}>5</MenuItem>
                                          <MenuItem value={10}>10</MenuItem>
                                          <MenuItem value={15}>15</MenuItem>
                                          <MenuItem value={20}>20</MenuItem>
                                       </Select>
                                    </FormControl>
                                 </form>
                              </Grid>
                           </Grid>
                        </div>
                        <div>
                           {this.state.gridlayout === true ?
                              <Fragment>
                                 <div className="product-grid-wrap">
                                    <Grid container spacing={32}>
                                       {products.map((dataitem, index) => {
                                          return (
                                             <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
                                                <Hit hit={dataitem} />
                                             </Grid>
                                          )
                                       })}
                                    </Grid>
                                 </div >
                              </Fragment>
                              :
                              <Fragment>
                                 <div className="product-list-wrap iron-shadow p-20 bg-base rounded" >
                                    <ReactTable
                                       data={products}
                                       columns={columns}
                                       defaultPageSize={10}
                                    />
                                 </div >
                              </Fragment>
                           }
                        </div>
                     </div>
                  </div>
               </div>
               :
               <ContentLoader />
            }
         </Fragment>
      );
   }
}