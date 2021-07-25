/**
 * Invoices List
 */
/* eslint-disable */
import React, { Component, Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import ReactTable from 'react-table';
//firebase
import firebase from '../../../firebase';
import {deleteData} from '../../../firebase/auth';
//component
import ContentLoader from '../../../components/global/loaders/ContentLoader';
import ConfirmationBox from './components/ConfirmationBox';
import InvoicePopup from './components/InvoicePopup';

export default class InvoiceList extends Component {
   constructor(props) {
      super(props);
      this.confirmationDialog = React.createRef();
   }

   state = {
      name: '',
      invoiceList: null,
      searchClientText: '',
   };

   allUserInvoice = [];     //all clients data

   handleChange = name => event => {
      this.setState({ [name]: event.target.value });
   };
   componentDidMount() {
      this.getInvoiceData();
   }

   //get invoice list
   getInvoiceData() {
      const invoiceListRef = firebase.database().ref('goldnederland/orders');
      invoiceListRef.on('value', (snapshot) => {
         let invoiceList = snapshot.val();
         let arr=[];
         Object.keys(invoiceList).map((key,index)=>{
            arr=arr.concat(invoiceList[key]);
         })
         this.setState({
            invoiceList: arr
         });
         this.allUserInvoice = invoiceList;
      });
   }
   onSearchClient(searchText) {
      if (searchText === '') {
         this.setState({
            ...this.state,
            invoiceList: this.allUserInvoice,
            searchClientText: searchText,
         });
      } else {
         let searchClients = this.allUserInvoice.filter((invoice) => {
            if (searchText === searchText.toLowerCase()) {
               let buyer = invoice.buyer.toLowerCase().indexOf(searchText.toLowerCase()) > -1
               return (
                  buyer
               )
            }
            else {
               let buyer = invoice.buyer.toUpperCase().indexOf(searchText.toUpperCase()) > -1
               return (
                  buyer
               )
            }
         });
         this.setState({
            ...this.state,
            searchClientText: searchText,
            invoiceList: searchClients
         })
      }
   }

   onDeleteCartItem(data) {
      this.data = data;
      this.confirmationDialog.current.openDialog();
   }

   deleteCartItem(popupResponse) {
      if (popupResponse) {
         let deleteItem = this.data;
         let newData = this.state.invoiceList.filter((invoiceListItem) => invoiceListItem.id !== deleteItem.id)
         this.setState({
            invoiceList: newData
         });
         deleteData(deleteItem,"orders");

      }
   }

   render() {

      const { invoiceList } = this.state;
      const columns = [
         {
            maxWidth: 75,
            Header: 'No.',
            accessor: 'count'
         },
         {
            sortable: false,
            Header: 'Invoice Id',
            accessor: 'id',

         },
         {
            minWidth: 160,
            Header: 'Buyer',
            accessor: 'email',
         },
         {
            Header: 'Date',
            accessor: 'date',
         },
         {
            Header: 'Price',
            accessor: 'price',
         },
         {
            Header: 'Status',
            accessor: 'status',
         },
         {
            Header: 'action',
            accessor: 'action',
            Cell: props => {
               return (
                  <div>
                     <InvoicePopup data={props.original} />
                     <Button
                        className="action-btn"
                        onClick={() => this.onDeleteCartItem(props.original)}
                     >
                        <i className="material-icons active-color">delete</i>
                     </Button>
                  </div>
               )
            },
         }
      ]
      return (
         <Fragment>
            {invoiceList !== null ?
               <div className="inner-container">
                  <div className="iron-invoice-list-wrap">
                     <div className="page-title mb-20">
                        <h4 className="mb-0">Invoice List</h4>
                     </div>
                     <div className="iron-shadow rounded p-sm-20 p-15 mb-30 bg-base">
                        <Grid container spacing={24} className="my-0">
                           <Grid item xs={12} sm={12} md={6} lg={5} className="py-0 d-sm-flex d-block">
                              <TextField
                                 id="standard-name"
                                 label="Search Products"
                                 className="my-0 iron-form-input-wrap mr-5"
                                 fullWidth
                                 value={this.state.searchClientText}
                                 onChange={(e) => this.onSearchClient(e.target.value)}
                              />
                           </Grid>
                        </Grid>
                     </div>
                     <div className="iron-shadow rounded p-20 bg-base">
                        <ReactTable
                           data={invoiceList}
                           columns={columns}
                           minRows={6}
                           defaultPageSize={10}
                        />
                     </div>
                  </div>
                  <ConfirmationBox
                     ref={this.confirmationDialog}
                     onConfirm={(res) => this.deleteCartItem(res)}
                  />
               </div>
               :
               <ContentLoader />
            }
         </Fragment>
      )
   }
}