/**
 * logout header widget
*/
/* eslint-disable */
import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';
import { logout } from '../../../firebase/auth';


class Logout extends React.Component {
   state = {
      anchorEl: null,
      user: {
         //Sağ üst user logo değişecek
         url: require('../../../assets/avatars/user-4.jpg'),
         alt: 'user'
         
      },
      menus: [
         {
            id: 2,
            title: 'Signin/Signup',
            icon: 'power_settings_new',
            path: '/sign-in'
         }
      ]
   };

   //define function for open dropdown
   handleMenu = event => {
      this.setState({ anchorEl: event.currentTarget });
   };

   //define function for close dropdown
   handleClose = () => {
      this.setState({ anchorEl: null });
   };

   render() {
      const { anchorEl } = this.state;
      const open = Boolean(anchorEl);
      const user = this.state.user;
      return (
         <div className='iron-logout-wrap'>
            <Avatar
               aria-owns={open ? 'menu-appbar' : null}
               aria-haspopup="true"
               onClick={this.handleMenu}
               className="icon-btn"
               alt={user.alt} src={user.url}
            >
            </Avatar>
            <Menu
               anchorEl={anchorEl}
               anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
               }}
               transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
               }}
               open={open}
               onClose={this.handleClose}
               className="iron-dropdown"
            >
               {this.state.menus.map((menu, index) => (
                  <MenuItem
                     key={index}
                     onClick={this.handleClose}
                     to={menu.path}
                     component={Link}
                  >
                     <i className="material-icons">{menu.icon}</i>
                     <span className="mb-0">{menu.title}</span>
                  </MenuItem>
               ))
               
               }
               <MenuItem
               onClick={()=>logout()}
               to={"/"}
               component={Link}>
                  <i className="material-icons">clear</i>
                  <span className="mb-0">Sign Out</span>
               </MenuItem>
            </Menu>
         </div>
      );
   }
}

export default Logout;