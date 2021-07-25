/**
 * Home Page Two
 */
/* eslint-disable */
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

//component
import BannerSliderTwo from '../../components/widgets/BannerSliderTwo';
import CallToAction from '../../components/widgets/CallToAction';
import TopProducts from '../../components/widgets/TopProducts';
import SubscribeBoxV2 from '../../components/widgets/SubscribeBoxV2';
import ContentLoader from '../../components/global/loaders/ContentLoader';
import ShopCard from '../../components/widgets/ShopCard';
import shopCardData from '../../assets/data/shopCardData';

// firebase
import firebase from '../../firebase';
import 'firebase/database';


class HomePageTwo extends React.Component {

   constructor(props) {
      super(props);
      this.state = {
         banner: null,
         cta: [],
         topProducts: [],
         clients: []
      }
   }

   componentDidMount() {
      this.getBannerData();
      this.getCta();
      this.getTopProduct();
      this.getClients();
   }
   

   //get banner data
   getBannerData() {
      const bannerRef = firebase.database().ref('goldnederland/banner_two');
      bannerRef.on('value', (snapshot) => {
         let banner = snapshot.val();
         this.setState({
            banner: banner
         });
      });
   }

   //get call to action data
   getCta() {
      const ctaRef = firebase.database().ref('goldnederland/cta');
      ctaRef.on('value', (snapshot) => {
         let cta = snapshot.val();
         this.setState({
            cta: cta
         });
      });
   }

   //get products data
   getTopProduct() {
      const topProductsRef = firebase.database().ref('goldnederland/products');
      topProductsRef.on('value', (snapshot) => {
         let topProducts = snapshot.val();
         let toppro=[];
         Object.keys(topProducts).map((key,index)=>{
            toppro=toppro.concat(topProducts[key])
         })
         this.setState({
            topProducts: toppro
         });
         
      });
   }

   //get clients data
   getClients() {
      const clientsRef = firebase.database().ref('goldnederland/clients');
      clientsRef.on('value', (snapshot) => {
         let clients = snapshot.val();
         this.setState({
            clients: clients
         });
      });
   }

   render() {

      const { banner, cta, topProducts, clients } = this.state;

      return (
         <Fragment>
            {
               banner !== null && topProducts !== null ?
                  <div className="iron-home-v2-wrap">
                     {/* banner section start */}
                     <div className="iron-banner-wrapper py-30">
                        <BannerSliderTwo sliderData={banner} />
                     </div>
                     {/* cta section start */}
                     <div className="iron-cta-wrapper pt-lg-30 pt-15">
                        <div className="container">
                           <CallToAction CallToActionData={cta} />
                        </div>
                     </div>
                     
                     {/* cta section start güncelleme ekranı
                     <div className="iron-cta-wrapper ">
                        <div className="container">
                           <CallToActionUpdate CallToActionData={cta} />
                        </div>
                     </div>
                     {/* cta section start 
                     <div className="iron-cta-wrapper ">
                        <div className="container">
                           <CallToActionUpdate CallToActionData={banner} />
                        </div>
                     </div>*/}
                     {/* cta v2 section start */}
                     <div className="iron-cta-v2-wrapper section-pad pb-30">
                        <div className="container">
                           <div className="iron-sec-heading-wrap p-30 pb-0">
                              <div className="d-sm-flex justify-content-between align-items-center">
                                 <div className="heading-title mb-sm-0 mb-10">
                                    <h2 className="mb-0">Lightening Deals</h2>
                                 </div>
                                 <Link to="/shop" className="text-14 font-medium text-uppercase">view all</Link>
                              </div>
                           </div>
                           <ShopCard deals={shopCardData} />
                        </div>
                     </div>
                     {/* top products section start */}
                     <div className="iron-top-products-wrapper section-pad pb-0">
                        <div className="container">
                           <div className="iron-sec-heading-wrap mb-30">
                              <div className="d-sm-flex justify-content-between align-items-center">
                                 <div className="heading-title  mb-sm-0 mb-10">
                                    <h3 className="mb-0">top products</h3>
                                 </div>
                                 <Link to="/shop" className="text-14 font-normal text-capitalize text-14 dark-color">view all</Link>
                              </div>
                           </div>
                           <TopProducts Data={topProducts} />
                        </div>
                     </div>
                     {/* subscribe  section start */}
                     <div className="iron-subscribe-box-v2 bg-primary section-pad position-relative">
                        <SubscribeBoxV2 />
                     </div>
                  </div>
                  :
                  <ContentLoader />
            }
         </Fragment >
      )
   }
}

export default HomePageTwo;