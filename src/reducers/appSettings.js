/**
 * App Settings
 */
import { currencies, currencyUnicode } from "../assets/data/currencydata";

//data
import { languages } from "../assets/data/localeData";

//action types
import {
   RTL_LAYOUT,
   CHANGE_CURRENCY,
   HIDE_ALERT,
   SET_LANGUAGE,
   SHOW_ALERT,
   COLLAPSED_SIDEBAR
} from "../actions/types";

//app config
import AppConfig from "../constants/AppConfig";

const INITIAL_STATE = {
   currencies,
   selectedCurrency: currencies[5],
   currencyUnicode,
   languages,
   selectedLocale: AppConfig.locale,
   showAlert: false,
   alertType: 'success',
   alertMessage: 'Initial Message',
   rtlLayout: AppConfig.rtlLayout,
   navCollapsed: AppConfig.navCollapsed,
}

export default (state = INITIAL_STATE, action) => {
   switch (action.type) {
      // collapse sidebar
      case COLLAPSED_SIDEBAR:
         return { ...state, navCollapsed: action.isCollapsed };

      case CHANGE_CURRENCY:
         return {
            ...state,
            selectedCurrency: action.payload
         }
      case SET_LANGUAGE: {
         return {
            ...state,
            selectedLocale: action.payload
         }
      }
      case SHOW_ALERT:
         return {
            ...state,
            showAlert: true,
            alertMessage: action.payload.message,
            alertType: action.payload.type
         }
      case HIDE_ALERT:
         return {
            ...state,
            showAlert: false
         }
      // Rtl layout
      case RTL_LAYOUT:
         return { ...state, rtlLayout: action.payload };
      default:
         return { ...state };
   }
}