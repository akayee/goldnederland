/**
 * App Routes
 */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Sidebar from 'react-sidebar';
import $ from 'jquery';
import { Scrollbars } from 'react-custom-scrollbars';

// actions
import { collapsedSidebarAction } from '../../actions/action';
import AdminNav from '../layouts/admin-nav/AdminNav';
import AdminSidebar from '../layouts/admin-sidebar';

class RctAdminPanel extends Component {

   componentWillMount() {
      this.updateDimensions();
   }
   componentDidMount() {
      window.addEventListener("resize", this.updateDimensions);
   }
   updateDimensions = () => {
      this.setState({ windowWidth: $(window).width(), windowHeight: $(window).height() });
   }
   componentWillUnmount() {
      window.removeEventListener("resize", this.updateDimensions);
   }
   componentWillReceiveProps(nextProps) {
      const { windowWidth } = this.state;
      if (nextProps.location !== this.props.location) {
         if (windowWidth <= 1199) {
            this.props.collapsedSidebarAction(false);
         }
      }
   }
   componentDidUpdate(prevProps) {
      if (this.props.location.pathname !== prevProps.location.pathname) {
         window.scrollTo(0, 0);
      }
   }
   renderPage() {
      const { children } = this.props;
      return (
         <Scrollbars
            className="rct-scroll"
            autoHide
            autoHideDuration={100}
            style={this.getScrollBarStyle()}
         >
            <div className="rct-page-content p-md-30 px-15 py-30">
               {children}
            </div>
         </Scrollbars>
      );
   }
   //Scrollbar height
   getScrollBarStyle() {
      return {
         height: 'calc(100vh - 64px)'
      }
   }
   // render header
   renderHeader() {
      return <AdminNav />
   }
   // render header
   renderSidebar() {
      return <AdminSidebar />
   }
   render() {
      const { navCollapsed, rtlLayout } = this.props.appSettings;
      const { windowWidth } = this.state;
      return (
         <div className="admin-wrapper">
            <Sidebar
               sidebar={this.renderSidebar()}
               open={windowWidth <= 1199 ? navCollapsed : false}
               docked={windowWidth > 1199 ? !navCollapsed : false}
               pullRight={rtlLayout}
               onSetOpen={() => this.props.collapsedSidebarAction(false)}
            >
               <div className="rct-app-content">
                  <div className="app-header">
                     {this.renderHeader()}
                  </div>
                  <div className="rct-page">
                     {this.renderPage()}
                  </div>
               </div>
            </Sidebar>
         </div>
      );
   }
}

// map state to props
const mapStateToProps = ({ appSettings }) => {
   return { appSettings }
}

export default withRouter(connect(mapStateToProps, {
   collapsedSidebarAction,
})(RctAdminPanel));