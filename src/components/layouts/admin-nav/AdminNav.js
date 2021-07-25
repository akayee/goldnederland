/**
 * admin header component
 */
/* eslint-disable */
import React, { Component } from 'react';
import IconButton from '@material-ui/core/IconButton';
import AppBar from '@material-ui/core/AppBar';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Toolbar from '@material-ui/core/Toolbar';
import Tooltip from '@material-ui/core/Tooltip';
import MenuIcon from '@material-ui/icons/Menu';

// actions
import { collapsedSidebarAction } from '../../../actions/action';
import AdminInfo from './AdminInfo';
import LanguageProvider from '../headers/LanguageProvider';

class AdminNav extends Component {
   // function to change the state of collapsed sidebar
   onToggleNavCollapsed = (event) => {
      const val = !this.props.navCollapsed;
      this.props.collapsedSidebarAction(val);
   }
   render() {
      return (
         <div>
            <AppBar position="static" className="admin-header-wrap">
               <Toolbar>
                  <div className="d-flex justify-content-between align-items-center w-100">
                     <div className="list-inline-item" onClick={(e) => this.onToggleNavCollapsed(e)}>
                        <Tooltip title="Sidebar Toggle" placement="bottom">
                           <IconButton color="inherit" mini="true" aria-label="Menu" className="humburger p-0">
                              <MenuIcon />
                           </IconButton>
                        </Tooltip>
                     </div>
                     <div className="d-flex">
                        <LanguageProvider />
                        <AdminInfo />
                     </div>
                  </div>
               </Toolbar>
            </AppBar>
         </div>
      );
   }
}

// map state to props
const mapStateToProps = ({ appSettings }) => {
   return appSettings;
};

export default withRouter(connect(mapStateToProps, {
   collapsedSidebarAction
})(AdminNav));