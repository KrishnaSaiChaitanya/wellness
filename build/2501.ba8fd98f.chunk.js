"use strict";(self.webpackChunkwellness=self.webpackChunkwellness||[]).push([[2501],{36833:($,A,e)=>{e.d(A,{pl:()=>R,aY:()=>g,q5:()=>y});var t=e(67294),c=e(80120),T=e(25804),E=e(18172);const d={data:[],isLoading:!0},C=(a,o)=>(0,E.ZP)(a,s=>{switch(o.type){case"GET_DATA_SUCCEEDED":{s.data=o.data,s.isLoading=!1;break}case"GET_DATA_ERROR":{s.isLoading=!1;break}default:return s}}),R=({ssoEnabled:a})=>{const[o,s]=(0,t.useReducer)(C,d),p=(0,c.lm)(),{get:L}=(0,c.kY)();return(0,t.useEffect)(()=>{(async()=>{try{if(!a){s({type:"GET_DATA_SUCCEEDED",data:[]});return}const{data:f}=await L((0,T.IF)("providers"));s({type:"GET_DATA_SUCCEEDED",data:f})}catch(f){console.error(f),s({type:"GET_DATA_ERROR"}),p({type:"warning",message:{id:"notification.error"}})}})()},[L,a,p]),o};var M=e(14293),h=e.n(M),O=e(86896),I=e(16550),l=e(88767),v=e(86706),S=e(36364);function n(){const a=(0,v.v9)(S._),{get:o}=(0,c.kY)(),{isLoading:s,allowedActions:{canRead:p,canCreate:L,canUpdate:D,canDelete:f}}=(0,c.ss)(a.settings.users),B=p&&L&&D&&f,{data:u,isError:Z,isLoading:W}=(0,l.useQuery)(["ee","license-limit-info"],async()=>{const{data:{data:N}}=await o("/admin/license-limit-information");return N},{enabled:!s&&B}),P=u??{},F=t.useCallback(N=>(P?.features??[]).find(G=>G.name===N)?.options??{},[P?.features]);return{license:P,getFeature:F,isError:Z,isLoading:W}}const y=n,U="strapi-notification-seat-limit",i="https://cloud.strapi.io/profile/billing",x="https://strapi.io/billing/request-seats",g=()=>{const{formatMessage:a}=(0,O.Z)();let{license:o,isError:s,isLoading:p}=y();const L=(0,c.lm)(),{pathname:D}=(0,I.TH)(),{enforcementUserCount:f,permittedSeats:B,licenseLimitStatus:u,isHostedOnStrapiCloud:Z}=o;(0,t.useEffect)(()=>{if(s||p)return;const W=!h()(B)&&!window.sessionStorage.getItem(`${U}-${D}`)&&(u==="AT_LIMIT"||u==="OVER_LIMIT");let P;u==="OVER_LIMIT"?P="warning":u==="AT_LIMIT"&&(P="softWarning"),W&&L({type:P,message:a({id:"notification.ee.warning.over-.message",defaultMessage:"Add seats to {licenseLimitStatus, select, OVER_LIMIT {invite} other {re-enable}} Users. If you already did it but it's not reflected in Strapi yet, make sure to restart your app."},{licenseLimitStatus:u}),title:a({id:"notification.ee.warning.at-seat-limit.title",defaultMessage:"{licenseLimitStatus, select, OVER_LIMIT {Over} other {At}} seat limit ({enforcementUserCount}/{permittedSeats})"},{licenseLimitStatus:u,enforcementUserCount:f,permittedSeats:B}),link:{url:Z?i:x,label:a({id:"notification.ee.warning.seat-limit.link",defaultMessage:"{isHostedOnStrapiCloud, select, true {ADD SEATS} other {CONTACT SALES}}"},{isHostedOnStrapiCloud:Z})},blockTransition:!0,onClose(){window.sessionStorage.setItem(`${U}-${D}`,!0)}})},[L,o,D,a,p,B,u,f,Z,s])}},80090:($,A,e)=>{e.d(A,{Z:()=>S});var t=e(67294),c=e(11047),T=e(84495),E=e(75515),d=e(11276),m=e(67819),C=e(45697),r=e.n(C),R=e(86896),M=e(73727),h=e(71997);const O=h.ZP.a`
  width: ${136/16}rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${48/16}rem;
  border: 1px solid ${({theme:n})=>n.colors.neutral150};
  border-radius: ${({theme:n})=>n.borderRadius};
  text-decoration: inherit;
  &:link {
    text-decoration: none;
  }
  color: ${({theme:n})=>n.colors.neutral600};
`,I=(0,h.ZP)(c.k)`
  & a:not(:first-child):not(:last-child) {
    margin: 0 ${({theme:n})=>n.spaces[2]};
  }
  & a:first-child {
    margin-right: ${({theme:n})=>n.spaces[2]};
  }
  & a:last-child {
    margin-left: ${({theme:n})=>n.spaces[2]};
  }
`,l=({provider:n})=>t.createElement(T.u,{label:n.displayName},t.createElement(O,{href:`${window.strapi.backendURL}/admin/connect/${n.uid}`},n.icon?t.createElement("img",{src:n.icon,"aria-hidden":!0,alt:"",height:"32px"}):t.createElement(E.Z,null,n.displayName)));l.propTypes={provider:r().shape({icon:r().string,displayName:r().string.isRequired,uid:r().string.isRequired}).isRequired};const v=({providers:n,displayAllProviders:y})=>{const{formatMessage:U}=(0,R.Z)();return y?t.createElement(d.r,{gap:4},n.map(i=>t.createElement(m.P,{key:i.uid,col:4},t.createElement(l,{provider:i})))):n.length>2&&!y?t.createElement(d.r,{gap:4},n.slice(0,2).map(i=>t.createElement(m.P,{key:i.uid,col:4},t.createElement(l,{provider:i}))),t.createElement(m.P,{col:4},t.createElement(T.u,{label:U({id:"global.see-more"})},t.createElement(O,{as:M.rU,to:"/auth/providers"},t.createElement("span",{"aria-hidden":!0},"\u2022\u2022\u2022"))))):t.createElement(I,{justifyContent:"center"},n.map(i=>t.createElement(l,{key:i.uid,provider:i})))};v.defaultProps={displayAllProviders:!0},v.propTypes={providers:r().arrayOf(r().object).isRequired,displayAllProviders:r().bool};const S=v},52501:($,A,e)=>{e.r(A),e.d(A,{FORMS:()=>i});var t=e(67294),c=e(70004),T=e(185),E=e(41580),d=e(75515),m=e(11047),C=e(77197),r=e(29728),R=e(80120),M=e(86896),h=e(16550),O=e(71997),I=e(68890),l=e(50745),v=e(36833),S=e(80090);const n=(0,O.ZP)(c.i)`
  flex: 1;
`,i={providers:{Component:()=>{const x=window.strapi.features.isEnabled(window.strapi.features.SSO),{push:K}=(0,h.k6)(),{formatMessage:g}=(0,M.Z)(),{isLoading:a,data:o}=(0,v.pl)({ssoEnabled:x}),s=()=>{K("/auth/login")};return!x||!a&&o.length===0?t.createElement(h.l_,{to:"/auth/login"}):t.createElement(l.ZP,null,t.createElement(T.o,null,t.createElement(l.bU,null,t.createElement(l.sg,null,t.createElement(I.Z,null),t.createElement(E.x,{paddingTop:6,paddingBottom:1},t.createElement(d.Z,{as:"h1",variant:"alpha"},g({id:"Auth.form.welcome.title"}))),t.createElement(E.x,{paddingBottom:7},t.createElement(d.Z,{variant:"epsilon",textColor:"neutral600"},g({id:"Auth.login.sso.subtitle"})))),t.createElement(m.k,{direction:"column",alignItems:"stretch",gap:7},a?t.createElement(m.k,{justifyContent:"center"},t.createElement(C.a,null,g({id:"Auth.login.sso.loading"}))):t.createElement(S.Z,{providers:o}),t.createElement(m.k,null,t.createElement(n,null),t.createElement(E.x,{paddingLeft:3,paddingRight:3},t.createElement(d.Z,{variant:"sigma",textColor:"neutral600"},g({id:"or"}))),t.createElement(n,null)),t.createElement(r.z,{fullWidth:!0,size:"L",onClick:s},g({id:"Auth.form.button.login.strapi"})))),t.createElement(m.k,{justifyContent:"center"},t.createElement(E.x,{paddingTop:4},t.createElement(R.rU,{to:"/auth/forgot-password"},t.createElement(d.Z,{variant:"pi"},g({id:"Auth.link.forgot-password"})))))))},endPoint:null,fieldsToDisable:[],fieldsToOmit:[],schema:null,inputsPrefix:""}}}}]);