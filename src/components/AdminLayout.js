/**
 * App Routes
 */
/* eslint-disable */
import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import RctAdminPanel from './rct-admin-panel';

// router service
import routerService from "../services/_routerService";

class AdminLayout extends Component {

   render() {
      const { match } = this.props;
      return (
         <RctAdminPanel>
            {routerService && routerService.map((route, index) => {
               return (
                  <Route key={index} path={`${match.url}/${route.path}`} component={route.component} />
               )
            })}
         </RctAdminPanel>
      );
   }
}

export default withRouter(connect(null)(AdminLayout));
