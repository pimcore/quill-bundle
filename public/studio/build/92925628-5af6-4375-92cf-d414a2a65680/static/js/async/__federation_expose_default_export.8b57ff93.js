/*! For license information please see __federation_expose_default_export.8b57ff93.js.LICENSE.txt */
"use strict";(self.webpackChunkpimcore_quill_bundle=self.webpackChunkpimcore_quill_bundle||[]).push([["249"],{2334:function(e,t,r){r.r(t),r.d(t,{QuillPlugin:()=>w});var o=r(4723),l=r(6236),n=r(6122),i=r(5893),a=r(4179);let s=(0,r(398).createStyles)(e=>{let{css:t,token:r}=e;return{editor:t`
      overflow: auto;
      border: 1px solid ${r.colorBorder};
      border-radius: ${r.borderRadius}px;
      min-height: 100px;
      min-width: 200px;
      background-color: ${r.colorBgContainer};
      cursor: text;

      div[contenteditable='false'] {
        background-color: ${r.colorBgContainerDisabled};
        cursor: not-allowed;
      }
      
      .ql-toolbar {
        border: none;
        border-bottom: 1px solid ${r.colorBorder};
      }
      
      .ql-container {
        border: none;
      }

      .ql-toolbar .ql-formats :is(button.ql-undo,button.ql-redo,  button.ql-html-edit) {
        background-repeat: no-repeat;
        background-position: center;
        background-size: 18px;
      }
      
      .ql-toolbar .ql-undo {
        background-image: url(/bundles/pimcorequill/css/icons/arrow-counterclockwise.svg);
      }

      .ql-toolbar .ql-redo {
        background-image: url(/bundles/pimcorequill/css/icons/arrow-clockwise.svg);
      }

      .ql-toolbar .ql-html-edit {
        background-image: url(/bundles/pimcorequill/css/icons/code.svg);
      }

      .ql-operate-block + .ql-table-properties-form {
        z-index: 9999;
      }
    `}});var d=r(6486),u=r(2244),c=r.n(u);r(4429),r(9716),r(2016);var m=r(2648),p=r.n(m);r(2564);var b=r(5907);let g=e=>{let{open:t,setOpen:r,html:o,save:n}=e,{t:s}=(0,l.useTranslation)(),[d,u]=(0,a.useState)(o);return(0,a.useEffect)(()=>{u(o)},[o]),(0,i.jsx)(b.Modal,{footer:(0,i.jsxs)(b.ModalFooter,{children:[(0,i.jsx)(b.Button,{danger:!0,onClick:()=>{r(!1)},children:s("cancel")},"cancel"),(0,i.jsx)(b.Button,{onClick:()=>{n(d),r(!1)},type:"primary",children:s("save")},"save")]}),onCancel:()=>{r(!1)},open:t,size:"XL",title:"HTML",children:(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(b.TextArea,{autoSize:{minRows:4},onChange:e=>{u(e.target.value)},value:d})})})};var f=r(2036);let h=(0,a.forwardRef)((e,t)=>{let{defaultValue:r="",onSelectionChange:o,onTextChange:n,maxCharacters:s,editorConfig:d,placeholder:m="",readOnly:h=!1}=e,{t:y}=(0,l.useTranslation)(),v=(0,a.useRef)(null),w=(0,a.useRef)(n),x=(0,a.useRef)(o),[T,k]=(0,a.useState)(),[_,q]=(0,a.useState)(!1),[C,E]=(0,a.useState)(""),[S,A]=(0,a.useState)();return(0,a.useImperativeHandle)(t,()=>({onDrop:e=>{void 0!==T&&function(e,t){let r=t.data,o=!1,l=S;void 0===l&&(l=new u.Range(0,0)),l.length>0&&(o=!0);let n=r.id,i=r.fullPath;if("asset"===t.type)if("image"!==r.type||o){e.format("link",i),e.format("pimcore_id",n),e.format("pimcore_type","asset");return}else{let t={width:"600px",alt:"asset_image",pimcore_id:n,pimcore_type:"asset"};void 0!==r.width&&(i=(0,b.createImageThumbnailUrl)(n,{width:600,mimeType:"JPEG"}),r.width<600&&["jpg","jpeg","gif","png"].includes(function(e){let t=e.split(".");return t[t.length-1]}(r.fullPath))&&(i=r.fullPath,t.pimcore_disable_thumbnail=!0),r.width<600&&(t.width=(0,f.toCssDimension)(r.width))),e.insertEmbed(l.index,"image",i,"user"),e.formatText(l.index,1,t);return}if(e.format("link",i),e.format("pimcore_id",n),"document"===r.elementType&&("page"===r.type||"hardlink"===r.type||"link"===r.type))return e.format("pimcore_type","document");"object"===r.elementType&&e.format("pimcore_type","object")}(T,e)}})),function(){c().register({"modules/table-better":p()},!0);let e=c().import("parchment");c().register({"modules/table-better":p()},!0);let t=new e.Attributor("pimcore_id","pimcore_id",{scope:e.Scope.INLINE});c().register(t);let r=new e.Attributor("pimcore_type","pimcore_type",{scope:e.Scope.INLINE});c().register(r);let o=new e.Attributor("pimcore_disable_thumbnail","pimcore_disable_thumbnail",{scope:e.Scope.INLINE});c().register(o);let l=new e.Attributor("class","class",{scope:e.Scope.ANY});c().register(l,!0);let n=new e.Attributor("id","id",{scope:e.Scope.ANY});c().register(n,!0);let i=new e.Attributor("style","style",{scope:e.Scope.ANY});c().register(i,!0)}(),(0,a.useLayoutEffect)(()=>{w.current=n,x.current=o}),(0,a.useEffect)(()=>{let e=v.current,t=e.appendChild(e.ownerDocument.createElement("div")),o=Object.assign({theme:"snow",modules:{}},d);var l,n=o;let i=n.modules;void 0===i.table&&(i.table=!1),void 0===i["table-better"]&&(i["table-better"]={language:"en_US",menus:["column","row","merge","table","cell","wrap","delete"],toolbarTable:!0}),void 0===i.keyboard&&(i.keyboard={bindings:p().keyboardBindings}),void 0===i.toolbar&&(i.toolbar={container:[["undo","redo"],[{header:[1,2,3,4,5,6,!1]}],["bold","italic"],[{align:[]}],[{list:"ordered"},{list:"bullet"}],[{indent:"-1"},{indent:"+1"}],["blockquote"],["link","table-better"],["clean","html-edit"]]}),void 0===i.history&&(i.history={delay:700,maxStack:200,userOnly:!0});let a=new(c())(t,o);return t.getElementsByClassName("ql-editor")[0].setAttribute("data-placeholder",m),a.enable(!h),k(a),l=a,j("undo",()=>{l.history.undo()}),j("redo",()=>{l.history.redo()}),j("html-edit",()=>{let e=l.getModule("table-better");null==e||e.deleteTableTemporary(),E(l.getSemanticHTML()),q(!0)}),N(a,r),a.on(c().events.TEXT_CHANGE,function(){for(var e,t=arguments.length,r=Array(t),o=0;o<t;o++)r[o]=arguments[o];let l=a.getModule("table-better");null==l||l.deleteTableTemporary(),null==(e=w.current)||e.call(w,a.getSemanticHTML()),L(a)}),a.on(c().events.SELECTION_CHANGE,function(){for(var e,t=arguments.length,r=Array(t),o=0;o<t;o++)r[o]=arguments[o];null==(e=x.current)||e.call(x,...r),A(r[0]??r[1])}),()=>{k(void 0),e.innerHTML=""}},[v]),(0,a.useEffect)(()=>{if(void 0===T)return;let e=T.getModule("table-better");null==e||e.deleteTableTemporary(),"<p></p>"!==r&&r!==T.getSemanticHTML()&&N(T,r)},[r]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{ref:v}),(0,i.jsx)(g,{html:C,open:_,save:e=>{void 0!==T&&N(T,e)},setOpen:q})]});function N(e,t){e.deleteText(0,e.getLength());let r=e.clipboard.convert({html:t,text:"\n"});e.updateContents(r,c().sources.USER),e.history.clear(),L(e)}function j(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",o=document.getElementsByClassName("ql-"+e);if(0!==o.length)for(let e of o)e.innerHTML=r,e.addEventListener("click",function(e){e.preventDefault(),t(e)})}function L(e){e.root.style.border="",e.root.setAttribute("title","");let t=e.getLength();"number"==typeof s&&0!==s&&t>s&&(e.root.style.border="1px solid red",e.root.setAttribute("title",y("maximum_length_is")+" "+s))}});h.displayName="Editor";let y=(0,a.forwardRef)((e,t)=>{let{value:r,onChange:o,disabled:l,width:n,height:u,maxCharacters:c,placeholder:m,editorConfig:p}=e,b=(0,a.useRef)(null),{styles:g}=s(),y=(0,a.useRef)(setTimeout(()=>{}));return(0,a.useImperativeHandle)(t,()=>({onDrop:e=>{(0,d.isNull)(b.current)||b.current.onDrop(e)}})),(0,a.useEffect)(()=>()=>{clearTimeout(y.current)},[]),(0,i.jsx)("div",{className:g.editor,style:{maxWidth:(0,f.toCssDimension)(n),maxHeight:(0,f.toCssDimension)(u)},children:(0,i.jsx)(h,{defaultValue:r??"",editorConfig:p,maxCharacters:c,onTextChange:e=>{var t;t=e,clearTimeout(y.current),y.current=setTimeout(()=>{null!=o&&o(t)},700)},placeholder:m,readOnly:l,ref:b})})});y.displayName="QuillEditor";let v={onInit:()=>{o.container.get(l.serviceIds["App/ComponentRegistry/ComponentRegistry"]).override({component:y,name:n.componentConfig.wysiwyg.editor.name})}};void 0!==(e=r.hmd(e)).hot&&e.hot.accept();let w={name:"pimcore-quill-plugin",onInit:e=>{let{container:t}=e},onStartup:e=>{let{moduleSystem:t}=e;t.registerModule(v),console.log("Hello from quill.")}}}}]);