/**
 * Main App
 */
import React, { Fragment } from 'react';
import SweetAlert from 'react-bootstrap-sweetalert';
import { connect } from "react-redux";
import { MuiThemeProvider } from '@material-ui/core/styles';
import { IntlProvider } from 'react-intl';
import { Route, Switch } from 'react-router-dom';

// css
import './lib/embryoCss.js';

// App locale
import AppLocale from './lang';

//layout 
import HeaderOne from "./components/layouts/headers/HeaderOne";
import HeaderTwo from "./components/layouts/headers/HeaderTwo";
import HeaderThree from './components/layouts/headers/HeaderThree.js';
import FooterOne from "./components/layouts/footers/FooterOne";

//review component
import ProductReview from './components/global/review-popup/ProductReview';

//Add Loaders
import {
   AsyncHomePageOneComponent,
   AsyncHomePageTwoComponent,
   AsyncHomePageThreeComponent,
   AsyncAboutUSComponent,
   AsyncCartComponent,
   AsyncCheckOutComponent,
   AsyncBlogDetailComponent,
   AsyncAccessoriesComponent,
   AsyncContactUsComponent,
   AsyncFAQComponent,
   AsyncPaymentOptionsComponent,
   AsyncPrivacyPolicyComponent,
   AsyncTermAndConditionComponent,
   AsyncProductDetailComponent,
   AsyncInvoiceComponent,
   AsyncShopComponent,
   AsyncSignInPageComponent,
   AsyncSignUpComponent,
   AsyncForgetPasswordComponent,
   AsyncThankYouComponent,
   AsyncUserAccountComponent,
   AsyncPageNotFoundComponent
} from './util/AsyncRoutes';

// actions
import { hideAlert } from "./actions/action";

// themes
import primaryTheme from './themes/primaryTheme';

// footer data
import footerData from './assets/data/footerData';
import ThemeOptions from './components/ThemeOptions/ThemeOptions';
import AdminLayout from './components/AdminLayout';
import { takeDataAdmin } from './firebase/auth';
import firebase from './firebase/index'

//const EcommerceLayout = () => 

class App extends React.Component {
   state = {
      admin:false,
      login:false,
      data:null
   }

   /**
    * method for update window top when new page render
    */
   componentDidMount(){
      this.register();
   }
   componentDidUpdate(prevProps) {
      if (this.props.location !== prevProps.location) {
         window.scrollTo(0, 0);
      }
   }
   register =()=>{

      var that=this;
      firebase.auth().onAuthStateChanged(function(user){
        if(user){
         takeDataAdmin(user,"info").on('value',(snapshot)=>{let data1=snapshot.val();
            if(data1&& data1.admin&& data1.admin ===true ){
               that.setState({
                  admin:true,
                  login:true
                });
            }else{
               that.setState({
                  admin:false,
                  login:true
                });
            }
         }); }else{
          that.setState({
             admin:false,
            login:false
          });
        }
      });    
}

   getUrl(pathname) {
      let pathArray = pathname.split('/');
      return `/${pathArray[1]}` === '/admin-panel' ? true : false;
   }

   render() {
      const { location } = this.props;
      const { selectedLocale, alertType } = this.props;
      const currentAppLocale = AppLocale[selectedLocale.locale];
     

      return (
         <MuiThemeProvider theme={primaryTheme}>
            <IntlProvider
               locale={currentAppLocale.locale}
               messages={currentAppLocale.messages}
            >
               <Fragment>
                  {this.getUrl(location.pathname) ?

                     <Route path="/admin-panel" component={AdminLayout} />
                     :
                     <div className="app-container">
                        {this.props.location.pathname && this.props.location.pathname === '/home-two'
                           ?
                           <HeaderTwo admin={this.state.admin}/>
                           :
                           <Fragment>
                              {this.props.location.pathname === '/home-three' ?
                                 <HeaderThree />
                                 :
                                 <HeaderOne admin={this.state.admin} />
                              }
                           </Fragment>
                        }
                        <ProductReview />
                        <Switch>
                           <Route exact path="/" component={AsyncHomePageTwoComponent} />
                           <Route path="/home-two" component={AsyncHomePageThreeComponent} />
                           <Route path="/home-three" component={AsyncHomePageOneComponent} />
                           <Route path="/products/:id" component={AsyncProductDetailComponent} />
                           <Route path="/cart" component={AsyncCartComponent} />
                           <Route path="/check-out" component={AsyncCheckOutComponent} />
                           <Route path="/payment" component={AsyncPaymentOptionsComponent} />
                           <Route path="/final-receipt" component={AsyncInvoiceComponent} />
                           <Route path="/bathroomfurniture" component={AsyncAccessoriesComponent} />
                           <Route path="/shop" component={AsyncShopComponent} />
                           <Route path="/about-us" component={AsyncAboutUSComponent} />
                           <Route path="/term-and-condition" component={AsyncTermAndConditionComponent} />
                           <Route path="/privacy-policy" component={AsyncPrivacyPolicyComponent} />
                           <Route path="/faq" component={AsyncFAQComponent} />
                           <Route path="/blogs/detail/:id" component={AsyncBlogDetailComponent} />
                           <Route path="/sign-in" component={AsyncSignInPageComponent} />
                           <Route path="/sign-up" component={AsyncSignUpComponent} />
                           <Route path="/forget-password" component={AsyncForgetPasswordComponent} />
                           <Route path="/thank-you" component={AsyncThankYouComponent} />
                           <Route path="/contact-us" component={AsyncContactUsComponent} />
                           <Route path="/account" component={AsyncUserAccountComponent} />
                           <Route path="*" component={AsyncPageNotFoundComponent} />
                        </Switch>
                        <FooterOne data={footerData} />
                        <SweetAlert
                           success={alertType === 'success'}
                           error={alertType === 'error'}
                           title=''
                           confirmBtnText="Ok"
                           confirmBtnBsStyle="warning"
                           className="iron-alert-box"
                           show={this.props.showAlert}
                           onConfirm={this.props.hideAlert}
                           onCancel={this.props.hideAlert}
                           closeOnClickOutside
                        >
                           {this.props.alertMessage}
                        </SweetAlert>

                     </div>
                  }
                  <ThemeOptions url={this.getUrl(location.pathname)} />
               </Fragment>
            </IntlProvider>
         </MuiThemeProvider>
      )
   }
}

// map state to props
const mapStateToProps = ({ appSettings }) => {
   const { showAlert, alertMessage, selectedLocale, alertType } = appSettings;
   return { showAlert, alertMessage, selectedLocale, alertType };
}

export default connect(mapStateToProps, {
   hideAlert
})(App);