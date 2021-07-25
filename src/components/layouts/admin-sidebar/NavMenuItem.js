/**
 * Menu List Item
 */
import React, { Fragment, Component } from 'react';
import { List, ListItem, Collapse, } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
// intl messages
import IntlMessages from '../../../util/IntlMessages';

class NavMenuItem extends Component {

   /**
   * On Toggle  Menu
   */
   onToggleMenu() {
      this.props.toggleMenu()
   }

   render() {
      const { menu, toggleMenu } = this.props;
      if (menu.child_routes != null) {
         return (
            <Fragment>
               <ListItem
                  disableRipple
                  button
                  component="li"
                  onClick={() => toggleMenu()}
                  className={menu.isMenuOpen === true ? 'item-active' : ''}
               >
                  <span className="d-flex justify-content-start align-items-center">
                     <i className="material-icons pr-15">{menu.icon}</i>
                     <IntlMessages id={menu.menu_title} />
                  </span>
               </ListItem>
               <Collapse in={menu.isMenuOpen} timeout="auto" unmountOnExit>
                  <List component="ul" className="sub-menu">
                     {menu.child_routes.map((subMenu, index) => {
                        return (
                           <ListItem key={index} button component="li">
                              <NavLink activeClassName="link-active" to={subMenu.path}>
                                 <IntlMessages id={subMenu.menu_title} />
                              </NavLink>
                           </ListItem>
                        )
                     })}
                  </List>
               </Collapse>
            </Fragment>
         )
      }
      return (
         <ListItem
            disableRipple
            button
            component="li"
            onClick={() => toggleMenu()}
         >
            <NavLink activeClassName="link-active" to={menu.path} className="d-flex justify-content-start align-items-center">
               <i className="material-icons pr-15">{menu.icon}</i>
               <IntlMessages id={menu.menu_title} />
            </NavLink>
         </ListItem>
      );
   }
}

export default NavMenuItem;
