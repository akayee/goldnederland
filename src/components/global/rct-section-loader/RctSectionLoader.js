/**
 * Rct Section Loader
 */
import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

const RctSectionLoader = () => (
   <div className="d-flex justify-content-center loader-overlay">
      <CircularProgress thickness={2} />
   </div>
);

export default RctSectionLoader;