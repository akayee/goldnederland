/**
 * site header two component
 */
/* eslint-disable */
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Grid from "@material-ui/core/Grid";

// components
import HeaderMenu from "./HeaderMenu";
import Cart from "./Cart";
import Wishlist from "./Wishlist";
import Logout from "./Logout";
import FixedHeader from '../headers/FixedHeader';
import SidebarMenu from '../sidebar';
import AppConfig from '../../../constants/AppConfig';
import SearchBox from './SearchBox';
import SearchBoxV2 from './SearchBoxV2';

class HeaderTwo extends React.Component {

   state = {
      fixedHeader: false,
      admin:this.props.admin
   }
   
   componentDidMount() {
      window.addEventListener('scroll', this.hideBar);
   }

   componentWillUnmount() {
      window.removeEventListener('scroll', this.hideBar);
   }

   //Function to show and hide fixed header
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
      console.log(admin)
      return (
         <div>
            <AppBar position="static" className={`iron-header-wrapper bg-primary iron-header-v2 ${(this.state.fixedHeader) ? 'header-fixed' : ''}`}>
               <div className="iron-header-top py-15 bg-primary">
                  <div className="container">
                     <Grid container spacing={0} >
                        <Grid item xs={6} sm={6} md={3} lg={3} xl={3} className="d-flex justify-content-start align-items-center" >
                           <div className="iron-app-logo text-md-center">
                              <img src={AppConfig.AppLogo} alt="header-logo" />
                              {/* <Typography variant="title" color="inherit" className="text-uppercase ">  
                                       Embryo
                                    </Typography> */}
                           </div>
                        </Grid>
                        <Grid item md={6} lg={7} xl={7} className=" d-flex justify-content-start align-items-center" >
                           <SearchBoxV2 />
                        </Grid>
                        <Grid item xs={6} sm={6} md={3} lg={2} xl={2} className="d-flex justify-content-end align-items-center" >
                           <div className="iron-header-widgets d-flex justify-content-end align-items-center ">
                              <Cart />
                              <Wishlist />
                              <Logout />
                           </div>
                        </Grid>
                     </Grid>
                  </div>
               </div>
               <div className="iron-header-bottom bg-base">
                  <div className="container">
                     <Grid container spacing={0} >
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} >
                           <div className="position-relative">
                              {console.log(admin)}
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

export default HeaderTwo;