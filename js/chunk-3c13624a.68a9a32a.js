(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3c13624a"],{"0ccb":function(t,e,r){var n=r("50c4"),o=r("1148"),a=r("1d80"),i=Math.ceil,s=function(t){return function(e,r,s){var c,u,l=String(a(e)),h=l.length,p=void 0===s?" ":String(s),f=n(r);return f<=h||""==p?l:(c=f-h,u=o.call(p,i(c/p.length)),u.length>c&&(u=u.slice(0,c)),t?l+u:u+l)}};t.exports={start:s(!1),end:s(!0)}},1148:function(t,e,r){"use strict";var n=r("a691"),o=r("1d80");t.exports="".repeat||function(t){var e=String(o(this)),r="",a=n(t);if(a<0||a==1/0)throw RangeError("Wrong number of repetitions");for(;a>0;(a>>>=1)&&(e+=e))1&a&&(r+=e);return r}},"1da1":function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));r("d3b7");function n(t,e,r,n,o,a,i){try{var s=t[a](i),c=s.value}catch(u){return void r(u)}s.done?e(c):Promise.resolve(c).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,a){var i=t.apply(e,r);function s(t){n(i,o,a,s,c,"next",t)}function c(t){n(i,o,a,s,c,"throw",t)}s(void 0)}))}}},"4d90":function(t,e,r){"use strict";var n=r("23e7"),o=r("0ccb").start,a=r("9a0c");n({target:"String",proto:!0,forced:a},{padStart:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},"79c6":function(t,e,r){"use strict";r("7d91")},"7d91":function(t,e,r){},"96cf":function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(A){c=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var o=e&&e.prototype instanceof g?e:g,a=Object.create(o.prototype),i=new O(n||[]);return a._invoke=L(t,r,i),a}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(A){return{type:"throw",arg:A}}}t.wrap=u;var h="suspendedStart",p="suspendedYield",f="executing",d="completed",v={};function g(){}function m(){}function w(){}var y={};y[a]=function(){return this};var b=Object.getPrototypeOf,x=b&&b(b(k([])));x&&x!==r&&n.call(x,a)&&(y=x);var E=w.prototype=g.prototype=Object.create(y);function _(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function R(t,e){function r(o,a,i,s){var c=l(t[o],t,a);if("throw"!==c.type){var u=c.arg,h=u.value;return h&&"object"===typeof h&&n.call(h,"__await")?e.resolve(h.__await).then((function(t){r("next",t,i,s)}),(function(t){r("throw",t,i,s)})):e.resolve(h).then((function(t){u.value=t,i(u)}),(function(t){return r("throw",t,i,s)}))}s(c.arg)}var o;function a(t,n){function a(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(a,a):a()}this._invoke=a}function L(t,e,r){var n=h;return function(o,a){if(n===f)throw new Error("Generator is already running");if(n===d){if("throw"===o)throw a;return j()}r.method=o,r.arg=a;while(1){var i=r.delegate;if(i){var s=P(i,r);if(s){if(s===v)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===h)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=f;var c=l(t,e,r);if("normal"===c.type){if(n=r.done?d:p,c.arg===v)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=d,r.method="throw",r.arg=c.arg)}}}function P(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator["return"]&&(r.method="return",r.arg=e,P(t,r),"throw"===r.method))return v;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=l(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,v;var a=o.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,v):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function N(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(N,this),this.reset(!0)}function k(t){if(t){var r=t[a];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function r(){while(++o<t.length)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}return{next:j}}function j(){return{value:e,done:!0}}return m.prototype=E.constructor=w,w.constructor=m,m.displayName=c(w,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,c(t,s,"GeneratorFunction")),t.prototype=Object.create(E),t},t.awrap=function(t){return{__await:t}},_(R.prototype),R.prototype[i]=function(){return this},t.AsyncIterator=R,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new R(u(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},_(E),c(E,s,"Generator"),E[a]=function(){return this},E.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){while(e.length){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=k,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(S),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return s.type="throw",s.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],s=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,v):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),S(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;S(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:k(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),v}},t}(t.exports);try{regeneratorRuntime=n}catch(o){Function("r","regeneratorRuntime = r")(n)}},"9a0c":function(t,e,r){var n=r("342f");t.exports=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(n)},e846:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("Register")},o=[],a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"back"},[r("Nav"),r("div",{staticClass:"register"},[r("h1",[t._v("REGISTER")]),r("form",{staticClass:"form",on:{submit:function(e){return e.preventDefault(),t.register(e)}}},[r("label",{attrs:{for:"username"}},[t._v("Name: ")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],attrs:{type:"text",placeholder:"Username",id:"username"},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}}),r("p",[t._v("Must begin with uppercase letter. Must contain at least two letters. No special characters.")]),r("br"),r("label",{attrs:{for:"password"}},[t._v("Password: ")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.userpassword,expression:"userpassword"}],attrs:{type:"password",placeholder:"AxAx6x",id:"password"},domProps:{value:t.userpassword},on:{input:function(e){e.target.composing||(t.userpassword=e.target.value)}}}),r("p",[t._v("Requires: 6 characters, uppercase letter, lowercase letter, number. No special characters.")]),r("br"),r("label",{attrs:{for:"passwordRepeat"}},[t._v("Repeat New Password: ")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.repeatPassword,expression:"repeatPassword"}],attrs:{type:"password",placeholder:"Repeat password...",id:"passwordRepeat"},domProps:{value:t.repeatPassword},on:{input:function(e){e.target.composing||(t.repeatPassword=e.target.value)}}}),r("p",[t._v("Requires: 6 characters, uppercase letter, lowercase letter, number")]),t._m(0)]),t.error.length?r("div",[r("ul",{staticClass:"no-bullets"},t._l(t.error,(function(e){return r("li",{key:e.id},[t._v(" "+t._s(e)+" ")])})),0)]):t._e()])],1)},i=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"button"},[r("button",{attrs:{type:"submit"}},[t._v("Register")])])}],s=(r("4d90"),r("96cf"),r("1da1")),c=r("216c"),u=r("bc3a"),l=r.n(u),h={name:"registration",components:{Nav:c["a"]},data:function(){return{username:null,userpassword:null,repeatPassword:null,error:[]}},methods:{register:function(){this.error=[],this.username?this.validName(this.username)||(this.error.push("Name must begin with uppercase letter. Must contain at least two characters. NO SPECIAL CHARACTERS."),console.log("Username is not valid")):this.error.push("ERROR! Username required."),this.userpassword?this.validPass(this.userpassword)||(this.error.push("Password must contain at least one lowercase letter, one uppercase letter one number, and be longer than six characters. NO SPECIAL CHARACTERS."),console.log("Password is not valid")):this.error.push("ERROR! User password required."),this.repeatPassword?this.repeatPassword!==this.userpassword&&(this.error.push("Repeated password must match the with the password."),console.log("Password is not valid")):this.error.push("ERROR! Password must be repeated."),0===this.error.length&&(console.log("Everything OK"),this.saveUserToDatabase())},validName:function(t){var e=/^(?=.*[A-Z]+.*)[0-9A-Za-z]{2,}$/;return e.test(t)},validPass:function(t){var e=/^(?=.*[0-9]+.*)(?=.*[a-z]+.*)(?=.*[A-Z]+.*)[0-9a-zA-Z]{6,}$/;return e.test(t)},getDate:function(){var t=new Date,e=String(t.getDate()).padStart(2,"0"),r=String(t.getMonth()+1).padStart(2,"0"),n=t.getFullYear();return r+"-"+e+"-"+n},saveUserToDatabase:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:try{r="http://localhost:8081/backend/register",console.log(r),l.a.post(r,{username:t.username,userpassword:t.userpassword,registered:t.getDate()}).then((function(e){console.log(e),"Success"===e.data?(t.error.push("Registration complete!"),t.$router.push("/login")):t.error.push("Username has been taken, please use a different username.")})).catch((function(t){console.log(t.response)}))}catch(n){console.log("Error in async: "+n)}case 1:case"end":return e.stop()}}),e)})))()}}},p=h,f=(r("79c6"),r("2877")),d=Object(f["a"])(p,a,i,!1,null,"6a62d3c2",null),v=d.exports,g={name:"RegisterView",components:{Register:v}},m=g,w=Object(f["a"])(m,n,o,!1,null,"0614077e",null);e["default"]=w.exports}}]);
//# sourceMappingURL=chunk-3c13624a.68a9a32a.js.map