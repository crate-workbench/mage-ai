(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3605],{55729:function(e,n,t){"use strict";t.d(n,{Z:function(){return M}});var i=t(82394),r=t(75582),o=t(82684),c=t(69864),l=t(71180),s=t(15338),a=t(97618),u=t(55485),d=t(85854),p=t(48670),f=t(65956),h=t(82359),m=t(88543),g=t(38276),j=t(30160),v=t(17488),y=t(69650),x=t(12468),b=t(35686),Z=t(77417),O=t(38626),P=t(44897),_=t(42631),w=t(70515),S=O.default.div.withConfig({displayName:"indexstyle__ContainerStyle",componentId:"sc-1b0w59t-0"})(["border-radius:","px;padding:","px;",""],_.n_,w.cd*w.iI,(function(e){return"\n    background-color: ".concat((e.theme.background||P.Z.background).codeArea,";\n  ")})),k=t(72473),N=t(72191),C=t(70320),I=t(81728),E=t(42122),H=t(72619),z=t(23780),D=t(28598);function L(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function A(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?L(Object(t),!0).forEach((function(n){(0,i.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):L(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var M=function(e){var n,t,O,P=e.cancelButtonText,_=e.contained,L=e.header,M=e.onCancel,F=e.onSaveSuccess,R=e.rootProject,B=(0,z.VI)(null,{},[],{uuid:"settings/workspace/preferences"}),T=(0,r.Z)(B,1)[0],X=(0,o.useState)(null),J=X[0],Q=X[1],U=(0,o.useState)(!1),V=U[0],W=U[1],Y=(0,Z.Z)(),q=Y.fetchProjects,G=Y.project,K=Y.projectPlatformActivated,$=Y.rootProject,ee=(0,o.useMemo)((function(){return R?$:G}),[G,$,R]),ne=ee||{},te=ne.name,ie=ne.openai_api_key,re=ne.project_uuid,oe=(0,o.useMemo)((function(){return"demo.mage.ai"===window.location.hostname}),[]);(0,o.useEffect)((function(){J||Q(ee)}),[ee,J]);var ce=(0,c.Db)(b.ZP.projects.useUpdate(te),{onSuccess:function(e){return(0,H.wD)(e,{callback:function(e){var n,t=e.project;q(),Q(t),W(!1),(0,C.hY)(null===t||void 0===t||null===(n=t.features)||void 0===n?void 0:n[h.d.LOCAL_TIMEZONE]),F&&(null===F||void 0===F||F(t))},onErrorCallback:function(e,n){return T({errors:n,response:e})}})}}),le=(0,r.Z)(ce,2),se=le[0],ae=le[1].isLoading,ue=(0,o.useCallback)((function(e){return se({project:A(A({},e),{},{root_project:R})})}),[R,se]),de=(0,D.jsxs)(D.Fragment,{children:[L,(0,D.jsxs)(f.Z,{noPadding:!0,children:[(0,D.jsxs)(g.Z,{p:w.cd,children:[(0,D.jsx)(g.Z,{mb:1,children:(0,D.jsx)(d.Z,{level:5,children:"Project name"})}),(0,D.jsx)(j.ZP,{default:!0,monospace:!0,children:te})]}),(0,D.jsx)(s.Z,{light:!0}),(0,D.jsxs)(g.Z,{p:w.cd,children:[(0,D.jsx)(g.Z,{mb:1,children:(0,D.jsx)(d.Z,{level:5,children:"Project UUID"})}),(0,D.jsx)(j.ZP,{default:!!re,monospace:!0,muted:!re,children:re||"Not required"})]}),(0,D.jsx)(s.Z,{light:!0}),(0,D.jsx)(g.Z,{p:w.cd,children:(0,D.jsxs)(u.ZP,{alignItems:"center",justifyContent:"space-between",children:[(0,D.jsxs)(a.Z,{flexDirection:"column",children:[(0,D.jsx)(g.Z,{mb:1,children:(0,D.jsx)(d.Z,{level:5,children:"Help improve Mage"})}),(0,D.jsxs)(j.ZP,{default:!0,children:["Please contribute usage statistics to help improve the developer experience for you and everyone in the community. Learn more ",(0,D.jsx)(p.Z,{href:"https://docs.mage.ai/contributing/statistics/overview",openNewWindow:!0,children:"here"}),"."]})]}),(0,D.jsx)(g.Z,{mr:w.cd}),(0,D.jsx)(y.Z,{compact:!0,checked:null===J||void 0===J?void 0:J.help_improve_mage,onCheck:function(){return Q((function(e){return A(A({},e),{},{help_improve_mage:!(null!==J&&void 0!==J&&J.help_improve_mage)})}))}})]})})]}),(0,D.jsx)(g.Z,{mt:w.HN}),(0,D.jsx)(m.Z,{description:"Global settings that are applied to all pipelines in this project.",title:"Pipeline settings",children:(0,D.jsx)(m.S,{description:"Every time a trigger is created or updated in this pipeline, automatically persist it in code.",title:"Save triggers in code automatically",toggleSwitch:{checked:!(null===J||void 0===J||null===(n=J.pipelines)||void 0===n||null===(t=n.settings)||void 0===t||null===(O=t.triggers)||void 0===O||!O.save_in_code_automatically),onCheck:function(e){return Q((function(n){var t,i,r,o,c,l;return A(A({},n),{},{pipelines:A(A({},null===n||void 0===n?void 0:n.pipelines),{},{settings:A(A({},null===n||void 0===n||null===(t=n.pipelines)||void 0===t?void 0:t.settings),{},{triggers:A(A({},null===n||void 0===n||null===(i=n.pipelines)||void 0===i||null===(r=i.settings)||void 0===r?void 0:r.triggers),{},{save_in_code_automatically:e(null===n||void 0===n||null===(o=n.pipelines)||void 0===o||null===(c=o.settings)||void 0===c||null===(l=c.triggers)||void 0===l?void 0:l.save_in_code_automatically)})})})})}))}}})}),(0,D.jsx)(g.Z,{mt:w.HN}),(0,D.jsx)(f.Z,{noPadding:!0,overflowVisible:!0,children:(0,D.jsxs)(g.Z,{p:w.cd,children:[(0,D.jsx)(g.Z,{mb:1,children:(0,D.jsx)(d.Z,{level:5,children:"Features"})}),Object.entries((0,E.gR)(null===J||void 0===J?void 0:J.features,[{}])||{}).map((function(e,n){var t=(0,r.Z)(e,2),o=t[0],c=t[1],l=K&&!R&&(null===ee||void 0===ee?void 0:ee.features_override)&&o in(null===ee||void 0===ee?void 0:ee.features_override);return(0,D.jsx)(g.Z,{mt:0===n?0:1,children:(0,D.jsxs)(u.ZP,{alignItems:"center",children:[(0,D.jsxs)(a.Z,{flex:1,children:[(0,D.jsx)(y.Z,{disabled:l,checked:!!c,compact:!0,onCheck:function(){return Q((function(e){return A(A({},e),{},{features:A(A({},null===J||void 0===J?void 0:J.features),{},(0,i.Z)({},o,!c))})}))}}),(0,D.jsx)(g.Z,{mr:w.cd}),(0,D.jsxs)(a.Z,{children:[(0,D.jsx)(j.ZP,{default:!c,monospace:!0,children:(0,I.vg)(o)}),o===h.d.LOCAL_TIMEZONE&&(0,D.jsx)(g.Z,{ml:1,children:(0,D.jsx)(x.Z,A({},C.EB))})]})]}),l&&(0,D.jsx)(j.ZP,{monospace:!0,muted:!0,small:!0,children:"overridden"})]})},o)}))]})}),(0,D.jsx)(g.Z,{mt:w.HN}),(0,D.jsx)(f.Z,{noPadding:!0,children:(0,D.jsxs)(g.Z,{p:w.cd,children:[(0,D.jsx)(g.Z,{mb:1,children:(0,D.jsx)(d.Z,{level:5,children:"OpenAI"})}),ie&&!V?(0,D.jsxs)(u.ZP,A(A({},u.A0),{},{children:[(0,D.jsx)(j.ZP,{default:!0,monospace:!0,children:"API key: ********"}),(0,D.jsx)(l.ZP,{iconOnly:!0,onClick:function(){return W(!0)},secondary:!0,title:"Edit",children:(0,D.jsx)(k.I8,{size:N.bL})})]})):(0,D.jsx)(v.Z,{disabled:oe,label:oe?"Entering API key is disabled on demo":"API key",monospace:!0,onChange:function(e){return Q((function(n){return A(A({},n),{},{openai_api_key:e.target.value})}))},primary:!0,setContentOnMount:!0,value:(null===J||void 0===J?void 0:J.openai_api_key)||""})]})}),(0,D.jsx)(g.Z,{mt:w.HN}),(0,D.jsxs)(u.ZP,{alignItems:"center",children:[(0,D.jsx)(l.ZP,{loading:ae,onClick:function(){ue({features:null===J||void 0===J?void 0:J.features,help_improve_mage:null===J||void 0===J?void 0:J.help_improve_mage,openai_api_key:null===J||void 0===J?void 0:J.openai_api_key,pipelines:null===J||void 0===J?void 0:J.pipelines})},primary:!0,children:"Save project settings"}),M&&(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(g.Z,{mr:w.cd}),(0,D.jsx)(l.ZP,{onClick:M,secondary:!0,children:P||"Cancel"})]})]})]});return _?(0,D.jsx)(S,{children:de}):de}},46568:function(e,n,t){"use strict";var i=t(82394),r=t(26304),o=(t(82684),t(33591)),c=t(28598),l=["children","fullHeight","gutter","style"];function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){(0,i.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}n.Z=function(e){var n=e.children,t=e.fullHeight,i=e.gutter,s=e.style,u=void 0===s?{}:s,d=(0,r.Z)(e,l),p=a({},u);return i&&(p.paddingLeft=i,p.paddingRight=p.paddingLeft),t&&(p.height="100%"),(0,c.jsx)(o.Col,a(a({},d),{},{style:p,children:n}))}},82682:function(e,n,t){"use strict";var i=t(82394),r=t(26304),o=t(82684),c=t(33591),l=t(28598),s=["children","fullHeight","gutter","justifyContent","style"];function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){(0,i.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}n.Z=function(e){var n=e.children,t=e.fullHeight,i=e.gutter,a=e.justifyContent,d=e.style,p=void 0===d?{}:d,f=(0,r.Z)(e,s),h=u({},p);return i&&(h.marginLeft=-1*i,h.marginRight=h.marginLeft),t&&(h.height="100%"),(0,l.jsx)(c.Row,u(u({},f),{},{justifyContent:a,style:h,children:o.Children.map(n,(function(e,n){return e&&o.cloneElement(e,{gutter:i,key:n})}))}))}},85854:function(e,n,t){"use strict";var i,r,o,c,l,s,a,u,d=t(82394),p=t(26304),f=t(26653),h=t(38626),m=t(33591),g=t(44897),j=t(95363),v=t(61896),y=t(30160),x=t(70515),b=t(38276),Z=t(28598),O=["children","condensed","inline","level","marketing","spacingBelow"];function P(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function _(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?P(Object(t),!0).forEach((function(n){(0,d.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):P(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var w=(0,h.css)([""," margin:0;"," "," "," "," "," "," "," "," "," "," "," "," "," ",""],y.IH,(function(e){return e.color&&"\n    color: ".concat(e.color,"\n  ")}),(function(e){return e.yellow&&"\n    color: ".concat((e.theme.accent||g.Z.accent).yellow,";\n  ")}),(function(e){return e.center&&"\n    text-align: center;\n  "}),(function(e){return!e.monospace&&0===Number(e.weightStyle)&&"\n    font-family: ".concat(j.iI,";\n  ")}),(function(e){return!e.monospace&&1===Number(e.weightStyle)&&"\n    font-family: ".concat(j.LX,";\n  ")}),(function(e){return!e.monospace&&2===Number(e.weightStyle)&&"\n    font-family: ".concat(j.LX,";\n  ")}),(function(e){return!e.monospace&&3===Number(e.weightStyle)&&"\n    font-family: ".concat(j.ry,";\n  ")}),(function(e){return!e.monospace&&4===Number(e.weightStyle)&&"\n    font-family: ".concat(j.YC,";\n  ")}),(function(e){return!e.monospace&&5===Number(e.weightStyle)&&"\n    font-family: ".concat(j.nF,";\n  ")}),(function(e){return!e.monospace&&(6===Number(e.weightStyle)||e.bold)&&"\n    font-family: ".concat(j.nF,";\n  ")}),(function(e){return!e.monospace&&7===Number(e.weightStyle)&&"\n    font-family: ".concat(j.nF,";\n  ")}),(function(e){return!e.monospace&&8===Number(e.weightStyle)&&"\n    font-family: ".concat(j.nF,";\n  ")}),(function(e){return e.lineHeightAuto&&"\n    line-height: normal !important;\n  "}),(function(e){return e.strikethrough&&"\n    text-decoration: line-through;\n  "})),S=h.default.div.withConfig({displayName:"Headline__HeadlineContainerStyle",componentId:"sc-12jzt2e-0"})(["",""],(function(e){return"\n    color: ".concat((e.theme.content||g.Z.content).active,";\n  ")})),k=h.default.h1.withConfig({displayName:"Headline__H1HeroStyle",componentId:"sc-12jzt2e-1"})([""," font-size:42px;line-height:56px;"," "," ",""],w,m.media.md(i||(i=(0,f.Z)(["\n    ","\n  "])),v.aQ),m.media.lg(r||(r=(0,f.Z)(["\n    ","\n  "])),v.aQ),m.media.xl(o||(o=(0,f.Z)(["\n    ","\n  "])),v.aQ)),N=h.default.h1.withConfig({displayName:"Headline__H1Style",componentId:"sc-12jzt2e-2"})([""," ",""],w,v.MJ),C=h.default.h1.withConfig({displayName:"Headline__H1MarketingStyle",componentId:"sc-12jzt2e-3"})([""," "," "," "," "," ",""],w,m.media.xs(c||(c=(0,f.Z)(["\n    font-size: ","px;\n    line-height: ","px;\n  "])),6*x.iI,7*x.iI),m.media.sm(l||(l=(0,f.Z)(["\n    font-size: ","px;\n    line-height: ","px;\n  "])),6*x.iI,7*x.iI),m.media.md(s||(s=(0,f.Z)(["\n    font-size: ","px;\n    line-height: ","px;\n  "])),6*x.iI,7*x.iI),m.media.lg(a||(a=(0,f.Z)(["\n    font-size: ","px;\n    line-height: ","px;\n  "])),6*x.iI,7*x.iI),m.media.xl(u||(u=(0,f.Z)(["\n    font-size: ","px;\n    line-height: ","px;\n  "])),6*x.iI,7*x.iI)),I=h.default.h2.withConfig({displayName:"Headline__H2Style",componentId:"sc-12jzt2e-4"})([""," ",""],w,v.BL),E=h.default.h3.withConfig({displayName:"Headline__H3Style",componentId:"sc-12jzt2e-5"})([""," font-size:24px;line-height:32px;"],w),H=h.default.h4.withConfig({displayName:"Headline__H4Style",componentId:"sc-12jzt2e-6"})([""," font-size:20px;line-height:28px;"],w),z=h.default.h5.withConfig({displayName:"Headline__H5Style",componentId:"sc-12jzt2e-7"})([""," font-size:18px;line-height:26px;"],w),D=h.default.span.withConfig({displayName:"Headline__SpanStyle",componentId:"sc-12jzt2e-8"})([""," "," "," "," ",""],w,(function(e){return 1===e.level&&"\n    ".concat(v.MJ,"\n  ")}),(function(e){return 2===e.level&&"\n    ".concat(v.BL,"\n  ")}),(function(e){return 3===e.level&&"\n    font-size: 24px;\n    line-height: 32px;\n  "}),(function(e){return 4===e.level&&"\n    font-size: 20px;\n    line-height: 28px;\n  "})),L=function(e){var n,t=e.children,i=e.condensed,r=e.inline,o=e.level,c=e.marketing,l=e.spacingBelow,s=(0,p.Z)(e,O);r?n=D:0===Number(o)?n=k:1===Number(o)?n=c?C:N:2===Number(o)?n=I:3===Number(o)?n=E:4===Number(o)?n=H:5===Number(o)&&(n=z);var a=(0,Z.jsxs)(n,_(_({},s),{},{level:o,children:[l&&(0,Z.jsx)(b.Z,{mb:i?2:3,children:t}),!l&&t]}));return r?a:(0,Z.jsx)(S,{children:a})};L.defaultProps={level:3,weightStyle:6},n.Z=L},70791:function(e,n,t){"use strict";t.r(n);var i=t(77837),r=t(38860),o=t.n(r),c=t(46568),l=t(55729),s=t(93808),a=t(82682),u=t(28274),d=t(38276),p=t(70515),f=t(24755),h=t(28598);function m(){return(0,h.jsx)(u.Z,{uuidItemSelected:f.B2.PREFERENCES,uuidWorkspaceSelected:f.Pl.PROJECT_PLATFORM,children:(0,h.jsx)(d.Z,{p:p.cd,children:(0,h.jsx)(a.Z,{justifyContent:"center",children:(0,h.jsx)(c.Z,{xl:8,xxl:6,children:(0,h.jsx)(l.Z,{rootProject:!0})})})})})}m.getInitialProps=(0,i.Z)(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{});case 1:case"end":return e.stop()}}),e)}))),n.default=(0,s.Z)(m)},8071:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/settings/platform/preferences",function(){return t(70791)}])}},function(e){e.O(0,[2678,1154,844,3494,1557,2512,4296,8432,9774,2888,179],(function(){return n=8071,e(e.s=n);var n}));var n=e.O();_N_E=n}]);