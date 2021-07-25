/**
 *  header-menu and sidebar menu data
 */

/* eslint-disable */
export default [
   {
      "menu_title": "menu.Home",
      "type": "subMenu",
      "path": "/",
      "icon": "home",
      "child_routes": null
   },
   {
      "menu_title": "bathroom furniture",
      "type": "null",
      "path": "/shop",
      "icon": "party_mode",
      "child_routes": null
   },
   {
      "menu_title": "menu.pages",
      "path": "javascript:void(0)",
      "type": "subMenu",
      "icon": "pages",
      "child_routes": [
         {
            "path": "/about-us",
            "menu_title": "menu.aboutUs",
            "icon": "arrow_right_alt",
            "child_routes": null
         },
         {
            "path": "/term-and-condition",
            "menu_title": "menu.termsAndConditions",
            "icon": "arrow_right_alt",
            "child_routes": null
         },
         {
            "path": "/privacy-policy",
            "menu_title": "menu.privacyPolicy",
            "icon": "arrow_right_alt",
            "child_routes": null
         },
         {
            "path": "/faq",
            "menu_title": "menu.faq",
            "icon": "arrow_right_alt",
            "child_routes": null
         }
      ]
   },
   {
      "menu_title": "menu.contact us",
      "path": "/contact-us",
      "icon": "perm_contact_calendar",
      "child_routes": null
   },
   {
      "menu_title": "menu.adminPanel",
      "path": "/admin-panel/admin",
      "icon": "perm_identity",
      "child_routes": null
   }
]
