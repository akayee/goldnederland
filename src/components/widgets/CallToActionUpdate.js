/**
 * call to action component
 */
import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import { IconButton } from '@material-ui/core';


export default class  CallToActionUpdate extends  React.Component{

    render(){
        const { CallToActionData } = this.props;
   return (
      <div>
         <Grid container spacing={32} className="iron-call-to-action-wrap">
            {
               CallToActionData.map((callData, index) => {
                  return (
                     <Grid key={index} item xs={12} sm={6} md={4} lg={4} xl={4} className="iron-col">
                        <div className="iron-overlay-wrap overflow-hidden d-flex justify-content-center align-items-center">
                           <Link to={callData.path}>
                              <img src={require(`../../assets/images/${callData.thumb}`)} alt="call-to-action" />
                           </Link>
                           <div className="iron-btn-grp">
                            <Link to={``}>
                                <IconButton className="iron-overlay-content d-flex justify-content-end align-items-start">
                                <i className="material-icons">edit</i>
                                </IconButton>
                            </Link>
                        </div>
                        </div>
                     </Grid>
                  )
               })
            }
         </Grid>
      </div>
   )
    }

   
}