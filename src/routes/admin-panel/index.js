/**
 * Dasboard Routes
 */
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

// async components
import {
   AsyncInvoiceListComponent,
   AsyncProductsGridComponent,
   AsyncProductAddComponent,
   AsyncProductEditComponent,
   AsyncProfileDetailComponent
} from '../../util/AsyncRoutes';

const AdminPanel = ({ match }) => {
   return (
      <div className="dashboard-wrapper">
         <Switch>
            <Redirect exact from={`${match.url}/`} to={`${match.url}/reports`} />
            <Route path={`${match.url}/invoices`} component={AsyncInvoiceListComponent} />
            <Route path={`${match.url}/products`} component={AsyncProductsGridComponent} />
            <Route path={`${match.url}/product-add`} component={AsyncProductAddComponent} />
            <Route path={`${match.url}/product-edit/:id`} component={AsyncProductEditComponent} />
            <Route path={`${match.url}/account`} component={AsyncProfileDetailComponent} />
         </Switch>
      </div>
   )
}

export default AdminPanel;