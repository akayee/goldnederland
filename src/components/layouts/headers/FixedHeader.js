/**
 * Fixed header component
 */
/* eslint-disable */
import React from 'react';
import Grid from "@material-ui/core/Grid";

// components
import HeaderMenu from "./HeaderMenu";
import SidebarMenu from '../sidebar';
import AppConfig from '../../../constants/AppConfig';

function FixedHeader() {

   return (
      <div className="iron-fixed-header bg-primary">
         <div className="container">
            <Grid container spacing={0} >
               <Grid item xs={6} sm={6} md={3} lg={3} xl={4} className="d-flex justify-content-start align-items-center" >
                  <div className="iron-app-logo py-sm-10 py-20">
                     <img src={AppConfig.AppLogo} alt="header-logo" />
                  </div>
               </Grid>
               <Grid item xs={6} sm={6} md={9} lg={9} xl={8} >
                  <div className="text-right">
                     <HeaderMenu />
                     <SidebarMenu />
                  </div>
               </Grid>
            </Grid>
         </div>
      </div>
   );
}

export default FixedHeader;