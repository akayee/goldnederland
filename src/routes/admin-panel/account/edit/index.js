/**
 * user edit page
 */
import React, { Fragment } from 'react';
import EditInfo from './components/EditInfo';


export default class EditUser extends React.Component {

   render() {
      const { search } = this.props.location;
      return (
         <Fragment>
            {search && search === '?type=info'
               ?
               <EditInfo />
               :
               null
            }
         </Fragment>
      )
   }
}

