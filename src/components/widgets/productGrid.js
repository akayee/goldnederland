/**
 * product slider component
 */
/* eslint-disable */
import React from 'react';
import { Button, Card, CardContent, CardMedia, IconButton } from '@material-ui/core';
import { Link } from 'react-router-dom';
import CurrencyIcon from '../global/currency/CurrencyIcon';

export default class ProductsGrid extends React.Component {

   render() {
      const { data, deleteProduct } = this.props;
      return (
         <div className="iron-product-item post-rounded">
            <Card>
               <div className="iron-overlay-wrap overflow-hidden d-flex justify-content-center align-items-center">
                  <Link to={`/admin-panel/admin/product-edit/${data.id}`} className='d-block'>
                     <CardMedia
                        component="img"
                        height="140"
                        component="img"
                        image={data.image}
                     />
                  </Link>
                  <div className="iron-overlay-content d-flex justify-content-end align-items-start">
                     <div className="iron-overlay-holder">
                        <Button onClick={deleteProduct}><i className="material-icons">delete</i></Button>
                     </div>
                  </div>
               </div>
               <CardContent className="iron-product-content p-20 border">
                  <h5 className="text-truncate mb-10" ><Link to="#" >{data.name}</Link></h5>
                  <div className="price-wrap">
                     <span> <CurrencyIcon /> {data.price}</span>
                  </div>
                  <div className="iron-btn-grp">
                     <Link to={`/admin-panel/admin/product-edit/${data.id}`}>
                        <IconButton className="btn-wrap">
                           <i className="material-icons">edit</i>
                        </IconButton>
                     </Link>
                  </div>
               </CardContent>
            </Card>
         </div>
      );
   }
}
