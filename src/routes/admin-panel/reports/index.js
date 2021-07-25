/**
 * reports
 */
/* eslint-disable */
import React, { Component, Fragment } from 'react';
import TransactionList from '../../../components/widgets/TransactionList';
import ContentLoader from '../../../components/global/loaders/ContentLoader';

//firebase
import firebase from '../../../firebase';

//component
import BuySellChart from '../../../components/widgets/BuySellChart';

export default class InvoiceList extends Component {
   state = {
      anchorEl: null,
      transactionList: null,
      transferReport: null,
      expenseCategory: null,
      allChartData: null,
   };

   componentDidMount() {
      this.getTransactionListData();
      this.getTransferReportData();
      this.getExpenseCategoryData();
      this.getAllChartData();
   }

   //get transaction data
   getTransactionListData() {
      const transactionListRef = firebase.database().ref('goldnederland/transaction_list');
      transactionListRef.on('value', (snapshot) => {
         let transactionList = snapshot.val();
         this.setState({
            transactionList: transactionList
         });
      });
   }
   //get transfer report data
   getTransferReportData() {
      const transferReportRef = firebase.database().ref('goldnederland/transfer_report');
      transferReportRef.on('value', (snapshot) => {
         let transferReport = snapshot.val();
         this.setState({
            transferReport: transferReport
         });
      });
   }
   //get expense category data
   getExpenseCategoryData() {
      const expenseCategoryRef = firebase.database().ref('goldnederland/expense_category');
      expenseCategoryRef.on('value', (snapshot) => {
         let expenseCategory = snapshot.val();
         this.setState({
            expenseCategory: expenseCategory
         });
      });
   }
   //get chart data
   getAllChartData() {
      const allChartDataRef = firebase.database().ref('goldnederland/chart_Data');
      allChartDataRef.on('value', (snapshot) => {
         let newdata = snapshot.val();
         this.setState({
            allChartData: newdata
         });
      });
   }

   render() {
      const { transactionList, transferReport, expenseCategory, allChartData } = this.state;
      return (
         <Fragment>
            {transactionList !== null && transferReport !== null && expenseCategory !== null && allChartData !== null ?
               <div className="inner-container">
                  <div className="iron-reports-wrap">
                     <BuySellChart data={allChartData} />
                     <div className="iron-shadow rounded p-20 bg-base">
                        <TransactionList transactionList={transactionList} transferReport={transferReport} expenseCategory={expenseCategory} />
                     </div>
                  </div>
               </div>
               :
               <ContentLoader />
            }
         </Fragment>
      )
   }
}