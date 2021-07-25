/* eslint-disable */
/**
 * Header menu component
 */
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import classnames from "classnames";
import firebase from '../../../firebase/index';
import {takeDataAdmin} from '../../../firebase/auth';

// intl messages
import IntlMessages from '../../../util/IntlMessages';

// nav links
import navLinks from '../../../assets/data/NavLinks.js';

class HeaderMenu extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         admin: false,
         user:null
      };
   }
   componentDidMount(){
      
   }
   
   
   register =()=>{


      var that=this;
     firebase.auth().onAuthStateChanged(function(user){
        
       if(user){
         let data=null;
         takeDataAdmin(user,"info").on('value',(snapshot)=>data=snapshot.exportVal()
          );
         if(data.admin===true){
            that.setState({
               admin:true
             });
         }
         
       }else{
         that.setState({
           admin:false
         });
       }
     }); 
   
 
 }
 
   
   render(){
      let admin=this.props.admin;
      return (
         <div className="horizontal-menu">
            <ul className="d-inline-block iron-header-menu mb-0">
               {navLinks.map((navLink, index) => {
                  if (navLink.child_routes && navLink.child_routes != null) {
                     return (
                        <li key={index} className={classnames({ 'mega-menu': navLink.mega })}>
                           <a href="javascript:void(0)">
                              <IntlMessages id={navLink.menu_title} />
                           </a>
                           {(navLink.type && navLink.type === 'subMenu') ?
                              <Fragment>
                                 {navLink.child_routes !== null &&
                                    <ul className="sub-menu mb-0">
                                       {navLink.child_routes && navLink.child_routes.map((subNavLink, index) => (
                                          <Fragment key={index}>
                                             {subNavLink.child_routes !== null ?
                                                <li >
                                                   <a href="javascript:void(0)" className="d-flex justify-content-between align-items-center">
                                                      <IntlMessages id={subNavLink.menu_title} />
                                                      <i className="material-icons">keyboard_arrow_right</i>
                                                   </a>
                                                   <ul className="sub-menu-child mb-0">
                                                      {subNavLink.child_routes.map((subMenuItem, index) => (
                                                         <li key={index}>
                                                            <Link to={subMenuItem.path}>
                                                               <IntlMessages id={subMenuItem.menu_title} />
                                                            </Link>
                                                         </li>
                                                      ))}
                                                   </ul>
                                                </li>
                                                :
                                                < li>
                                                   <Link to={subNavLink.path}>
                                                      <IntlMessages id={subNavLink.menu_title} />
                                                   </Link>
                                                </li>
                                             }
                                          </Fragment>
                                       ))}
                                    </ul>
                                 }
                              </Fragment>
                              :
                              <Fragment>
                                 {navLink.child_routes !== null &&
                                    <ul className="sub-menu mb-0 d-flex">
                                       {navLink.child_routes && Object.keys(navLink.child_routes).map((subNavLink, index) => (
                                          <li key={index}>
                                             <a href="javascript:void(0)"><IntlMessages id={subNavLink} /></a>
                                             <ul className="sub-menu mb-0">
                                                {navLink.child_routes[subNavLink].map((megaMenuItem, index) => (
                                                   <li key={index}>
                                                      <Link to={megaMenuItem.path}>
                                                         <IntlMessages id={megaMenuItem.menu_title} />
                                                      </Link>
                                                   </li>
                                                ))}
                                             </ul>
                                          </li>
                                       ))}
                                    </ul>
                                 }
                              </Fragment>
                           }
                        </li>
                     )
                  }
                  return (navLink.menu_title==="menu.adminPanel" ?admin?
                  <li key={index}>
                  <Link to={navLink.path}><IntlMessages id={navLink.menu_title} /></Link>
               </li>:null:<li key={index}>
                     <Link to={navLink.path}><IntlMessages id={navLink.menu_title} /></Link>
                  </li>
                  )
               })}
            </ul>
         </div>
      )
   }   
}

export default HeaderMenu;
