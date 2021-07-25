/**
 * order history page
 */
import React, { Fragment } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

//firebase
import firebase from '../../../firebase';

//component
import ContentLoader from '../../../components/global/loaders/ContentLoader';

class OrderHistory extends React.Component {

   constructor(props) {
      super(props);
      this.state = {
         orderHistory: null
      }
   }

   componentDidMount() {
      this.getTableData();
   }

   //get table data
   getTableData() {
      const orderHistoryRef = firebase.database().ref('goldnederland/order_history');
      orderHistoryRef.on('value', (snapshot) => {
         //console.log(snapshot.val())
         let orderHistory = snapshot.val();
         this.setState({
            orderHistory: orderHistory
         });
      });
   }

   render() {
      const { orderHistory } = this.state;
      return (
         <Fragment>
            {orderHistory !== null ?
               <div className="iron-table-wrapper">
                  <Table className="iron-table-wrap">
                     <TableHead>
                        <TableRow>
                           <TableCell className="iron-th">no.</TableCell>
                           <TableCell className="iron-th">order Id</TableCell>
                           <TableCell className="iron-th">product name</TableCell>
                           <TableCell className="iron-th">price</TableCell>
                           <TableCell className="iron-th">status</TableCell>
                           <TableCell className="iron-th">action</TableCell>
                        </TableRow>
                     </TableHead>
                     <TableBody>
                        {orderHistory.map((orderItem, index) => {
                           return (
                              <TableRow key={index}>
                                 <TableCell className="iron-td">{orderItem.count}</TableCell>
                                 <TableCell className="iron-td">{orderItem.id}</TableCell>
                                 <TableCell className="iron-td">{orderItem.productName}</TableCell>
                                 <TableCell className="iron-td">{orderItem.price}</TableCell>
                                 <TableCell className="iron-td">{orderItem.status}</TableCell>
                                 <TableCell className="iron-td"><i className="material-icons">{orderItem.action}</i></TableCell>
                              </TableRow>
                           );
                        })}
                     </TableBody>
                  </Table>
               </div>
               :
               <ContentLoader />
            }
         </Fragment>
      )
   }
}
export default OrderHistory;