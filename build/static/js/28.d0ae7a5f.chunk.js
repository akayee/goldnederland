webpackJsonp([28],{1159:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=n(1),i=n.n(l),c=n(40),u=n.n(c),f=n(26),s=n(149),p=n(353),m=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),b=function(e){function t(){var e,n,o,l;a(this,t);for(var i=arguments.length,c=Array(i),u=0;u<i;u++)c[u]=arguments[u];return n=o=r(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(c))),o.state={infoData:null},l=n,r(o,l)}return o(t,e),m(t,[{key:"componentDidMount",value:function(){this.getProducts()}},{key:"getProducts",value:function(){var e=this;s.a.database().ref("goldnederland/user_info").on("value",function(t){var n=t.val();e.setState({infoData:n})})}},{key:"render",value:function(){var e=this.state.infoData;return i.a.createElement(l.Fragment,null,null!==e?i.a.createElement("div",{className:"profile-wrapper p-sm-15 py-5"},i.a.createElement("h4",{className:"mb-30"},"Profile Infomation"),i.a.createElement("div",null,i.a.createElement("ul",{className:"user-basic-info"},e.map(function(e,t){return i.a.createElement("li",{key:t,className:"profile-field mb-15"},i.a.createElement("span",null,e.title),i.a.createElement("span",null,e.value))})),i.a.createElement(u.a,{component:f.b,to:{pathname:"edit",search:"?type=info"},className:"button btn-active"},"edit"))):i.a.createElement(p.a,null))}}]),t}(i.a.Component);t.default=b}});
//# sourceMappingURL=28.d0ae7a5f.chunk.js.map