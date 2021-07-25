/**
 * header search widget
 */
import React from 'react';
import Input from '@material-ui/core/Input';

class SearchBoxV2 extends React.Component {
   render() {
      return (
         <div className="search-form-v2 px-15" >
            <div className="input-wrap">
               <form>
                  <Input
                     fullWidth
                     placeholder="Enter a keyword to search"
                     disableUnderline
                     className="input-field"
                  />
               </form>
            </div>
         </div>
      )
   }
}

export default SearchBoxV2;