/*! For license information please see __federation_expose_default_export.79c155b8.js.LICENSE.txt */
"use strict";(self.webpackChunkpimcore_quill_bundle=self.webpackChunkpimcore_quill_bundle||[]).push([["249"],{2334:function(e,t,r){r.r(t),r.d(t,{QuillPlugin:()=>x});var o=r(4723),l=r(6236),n=r(6122),i=r(5893),u=r(4179),a=r(7799);let d=(0,r(398).createStyles)(e=>{let{css:t,token:r}=e;return{editor:t`
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
      
      .ql-container, .ql-toolbar {
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

      &.quill-editor-unfocused .ql-toolbar {
        display: none;
      }

      &.quill-editor-focused .ql-toolbar {
        display: block;
        border-bottom: 1px solid ${r.colorBorder};
      }

      &.quill-editor-unfocused .ql-container {
        border: none;
      }
    `,"editor-document":t`
      overflow: auto;
      min-height: 100px;
      min-width: 200px;
      cursor: text;

      div[contenteditable='false'] {
        cursor: not-allowed;
      }
      
      .ql-toolbar {
        border: 1px solid ${r.colorBorder};
        border-top-left-radius: ${r.borderRadius}px;
        border-top-right-radius: ${r.borderRadius}px;
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

      &.quill-editor-unfocused .ql-toolbar {
        display: none;
      }
      
      &.quill-editor-focused .ql-toolbar {
        display: block;
      }
      
      &.quill-editor-unfocused .ql-container {
        border: none;
      }
      
      &.quill-editor-unfocused .ql-editor {
        padding: unset;
      }
      
      &.quill-editor-focused .ql-container {
        border-left: 1px solid ${r.colorBorder};
        border-right: 1px solid ${r.colorBorder};
        border-bottom: 1px solid ${r.colorBorder};
        border-bottom-left-radius: ${r.borderRadius}px;
        border-bottom-right-radius: ${r.borderRadius}px;
      }
    `}});var s=r(6486),c=r(2244),m=r.n(c);r(4429),r(9716),r(2016);var b=r(2648),p=r.n(b);r(2564);var g=r(5907);let f=e=>{let{open:t,setOpen:r,html:o,save:n}=e,{t:a}=(0,l.useTranslation)(),[d,s]=(0,u.useState)(o);return(0,u.useEffect)(()=>{s(o)},[o]),(0,i.jsx)(g.Modal,{footer:(0,i.jsxs)(g.ModalFooter,{children:[(0,i.jsx)(g.Button,{danger:!0,onClick:()=>{r(!1)},children:a("cancel")},"cancel"),(0,i.jsx)(g.Button,{onClick:()=>{n(d),r(!1)},type:"primary",children:a("save")},"save")]}),onCancel:()=>{r(!1)},open:t,size:"XL",title:"HTML",children:(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(g.TextArea,{autoSize:{minRows:4},onChange:e=>{s(e.target.value)},value:d})})})};var h=r(2036);let q=(0,u.forwardRef)((e,t)=>{let{defaultValue:r="",onSelectionChange:o,onTextChange:n,onFocusChange:a,maxCharacters:d,editorConfig:s,placeholder:b="",readOnly:q=!1}=e,{t:y}=(0,l.useTranslation)(),v=(0,u.useRef)(null),x=(0,u.useRef)(n),w=(0,u.useRef)(o),[k,T]=(0,u.useState)(),[C,E]=(0,u.useState)(!1),[_,S]=(0,u.useState)(""),[N,A]=(0,u.useState)(),L=(0,u.useRef)(null);return(0,u.useImperativeHandle)(t,()=>({onDrop:e=>{void 0!==k&&function(e,t){let r=t.data,o=!1,l=N;void 0===l&&(l=new c.Range(0,0)),l.length>0&&(o=!0);let n=r.id,i=r.fullPath;if("asset"===t.type)if("image"!==r.type||o){e.format("link",i),e.format("pimcore_id",n),e.format("pimcore_type","asset");return}else{let t={width:"600px",alt:"asset_image",pimcore_id:n,pimcore_type:"asset"};void 0!==r.width&&(i=(0,g.createImageThumbnailUrl)(n,{width:600,mimeType:"JPEG"}),r.width<600&&["jpg","jpeg","gif","png"].includes(function(e){let t=e.split(".");return t[t.length-1]}(r.fullPath))&&(i=r.fullPath,t.pimcore_disable_thumbnail=!0),r.width<600&&(t.width=(0,h.toCssDimension)(r.width))),e.insertEmbed(l.index,"image",i,"user"),e.formatText(l.index,1,t);return}if(e.format("link",i),e.format("pimcore_id",n),"document"===r.elementType&&("page"===r.type||"hardlink"===r.type||"link"===r.type))return e.format("pimcore_type","document");"object"===r.elementType&&e.format("pimcore_type","object")}(k,e)}})),function(){m().register({"modules/table-better":p()},!0);let e=m().import("parchment");m().register({"modules/table-better":p()},!0);let t=new e.Attributor("pimcore_id","pimcore_id",{scope:e.Scope.INLINE});m().register(t);let r=new e.Attributor("pimcore_type","pimcore_type",{scope:e.Scope.INLINE});m().register(r);let o=new e.Attributor("pimcore_disable_thumbnail","pimcore_disable_thumbnail",{scope:e.Scope.INLINE});m().register(o);let l=new e.Attributor("class","class",{scope:e.Scope.ANY});m().register(l,!0);let n=new e.Attributor("id","id",{scope:e.Scope.ANY});m().register(n,!0);let i=new e.Attributor("style","style",{scope:e.Scope.ANY});m().register(i,!0)}(),(0,u.useLayoutEffect)(()=>{x.current=n,w.current=o}),(0,u.useEffect)(()=>{let e=v.current,t=e.appendChild(e.ownerDocument.createElement("div")),o=Object.assign({theme:"snow",modules:{}},s);var l,n=o;let i=n.modules;void 0===i.table&&(i.table=!1),void 0===i["table-better"]&&(i["table-better"]={language:"en_US",menus:["column","row","merge","table","cell","wrap","delete"],toolbarTable:!0}),void 0===i.keyboard&&(i.keyboard={bindings:p().keyboardBindings}),void 0===i.toolbar&&(i.toolbar={container:[["undo","redo"],[{header:[1,2,3,4,5,6,!1]}],["bold","italic"],[{align:[]}],[{list:"ordered"},{list:"bullet"}],[{indent:"-1"},{indent:"+1"}],["blockquote"],["link","table-better"],["clean","html-edit"]]}),void 0===i.history&&(i.history={delay:700,maxStack:200,userOnly:!0});let u=new(m())(t,o);t.getElementsByClassName("ql-editor")[0].setAttribute("data-placeholder",b),u.enable(!q),T(u),l=u,j("undo",()=>{l.history.undo()}),j("redo",()=>{l.history.redo()}),j("html-edit",()=>{let e=l.getModule("table-better");null==e||e.deleteTableTemporary(),S(l.getSemanticHTML()),E(!0)}),R(u,r),u.on(m().events.TEXT_CHANGE,function(){for(var e,t=arguments.length,r=Array(t),o=0;o<t;o++)r[o]=arguments[o];let l=u.getModule("table-better");null==l||l.deleteTableTemporary(),null==(e=x.current)||e.call(x,u.getSemanticHTML()),B(u)}),u.on(m().events.SELECTION_CHANGE,function(){for(var e,t=arguments.length,r=Array(t),o=0;o<t;o++)r[o]=arguments[o];null==(e=w.current)||e.call(w,...r),A(r[0]??r[1]),null!=r[0]&&(null!==L.current&&(clearTimeout(L.current),L.current=null),null==a||a(!0))});let d=t.getElementsByClassName("ql-editor")[0];null!==d&&(d.addEventListener("focus",()=>{null!==L.current&&void 0!==L.current&&(clearTimeout(L.current),L.current=null),null==a||a(!0)}),d.addEventListener("blur",()=>{L.current=window.setTimeout(()=>{null==a||a(!1),L.current=null},150)}));let c=t.getElementsByClassName("ql-toolbar")[0];return null!=c&&c.addEventListener("mousedown",()=>{null!==L.current&&(clearTimeout(L.current),L.current=null),null==a||a(!0)}),()=>{null!==L.current&&void 0!==L.current&&clearTimeout(L.current),T(void 0),e.innerHTML=""}},[v]),(0,u.useEffect)(()=>{if(void 0===k)return;let e=k.getModule("table-better");null==e||e.deleteTableTemporary(),"<p></p>"!==r&&r!==k.getSemanticHTML()&&R(k,r)},[r]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{ref:v}),(0,i.jsx)(f,{html:_,open:C,save:e=>{void 0!==k&&R(k,e)},setOpen:E})]});function R(e,t){e.deleteText(0,e.getLength());let r=e.clipboard.convert({html:t,text:"\n"});e.updateContents(r,m().sources.USER),e.history.clear(),B(e)}function j(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",o=document.getElementsByClassName("ql-"+e);if(0!==o.length)for(let e of o)e.innerHTML=r,e.addEventListener("click",function(e){e.preventDefault(),t(e)})}function B(e){e.root.style.border="",e.root.setAttribute("title","");let t=e.getLength();"number"==typeof d&&0!==d&&t>d&&(e.root.style.border="1px solid red",e.root.setAttribute("title",y("maximum_length_is")+" "+d))}});q.displayName="Editor";let y=(0,u.forwardRef)((e,t)=>{let{value:r,onChange:o,disabled:l,width:n,height:c,maxCharacters:m,placeholder:b,editorConfig:p,context:g}=e,f=(0,u.useRef)(null),{styles:y}=d(),v=(0,u.useRef)(setTimeout(()=>{})),[x,w]=(0,u.useState)(!1);return(0,u.useImperativeHandle)(t,()=>({onDrop:e=>{(0,s.isNull)(f.current)||f.current.onDrop(e)}})),(0,u.useEffect)(()=>()=>{clearTimeout(v.current)},[]),(0,i.jsx)("div",{className:`${g===a.WysiwygContext.DOCUMENT?y["editor-document"]:y.editor} ${x?"quill-editor-focused":"quill-editor-unfocused"}`,style:{maxWidth:(0,h.toCssDimension)(n),maxHeight:(0,h.toCssDimension)(c)},children:(0,i.jsx)(q,{defaultValue:r??"",editorConfig:p,maxCharacters:m,onFocusChange:w,onTextChange:e=>{var t;t=e,clearTimeout(v.current),v.current=setTimeout(()=>{null!=o&&o(t)},700)},placeholder:b,readOnly:l,ref:f})})});y.displayName="QuillEditor";let v={onInit:()=>{o.container.get(l.serviceIds["App/ComponentRegistry/ComponentRegistry"]).override({component:y,name:n.componentConfig.wysiwyg.editor.name})}};void 0!==(e=r.hmd(e)).hot&&e.hot.accept();let x={name:"pimcore-quill-plugin",onInit:e=>{let{container:t}=e},onStartup:e=>{let{moduleSystem:t}=e;t.registerModule(v),console.log("Hello from quill.")}}}}]);