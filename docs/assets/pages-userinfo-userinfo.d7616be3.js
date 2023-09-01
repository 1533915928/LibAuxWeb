import{d as e,m as t,a,j as i,k as s,o,c as r,w as n,e as l,b as d,f as u,p as c,q as h,i as p,a0 as g,a1 as m,l as f,t as y,g as b,F as w,r as k,G as x,u as _,O as C,a2 as v,C as $,D as L,H as E,A as S,I as U,E as T,a3 as I,z as B,a4 as j,x as z}from"./index-78c97046.js";import{_ as M,a as D,b as G,c as H}from"./uni-list.70da4d52.js";import{_ as V,a as q}from"./u-button.fb9c79f5.js";import{_ as F}from"./u-transition.dea485e4.js";import{_ as K}from"./plugin-vueexport-helper.1b428a4d.js";import{m as N,p as R,_ as Y,a as A}from"./uni-popup-dialog.6b3fa630.js";import{m as Q,s as O}from"./store.3177e926.js";import"./uni-icons.a42508ef.js";import"./u-loading-icon.644e6a22.js";const P={props:{src:{type:String,default:e.image.src},mode:{type:String,default:e.image.mode},width:{type:[String,Number],default:e.image.width},height:{type:[String,Number],default:e.image.height},shape:{type:String,default:e.image.shape},radius:{type:[String,Number],default:e.image.radius},lazyLoad:{type:Boolean,default:e.image.lazyLoad},showMenuByLongpress:{type:Boolean,default:e.image.showMenuByLongpress},loadingIcon:{type:String,default:e.image.loadingIcon},errorIcon:{type:String,default:e.image.errorIcon},showLoading:{type:Boolean,default:e.image.showLoading},showError:{type:Boolean,default:e.image.showError},fade:{type:Boolean,default:e.image.fade},webp:{type:Boolean,default:e.image.webp},duration:{type:[String,Number],default:e.image.duration},bgColor:{type:String,default:e.image.bgColor}}};const J=K({name:"u--image",mixins:[t,P,a],components:{uvImage:K({name:"u-image",mixins:[t,a,P],data(){return{isError:!1,loading:!0,opacity:1,durationTime:this.duration,backgroundStyle:{},show:!1}},watch:{src:{immediate:!0,handler(e){e?(this.isError=!1,this.loading=!0):this.isError=!0}}},computed:{wrapStyle(){let e={};return e.width=this.$u.addUnit(this.width),e.height=this.$u.addUnit(this.height),e.borderRadius="circle"==this.shape?"10000px":uni.$u.addUnit(this.radius),e.overflow=this.radius>0?"hidden":"visible",uni.$u.deepMerge(e,uni.$u.addStyle(this.customStyle))}},mounted(){this.show=!0},emits:["click","error","load"],methods:{onClick(){this.$emit("click")},onErrorHandler(e){this.loading=!1,this.isError=!0,this.$emit("error",e)},onLoadHandler(e){this.loading=!1,this.isError=!1,this.$emit("load",e),this.removeBgColor()},removeBgColor(){this.backgroundStyle={backgroundColor:"transparent"}}}},[["render",function(e,t,a,g,m,f){const y=h,b=i(s("u-icon"),V),w=p,k=i(s("u-transition"),F);return o(),r(k,{mode:"fade",show:m.show,duration:e.fade?1e3:0},{default:n((()=>[l(w,{class:"u-image",onClick:f.onClick,style:d([f.wrapStyle,m.backgroundStyle])},{default:n((()=>[m.isError?u("",!0):(o(),r(y,{key:0,src:e.src,mode:e.mode,onError:f.onErrorHandler,onLoad:f.onLoadHandler,"show-menu-by-longpress":e.showMenuByLongpress,"lazy-load":e.lazyLoad,class:"u-image__image",style:d({borderRadius:"circle"==e.shape?"10000px":e.$u.addUnit(e.radius),width:e.$u.addUnit(e.width),height:e.$u.addUnit(e.height)})},null,8,["src","mode","onError","onLoad","show-menu-by-longpress","lazy-load","style"])),e.showLoading&&m.loading?(o(),r(w,{key:1,class:"u-image__loading",style:d({borderRadius:"circle"==e.shape?"50%":e.$u.addUnit(e.radius),backgroundColor:this.bgColor,width:e.$u.addUnit(e.width),height:e.$u.addUnit(e.height)})},{default:n((()=>[c(e.$slots,"loading",{},(()=>[l(b,{name:e.loadingIcon,width:e.width,height:e.height},null,8,["name","width","height"])]),!0)])),_:3},8,["style"])):u("",!0),e.showError&&m.isError&&!m.loading?(o(),r(w,{key:2,class:"u-image__error",style:d({borderRadius:"circle"==e.shape?"50%":e.$u.addUnit(e.radius),width:e.$u.addUnit(e.width),height:e.$u.addUnit(e.height)})},{default:n((()=>[c(e.$slots,"error",{},(()=>[l(b,{name:e.errorIcon,width:e.width,height:e.height},null,8,["name","width","height"])]),!0)])),_:3},8,["style"])):u("",!0)])),_:3},8,["onClick","style"])])),_:3},8,["show","duration"])}],["__scopeId","data-v-f54b76b2"]])},emits:["click","error","load"]},[["render",function(e,t,a,i,s,l){const d=g("uvImage");return o(),r(d,{src:e.src,mode:e.mode,width:e.width,height:e.height,shape:e.shape,radius:e.radius,lazyLoad:e.lazyLoad,showMenuByLongpress:e.showMenuByLongpress,loadingIcon:e.loadingIcon,errorIcon:e.errorIcon,showLoading:e.showLoading,showError:e.showError,fade:e.fade,webp:e.webp,duration:e.duration,bgColor:e.bgColor,customStyle:e.customStyle,onClick:t[0]||(t[0]=t=>e.$emit("click")),onError:t[1]||(t[1]=t=>e.$emit("error")),onLoad:t[2]||(t[2]=t=>e.$emit("load"))},{loading:n((()=>[c(e.$slots,"loading")])),error:n((()=>[c(e.$slots,"error")])),_:3},8,["src","mode","width","height","shape","radius","lazyLoad","showMenuByLongpress","loadingIcon","errorIcon","showLoading","showError","fade","webp","duration","bgColor","customStyle"])}]]),{t:W}=m(N);const X=K({name:"UniPopupShare",mixins:[R],emits:["select"],props:{title:{type:String,default:""},beforeClose:{type:Boolean,default:!1}},data:()=>({bottomData:[{text:"微信",icon:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/c2b17470-50be-11eb-b680-7980c8a877b8.png",name:"wx"},{text:"支付宝",icon:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/d684ae40-50be-11eb-8ff1-d5dcf8779628.png",name:"wx"},{text:"QQ",icon:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/e7a79520-50be-11eb-b997-9918a5dda011.png",name:"qq"},{text:"新浪",icon:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/0dacdbe0-50bf-11eb-8ff1-d5dcf8779628.png",name:"sina"}]}),created(){},computed:{cancelText:()=>W("uni-popup.cancel"),shareTitleText(){return this.title||W("uni-popup.shareTitle")}},methods:{select(e,t){this.$emit("select",{item:e,index:t}),this.close()},close(){this.beforeClose||this.popup.close()}}},[["render",function(e,t,a,i,s,d){const u=_,c=p,g=h,m=C;return o(),r(c,{class:"uni-popup-share"},{default:n((()=>[l(c,{class:""},{default:n((()=>[l(c,{class:"uni-share-title"},{default:n((()=>[l(u,{class:"uni-share-title-text"},{default:n((()=>[f(y(d.shareTitleText),1)])),_:1})])),_:1}),l(c,{class:"uni-share-content"},{default:n((()=>[l(c,{class:"uni-share-content-box"},{default:n((()=>[(o(!0),b(w,null,k(s.bottomData,((e,t)=>(o(),r(c,{class:"uni-share-content-item",key:t,onClick:x((a=>d.select(e,t)),["stop"])},{default:n((()=>[l(g,{class:"uni-share-image",src:e.icon,mode:"aspectFill"},null,8,["src"]),l(u,{class:"uni-share-text"},{default:n((()=>[f(y(e.text),1)])),_:2},1024)])),_:2},1032,["onClick"])))),128))])),_:1})])),_:1})])),_:1}),l(c,{class:"uni-share-button-box"},{default:n((()=>[l(m,{class:"uni-share-button",onClick:d.close},{default:n((()=>[f(y(d.cancelText),1)])),_:1},8,["onClick"])])),_:1})])),_:1})}],["__scopeId","data-v-a8ca4d4a"]]),Z=K({__name:"userinfo",setup(e){v((async e=>{e.showLoginManage&&(u.value=!0)})),$((async()=>{await Q.updateUserInfo(),L()}));const t=E((()=>O.userInfo)),a=S(),d=E((()=>I().appVersion)),u=U(!1),c=()=>{B({url:"/pages/login/login"})},h=()=>{Q.logout()},g=U(""),m=U(null),y=e=>{g.value=e,m.value.open()},k=()=>{window.location.href=g.value},x=()=>{B({url:"/pages/userinfo/userdetail/userdetail"})},_=async()=>{try{const e=await j();0==e.result.code&&z({title:e.result.message,icon:"none",duration:1e3})}catch(e){z({title:"当前为最新版",icon:"none",duration:1e3})}},V=()=>{this.$refs.share.open()};return(e,u)=>{const g=i(s("u-avatar"),M),v=i(s("u--text"),D),$=p,L=i(s("u--image"),J),E=i(s("uni-list-item"),G),S=i(s("uni-list"),H),U=i(s("uni-popup-share"),X),I=i(s("uni-popup"),Y),B=i(s("u-button"),q),j=C,z=i(s("uni-popup-dialog"),A);return o(),b(w,null,[l($,{class:"content"},{default:n((()=>[l($,{border:!1,class:"avatar-content",onClick:x},{default:n((()=>[l(g,{src:T(t).avatar,shape:"square",size:"80",style:{"margin-left":"2px"}},null,8,["src"]),l($,{class:"abstract"},{default:n((()=>[l($,{class:"ab-name"},{default:n((()=>[l($,{class:"text vip-name"},{default:n((()=>[l(v,{text:T(t).nickname,bold:"",size:"20",lines:"1"},null,8,["text"])])),_:1}),T(t).vip_date>(new Date).getTime()?(o(),r(L,{key:0,class:"text vip-icon",src:"/static/vip.png",width:"25px",height:"30px",mode:"aspectFit"})):(o(),r(L,{key:1,class:"text vip-icon",src:"/static/vip-black.png",width:"25px",height:"30px",mode:"aspectFit"}))])),_:1}),l(E,{class:"smallspan",border:!1,title:T(t).mobile,link:""},null,8,["title"])])),_:1})])),_:1}),l(S,{class:"mt10"},{default:n((()=>[l(E,{class:"item",title:"会员到期",rightText:T(t).vip_date_str||"--",link:""},null,8,["rightText"]),l(E,{class:"item",title:"版本更新",onClick:_,rightText:"v"+T(d),link:""},null,8,["rightText"]),l(E,{class:"item",title:"使用说明",rightText:T(a).useritems.tutorial,clickable:"",onClick:u[0]||(u[0]=e=>y(T(a).useritems.tutorial_url)),link:""},null,8,["rightText"]),l(E,{class:"item",title:"联系反馈",rightText:T(a).useritems.contact,clickable:"",onClick:u[1]||(u[1]=e=>y(T(a).useritems.contact_url)),link:""},null,8,["rightText"]),l(E,{class:"item",title:"软件分享",rightText:T(a).useritems.share,onClick:V,link:""},null,8,["rightText"])])),_:1}),l(I,{ref:"share",type:"share",safeArea:"",backgroundColor:"#fff"},{default:n((()=>[l(U)])),_:1},512),T(t)._id?(o(),r(B,{key:0,class:"login-button",onClick:h,plain:"",customStyle:{height:"47px","border-radius":"0px",color:"#3b4144"}},{default:n((()=>[f("退出登录")])),_:1})):(o(),r(j,{key:1,onClick:c,type:"primary"},{default:n((()=>[f("前往登录")])),_:1}))])),_:1}),l(I,{ref_key:"alertDialog",ref:m,type:"dialog"},{default:n((()=>[l(z,{type:"info",cancelText:"关闭",confirmText:"确定",onConfirm:k,title:"跳转提示",content:"自动跳转至浏览器打开链接"})])),_:1},512)],64)}}},[["__scopeId","data-v-56d01dd4"]]);export{Z as default};
