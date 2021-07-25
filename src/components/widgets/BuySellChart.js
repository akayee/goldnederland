/**
 * Buy Sell Chart
 */
/* eslint-disable */
import React, { Fragment } from 'react';
import {
   ResponsiveContainer,
   LineChart,
   Line,
   XAxis,
   YAxis,
   CartesianGrid,
   Tooltip
} from 'recharts';
import { Button } from '@material-ui/core';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import RctSectionLoader from '../global/rct-section-loader/RctSectionLoader';

class BuySellChart extends React.Component {
   state = {
      anchorEl: null,
      allData: null,
      chartData: null,
   };
   componentDidMount() {
      this.setState({
         allData: this.props.data,
      })
      for (let item of this.props.data) {
         if (item.tag === 'week') {
            this.setState({
               chartData: item
            })
         }
      }
   }

   changeChartData(tag) {
      let { allData } = this.state;
      for (let item of allData) {
         if (item.tag == tag) {
            this.setState({
               chartData: item
            });
            break;
         }
      }
   }

   handleClick = event => {
      this.setState({ anchorEl: event.currentTarget });
   };

   handleClose = () => {
      this.setState({ anchorEl: null });
   };

   render() {
      const { anchorEl, chartData } = this.state;
      return (
         <div className="app-card">
            <div className="app-card-title">
               <div className="d-sm-flex justify-content-between align-items-center">
                  <h5 className="text-uppercase">Buy / Sell</h5>
                  <div className="d-flex btn-wraps">
                     <Button className="mr-10"><i className="material-icons">cached</i></Button>
                     <div>
                        <Button
                           aria-owns={anchorEl ? 'simple-menu' : undefined}
                           aria-haspopup="true"
                           onClick={this.handleClick}
                        >
                           <i className="material-icons">more_horiz</i>
                        </Button>
                        <Menu
                           id="simple-menu"
                           anchorEl={anchorEl}
                           open={Boolean(anchorEl)}
                           onClose={this.handleClose}
                        >
                           <MenuItem onClick={this.handleClose}>
                              <i className="material-icons pr-15">settings</i>
                              settings
                           </MenuItem>
                           <MenuItem onClick={this.handleClose}>
                              <i className="material-icons pr-15">more</i>
                              view more
                           </MenuItem>
                           <MenuItem onClick={this.handleClose}>
                              <i className="material-icons pr-15">notifications_off</i>
                              disable notification
                           </MenuItem>
                           <MenuItem onClick={this.handleClose}>
                              <i className="material-icons pr-15">exit_to_app</i>
                              remove panel
                           </MenuItem>
                        </Menu>
                     </div>
                  </div>
               </div>
            </div>
            <div className="app-content pl-0">
               <div className="my-sm-15 mb-10 pl-20 d-flex justify-content-sm-end align-items-center">
                  <Button
                     className="button btn-sm btn-active mb-10 mr-10"
                     onClick={() => this.changeChartData('week')}
                  >
                     week
                  </Button>
                  <Button
                     className="button btn-sm btn-primary mb-10 mr-10"
                     onClick={() => this.changeChartData('month')}
                  >
                     month
                  </Button>
                  <Button
                     className="button btn-sm  btn-danger mb-10"
                     onClick={() => this.changeChartData('year')}
                  >
                     year
                  </Button>
               </div>
               <Fragment>
                  {chartData !== null ?
                     <ResponsiveContainer width='100%' height={450}>
                        <LineChart
                           data={chartData.data}
                        >
                           <XAxis dataKey="name" />
                           <YAxis axisLine={false} />
                           <Tooltip />
                           <CartesianGrid vertical={false} stroke="#f5f5f5" />
                           <Line type="monotone" dataKey="Buy" stroke="#283593" strokeWidth={3} />
                           <Line type="monotone" dataKey="Sell" stroke="#0097a7" strokeWidth={3} />
                           <Line type="monotone" dataKey="Transfer" stroke="#e0e0e0" strokeWidth={3} />
                        </LineChart>
                     </ResponsiveContainer>
                     :
                     "Loading..."
                  }
               </Fragment>
            </div>
            {/* <RctSectionLoader /> */}
         </div>
      )
   }
}

export default BuySellChart;
