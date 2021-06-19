(this["webpackJsonp@scandipwa/scandipwa"]=this["webpackJsonp@scandipwa/scandipwa"]||[]).push([[12],{409:function(t,e,n){"use strict";n.r(e);var a=n(599);n.d(e,"default",(function(){return a.a}))},435:function(t,e,n){"use strict";var a=n(155);n.d(e,"a",(function(){return a.a}))},496:function(t,e,n){"use strict";(function(t,a){var o=n(3),r=n(4),i=n(5),c=n(6),u=n(8),s=function(t){Object(i.a)(n,t);var e=Object(c.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(r.a)(n,[{key:"getSendContactFormMutation",value:function(t){var e=new u.a("contactForm");return this._addSendContactFormMutationArguments(e,t),e.addFieldList(this._getSendContactFormMutationResponse()),e}},{key:"getContactPageConfigQuery",value:function(){return new u.a("contactPageConfig").addFieldList(this._getContactPageConfigFields())}},{key:"_addSendContactFormMutationArguments",value:function(t,e){return t.addArgument("contact","ContactForm!",e)}},{key:"_getSendContactFormMutationResponse",value:function(){return["message"]}},{key:"_getContactPageConfigFields",value:function(){return["enabled"]}}]),n}(t());Object.defineProperty(s,"name",{value:"ContactFormQuery"});var d=a(s,"Query/ContactForm");e.a=new d}).call(this,n(10).default,n(7).default)},599:function(t,e,n){"use strict";(function(t,a,o,r){var i=n(19),c=n(3),u=n(4),s=n(5),d=n(6),l=n(1),f=n.n(l),p=n(15),m=n(13),b=n(496),g=n(57),v=n(34),h=n(29),C=n(28),y=n(60),P=n(844),k=n.e(13).then(n.bind(null,396)),j=t((function(t){return{device:t.ConfigReducer.device}}),"Route/ContactPage/Container/mapStateToProps"),O=t((function(t){return{showNotification:function(e,n){return t(Object(C.d)(e,n))},updateMeta:function(e){return t(Object(g.b)(e))},setHeaderState:function(e){return t(Object(v.c)(h.b,e))},updateBreadcrumbs:function(e){k.then((function(n){return n.default.update(e,t)}))}}}),"Route/ContactPage/Container/mapDispatchToProps"),F=n(12).checkBEMProps,S=function(t){Object(s.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(c.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).state={isLoading:!1,isEnabled:!1},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.updateMeta(),this.updateBreadcrumbs(),this.updateHeader(),this.getEnabledState()}},{key:"updateMeta",value:function(){var t=this.props.updateMeta;t({title:o("Contact Us")})}},{key:"updateBreadcrumbs",value:function(){var t=this.props.updateBreadcrumbs;t([{url:"/contact-us",name:o("Contact Us")}])}},{key:"updateHeader",value:function(){(0,this.props.setHeaderState)({name:m.i,title:o("Contact Us")})}},{key:"getEnabledState",value:function(){var t=this,e=this.props.showNotification;this.setState({isLoading:!0}),this.fetchData(b.a.getContactPageConfigQuery(),(function(e){var n=e.contactPageConfig,a=(n=void 0===n?{}:n).enabled;t.setState({isEnabled:a,isLoading:!1})}),(function(n){var a=Object(i.a)(n,1)[0];t.setState({isLoading:!1}),e(a.message)}))}},{key:"render",value:function(){return F(r,P.a,Object.assign({},this.state,this.props))}}]),n}(a(y.a));S.propTypes={updateMeta:f.a.func.isRequired,showNotification:f.a.func.isRequired},Object.defineProperty(S,"name",{value:"ContactPageContainer"});var M=t(S,"Route/ContactPage/Container");e.a=Object(p.b)(j,O)(M)}).call(this,n(7).default,n(10).default,n(22).default,n(0))},600:function(t,e,n){"use strict";(function(t,a,o){var r=n(3),i=n(4),c=n(9),u=n(5),s=n(6),d=n(0),l=n(15),f=n(846),p=n.e(13).then(n.bind(null,967)),m=t((function(t){return{isLoading:t.ContactFormReducer.isLoading}}),"Component/ContactForm/Container/mapStateToProps"),b=t((function(t){return{sendMessage:function(e){return p.then((function(n){return n.default.prepareRequest(e,t)}))}}}),"Component/ContactForm/Container/mapDispatchToProps"),g=n(12).checkBEMProps,v=function(t){Object(u.a)(n,t);var e=Object(s.a)(n);function n(){var t;Object(r.a)(this,n);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(t=e.call.apply(e,[this].concat(o))).containerFunctions={onFormSubmit:t.onFormSubmit.bind(Object(c.a)(t))},t}return Object(i.a)(n,[{key:"onFormSubmit",value:function(t){(0,this.props.sendMessage)(t)}},{key:"render",value:function(){return g(o,f.a,Object.assign({},this.props,this.containerFunctions))}}]),n}(a(d.PureComponent));Object.defineProperty(v,"name",{value:"ContactFormContainer"});var h=t(v,"Component/ContactForm/Container");e.a=Object(l.b)(m,b)(h)}).call(this,n(7).default,n(10).default,n(0))},844:function(t,e,n){"use strict";(function(t,a,o,r){var i=n(3),c=n(4),u=n(5),s=n(6),d=n(0),l=n(65),f=n(845),p=n(49),m=n(75),b=n(158),g=(n(38),n(848)),v=(n(849),n(12).checkBEMProps),h=function(t){Object(u.a)(n,t);var e=Object(s.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(c.a)(n,[{key:"renderHeading",value:function(){return this.props.device.isMobile?null:v(a,"h1",{block:"ContactPage",elem:"Heading"},o("Contact Us"))}},{key:"renderCmsBlock",value:function(){var t=window.contentConfiguration.contact_us_content,e=(t=void 0===t?{}:t).contact_us_cms_block,n=void 0===e?g.a:e;return v(a,l.a,{identifier:n})}},{key:"renderPage",value:function(){return v(a,p.a,{label:"Contact Page"},this.renderHeading(),v(a,"div",{block:"ContactPage",elem:"ColumnWrapper"},v(a,"div",{block:"ContactPage",elem:"Column",mods:{isContent:!0}},this.renderCmsBlock()),v(a,"div",{block:"ContactPage",elem:"Column"},v(a,f.a,null))))}},{key:"renderNoPage",value:function(){return v(a,b.a,null)}},{key:"renderPageContents",value:function(){var t=this.props,e=t.isEnabled,n=t.isLoading;return e?this.renderPage():n?null:this.renderNoPage()}},{key:"render",value:function(){var t=this.props.isLoading;return v(a,"main",{block:"ContactPage"},v(a,m.a,{isLoading:t}),this.renderPageContents())}}]),n}(t(d.PureComponent));h.defaultProps={isLoading:!1},Object.defineProperty(h,"name",{value:"ContactPage"});var C=r(h,"Route/ContactPage/Component");e.a=C}).call(this,n(10).default,n(0),n(22).default,n(7).default)},845:function(t,e,n){"use strict";var a=n(600);n.d(e,"a",(function(){return a.a}))},846:function(t,e,n){"use strict";(function(t,a,o,r){var i=n(3),c=n(4),u=n(9),s=n(20),d=n(18),l=n(5),f=n(6),p=n(1),m=n.n(p),b=n(435),g=n(75),v=(n(847),n(12).checkBEMProps),h=function(t){Object(l.a)(n,t);var e=Object(f.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).onFormSuccess=t.onFormSuccess.bind(Object(u.a)(t)),t}return Object(c.a)(n,[{key:"fieldMap",get:function(){return{name:{validation:["notEmpty"],label:a("Name")},email:{validation:["notEmpty","email"],label:a("Email")},telephone:{label:a("Phone number")},message:{type:"textarea",validation:["notEmpty"],label:a("What's on your mind?")}}}},{key:"onFormSuccess",value:function(t){(0,this.props.onFormSubmit)(t)}},{key:"renderActions",value:function(){var t=this.props.isLoading;return v(o,o.Fragment,null,v(o,g.a,{isLoading:t}),v(o,"button",{type:"submit",block:"Button"},a("Send Your message")))}},{key:"render",value:function(){return v(o,"div",{block:"ContactForm"},Object(s.a)(Object(d.a)(n.prototype),"render",this).call(this))}}]),n}(t(b.a));h.propTypes={isLoading:m.a.bool,onFormSubmit:m.a.func.isRequired},h.defaultProps={isLoading:!1},Object.defineProperty(h,"name",{value:"ContactForm"});var C=r(h,"Component/ContactForm/Component");e.a=C}).call(this,n(10).default,n(22).default,n(0),n(7).default)},847:function(t,e,n){},848:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var a="contact_us_page_block"},849:function(t,e,n){}}]);
//# sourceMappingURL=contact.e932dcfb.chunk.js.map