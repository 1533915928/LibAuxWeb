import{V as e,af as t,x as s,_ as o,au as a,av as l,am as i,ag as n,aw as r,o as c,c as d,w as u,i as h,e as p,l as f,t as g,g as m,F as k,f as _,G as w,u as b,q as S,ar as y,O as P,ax as x}from"./index-8c7aba04.js";import{_ as F}from"./plugin-vueexport-helper.1b428a4d.js";const v="UNI_ADMIN_UPGRADE_CENTER_LOCAL_FILE_PATH";let L,T=null;const C=F({data:()=>({installForBeforeFilePath:"",installed:!1,installing:!1,downloadSuccess:!1,downloading:!1,downLoadPercent:0,downloadedSize:0,packageFileSize:0,tempFilePath:"",title:"更新日志",contents:"",is_mandatory:!1,subTitle:"发现新版本",downLoadBtnTextiOS:"立即跳转更新",downLoadBtnText:"立即下载更新",downLoadingText:"安装包下载中，请稍后",url:""}),onLoad({local_storage_key:s}){if(!s)return console.error("local_storage_key为空，请检查后重试"),void e();const o=t(s);if(!o)return console.error("安装包信息为空，请检查后重试"),void e();const a=["version","url","type"];for(let t in o)if(-1!==a.indexOf(t)&&!o[t])return console.error(`参数 ${t} 必填，请检查后重试`),void e();Object.assign(this,o),this.checkLocalStoragePackage()},onBackPress(){if(this.is_mandatory)return!0;T&&T.abort()},onHide(){L=null},computed:{isWGT(){return"wgt"===this.type},isiOS(){return!this.isWGT&&this.platform.includes("iOS")},isAppStore(){return this.isiOS||!this.isiOS&&!this.isWGT&&-1===this.url.indexOf(".apk")}},methods:{checkLocalStoragePackage(){const e=t(v);if(e){const{version:t,savedFilePath:s,installed:o}=e;o||0!==function(e="0",t="0"){e=String(e).split("."),t=String(t).split(".");const s=Math.min(e.length,t.length);let o=0;for(let a=0;a<s;a++){const s=Number(e[a]),l=Number(t[a]);if(s>l){o=1;break}if(s<l){o=-1;break}}if(0===o&&e.length!==t.length){const a=e.length>t.length,l=a?e:t;for(let e=s;e<l.length;e++)if(Number(l[e])>0){o=a?1:-1;break}}return o}(t,this.version)?this.deleteSavedFile(s):(this.downloadSuccess=!0,this.installForBeforeFilePath=s,this.tempFilePath=s)}},async closeUpdate(){return this.downloading?this.is_mandatory?s({title:"下载中，请稍后……",icon:"none",duration:500}):void o({title:"是否取消下载？",cancelText:"否",confirmText:"是",success:t=>{t.confirm&&(T&&T.abort(),e())}}):this.downloadSuccess&&this.tempFilePath?(await this.saveFile(this.tempFilePath,this.version),void e()):void e()},updateApp(){this.checkStoreScheme().catch((()=>{this.downloadPackage()}))},checkStoreScheme(){const e=(this.store_list||[]).filter((e=>e.enable));return e&&e.length?(e.sort(((e,t)=>t.priority-e.priority)).map((e=>e.scheme)).reduce(((e,t,s)=>(L=(e||(e=Promise.reject())).catch((()=>new Promise(((e,s)=>{plus.runtime.openURL(t,(e=>{s(e)}))})))),L)),L),L):Promise.reject()},downloadPackage(){this.downloading=!0,T=a({url:this.url,success:e=>{200==e.statusCode&&(this.downloadSuccess=!0,this.tempFilePath=e.tempFilePath,this.is_mandatory&&this.installPackage())},complete:()=>{this.downloading=!1,this.downLoadPercent=0,this.downloadedSize=0,this.packageFileSize=0,T=null}}),T.onProgressUpdate((e=>{this.downLoadPercent=e.progress,this.downloadedSize=(e.totalBytesWritten/Math.pow(1024,2)).toFixed(2),this.packageFileSize=(e.totalBytesExpectedToWrite/Math.pow(1024,2)).toFixed(2)}))},installPackage(){},restart(){this.installed=!1},saveFile:(e,t)=>new Promise(((s,o)=>{l({tempFilePath:e,success({savedFilePath:e}){i(v,{version:t,savedFilePath:e})},complete(){s()}})})),deleteSavedFile:e=>(n(v),r({filePath:e})),jumpToAppStore(){plus.runtime.openURL(this.url)}}},[["render",function(e,t,s,o,a,l){const i=b,n=S,r=h,F=y,v=P,L=x;return c(),d(r,{class:"mask flex-center"},{default:u((()=>[p(r,{class:"content botton-radius"},{default:u((()=>[p(r,{class:"content-top"},{default:u((()=>[p(i,{class:"content-top-text"},{default:u((()=>[f(g(a.title),1)])),_:1}),p(n,{class:"content-top",style:{top:"0"},width:"100%",height:"100%",src:"/LibAuxWeb/assets/bg_top-84172c45.png"})])),_:1}),p(r,{class:"content-header"}),p(r,{class:"content-body"},{default:u((()=>[p(r,{class:"title"},{default:u((()=>[p(i,null,{default:u((()=>[f(g(a.subTitle),1)])),_:1})])),_:1}),p(r,{class:"body"},{default:u((()=>[p(F,{class:"box-des-scroll","scroll-y":"true"},{default:u((()=>[p(i,{class:"box-des"},{default:u((()=>[f(g(a.contents),1)])),_:1})])),_:1})])),_:1}),p(r,{class:"footer flex-center"},{default:u((()=>[l.isAppStore?(c(),d(v,{key:0,class:"content-button",style:{border:"none",color:"#fff"},plain:"",onClick:l.jumpToAppStore},{default:u((()=>[f(g(a.downLoadBtnTextiOS),1)])),_:1},8,["onClick"])):(c(),m(k,{key:1},[a.downloadSuccess?a.downloadSuccess&&!a.installed?(c(),d(v,{key:1,class:"content-button",style:{border:"none",color:"#fff"},plain:"",loading:a.installing,disabled:a.installing,onClick:l.installPackage},{default:u((()=>[f(g(a.installing?"正在安装……":"下载完成，立即安装"),1)])),_:1},8,["loading","disabled","onClick"])):_("",!0):(c(),m(k,{key:0},[a.downloading?(c(),d(r,{key:0,class:"progress-box flex-column"},{default:u((()=>[p(L,{class:"progress","border-radius":"35",percent:a.downLoadPercent,activeColor:"#3DA7FF","show-info":"","stroke-width":"10"},null,8,["percent"]),p(r,{style:{width:"100%","font-size":"28rpx",display:"flex","justify-content":"space-around"}},{default:u((()=>[p(i,null,{default:u((()=>[f(g(a.downLoadingText),1)])),_:1}),p(i,null,{default:u((()=>[f("("+g(a.downloadedSize)+"/"+g(a.packageFileSize)+"M)",1)])),_:1})])),_:1})])),_:1})):(c(),d(v,{key:1,class:"content-button",style:{border:"none",color:"#fff"},plain:"",onClick:l.updateApp},{default:u((()=>[f(g(a.downLoadBtnText),1)])),_:1},8,["onClick"]))],64)),a.installed&&l.isWGT?(c(),d(v,{key:2,class:"content-button",style:{border:"none",color:"#fff"},plain:"",onClick:l.restart},{default:u((()=>[f(" 安装完毕，点击重启 ")])),_:1},8,["onClick"])):_("",!0)],64))])),_:1})])),_:1}),a.is_mandatory?_("",!0):(c(),d(n,{key:0,class:"close-img",src:"/LibAuxWeb/assets/app_update_close-91137466.png",onClick:w(l.closeUpdate,["stop"])},null,8,["onClick"]))])),_:1})])),_:1})}],["__scopeId","data-v-453e079a"]]);export{C as default};
