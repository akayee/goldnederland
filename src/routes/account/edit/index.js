/**
 * user edit page
 */
import React, { Fragment } from 'react';
import EditCard from './components/EditCard';
import EditAddress from './components/EditAddress';
import EditInfo from './components/EditInfo';


export default class EditUser extends React.Component {

   render() {
      const { search } = this.props.location;

      return (
         <Fragment>
            {/* {search && search === '?type=info'
               ?
               <EditInfo />
               :
               [
                  (search === '?type=address' || search === '?type=ship-address'
                     ?
                     <EditAddress type={search} />
                     :
                     <EditCard type={search} />
                  ),
               ]
            } */}
            {search && search === '?type=info'
               ?
               <EditInfo />
               :
               <Fragment>
                  {search === '?type=address' || search === '?type=ship-address' ?
                     <EditAddress type={search} />
                     :
                     <EditCard type={search} />
                  }
               </Fragment>
            }
         </Fragment>
      )
   }
}

