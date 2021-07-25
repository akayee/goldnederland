/**
 * site header one component
 */
/* eslint-disable */
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Grid from "@material-ui/core/Grid";

// components
import LanguageProvider from "./LanguageProvider";
import HeaderMenu from "./HeaderMenu";
import CurrencyProvider from "./CurrencyProvider";
import Cart from "./Cart";
import Wishlist from "./Wishlist";
import Logout from "./Logout";
import SearchBox from "./SearchBox";
import SidebarMenu from '../sidebar';
import FixedHeader from '../headers/FixedHeader';
import AppConfig from '../../../constants/AppConfig';

class HeaderOne extends React.Component {

   state = {
      fixedHeader: false
   }

   componentWillMount() {
      window.addEventListener('scroll', this.hideBar);
   }

   componentWillUnmount() {
      window.removeEventListener('scroll', this.hideBar);
   }

   // function to show and hide fixed header
   hideBar = () => {
      const { fixedHeader } = this.state;
      this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      this.scrollTop >= 200 ?
         !fixedHeader && this.setState({ fixedHeader: true })
         :
         fixedHeader && this.setState({ fixedHeader: false });
   }

   render() {
      let admin=this.props.admin;
      return (
         <div>
            <AppBar position="static" className={`iron-header-wrapper bg-primary iron-header-v1 ${(this.state.fixedHeader) ? 'header-fixed' : ''}`}>
               <div className="iron-header-top py-30">
                  <div className="container">
                     <Grid container spacing={0} >
                        <Grid item md={4} lg={4} xl={4} className="d-flex justify-content-start align-items-center" >
                           <div className="iron-header-widgets d-flex justify-content-start align-items-center">
                              <LanguageProvider />
                           </div>
                        </Grid>
                        <Grid item xs={6} sm={6} md={4} lg={4} xl={4} >
                           <div className="iron-app-logo text-md-center">
                              <img src={AppConfig.AppLogo} alt="header-logo" />
                              {/* <Typography variant="title" color="inherit" className="text-uppercase ">  
                                        Embryo
                                    </Typography> */}
                           </div>
                        </Grid>
                        <Grid item xs={6} sm={6} md={4} lg={4} xl={4} className="d-flex justify-content-end align-items-center" >
                           <div className="iron-header-widgets d-flex justify-content-end align-items-center ">
                              <Cart />
                              <Wishlist />
                              <Logout />
                           </div>
                        </Grid>
                     </Grid>
                  </div>
               </div>
               <div className="iron-header-bottom">
                  <div className="container">
                     <Grid container spacing={0} >
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} >
                           <div className="text-center position-relative">
                              <HeaderMenu admin={admin}/>
                              <SidebarMenu />
                              <SearchBox />
                           </div>
                        </Grid>
                     </Grid>
                  </div>
               </div>
               <FixedHeader />
            </AppBar>
         </div>
      );
   }
}

export default HeaderOne;