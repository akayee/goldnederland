/**
 * user profile page
 */
import React, { Fragment } from 'react';
import Button from "@material-ui/core/Button";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { connect } from 'react-redux';
//component
import ContentLoader from '../../../../components/global/loaders/ContentLoader';
import AddUser from './components/AddUser';
//action
import { deleteUser } from '../../../../actions/action';
import ConfirmUser from './components/ConfirmUser';

const CollaborationColumns = ['image', 'Name ', 'email ', 'Access ', 'action'];

class Collaboration extends React.Component {

   constructor(props) {
      super(props);
      this.confirmationDialog = React.createRef();
   }

   onAdminRemove(list) {
      this.list = list;
      this.confirmationDialog.current.openDialog();
   }

   /**
    * function for delete cart product
    * @param {boolean} popupResponse 
    */
   deleteListItem(popupResponse) {
      if (popupResponse) {
         this.props.deleteUser(this.list);
         this.list = ""
      }
   }

   render() {
      const { collaborationData } = this.props;
      return (
         <Fragment>
            {collaborationData !== null ?
               <div className="admin-collaboration">
                  <AddUser />
                  <Table className="table-wrap">
                     <TableHead>
                        <TableRow>
                           {CollaborationColumns.map((th, index) => (
                              <TableCell key={index} className="fw-bold">{th}</TableCell>
                           ))}
                        </TableRow>
                     </TableHead>
                     <TableBody>
                        {collaborationData.map((list, index) => (
                           <TableRow key={index}>
                              <TableCell>
                                 <img src={require(`../../../../assets/avatars/${list.image}`)} alt="user-thumb" height="40" width="40" />
                              </TableCell>
                              <TableCell>{list.name}</TableCell>
                              <TableCell>{list.email}</TableCell>
                              <TableCell>{list.access}</TableCell>
                              <TableCell>
                                 <Button
                                    className="btn-icon"
                                    onClick={() => this.onAdminRemove(list)}
                                 >
                                    <i className="material-icons active-color">delete</i>
                                 </Button>
                              </TableCell>
                           </TableRow>
                        ))}
                     </TableBody>
                  </Table>
                  <ConfirmUser
                     ref={this.confirmationDialog}
                     onConfirm={(res) => this.deleteListItem(res)}
                  />
               </div>
               :
               <ContentLoader />
            }
         </Fragment >
      )
   }
}
const mapStateToProps = ({ ecommerce }) => {
   const { collaborationData } = ecommerce;
   return { collaborationData };
}

export default connect(mapStateToProps, {
   deleteUser
})(Collaboration);
