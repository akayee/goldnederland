/**
 * user address component
 */
import React from 'react';
import Button from "@material-ui/core/Button";
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';


export default function UserAddress() {

   return (
      <div className="profile-wrapper">
         <h4>Address Infomation</h4>
         <Grid container spacing={32} className="my-0">
            <Grid item xs={12} sm={6} md={6} lg={5} xl={4}>
               <h5 className="mb-25">Billing Address</h5>
               <div>
                  <address className="mb-25">
                     {' 2735 Sherman Street'}
                     <br />
                     {'Hodour Sheridan Plaza'}
                     <br />
                     {'New Jersey'}
                     <br />
                     {'Zip - 6739HG1'}
                     <br />
                     {'USA'}
                  </address >
                  <Button component={Link} to={{ pathname: "edit", search: "?type=address" }} className="button btn-active">edit</Button>
               </div >
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={5} xl={4}>
               <h5 className="mb-25">Shipping Address</h5>
               <div>
                  <address className="mb-25">
                     {' 2735 Sherman Street'}
                     <br />
                     {'Hodour Sheridan Plaza'}
                     <br />
                     {'New Jersey'}
                     <br />
                     {'Zip - 6739HG1'}
                     <br />
                     {'USA'}
                  </address >
                  <Button component={Link} to={{ pathname: "edit", search: "?type=ship-address" }} className="button btn-active">edit</Button>
               </div >
            </Grid >
         </Grid >
      </div >
   )
}