webpackJsonp([11],{1155:function(e,t,a){"use strict";function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e){if(Array.isArray(e)){for(var t=0,a=Array(e.length);t<e.length;t++)a[t]=e[t];return a}return Array.from(e)}function o(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,a){function n(r,o){try{var i=t[r](o),l=i.value}catch(e){return void a(e)}if(!i.done)return Promise.resolve(l).then(function(e){n("next",e)},function(e){n("throw",e)});e(l)}return n("next")})}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function c(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=a(1269),u=a.n(s),m=a(1),d=a.n(m),p=a(98),f=a(26),h=a(150),v=a(149),g=(a(374),a(224),a(219),a(1407)),y=a.n(g),b=a(1201),E=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),w={Preview_Image:"https://via.placeholder.com/625x800",image_gallery:["https://via.placeholder.com/625x800","https://via.placeholder.com/625x800","https://via.placeholder.com/625x800","https://via.placeholder.com/625x800","https://via.placeholder.com/625x800"]},x=function(e){function t(e){var a=this;i(this,t);var c=l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return c.handleUploadStart=function(){return c.setState({isUploading:!0,uploadProgress:0})},c.handleUploadSuccess=function(){var e=o(u.a.mark(function e(t){var n;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.storage().ref("products").child(t).getDownloadURL();case 2:n=e.sent,w.Preview_Image={downloadURL:n},c.setState(function(e){return{filenames:[].concat(r(e.filenames),[t]),downloadURLs:[].concat(r(e.downloadURLs),[n]),uploadProgress:100,isUploading:!1}});case 5:case"end":return e.stop()}},e,a)}));return function(t){return e.apply(this,arguments)}}(),c.handleChange=function(e){c.setState({data:Object.assign({},c.state.data,n({},e.target.name,e.target.value))})},c.submitData=function(){var e=c.state.data;e.image=c.state.downloadURLs[0],e.image_gallery=c.state.downloadURLs,c.setState({data:{},downloadURLs:[]}),Object(h.a)(e,"products").then(alert("Product added"))},c.state={pictures:[],age:"",user:[],data:{},filenames:[],downloadURLs:[],isUploading:!1,uploadProgress:0},c.onDrop=c.onDrop.bind(c),c}return c(t,e),E(t,[{key:"onDrop",value:function(e,t){this.setState({pictures:this.state.pictures.concat(e)})}},{key:"render",value:function(){var e=this;return d.a.createElement("div",{className:"iron-product-add-wrap pt-50 px-sm-50 px-md-0"},d.a.createElement(p.l,{container:!0,spacing:32,className:"my-0"},d.a.createElement(p.l,{item:!0,xs:12,sm:12,md:10,lg:9,className:"py-0 mx-auto"},d.a.createElement(p.l,{container:!0,spacing:32,className:"my-0"},d.a.createElement(p.l,{item:!0,xs:12,sm:12,md:6,lg:6,className:"py-0 mb-md-0 mb-30"},d.a.createElement(p.l,{container:!0,spacing:24,className:"iron-product-gallery my-0"},d.a.createElement(p.l,{item:!0,xs:3,sm:2,md:2,lg:2,className:"py-0"},d.a.createElement("div",{className:"product-gallery-nav"},w.image_gallery&&w.image_gallery.map(function(t,a){return d.a.createElement("div",{key:a,className:"product-gallery-item"},d.a.createElement("div",{className:"image-upload"},d.a.createElement("a",{href:"javascript:void(0)"},d.a.createElement("img",{src:t,alt:"product-item",height:"50"})),d.a.createElement("div",{className:"image-content d-flex justify-content-center align-items-center"},d.a.createElement(y.a,{withPreview:!0,accept:"image/*",name:"image-uploader-multiple",randomizeFilename:!0,storageRef:v.a.storage().ref("products"),onUploadStart:e.handleUploadStart,onUploadError:e.handleUploadError,onUploadSuccess:e.handleUploadSuccess,onProgress:e.handleProgress}))))}))),d.a.createElement(p.l,{item:!0,xs:9,sm:10,md:10,lg:10,className:"py-0"},d.a.createElement("div",{className:"preview-full-image"},d.a.createElement("div",{className:"iron-shadow product-gallery-item "},d.a.createElement("div",null,d.a.createElement("img",{src:w.Preview_Image.downloadURL}))))))),d.a.createElement(p.l,{item:!0,xs:12,sm:12,md:6,lg:6,className:"py-0"},d.a.createElement("div",{className:"detail-content"},d.a.createElement(f.b,{to:"/admin-panel/admin/products",className:"text-14 d-inline-block font-medium py-10 mb-10"},"Back to products"),d.a.createElement("form",{className:"product-values"},d.a.createElement("div",{className:"d-flex justify-content-start align-items-start mb-10"},d.a.createElement("i",{className:"zmdi zmdi-plus mr-10 primary-color pt-10 text-h4 "}),d.a.createElement(p.n,{defaultValue:"Add Product Name",name:"name",value:this.state.data.name,className:"text-capitalize add-product-input text-h3",inputProps:{"aria-label":"Name"},onChange:this.handleChange})),d.a.createElement("div",{className:"d-flex justify-content-start align-items-start mb-10"},d.a.createElement("i",{className:"zmdi zmdi-plus mr-10 primary-color pt-5 text-h5"}),d.a.createElement(p.n,{defaultValue:"Price",value:this.state.data.description,name:"description",className:"text-capitalize add-product-input text-h4 active-input",inputProps:{"aria-label":"price"},onChange:this.handleChange})),d.a.createElement("div",{className:"mb-10"},d.a.createElement("h6",{className:"text-14 mb-0 add-text"},"availability :"),d.a.createElement(p.e,{checked:!0,value:this.state.data.availability,name:"availability",onChange:this.handleChange})),d.a.createElement("div",{className:"mb-10"},d.a.createElement("h6",{className:"text-14 mb-0 add-text"},"category :"),d.a.createElement(p.s,{labelId:"demo-simple-select-label",name:"category",id:"demo-simple-select",value:this.state.data.category,onChange:this.handleChange},d.a.createElement(p.q,{value:"Gia Bathroom Furniture"},"Gia Bathroom Furniture"),d.a.createElement(p.q,{value:"Gold Bathroom Furniture"},"Gold Bathroom Furniture"),d.a.createElement(p.q,{value:"Gia Mobili Da Bango"},"Gia Mobili Da Bango"),d.a.createElement(p.q,{value:"Viole For Gold"},"Viole For Gold"))),d.a.createElement("div",{className:"mb-10"},d.a.createElement("h6",{className:"text-14 mb-0 add-text"},"product code :"),d.a.createElement(p.n,{defaultValue:"",value:this.state.data.productCode,name:"productCode",className:"text-capitalize add-product-input pl-30",inputProps:{"aria-label":"Description"},onChange:this.handleChange})),d.a.createElement("div",{className:"mb-10"},d.a.createElement("h6",{className:"text-14 mb-0 add-text"},"Description :"),d.a.createElement(p.n,{defaultValue:"",value:this.state.data.summary,name:"summary",className:"text-capitalize add-product-input pl-30",inputProps:{"aria-label":"Description"},onChange:this.handleChange})),d.a.createElement("div",{className:"mb-10"},d.a.createElement("h6",{className:"text-14 mb-0 add-text"},"color :"),d.a.createElement(p.n,{defaultValue:"",value:this.state.data.color,name:"color",className:"text-capitalize add-product-input pl-30",inputProps:{"aria-label":"Description"},onChange:this.handleChange}))),d.a.createElement("div",{className:"mb-sm-50 mb-20 detail-btns pl-25"},d.a.createElement(p.a,{className:"button btn-active btn-lg mr-15 mb-20 mb-sm-0",onClick:function(t){return e.submitData()}},"create"),d.a.createElement(p.a,{to:"/product-add",component:f.b,className:"button btn-base btn-lg mb-20 mb-sm-0",onClick:function(){e.setState({data:{}})}},"discard")),d.a.createElement("div",{className:"d-flex justify-content-start align-items-center pl-25"},d.a.createElement("span",{className:"d-inline-block mr-15 text-14"},"Share Now"),d.a.createElement("div",{className:"detail-product-share"},d.a.createElement(b.a,null)))))))))}}]),t}(d.a.Component);t.default=x},1201:function(e,t,a){"use strict";function n(){return o.a.createElement("div",null,o.a.createElement("ul",{className:"d-inline-block iron-social-icons mb-0"},o.a.createElement("li",null,o.a.createElement(l.k,{size:"small",variant:"round",component:i.b,to:"#"},o.a.createElement("i",{className:"zmdi zmdi-facebook"}))),o.a.createElement("li",null,o.a.createElement(l.k,{size:"small",variant:"round",component:i.b,to:"#"},o.a.createElement("i",{className:"zmdi zmdi-twitter"}))),o.a.createElement("li",null,o.a.createElement(l.k,{size:"small",variant:"round",component:i.b,to:"#"},o.a.createElement("i",{className:"zmdi zmdi-google"}))),o.a.createElement("li",null,o.a.createElement(l.k,{size:"small",variant:"round",component:i.b,to:"#"},o.a.createElement("i",{className:"zmdi zmdi-instagram"})))))}t.a=n;var r=a(1),o=a.n(r),i=a(26),l=a(98)},1269:function(e,t,a){e.exports=a(1270)},1270:function(e,t,a){var n=function(){return this}()||Function("return this")(),r=n.regeneratorRuntime&&Object.getOwnPropertyNames(n).indexOf("regeneratorRuntime")>=0,o=r&&n.regeneratorRuntime;if(n.regeneratorRuntime=void 0,e.exports=a(1271),r)n.regeneratorRuntime=o;else try{delete n.regeneratorRuntime}catch(e){n.regeneratorRuntime=void 0}},1271:function(e,t){!function(t){"use strict";function a(e,t,a,n){var o=t&&t.prototype instanceof r?t:r,i=Object.create(o.prototype),l=new p(n||[]);return i._invoke=s(e,a,l),i}function n(e,t,a){try{return{type:"normal",arg:e.call(t,a)}}catch(e){return{type:"throw",arg:e}}}function r(){}function o(){}function i(){}function l(e){["next","throw","return"].forEach(function(t){e[t]=function(e){return this._invoke(t,e)}})}function c(e){function t(a,r,o,i){var l=n(e[a],e,r);if("throw"!==l.type){var c=l.arg,s=c.value;return s&&"object"===typeof s&&y.call(s,"__await")?Promise.resolve(s.__await).then(function(e){t("next",e,o,i)},function(e){t("throw",e,o,i)}):Promise.resolve(s).then(function(e){c.value=e,o(c)},i)}i(l.arg)}function a(e,a){function n(){return new Promise(function(n,r){t(e,a,n,r)})}return r=r?r.then(n,n):n()}var r;this._invoke=a}function s(e,t,a){var r=P;return function(o,i){if(r===j)throw new Error("Generator is already running");if(r===k){if("throw"===o)throw i;return h()}for(a.method=o,a.arg=i;;){var l=a.delegate;if(l){var c=u(l,a);if(c){if(c===L)continue;return c}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if(r===P)throw r=k,a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);r=j;var s=n(e,t,a);if("normal"===s.type){if(r=a.done?k:O,s.arg===L)continue;return{value:s.arg,done:a.done}}"throw"===s.type&&(r=k,a.method="throw",a.arg=s.arg)}}}function u(e,t){var a=e.iterator[t.method];if(a===v){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=v,u(e,t),"throw"===t.method))return L;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return L}var r=n(a,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,L;var o=r.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=v),t.delegate=null,L):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,L)}function m(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function d(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function p(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(m,this),this.reset(!0)}function f(e){if(e){var t=e[E];if(t)return t.call(e);if("function"===typeof e.next)return e;if(!isNaN(e.length)){var a=-1,n=function t(){for(;++a<e.length;)if(y.call(e,a))return t.value=e[a],t.done=!1,t;return t.value=v,t.done=!0,t};return n.next=n}}return{next:h}}function h(){return{value:v,done:!0}}var v,g=Object.prototype,y=g.hasOwnProperty,b="function"===typeof Symbol?Symbol:{},E=b.iterator||"@@iterator",w=b.asyncIterator||"@@asyncIterator",x=b.toStringTag||"@@toStringTag",N="object"===typeof e,_=t.regeneratorRuntime;if(_)return void(N&&(e.exports=_));_=t.regeneratorRuntime=N?e.exports:{},_.wrap=a;var P="suspendedStart",O="suspendedYield",j="executing",k="completed",L={},U={};U[E]=function(){return this};var C=Object.getPrototypeOf,R=C&&C(C(f([])));R&&R!==g&&y.call(R,E)&&(U=R);var S=i.prototype=r.prototype=Object.create(U);o.prototype=S.constructor=i,i.constructor=o,i[x]=o.displayName="GeneratorFunction",_.isGeneratorFunction=function(e){var t="function"===typeof e&&e.constructor;return!!t&&(t===o||"GeneratorFunction"===(t.displayName||t.name))},_.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,i):(e.__proto__=i,x in e||(e[x]="GeneratorFunction")),e.prototype=Object.create(S),e},_.awrap=function(e){return{__await:e}},l(c.prototype),c.prototype[w]=function(){return this},_.AsyncIterator=c,_.async=function(e,t,n,r){var o=new c(a(e,t,n,r));return _.isGeneratorFunction(t)?o:o.next().then(function(e){return e.done?e.value:o.next()})},l(S),S[x]="Generator",S[E]=function(){return this},S.toString=function(){return"[object Generator]"},_.keys=function(e){var t=[];for(var a in e)t.push(a);return t.reverse(),function a(){for(;t.length;){var n=t.pop();if(n in e)return a.value=n,a.done=!1,a}return a.done=!0,a}},_.values=f,p.prototype={constructor:p,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=v,this.done=!1,this.delegate=null,this.method="next",this.arg=v,this.tryEntries.forEach(d),!e)for(var t in this)"t"===t.charAt(0)&&y.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=v)},stop:function(){this.done=!0;var e=this.tryEntries[0],t=e.completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){function t(t,n){return o.type="throw",o.arg=e,a.next=t,n&&(a.method="next",a.arg=v),!!n}if(this.done)throw e;for(var a=this,n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n],o=r.completion;if("root"===r.tryLoc)return t("end");if(r.tryLoc<=this.prev){var i=y.call(r,"catchLoc"),l=y.call(r,"finallyLoc");if(i&&l){if(this.prev<r.catchLoc)return t(r.catchLoc,!0);if(this.prev<r.finallyLoc)return t(r.finallyLoc)}else if(i){if(this.prev<r.catchLoc)return t(r.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<r.finallyLoc)return t(r.finallyLoc)}}}},abrupt:function(e,t){for(var a=this.tryEntries.length-1;a>=0;--a){var n=this.tryEntries[a];if(n.tryLoc<=this.prev&&y.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var r=n;break}}r&&("break"===e||"continue"===e)&&r.tryLoc<=t&&t<=r.finallyLoc&&(r=null);var o=r?r.completion:{};return o.type=e,o.arg=t,r?(this.method="next",this.next=r.finallyLoc,L):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),L},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.finallyLoc===e)return this.complete(a.completion,a.afterLoc),d(a),L}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.tryLoc===e){var n=a.completion;if("throw"===n.type){var r=n.arg;d(a)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,a){return this.delegate={iterator:f(e),resultName:t,nextLoc:a},"next"===this.method&&(this.arg=v),L}}}(function(){return this}()||Function("return this")())},1407:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function l(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function c(e){var t=/(?:\.([^.]+))?$/.exec(e);return null!=t&&null!=t[0]?t[0]:""}Object.defineProperty(t,"__esModule",{value:!0});var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},u=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),m=a(1),d=n(m),p=a(1408),f=n(p),h=a(1411),v=n(h),g=function(){return(0,f.default)()},y=function(e){function t(){var e,a,n,r;o(this,t);for(var l=arguments.length,c=Array(l),s=0;s<l;s++)c[s]=arguments[s];return a=n=i(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(c))),n.uploadTasks=[],n.handleFileSelection=function(e){for(var t=e.target.files,a=0;a<t.length;a++)n.startUpload(t[a])},r=a,i(n,r)}return l(t,e),u(t,[{key:"componentWillUnmount",value:function(){this.cancelRunningUploads()}},{key:"cancelRunningUploads",value:function(){for(;this.uploadTasks.length>0;){var e=this.uploadTasks.pop();"running"===e.snapshot.state&&e.cancel()}}},{key:"removeTask",value:function(e){for(var t=0;t<this.uploadTasks.length;t++)if(this.uploadTasks[t]===e)return void this.uploadTasks.splice(t,1)}},{key:"startUpload",value:function(e){var t=this,a=this.props,n=a.onUploadStart,r=a.onProgress,o=a.onUploadError,i=a.onUploadSuccess,l=a.storageRef,s=a.metadata,u=a.randomizeFilename,m=a.filename,d=void 0;d=m?"function"===typeof m?m(e):m:u?g():e.name,c(d)||(d+=c(e.name)),Promise.resolve().then(function(){return e.type.match(/image.*/)&&(t.props.maxWidth||t.props.maxHeight)?(0,v.default)(e,t.props.maxWidth,t.props.maxHeight):e}).then(function(e){var a=l.child(d).put(e,s);n&&n(e,a),a.on("state_changed",function(e){return r&&r(Math.round(100*e.bytesTransferred/e.totalBytes),a)},function(e){return o&&o(e,a)},function(){return t.removeTask(a),i&&i(a.snapshot.metadata.name,a)}),t.uploadTasks.push(a)})}},{key:"render",value:function(){var e=this.props,t=(e.storageRef,e.onUploadStart,e.onProgress,e.onUploadSuccess,e.onUploadError,e.randomizeFilename,e.metadata,e.filename,e.maxWidth,e.maxHeight,e.hidden),a=e.as,n=void 0===a?"input":a,o=r(e,["storageRef","onUploadStart","onProgress","onUploadSuccess","onUploadError","randomizeFilename","metadata","filename","maxWidth","maxHeight","hidden","as"]),i=t?Object.assign({},o.style,{width:"0.1px",height:"0.1px",opacity:0,overflow:"hidden",position:"absolute",zIndex:-1}):o.style;return d.default.createElement(n,s({type:"file",onChange:this.handleFileSelection},o,{style:i}))}}]),t}(m.Component);t.default=y},1408:function(e,t,a){function n(e,t,a){var n=t&&a||0;"string"==typeof e&&(t="binary"===e?new Array(16):null,e=null),e=e||{};var i=e.random||(e.rng||r)();if(i[6]=15&i[6]|64,i[8]=63&i[8]|128,t)for(var l=0;l<16;++l)t[n+l]=i[l];return t||o(i)}var r=a(1409),o=a(1410);e.exports=n},1409:function(e,t){var a="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(a){var n=new Uint8Array(16);e.exports=function(){return a(n),n}}else{var r=new Array(16);e.exports=function(){for(var e,t=0;t<16;t++)0===(3&t)&&(e=4294967296*Math.random()),r[t]=e>>>((3&t)<<3)&255;return r}}},1410:function(e,t){function a(e,t){var a=t||0,r=n;return[r[e[a++]],r[e[a++]],r[e[a++]],r[e[a++]],"-",r[e[a++]],r[e[a++]],"-",r[e[a++]],r[e[a++]],"-",r[e[a++]],r[e[a++]],"-",r[e[a++]],r[e[a++]],r[e[a++]],r[e[a++]],r[e[a++]],r[e[a++]]].join("")}for(var n=[],r=0;r<256;++r)n[r]=(r+256).toString(16).substr(1);e.exports=a},1411:function(e,t,a){"use strict";function n(e,t,a){return HTMLCanvasElement.prototype.toBlob||(0,o.default)(),new Promise(function(n,r){var o=new FileReader;o.onload=function(o){var i=new Image;i.onload=function(o){var l=document.createElement("canvas"),c=t||i.width,s=a||i.height;l.width=c,l.height=s;var u=c/i.width,m=s/i.height,d=Math.max(u,m),p=d*i.width,f=d*i.height,h=Math.min((s-f)/2,0),v=Math.min((c-p)/2,0),g=l.getContext("2d");if(!g)return r("Could not get the context of the canvas element");g.drawImage(i,v,h,p,f),l.toBlob(function(e){n(e)},e.type)},i.src=o.target.result},o.readAsDataURL(e)})}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n;var r=a(1412),o=function(e){return e&&e.__esModule?e:{default:e}}(r)},1412:function(e,t,a){"use strict";function n(){Object.defineProperty(HTMLCanvasElement.prototype,"toBlob",{value:function(e,t,a){for(var n=atob(this.toDataURL(t,a).split(",")[1]),r=n.length,o=new Uint8Array(r),i=0;i<r;i++)o[i]=n.charCodeAt(i);e(new Blob([o],{type:t||"image/png"}))}})}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n}});
//# sourceMappingURL=11.52824e51.chunk.js.map