(this["webpackJsonpcryptools-sd"]=this["webpackJsonpcryptools-sd"]||[]).push([[0],{149:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(11),c=a.n(r),s=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,220)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),n(e),r(e),c(e),s(e)}))},o=a(212),i=a(33),l=a(13),d=a(96),u=a(206),b=a(213),j=a(14),p=a(78),h=a(3),O=a(17),m=a(46),y=a(111),g=a(184),f=a(2),x=Object(g.a)((function(e){return{root:{display:"flex",width:"100%",marginBottom:e.spacing(2)}}})),v=function(e){var t=e.block,a=x();return Object(f.jsx)(n.Fragment,{children:t&&Object(f.jsx)(m.b,{draggableId:t.id,index:e.index,children:function(n){return Object(f.jsx)(y.a,Object(h.a)(Object(h.a)(Object(h.a)(Object(h.a)({ref:n.innerRef},e),n.draggableProps),n.dragHandleProps),{},{className:a.root,children:t.content}))}})})},C=Object(g.a)((function(e){return{root:{display:"flex",padding:e.spacing(2,2,0,2),width:"100%",height:"100%","& > div":{width:"100%"}}}})),k=function(e){var t=C();return Object(f.jsx)(y.a,Object(h.a)(Object(h.a)({},e),{},{className:t.root,elevation:0,children:Object(f.jsx)(m.c,{droppableId:e.column.id,children:function(t){return Object(f.jsxs)("div",Object(h.a)(Object(h.a)({ref:t.innerRef},t.droppableProps),{},{children:[e.blocks&&e.blocks.map((function(e,t){return Object(f.jsx)(v,{block:e,index:t},e&&e.id||t)})),t.placeholder]}))}})}))},w=Object(g.a)((function(e){return{root:{display:"flex",padding:e.spacing(1)}}})),I=function(e){var t=w(),a=e.children;return Object(f.jsx)("div",{className:t.root,children:a})},B=a(199),F="boards/SET_BLOCKS",S="boards/UPDATE_COLUMN_ORDER",E="boards/UPDATE_COLUMN_BLOCKS",A=a(39),M=a(192),T=a(218),N=a(195),P=a(216),D=a(214),R=a(197),U="settings/TOGGLEDRAWER",W="settings/SETACTIVEMENU",G="settings/SET_CONFIGURATIONS",K="settings/SET_USER_CURRENCIES",L="settings/SET_USER_MATCHES",_="settings/SET_UPDATE_STATUS",z=a(188),H=a(189),Y=a(190),q=a(191),V=function(e){var t=e.open,a=e.closeCallback,n=e.content,r=e.children,c=e.title;return Object(f.jsx)("div",{children:Object(f.jsxs)(z.a,{open:t,onClose:function(){a(!t)},"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[Object(f.jsx)(H.a,{id:"alert-dialog-title",children:c}),Object(f.jsx)(Y.a,{children:Object(f.jsxs)(q.a,{id:"alert-dialog-description",children:[n,r]})})]})})},J=Object(g.a)((function(e){return{root:{width:"100%",padding:e.spacing(2),textAlign:"center",background:"#F2F2F2",borderTop:"solid 8px #999999"},textFields:{width:"100%",marginBottom:e.spacing(2)},formControl:{minWidth:120,width:"100%",marginBottom:e.spacing(2)},selectEmpty:{marginTop:e.spacing(2)}}})),X=Object(l.b)((function(e){return{settings:e.settings}}),(function(e){return{updateConfigurations:function(t){return e(function(e){return{type:G,params:e}}(t))}}}))((function(e){var t=e.settings,a=e.updateConfigurations,r=J(),c=Object(n.useState)({walletAddress:null,apiKey:null,localCurrency:"PHP",farmingCurrency:"SKILL",capitalCurrency:"PHP"}),s=Object(O.a)(c,2),o=s[0],i=s[1],l=Object(n.useState)(!1),d=Object(O.a)(l,2),u=d[0],b=d[1],j=Object(n.useState)(!1),p=Object(O.a)(j,2),m=p[0],y=p[1];return Object(n.useEffect)((function(){t&&!t.userConfig?a(o):i(t.userConfig)}),[]),Object(n.useEffect)((function(){a(o)}),[o,a]),Object(f.jsxs)("div",{className:r.root,children:[Object(f.jsx)(A.a,{variant:"button",display:"block",gutterBottom:!0,children:"Configuration"}),Object(f.jsxs)(A.a,{variant:"caption",component:"div",align:"left",gutterBottom:!0,children:["Why the app needs your wallet address? ",Object(f.jsx)(M.a,{href:"#",onClick:function(e){e.preventDefault(),y(!0)},children:"Expand Details"})]}),Object(f.jsx)(T.a,{label:"Wallet Address",variant:"outlined",placeholder:"0xaBcd123...",size:"small",className:r.textFields,error:!o.walletAddress,helperText:o.walletAddress?"":"Wallet Address required.",onChange:function(e){var t=e.target.value;i((function(e){return Object(h.a)(Object(h.a)({},e),{},{walletAddress:t})}))},value:o&&o.walletAddress?o.walletAddress:""}),Object(f.jsxs)(A.a,{variant:"caption",component:"div",align:"left",gutterBottom:!0,children:["What is API Key and why do the app need it? ",Object(f.jsx)(M.a,{href:"#",onClick:function(e){e.preventDefault(),b(!0)},children:"Expand Details"})]}),Object(f.jsx)(T.a,{label:"API Key",variant:"outlined",size:"small",className:r.textFields,error:!o.apiKey,helperText:o.apiKey?"":"API Key is required.",onChange:function(e){var t=e.target.value;i((function(e){return Object(h.a)(Object(h.a)({},e),{},{apiKey:t})}))},value:o&&o.apiKey?o.apiKey:""}),Object(f.jsx)(T.a,{label:"Local Currency ID",variant:"outlined",size:"small",className:r.textFields,error:!o.localCurrency,helperText:o.localCurrency?"":"Currency for Localized currency display",onChange:function(e){var t=e.target.value;i((function(e){return Object(h.a)(Object(h.a)({},e),{},{localCurrency:t})}))},value:o&&o.localCurrency?o.localCurrency:"",placeholder:"PHP"}),Object.keys(t.userCurrencies).length>0&&Object(f.jsxs)(n.Fragment,{children:[Object(f.jsxs)(N.a,{className:r.formControl,variant:"outlined",size:"small",children:[Object(f.jsx)(P.a,{shrink:!0,id:"capital-currency-selector-label",children:"Currency Used for Capital"}),Object(f.jsx)(D.a,{labelId:"capital-currency-selector-label",id:"capital-currency-selector",value:t.userConfig.capitalCurrency||"",onChange:function(e){var t=e.target.value;i((function(e){return Object(h.a)(Object(h.a)({},e),{},{capitalCurrency:t})}))},className:r.selectEmpty,children:Object.keys(t.userCurrencies).map((function(e){return Object(f.jsx)(R.a,{value:e,children:e},e)}))})]}),Object(f.jsxs)(N.a,{className:r.formControl,variant:"outlined",size:"small",children:[Object(f.jsx)(P.a,{shrink:!0,id:"farming-currency-selector-label",children:"Currency You are Farming"}),Object(f.jsx)(D.a,{labelId:"farming-currency-selector-label",id:"farming-currency-selector",value:t.userConfig.farmingCurrency||"",onChange:function(e){var t=e.target.value;i((function(e){return Object(h.a)(Object(h.a)({},e),{},{farmingCurrency:t})}))},className:r.selectEmpty,children:Object.keys(t.userCurrencies).map((function(e){return Object(f.jsx)(R.a,{value:e,children:e},e)}))})]})]}),Object(f.jsx)(V,{open:u,closeCallback:function(){return b(!1)},title:"What is API Key and why do the app need it?",children:Object(f.jsxs)("ol",{style:{padding:"0 20px 20px 10px"},children:[Object(f.jsx)("li",{children:Object(f.jsx)(A.a,{variant:"body1",gutterBottom:!0,children:"We are using Binance Smart Chain Developer API to fetch community data from their server using your wallet address."})}),Object(f.jsx)("li",{children:Object(f.jsxs)(A.a,{variant:"body1",gutterBottom:!0,children:["Your wallet information and data we use on this app is also publicly accessible from the ",Object(f.jsx)(M.a,{href:"https://bscscan.com/",color:"primary",target:"_blank",rel:"noopener",children:"BSCChain Website"}),". We are only accessing it through API so we can have a more customized view of the data we need."]})}),Object(f.jsx)("li",{children:Object(f.jsx)(A.a,{variant:"body1",gutterBottom:!0,children:"This API Key has nothing to do with anything private on your wallet. If you still don't trust the use of this app, please feel free to leave."})}),Object(f.jsx)("li",{children:Object(f.jsxs)(A.a,{variant:"body1",gutterBottom:!0,children:["To create your personal API Key, please create an account on ",Object(f.jsx)(M.a,{href:"https://bscscan.com/register",target:"_blank",rel:"noopener",children:"BSCScan here"})," and create an API Key here ",Object(f.jsx)(M.a,{href:"https://bscscan.com/myapikey",color:"primary",target:"_blank",rel:"noopener",children:"ClientPortal->MyApiKey"})," area of BSCScan."]})}),Object(f.jsx)("li",{children:Object(f.jsxs)(A.a,{variant:"body1",gutterBottom:!0,style:{color:"red"},children:[Object(f.jsx)("strong",{children:"Important Note:"})," This key has nothing to do with your wallet security keys. Never use your Wallet security key on this field as this field never hides the API Key field since this is a public data viewer only.  ",Object(f.jsx)("br",{}),Object(f.jsx)("br",{}),Object(f.jsx)("strong",{children:"This app will neither require nor ask your seed phrase or any security details of your wallet. Please keep your security details private. "})]})})]})}),Object(f.jsx)(V,{open:m,closeCallback:function(){return y(!1)},title:"Why the app needs your wallet address?",children:Object(f.jsxs)("ol",{style:{padding:"0 20px 20px 10px"},children:[Object(f.jsx)("li",{children:Object(f.jsx)(A.a,{variant:"body1",gutterBottom:!0,children:"We are using Binance Smart Chain Developer API to fetch community data from their server using your wallet address."})}),Object(f.jsx)("li",{children:Object(f.jsxs)(A.a,{variant:"body1",gutterBottom:!0,children:["Your wallet information and data we use on this app is also publicly accessible from the ",Object(f.jsx)(M.a,{href:"https://bscscan.com/",color:"primary",target:"_blank",rel:"noopener",children:"BSCChain Website"}),". We are only accessing it through API so we can have a more customized view of the data we need."]})}),Object(f.jsx)("li",{children:Object(f.jsx)(A.a,{variant:"body1",gutterBottom:!0,children:"If you still don't trust the use of this app, please feel free to leave."})}),Object(f.jsx)("li",{children:Object(f.jsxs)(A.a,{variant:"body1",gutterBottom:!0,style:{color:"red"},children:[Object(f.jsx)("strong",{children:"Important Note:"})," This field has nothing to do with your wallet security keys. Never use your Wallet security key on this field as this field never hides the value since this is a public data viewer only.  ",Object(f.jsx)("br",{}),Object(f.jsx)("br",{}),Object(f.jsx)("strong",{children:"This app will neither require nor ask your seed phrase or any security details of your wallet. Please keep your security details private. "})]})})]})})]})})),Q=Object(g.a)((function(e){return{root:{width:"100%",padding:e.spacing(2),textAlign:"center",background:"#E2E3E3",borderTop:"solid 8px #999999"}}})),Z=function(e){var t=e.title,a=void 0===t?"Block Title":t,n=e.value,r=e.color,c=e.style,s=void 0===c?{}:c,o=Q();return Object(f.jsxs)("div",{style:s,className:o.root,children:[Object(f.jsx)(A.a,{variant:"button",display:"block",gutterBottom:!0,children:a}),Object(f.jsx)(A.a,{variant:"h3",display:"block",style:{color:r||"#999999",fontWeight:500},gutterBottom:!0,children:n||0})]})},$=a(198),ee=Object(g.a)((function(e){return{root:{width:"100%",padding:e.spacing(2),textAlign:"center",background:"#F2F2F2",borderTop:"solid 8px #999999"},textFields:{width:"100%",marginBottom:e.spacing(2),textAlign:"center","& p":{fontSize:"3rem"}},inputField:{fontSize:"3rem",fontWeight:500,"& input":{textAlign:"center"}}}})),te=Object(l.b)((function(e){return{settings:e.settings}}),(function(e){return{updateUserCurrencies:function(t){return e(function(e){return{type:K,params:e}}(t))}}}))((function(e){var t=e.settings,a=e.title,r=e.updateUserCurrencies,c=e.currency,s=e.currencyId,o=e.style,i=e.color,l=ee(),d=Object(n.useState)({}),u=Object(O.a)(d,2),b=u[0],p=u[1];return Object(n.useEffect)((function(){t&&!t.userCurrencies?(0===b.length&&b[c],p((function(e){return Object(h.a)(Object(h.a)({},e),{},Object(j.a)({},c,Object(h.a)(Object(h.a)({},e[c]),{},{value:"",id:s})))})),r(b)):p(t.userCurrencies)}),[]),Object(n.useEffect)((function(){r(b)}),[b,r]),Object(f.jsxs)("div",{style:o,className:l.root,children:[Object(f.jsx)(A.a,{variant:"button",display:"block",gutterBottom:!0,children:a}),Object(f.jsx)(T.a,{size:"small",className:l.textFields,onChange:function(e){var t=e.target.value;p((function(e){return Object(h.a)(Object(h.a)({},e),{},Object(j.a)({},c,Object(h.a)(Object(h.a)({},e[c]),{},{value:t,id:s})))}))},value:b&&b[c]&&b[c].value?b[c].value:"",InputProps:{className:l.inputField,style:{color:i},type:"number",endAdornment:Object(f.jsx)($.a,{position:"end",className:l.inputAdornment,children:"".concat(c)})}})]})})),ae=a(50),ne=a.n(ae),re=a(22),ce=a.n(re),se=a(101),oe=a.n(se),ie=a(24),le=a(200),de=a(202),ue=a(203),be=a(205),je=a(102),pe=a.n(je),he=a(201),Oe=a(204),me=Object(g.a)((function(e){return{root:{width:"100%",padding:e.spacing(2),textAlign:"center",background:"#F2F2F2",borderTop:"solid 8px #999999"},textFields:{width:"100%",marginBottom:e.spacing(2),textAlign:"center","& p":{fontSize:"1.2rem"}},inputField:{fontSize:"1.5rem",fontWeight:500,"& input":{textAlign:"center"}}}})),ye=Object(l.b)((function(e){return{settings:e.settings}}),(function(e){return{updateUserMatches:function(t){return e(function(e){return{type:L,params:e}}(t))}}}))((function(e){var t=e.settings,a=e.title,r=e.style,c=e.color,s=e.updateUserMatches,o=me(),i=Object(ie.a)(),l={win:0,loss:0,match:28,remaining:0,rewardsGained:0,dateTime:null},d=Object(n.useState)({userMatches:{},todayMatches:{}}),u=Object(O.a)(d,2),b=u[0],p=u[1],m=Object(n.useState)(!1),y=Object(O.a)(m,2),g=y[0],x=y[1],v=pe()().format("MMM DD YYYY");Object(n.useEffect)((function(){t&&0===Object.keys(t.todayMatches).length?p((function(e){return Object(h.a)(Object(h.a)({},e),{},{todayMatches:l})})):p((function(e){return Object(h.a)(Object(h.a)({},e),{},{todayMatches:t.todayMatches})}))}),[]);var C=Object(n.useState)(0),k=Object(O.a)(C,2),w=k[0],I=k[1],F=Object(n.useState)(0),S=Object(O.a)(F,2),E=S[0],M=S[1];Object(n.useEffect)((function(){if(b&&Object.keys(b.todayMatches).length>0){var e={target:"todaysMatches",todayMatches:b.todayMatches};s(e),I(parseInt((b.todayMatches.match||0)-((b.todayMatches.win||0)+(b.todayMatches.loss||0))))}}),[b]),Object(n.useEffect)((function(){p((function(e){return Object(h.a)(Object(h.a)({},e),{},{todayMatches:Object(h.a)(Object(h.a)({},e.todayMatches),{},{remaining:w})})}))}),[w]);return Object(f.jsxs)("div",{style:r,className:o.root,children:[Object(f.jsx)(A.a,{variant:"button",display:"block",gutterBottom:!0,children:a}),Object.keys(b.todayMatches).length>0&&t&&Object.keys(t.todayMatches).length>0&&Object(f.jsxs)(B.a,{container:!0,spacing:2,children:[Object(f.jsxs)(B.a,{item:!0,xs:6,children:[Object(f.jsx)(T.a,{variant:"outlined",size:"small",className:o.textFields,onChange:function(e){var t=parseInt(e.target.value);p((function(e){return Object(h.a)(Object(h.a)({},e),{},{todayMatches:Object(h.a)(Object(h.a)({},e.todayMatches),{},{win:t})})}))},value:b&&b.todayMatches&&b.todayMatches.win?b.todayMatches.win:"",placeholder:"Wins",InputProps:{className:o.inputField,style:{color:c},type:"number"}}),Object(f.jsx)(T.a,{variant:"outlined",size:"small",className:o.textFields,onChange:function(e){var t=parseInt(e.target.value);p((function(e){return Object(h.a)(Object(h.a)({},e),{},{todayMatches:Object(h.a)(Object(h.a)({},e.todayMatches),{},{loss:t})})}))},value:b&&b.todayMatches&&b.todayMatches.loss?b.todayMatches.loss:"",style:{marginBottom:0},placeholder:"Losses",InputProps:{className:o.inputField,style:{color:c},type:"number"}})]}),Object(f.jsxs)(B.a,{item:!0,xs:6,children:[Object(f.jsx)(T.a,{variant:"outlined",size:"small",className:o.textFields,value:w>0?w:0,label:"Remaining Matches",InputProps:{className:o.inputField},readOnly:!0}),Object(f.jsx)(T.a,{variant:"outlined",size:"small",className:o.textFields,label:"Win Reward",onChange:function(e){var t=e.target.value;M(t)},value:E,InputProps:{className:o.inputField,style:{color:c},endAdornment:Object(f.jsx)($.a,{position:"end",className:o.inputAdornment,children:Object(f.jsx)(le.a,{onClick:function(){E>0&&(p((function(e){return Object(h.a)(Object(h.a)({},e),{},{todayMatches:Object(h.a)(Object(h.a)({},e.todayMatches),{},{rewardsGained:parseFloat(ce()(t.todayMatches.rewardsGained)+(ce()(E)||0))})})})),M(0))},children:Object(f.jsx)(he.a,{})})})}})]})]}),Object(f.jsxs)(de.a,{style:{display:"flex",justifyContent:"space-between",padding:0},children:[Object(f.jsx)(ue.a,{variant:"contained",disableElevation:!0,onClick:function(){p((function(e){return Object(h.a)(Object(h.a)({},e),{},{todayMatches:l})}))},children:"Reset"}),Object(f.jsxs)("div",{children:[Object(f.jsx)(A.a,{variant:"caption",children:"Rewards Gained Today"}),Object(f.jsx)(A.a,{variant:"h4",children:ce()(b.todayMatches&&b.todayMatches.rewardsGained||0).format("0,0.0000")})]}),Object(f.jsx)(ue.a,{variant:"contained",color:"primary",disableElevation:!0,onClick:function(){return x(!g)},children:Object(f.jsx)(Oe.a,{})})]}),Object(f.jsxs)(z.a,{open:g,onClose:function(){return x(!g)},"aria-labelledby":"confirm-save","aria-describedby":"confirm-save-match",children:[Object(f.jsx)(H.a,{id:"confirm-save",children:"Yey! You are done for the day!"}),Object(f.jsx)(Y.a,{children:Object(f.jsx)(q.a,{id:"confirm-save-match",children:"This will save your today's match and you can view it later in your match history (Coming Soon Feature). You can still edit and save multiple times today. Past records will no longer be editable to keep the integrity of the matches. "})}),Object(f.jsxs)(be.a,{style:{display:"flex",justifyContent:"space-between",padding:i.spacing(2)},children:[Object(f.jsx)(ue.a,{onClick:function(){return x(!g)},color:"default",children:"Cancel"}),Object(f.jsx)(ue.a,{onClick:function(){var e={target:"userMatches",userMatches:Object(j.a)({},v,Object(h.a)(Object(h.a)({},b.todayMatches),{},{dateTime:Date.now()}))};s(e),x(!g)},variant:"contained",color:"primary",disableElevation:!0,disableFocusRipple:!0,children:Object(f.jsx)(Oe.a,{})})]})]})]})})),ge=Object(l.b)((function(e){return{boards:e.boards,userConfig:e.settings.userConfig,userCurrencies:e.settings.userCurrencies}}),(function(e){return{updateBlocks:function(t){return e(function(e){return{type:F,params:e}}(t))},updateColumnBlocks:function(t){return e(function(e){return{type:E,params:e}}(t))}}}))((function(e){var t=e.boards,a=e.updateBlocks,r=e.userConfig,c=e.updateColumnBlocks,s=e.userCurrencies,o=Object(n.useState)({currencies:{},userWalletTransactions:{},userBinanceBalance:{}}),i=Object(O.a)(o,2),l=i[0],d=i[1],u=Object(n.useState)(!1),b=Object(O.a)(u,2),y=b[0],g=b[1];Object(n.useEffect)((function(){if(!y&&r&&r.walletAddress&&r.apiKey&&r.farmingCurrency&&r.localCurrency&&s&&Object.keys(s).length>0){var e="https://api.coingecko.com/api/v3/coins/markets?vs_currency="+(s[r.localCurrency]&&s[r.localCurrency].id)+"&ids=binancecoin,"+(s[r.farmingCurrency]&&s[r.farmingCurrency].id),t="https://api.bscscan.com/api?module=account&action=txlist&address="+r.walletAddress+"&startblock=1&endblock=99999999&sort=desc&apikey="+r.apiKey,a="https://api.bscscan.com/api?module=account&action=balance&address="+r.walletAddress+"&tag=latest&apikey="+r.apiKey,n=ne.a.get(e),c=ne.a.get(t),o=ne.a.get(a);g(!0),ne.a.all([n,c,o]).then(ne.a.spread((function(){var e=arguments.length<=0?void 0:arguments[0],t=arguments.length<=1?void 0:arguments[1],a=arguments.length<=2?void 0:arguments[2];d((function(n){return{currencies:Object(h.a)({},e.data),userWalletTransactions:Object(h.a)({},t.data),userBinanceBalance:Object(h.a)({},a.data)}})),g(!1)}))).catch((function(e){console.error(e),g(!1)}))}}),[r,s]);var x,v=r&&s&&s[r.capitalCurrency]?s[r.capitalCurrency]:"PHP",C=5e9*oe.a.filter(l.userWalletTransactions&&l.userWalletTransactions.result,(function(e){return"0x39bea96e13453ed52a734b6aceed4c41f57b2271"===e.to})).reduce((function(e,t){return parseInt(t.gasUsed)+e}),0)/1e18,w=l.currencies[1]&&l.currencies[1].current_price,F=l.userBinanceBalance.result/1e18,S=l.currencies[0]&&l.currencies[0].current_price,E=(l.currencies[0]&&l.currencies[0].current_price)*F,A=(r&&s[r.farmingCurrency]&&s[r.farmingCurrency].value)*w,M=S*C,T=A-(v&&parseInt(v.value)+M),N=A-M,P=parseInt(v.value)+M,D={currencyExchangeValue:ce()(w||0).format("0,0.00"),userBNBBalance:ce()(F||0).format("0,0.0000"),userBNBBalanceExchange:ce()(E||0).format("0,0.00"),currencyEarningExchange:ce()(A||0).format("0,0.00"),totalTransactions:ce()(C||0).format("0,0.000"),totalTransactionsInExchange:ce()(M||0).format("0,0.00"),ROIGasVSCapitalAndSumTxns:ce()(T||0).format("0,0.00"),ROICalcGasFee:ce()(N||0).format("0,0.00"),TotalInitialInvestmentPeso:ce()(P||0).format("0,0.00")};x={blocks:{DailyMatches:{id:"DailyMatches",content:Object(f.jsx)(ye,{title:"Daily Matches",color:"#480032",style:{borderColor:"#FF449F",backgroundColor:"#DFEEEA"}})},ROICalcGasFee:{id:"ROICalcGasFee",content:Object(f.jsx)(Z,{title:"ROI vs Gas Fees",value:"".concat(r&&r.localCurrency.toUpperCase()," ").concat(D.ROICalcGasFee),color:N>0?"#6AA84F":"#E06666",style:{borderColor:"#E06666",backgroundColor:"#FFF6F4"}})},SkillEarningsPeso:{id:"SkillEarningsPeso",content:Object(f.jsx)(Z,{title:"Skill Earnings in Peso",value:"".concat(r&&r.localCurrency.toUpperCase()," ").concat(D.currencyEarningExchange),color:"#674EA7",style:{borderColor:"#674EA7",backgroundColor:"#D9D2E9"}})},SkillPhp:{id:"SkillPhp",content:Object(f.jsx)(Z,{title:"SKILL in PHP",value:"".concat(r&&r.localCurrency.toUpperCase()," ").concat(D.currencyExchangeValue),color:"#B45F06",style:{borderColor:"#B45F06",backgroundColor:"#FFF2CC"}})},BNBBalance:{id:"BNBBalance",content:Object(f.jsx)(Z,{title:"BNB Balance",value:D.userBNBBalance,color:"#8E7118",style:{borderColor:"#8E7118",backgroundColor:"#FFF2CC"}})},BNBBalancePHP:{id:"BNBBalancePHP",content:Object(f.jsx)(Z,{title:"BNB Balance in PHP",value:"".concat(r&&r.localCurrency.toUpperCase()," ").concat(D.userBNBBalanceExchange),color:"#6AA84F",style:{borderColor:"#6AA84F",backgroundColor:"#D9EAD3"}})},GasFeesTxns:{id:"GasFeesTxns",content:Object(f.jsx)(Z,{title:"Total CB Gas Fees (Last 1k Txns)",value:"".concat(l.currencies[0]&&l.currencies[0].symbol.toUpperCase()||""," ").concat(D.totalTransactions),color:"#A64D79",style:{borderColor:"#A64D79",backgroundColor:"#EAD1DC"}})},GasFeesTxnsPeso:{id:"GasFeesTxnsPeso",content:Object(f.jsx)(Z,{title:"Total CB Gas Fees in PHP",value:"".concat(r&&r.localCurrency.toUpperCase()," ").concat(D.totalTransactionsInExchange),color:"#A64D79",style:{borderColor:"#A64D79",backgroundColor:"#EAD1DC"}})},ROIGasVSCapitalAndSumTxns:{id:"ROIGasVSCapitalAndSumTxns",content:Object(f.jsx)(Z,{title:"ROI vs Capital and Total Txns",value:"".concat(r&&r.localCurrency.toUpperCase()," ").concat(D.ROIGasVSCapitalAndSumTxns),color:T>0?"#6AA84F":"#E06666",style:{borderColor:"#1155CC",backgroundColor:"#FFF6F4"}})},TotalInitialInvestmentPeso:{id:"TotalInitialInvestmentPeso",content:Object(f.jsx)(Z,{title:"Total Initial Investment in PHP",value:"".concat(r&&r.localCurrency.toUpperCase()," ").concat(D.TotalInitialInvestmentPeso),color:"#4285F4",style:{borderColor:"#4285F4",backgroundColor:"#FFFFFF"}})},ConfigBlock:{id:"ConfigBlock",content:Object(f.jsx)(X,{})},SkillEarnings:{id:"SkillEarnings",content:Object(f.jsx)(te,{title:"Skill Earnings",currency:"SKILL",currencyId:"cryptoblades",color:"#674EA7",style:{borderColor:"#674EA7",backgroundColor:"#D9D2E9"}})},CapitalInvestment:{id:"CapitalInvestment",content:Object(f.jsx)(te,{title:"Capital Invested in PHP",currency:"PHP",currencyId:"php",color:"#4285F4",style:{borderColor:"#38761D",backgroundColor:"#f2f2f2"}})}}},Object(n.useEffect)((function(){var e=t.columns["column-1"],a=Object.keys(x.blocks);if(t&&t.columns){var n=[];Object.keys(t.columns).map((function(e){return n=[].concat(Object(p.a)(n),Object(p.a)(t.columns[e].blockIds)),!1})),n.length!==a.length&&(Object.keys(t.columns).map((function(t){return R(Object(h.a)(Object(h.a)({},e),{},{id:t,blockIds:[]})),!1})),R(Object(h.a)(Object(h.a)({},e),{},{blockIds:a})))}t&&t.columns&&!t.columns["column-1"].blockIds.length&&R(Object(h.a)(Object(h.a)({},e),{},{blockIds:a}))}),[]);var R=function(e){a(e)},U=function(e){c(e)};return Object(f.jsx)(m.a,{onDragEnd:function(e){var a,n=e.destination,r=e.source;if(n&&(n.droppableId!==r.droppableId||n.index!==r.index)){var c=t.columns[r.droppableId],s=t.columns[n.droppableId];if(c!==s){var o=Array.from(c.blockIds),i=o.splice(r.index,1)[0],l=Object(h.a)(Object(h.a)({},c),{},{blockIds:o}),d=Array.from(s.blockIds);d.splice(n.index,0,i);var u=Object(h.a)(Object(h.a)({},s),{},{blockIds:d}),b=(a={},Object(j.a)(a,l.id,l),Object(j.a)(a,u.id,u),a);U(b)}else{var p=Array.from(c.blockIds),O=p.splice(r.index,1)[0];p.splice(n.index,0,O);var m=Object(h.a)(Object(h.a)({},c),{},{blockIds:p});R(m)}}},children:Object(f.jsx)(I,{children:Object(f.jsx)(B.a,{container:!0,spacing:1,children:t&&t.columnOrder&&t.columnOrder.map((function(e){var a=t.columns[e],n=a.blockIds.map((function(e){return x.blocks[e]}));return Object(f.jsx)(B.a,{item:!0,xs:12,md:6,lg:4,children:Object(f.jsx)(k,{column:a,blocks:n})},a.id)}))})})})})),fe=a(6),xe=a(103),ve=a.n(xe),Ce=a(5),ke=a(207),we=a(219),Ie=a(209),Be=a(196),Fe=a(151),Se=a(210),Ee=a(211),Ae=a.p+"static/media/SteelDemonLogo.346f9bfa.png",Me=a.p+"static/media/cryptoblades.0aadb6d1.png",Te=a(208),Ne=240,Pe=Object(g.a)((function(e){return{root:{display:"flex"},logo:{width:e.spacing(3)},sidebarItemIcon:{color:e.palette.secondary.main},appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),backgroundColor:"transparent",boxShadow:"none"},appBarShift:{marginLeft:Ne,width:"calc(100% - ".concat(Ne,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:e.spacing(1),"&:hover":{backgroundColor:"transparent"}},hide:{display:"none"},drawer:{width:Ne,flexShrink:0,whiteSpace:"nowrap"},drawerOpen:{width:Ne,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerClose:{transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),overflowX:"hidden",width:e.spacing(7)+1},toolbar:Object(h.a)({display:"flex",alignItems:"center",justifyContent:"space-between",padding:e.spacing(0,2)},e.mixins.toolbar),content:{flexGrow:1,padding:e.spacing(3)},appName:{marginLeft:e.spacing(4)},activeMenu:{backgroundColor:e.palette.primary.main,color:e.palette.common.white,"&:hover":{backgroundColor:e.palette.primary.main}}}})),De=function(e){var t=e.params;return Object(f.jsx)("img",{src:t.src,style:{maxWidth:24},alt:t.alt})},Re=[{id:0,text:"CryptoBlades",slug:"/",url:"/",icon:Object(f.jsx)(De,{params:{src:Me,alt:"CB"}}),menuName:"cryptoblades"}],Ue=Object(l.b)((function(e){return{}}),(function(e){return{}}))((function(e){var t,a,n=Pe(),r=Object(ie.a)(),c=e.open,s=e.handleToggleDrawer,o=e.activeMenu,i=e.handleActiveMenu,l={opacity:c?1:0,transition:"all 0.3s ease-in"};return Object(f.jsxs)("div",{className:n.root,children:[Object(f.jsx)(u.a,{}),Object(f.jsx)(ke.a,{position:"fixed",className:Object(Ce.a)(n.appBar,Object(j.a)({},n.appBarShift,c))}),Object(f.jsxs)(we.a,{variant:"permanent",className:Object(Ce.a)(n.drawer,(t={},Object(j.a)(t,n.drawerOpen,c),Object(j.a)(t,n.drawerClose,!c),t)),classes:{paper:Object(Ce.a)((a={},Object(j.a)(a,n.drawerOpen,c),Object(j.a)(a,n.drawerClose,!c),a))},children:[Object(f.jsxs)("div",{className:n.toolbar,children:[Object(f.jsxs)(le.a,{color:"inherit","aria-label":"open drawer",onClick:function(){return s(!c)},edge:"start",disableRipple:!0,disableFocusRipple:!0,className:Object(Ce.a)(n.menuButton),children:[Object(f.jsx)("img",{src:Ae,className:n.logo,alt:"Cryptools"}),Object(f.jsx)(A.a,{variant:"h6",color:"primary",className:n.appName,style:l,children:"Cryptools"})]}),Object(f.jsx)(le.a,{onClick:function(){return s(!c)},color:"secondary",style:Object(h.a)(Object(h.a)({},l),{},{padding:r.spacing(1),borderColor:r.palette.secondary,borderWidth:1,borderStyle:"solid"}),variant:"outline",children:(r.direction,Object(f.jsx)(Te.a,{}))})]}),Object(f.jsx)(Ie.a,{}),Object(f.jsx)(Be.a,{children:Re.map((function(e,t){return Object(f.jsxs)(Fe.a,{button:!0,className:Object(Ce.a)(Object(j.a)({},n.activeMenu,o===e.menuName)),onClick:function(){return i(e.menuName)},children:[Object(f.jsx)(Se.a,{className:n.sidebarItemIcon,children:e.icon}),Object(f.jsx)(Ee.a,{primary:e.text})]},e.id)}))})]})]})})),We=a(16),Ge=a(215),Ke=function(e){var t=e.settings,a=e.requestUpdateStatus,r=Object(ie.a)(),c=function(){var e=Object(h.a)(Object(h.a)({},t),{},{updateNotice:!1});a(e)};return Object(n.useEffect)((function(){var e="v1.0-beta.2",n={version:e,updateNotice:!0,updateContent:{title:"What's new in version v1.0-beta.2",content:["<strong>Daily Match Tracker</strong> \u2014 You can now easily track how much matches you still left for the day (28 max daily). See how many matches you won and lost, the remaining matches and you can keep tabs of your per match earnings.","<strong>Bugfixes and Chores</strong>"],warning:"This update may break your saved data or reset your board positions to default, please make sure you have a note of all the manual input data you specified on the App such as current earnings of the coin you are farming as well as the capital input and API Key from BSCScan",footer:"Enjoy! Feel free to send me your suggestions here at <strong>steeldemon026@gmail.com</strong>"}};(!Object.keys(t)||t&&t.version!==n.version)&&a(n)}),[]),Object(f.jsx)("div",{children:t&&t.updateContent&&Object.keys(t.updateContent).length>0&&Object(f.jsxs)(z.a,{open:t&&t.updateNotice||!1,onClose:c,"aria-labelledby":"update-dialog-title","aria-describedby":"update-dialog-content",children:[Object(f.jsx)(H.a,{id:"update-dialog-title",children:t.updateContent.title}),Object(f.jsxs)(Y.a,{children:[Object(f.jsxs)(q.a,{id:"update-dialog-content",component:"div",children:[t&&t.updateContent.warning&&Object(f.jsx)(Ge.a,{severity:"error",style:{marginBottom:r.spacing(2)},children:t.updateContent.warning}),Object(f.jsx)(A.a,{variant:"h6",color:"primary",children:"Changelog"}),t&&t.updateContent&&t.updateContent.content&&Object(f.jsx)("ul",{style:{paddingLeft:r.spacing(2)},children:t.updateContent.content.map((function(e,t){return Object(f.jsx)(A.a,{variant:"body1",component:"li",gutterBottom:!0,children:Object(f.jsx)("span",{dangerouslySetInnerHTML:{__html:e}})},t)}))})]}),t&&t.updateContent.footer&&Object(f.jsx)(Ge.a,{severity:"info",style:{marginBottom:r.spacing(2)},children:Object(f.jsx)("span",{dangerouslySetInnerHTML:{__html:t.updateContent.footer}})})]}),Object(f.jsx)(be.a,{style:{padding:r.spacing(2)},children:Object(f.jsx)(ue.a,{variant:"contained",color:"primary",disableFocusRipple:!0,onClick:function(){c()},children:"Confirm"})})]})})};var Le=[{path:"/cryptools-sd",component:ge,layout:Object(l.b)((function(e){return{settings:e.settings}}),(function(e){return Object(We.b)({updateDrawerState:function(t){return e(function(e){return{type:U,params:e}}(t))},updateActiveMenu:function(t){return e(function(e){return{type:W,params:e}}(t))},requestUpdateStatus:function(t){return e(function(e){return{type:_,params:e}}(t))}},e)}))(Object(fe.a)((function(e){return{root:{display:"flex"},content:{flexGrow:1,overflowX:"hidden",overflowY:"hidden",minHeight:"calc(100vh - 50px)"},contentShift:{width:"calc(100% - ".concat(280,"px)")}}}))((function(e){var t=e.classes,a=e.children,r=e.settings,c=e.updateDrawerState,s=e.updateActiveMenu,o=e.requestUpdateStatus,i=Object(n.useState)(r.isDrawerOpen),l=Object(O.a)(i,2),d=l[0],u=l[1],b=Object(n.useState)(r.activeMenu),j=Object(O.a)(b,2),p=j[0],m=j[1];return Object(n.useEffect)((function(){c(d)}),[d,c]),Object(n.useEffect)((function(){s(p)}),[p,s]),Object(f.jsxs)(n.Fragment,{children:[Object(f.jsxs)("div",{className:t.root,children:[Object(f.jsx)(Ue,Object(h.a)({open:r.isDrawerOpen,handleToggleDrawer:function(){u(!d)},handleActiveMenu:function(e){m(e)},activeMenu:p},e.children.props)),Object(f.jsx)("main",{className:ve()(t.content),children:Object(f.jsx)("div",{children:a})})]}),Object(f.jsx)(Ke,{settings:r.updateStatus,requestUpdateStatus:o})]})}))),exact:!0}],_e=a(108),ze=function(e){return e.map((function(e,t){var a=e.component,n=e.layout,r=Object(_e.a)(e,["component","layout"]);return Object(f.jsx)(o.b,Object(h.a)(Object(h.a)({},r),{},{render:function(e){return Object(f.jsx)(n,{children:Object(f.jsx)(a,Object(h.a)({},e))})}}),t)}))},He=function(e){return Object(f.jsxs)(o.d,{children:[ze(Le),Object(f.jsx)(o.a,{to:"/cryptools-sd"})]})},Ye=a(107),qe=Object(Ye.a)({palette:{primary:{main:"#1E807D"},secondary:{main:"#FF6DB4"},common:{black:"#2D2D2D",white:"#ffffff",lightblue:"#00C9C6",lightbrown:"#F3EADA",lightgrey:"#EAF0F3",lightred:"#DF5E5E"}},typography:{fontFamily:["Lato","Arial","sans-serif"],htmlFontSize:16,subheading:{color:"#ABB0CE"}}}),Ve=Object(l.b)((function(e){return{}}),null)((function(e){return Object(f.jsxs)(b.a,{theme:qe,children:[Object(f.jsx)(u.a,{}),Object(f.jsx)("div",{children:Object(f.jsx)(He,{})})]})})),Je=a(69),Xe=a(104),Qe=a(105),Ze=a.n(Qe),$e=a(106),et={isDrawerOpen:!1,activeMenu:"cryptoblades",userConfig:null,userCurrencies:{},userMatches:{},todayMatches:{},updateStatus:{}},tt={columns:{"column-1":{id:"column-1",title:"",blockIds:[]},"column-2":{id:"column-2",title:"",blockIds:[]},"column-3":{id:"column-3",title:"",blockIds:[]}},columnOrder:["column-1","column-2","column-3"]},at={settings:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:et,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case U:return Object(h.a)(Object(h.a)({},e),{},{isDrawerOpen:t.params});case W:return Object(h.a)(Object(h.a)({},e),{},{activeMenu:t.params});case G:return Object(h.a)(Object(h.a)({},e),{},{userConfig:t.params});case K:return Object(h.a)(Object(h.a)({},e),{},{userCurrencies:Object(h.a)(Object(h.a)({},e.userCurrencies),t.params)});case _:return Object(h.a)(Object(h.a)({},e),{},{updateStatus:Object(h.a)(Object(h.a)({},e.updateStatus),t.params)});case L:return"userMatches"===t.params.target?Object(h.a)(Object(h.a)({},e),{},{userMatches:Object(h.a)(Object(h.a)({},e.userMatches),t.params.userMatches)}):Object(h.a)(Object(h.a)({},e),{},{todayMatches:Object(h.a)(Object(h.a)({},e.todayMatches),t.params.todayMatches)});default:return e}},boards:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:tt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case F:return Object(h.a)(Object(h.a)({},e),{},{columns:Object(h.a)(Object(h.a)({},e.columns),{},Object(j.a)({},t.params.id,t.params))});case S:return Object(h.a)(Object(h.a)({},e),{},{columnOrder:t.params});case E:return Object(h.a)(Object(h.a)({},e),{},{columns:Object(h.a)(Object(h.a)({},e.columns),t.params)});default:return e}}},nt={key:"root",storage:a.n($e).a,blacklist:[],whitelist:["settings","boards"]},rt=Object(We.c)(at),ct=Object(Je.a)(nt,rt),st=[Xe.a,Ze.a],ot=Object(We.e)(ct,We.a.apply(void 0,st)),it=Object(Je.b)(ot),lt=Object(i.a)();c.a.render(Object(f.jsx)(l.a,{store:ot,children:Object(f.jsx)(d.a,{loading:"null",persistor:it,children:Object(f.jsx)(o.c,{history:lt,children:Object(f.jsx)(Ve,{})})})}),document.getElementById("root")),s()}},[[149,1,2]]]);
//# sourceMappingURL=main.0c0ee919.chunk.js.map