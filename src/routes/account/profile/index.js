/**
 * user profile page
 */
import React, { Fragment } from 'react';
import Button from "@material-ui/core/Button";
import { Link } from 'react-router-dom';

//firebase
import firebase from '../../../firebase';

//component
import ContentLoader from '../../../components/global/loaders/ContentLoader';


export default class Profile extends React.Component {

   state = {
      infoData: null
   }

   componentDidMount() {
      this.getProducts();
   }

   //getproducts
   getProducts() {
      const infoDataRef = firebase.database().ref('goldnederland/user_info');
      infoDataRef.on('value', (snapshot) => {
         let infoData = snapshot.val();
         this.setState({
            infoData: infoData
         });
      });
   }

   render() {

      const { infoData } = this.state;

      return (
         <Fragment>
            {infoData !== null ?
               <div className="profile-wrapper p-sm-15 py-5">
                  <h4 className="mb-30">Profile Infomation</h4>
                  <div>
                     <ul className="user-basic-info">
                        {infoData.map((info, index) => {
                           return (
                              <li key={index} className="profile-field mb-15">
                                 <span>{info.title}</span>
                                 <span>{info.value}</span>
                              </li>
                           )
                        })}
                     </ul>
                     <Button
                        component={Link}
                        to={{ pathname: "edit", search: "?type=info" }}
                        className="button btn-active"
                     >
                        edit
                        </Button>
                  </div>
               </div>
               :
               <ContentLoader />
            }
         </Fragment >
      )
   }

}

