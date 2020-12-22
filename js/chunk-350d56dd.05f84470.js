(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-350d56dd"],{"1da1":function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));r("d3b7");function n(t,e,r,n,o,a,s){try{var i=t[a](s),c=i.value}catch(u){return void r(u)}i.done?e(c):Promise.resolve(c).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,a){var s=t.apply(e,r);function i(t){n(s,o,a,i,c,"next",t)}function c(t){n(s,o,a,i,c,"throw",t)}i(void 0)}))}}},"22a7":function(t,e,r){},"28c9":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ChangePassword")},o=[],a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"back"},[r("Nav"),r("div",{staticClass:"changepassword"},[r("h1",[t._v("Change Password")]),r("form",{staticClass:"form",on:{submit:function(e){return e.preventDefault(),t.register(e)}}},[r("div",{staticClass:"textfields"},[r("label",{attrs:{for:"password"}},[t._v("Password: ")]),r("br"),r("input",{directives:[{name:"model",rawName:"v-model",value:t.userpassword,expression:"userpassword"}],attrs:{type:"password",placeholder:"Current password",id:"password"},domProps:{value:t.userpassword},on:{input:function(e){e.target.composing||(t.userpassword=e.target.value)}}}),r("br"),r("label",{attrs:{for:"newPassword"}},[t._v("New Password: ")]),r("br"),r("input",{directives:[{name:"model",rawName:"v-model",value:t.newPassword,expression:"newPassword"}],attrs:{type:"password",placeholder:"New password",id:"newPassword"},domProps:{value:t.newPassword},on:{input:function(e){e.target.composing||(t.newPassword=e.target.value)}}}),r("br"),r("label",{attrs:{for:"passwordRepeat"}},[t._v("Repeat New Password: ")]),r("br"),r("input",{directives:[{name:"model",rawName:"v-model",value:t.repeatPassword,expression:"repeatPassword"}],attrs:{type:"password",placeholder:"Repeat new password...",id:"passwordRepeat"},domProps:{value:t.repeatPassword},on:{input:function(e){e.target.composing||(t.repeatPassword=e.target.value)}}}),r("br"),r("p",[t._v("Requires: 6 characters, uppercase letter, lowercase letter, number")]),r("br")]),t._m(0)]),t.error.length?r("div",[r("ul",{staticClass:"no-bullets"},t._l(t.error,(function(e){return r("li",{key:e.id},[t._v(" "+t._s(e)+" ")])})),0)]):t._e()])],1)},s=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"button"},[r("button",{attrs:{type:"submit"}},[t._v("Change Password")])])}],i=(r("96cf"),r("1da1")),c=r("216c"),u=r("bc3a"),l=r.n(u),h={name:"ChangePassword",components:{Nav:c["a"]},data:function(){return{username:null,userpassword:null,newPassword:null,repeatPassword:null,error:[]}},created:function(){null===this.$store.state.user?this.$router.push("/login"):this.username=this.$store.state.user[1]},methods:{register:function(){this.error=[],this.userpassword||this.error.push("ERROR! User password required."),this.newPassword?this.validPass(this.newPassword)||(this.error.push("Password must contain at least one lowercase letter, one uppercase letter one number, and be longer than six characters."),console.log("Password is not valid")):this.error.push("ERROR! New password required."),this.repeatPassword?this.repeatPassword!==this.newPassword&&(this.error.push("Repeated password must match the with the new password."),console.log("Password is not valid")):this.error.push("ERROR! Password must be repeated."),0===this.error.length&&(console.log("Everything OK"),this.saveNewPasswordToDb())},validPass:function(t){var e=/^(?=.*[0-9]+.*)(?=.*[a-z]+.*)(?=.*[A-Z]+.*)[0-9a-zA-Z]{6,}$/;return e.test(t)},saveNewPasswordToDb:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:try{r="http://localhost:8081/backend/changepassword",console.log(r),l.a.post(r,{headers:{},username:t.username,userpassword:t.userpassword,newPassword:t.newPassword}).then((function(e){console.log(e),"Success"===e.data?t.error.push("Changing password complete!"):t.error.push("Something went wrong. Check your current password.")})).catch((function(t){console.log(t.response)}))}catch(n){console.log("Error in async: "+n)}case 1:case"end":return e.stop()}}),e)})))()}}},p=h,d=(r("9298"),r("2877")),f=Object(d["a"])(p,a,s,!1,null,"ef10997e",null),w=f.exports,v={name:"ChangePasswordView",components:{ChangePassword:w}},g=v,m=Object(d["a"])(g,n,o,!1,null,"408b41e1",null);e["default"]=m.exports},9298:function(t,e,r){"use strict";r("22a7")},"96cf":function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",i=o.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(G){c=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var o=e&&e.prototype instanceof v?e:v,a=Object.create(o.prototype),s=new k(n||[]);return a._invoke=L(t,r,s),a}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(G){return{type:"throw",arg:G}}}t.wrap=u;var h="suspendedStart",p="suspendedYield",d="executing",f="completed",w={};function v(){}function g(){}function m(){}var y={};y[a]=function(){return this};var b=Object.getPrototypeOf,P=b&&b(b(C([])));P&&P!==r&&n.call(P,a)&&(y=P);var x=m.prototype=v.prototype=Object.create(y);function _(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){function r(o,a,s,i){var c=l(t[o],t,a);if("throw"!==c.type){var u=c.arg,h=u.value;return h&&"object"===typeof h&&n.call(h,"__await")?e.resolve(h.__await).then((function(t){r("next",t,s,i)}),(function(t){r("throw",t,s,i)})):e.resolve(h).then((function(t){u.value=t,s(u)}),(function(t){return r("throw",t,s,i)}))}i(c.arg)}var o;function a(t,n){function a(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(a,a):a()}this._invoke=a}function L(t,e,r){var n=h;return function(o,a){if(n===d)throw new Error("Generator is already running");if(n===f){if("throw"===o)throw a;return j()}r.method=o,r.arg=a;while(1){var s=r.delegate;if(s){var i=N(s,r);if(i){if(i===w)continue;return i}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===h)throw n=f,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=d;var c=l(t,e,r);if("normal"===c.type){if(n=r.done?f:p,c.arg===w)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=f,r.method="throw",r.arg=c.arg)}}}function N(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator["return"]&&(r.method="return",r.arg=e,N(t,r),"throw"===r.method))return w;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return w}var o=l(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,w;var a=o.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,w):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,w)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function R(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function C(t){if(t){var r=t[a];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,s=function r(){while(++o<t.length)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return s.next=s}}return{next:j}}function j(){return{value:e,done:!0}}return g.prototype=x.constructor=m,m.constructor=g,g.displayName=c(m,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,c(t,i,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},_(E.prototype),E.prototype[s]=function(){return this},t.AsyncIterator=E,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var s=new E(u(e,r,n,o),a);return t.isGeneratorFunction(r)?s:s.next().then((function(t){return t.done?t.value:s.next()}))},_(x),c(x,i,"Generator"),x[a]=function(){return this},x.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){while(e.length){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=C,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(R),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return i.type="throw",i.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var s=this.tryEntries[a],i=s.completion;if("root"===s.tryLoc)return o("end");if(s.tryLoc<=this.prev){var c=n.call(s,"catchLoc"),u=n.call(s,"finallyLoc");if(c&&u){if(this.prev<s.catchLoc)return o(s.catchLoc,!0);if(this.prev<s.finallyLoc)return o(s.finallyLoc)}else if(c){if(this.prev<s.catchLoc)return o(s.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<s.finallyLoc)return o(s.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var s=a?a.completion:{};return s.type=t,s.arg=e,a?(this.method="next",this.next=a.finallyLoc,w):this.complete(s)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),w},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),R(r),w}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;R(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:C(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),w}},t}(t.exports);try{regeneratorRuntime=n}catch(o){Function("r","regeneratorRuntime = r")(n)}}}]);
//# sourceMappingURL=chunk-350d56dd.05f84470.js.map