/*! For license information please see __federation_expose_default_export.71caa108.js.LICENSE.txt */
"use strict";(self.webpackChunkpimcore_quill_bundle=self.webpackChunkpimcore_quill_bundle||[]).push([["249"],{2334:function(e,t,r){r.r(t),r.d(t,{QuillPlugin:()=>y});var o=r(4723),l=r(6236),n=r(6122),i=r(5893),a=r(4179),u=r(7799);let d=(0,r(398).createStyles)(e=>{let{css:t,token:r}=e;return{editor:t`
      border: 1px solid ${r.colorBorder};
      border-radius: ${r.borderRadius}px;
      min-height: 100px;
      min-width: 200px;
      background-color: ${r.colorBgContainer};
      cursor: text;
      display: flex;
      overflow: hidden;
      flex-direction: column;

      .editor {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        overflow: auto;
      }

      .ql-container {
        overflow: auto;
        flex-grow: 1;
        display: flex;
        flex-direction: column;
      }

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
      min-height: 100px;
      min-width: 200px;
      cursor: text;
      display: flex;
      overflow: hidden;
      flex-direction: column;

      .editor {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        overflow: auto;
      }

      .ql-container {
        overflow: auto;
        flex-grow: 1;
        display: flex;
        flex-direction: column;
      }

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
    `}});var s=r(6486),c=r(2244),m=r.n(c);r(4429),r(9716),r(2016);var p=r(2648),b=r.n(p);r(2564);var f=r(5907);let g=e=>{let{open:t,setOpen:r,html:o,save:n}=e,{t:u}=(0,l.useTranslation)(),[d,s]=(0,a.useState)(o);return(0,a.useEffect)(()=>{s(o)},[o]),(0,i.jsx)(f.Modal,{footer:(0,i.jsxs)(f.ModalFooter,{children:[(0,i.jsx)(f.Button,{danger:!0,onClick:()=>{r(!1)},children:u("cancel")},"cancel"),(0,i.jsx)(f.Button,{onClick:()=>{n(d),r(!1)},type:"primary",children:u("save")},"save")]}),onCancel:()=>{r(!1)},open:t,size:"XL",title:"HTML",children:(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(f.TextArea,{autoSize:{minRows:4},onChange:e=>{s(e.target.value)},value:d})})})};var h=r(2036);let q=(0,a.forwardRef)((e,t)=>{let{defaultValue:r="",onSelectionChange:o,onTextChange:n,onFocusChange:u,maxCharacters:d,editorConfig:s,placeholder:p="",readOnly:q=!1}=e,{t:v}=(0,l.useTranslation)(),x=(0,a.useRef)(null),y=(0,a.useRef)(n),w=(0,a.useRef)(o),k=(0,a.useRef)(u),[T,E]=(0,a.useState)(),[C,_]=(0,a.useState)(!1),[N,S]=(0,a.useState)(""),[L,R]=(0,a.useState)(),A=(0,a.useRef)(null);return(0,a.useImperativeHandle)(t,()=>({onDrop:e=>{void 0!==T&&function(e,t){let r=t.data,o=!1,l=L;void 0===l&&(l=new c.Range(0,0)),l.length>0&&(o=!0);let n=r.id,i=r.fullPath;if("asset"===t.type)if("image"!==r.type||o){e.format("link",i),e.format("pimcore_id",n),e.format("pimcore_type","asset");return}else{let t={width:"600px",alt:"asset_image",pimcore_id:n,pimcore_type:"asset"};void 0!==r.width&&(i=(0,f.createImageThumbnailUrl)(n,{width:600,mimeType:"JPEG"}),r.width<600&&["jpg","jpeg","gif","png"].includes(function(e){let t=e.split(".");return t[t.length-1]}(r.fullPath))&&(i=r.fullPath,t.pimcore_disable_thumbnail=!0),r.width<600&&(t.width=(0,h.toCssDimension)(r.width))),e.insertEmbed(l.index,"image",i,"user"),e.formatText(l.index,1,t);return}if(e.format("link",i),e.format("pimcore_id",n),"document"===r.elementType&&("page"===r.type||"hardlink"===r.type||"link"===r.type))return e.format("pimcore_type","document");"object"===r.elementType&&e.format("pimcore_type","object")}(T,e)}})),(0,a.useEffect)(()=>{!function(){m().register({"modules/table-better":b()},!0);let e=m().import("parchment");m().register({"modules/table-better":b()},!0);let t=new e.Attributor("pimcore_id","pimcore_id",{scope:e.Scope.INLINE});m().register(t);let r=new e.Attributor("pimcore_type","pimcore_type",{scope:e.Scope.INLINE});m().register(r);let o=new e.Attributor("pimcore_disable_thumbnail","pimcore_disable_thumbnail",{scope:e.Scope.INLINE});m().register(o);let l=new e.Attributor("class","class",{scope:e.Scope.ANY});m().register(l,!0);let n=new e.Attributor("id","id",{scope:e.Scope.ANY});m().register(n,!0);let i=new e.Attributor("style","style",{scope:e.Scope.ANY});m().register(i,!0)}()},[]),(0,a.useLayoutEffect)(()=>{y.current=n,w.current=o,k.current=u}),(0,a.useEffect)(()=>{let e=x.current,t=e.appendChild(e.ownerDocument.createElement("div")),o=Object.assign({theme:"snow",modules:{}},s);var l,n=o;let i=n.modules;void 0===i.table&&(i.table=!1),void 0===i["table-better"]&&(i["table-better"]={language:"en_US",menus:["column","row","merge","table","cell","wrap","delete"],toolbarTable:!0}),void 0===i.keyboard&&(i.keyboard={bindings:b().keyboardBindings}),void 0===i.toolbar&&(i.toolbar={container:[["undo","redo"],[{header:[1,2,3,4,5,6,!1]}],["bold","italic"],[{align:[]}],[{list:"ordered"},{list:"bullet"}],[{indent:"-1"},{indent:"+1"}],["blockquote"],["link","table-better"],["clean","html-edit"]]}),void 0===i.history&&(i.history={delay:700,maxStack:200,userOnly:!0});let a=new(m())(t,o);t.getElementsByClassName("ql-editor")[0].setAttribute("data-placeholder",p),a.enable(!q),E(a),l=a,B("undo",()=>{l.history.undo()}),B("redo",()=>{l.history.redo()}),B("html-edit",()=>{let e=l.getModule("table-better");null==e||e.deleteTableTemporary(),S(l.getSemanticHTML()),_(!0)}),j(a,r),a.on(m().events.TEXT_CHANGE,function(){for(var e,t=arguments.length,r=Array(t),o=0;o<t;o++)r[o]=arguments[o];let l=a.getModule("table-better");null==l||l.deleteTableTemporary(),null==(e=y.current)||e.call(y,a.getSemanticHTML()),I(a)}),a.on(m().events.SELECTION_CHANGE,function(){for(var e,t,r=arguments.length,o=Array(r),l=0;l<r;l++)o[l]=arguments[l];null==(e=w.current)||e.call(w,...o),R(o[0]??o[1]),null!=o[0]&&(null!==A.current&&(clearTimeout(A.current),A.current=null),null==(t=k.current)||t.call(k,!0))});let u=t.getElementsByClassName("ql-editor")[0];null!==u&&u.addEventListener("focus",()=>{var e;null!==A.current&&void 0!==A.current&&(clearTimeout(A.current),A.current=null),null==(e=k.current)||e.call(k,!0)});let d=e=>{if(null!==x.current&&!x.current.contains(e.target)){var t;null==(t=k.current)||t.call(k,!1)}};document.addEventListener("mousedown",d);let c=t.getElementsByClassName("ql-toolbar")[0];return null!=c&&c.addEventListener("mousedown",()=>{var e;null!==A.current&&(clearTimeout(A.current),A.current=null),null==(e=k.current)||e.call(k,!0)}),()=>{document.removeEventListener("mousedown",d),null!==A.current&&void 0!==A.current&&clearTimeout(A.current),E(void 0),e.innerHTML=""}},[x]),(0,a.useEffect)(()=>{if(void 0===T)return;let e=T.getModule("table-better");null==e||e.deleteTableTemporary(),"<p></p>"!==r&&r!==T.getSemanticHTML()&&j(T,r)},[r]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{className:"editor",ref:x}),(0,i.jsx)(g,{html:N,open:C,save:e=>{void 0!==T&&j(T,e)},setOpen:_})]});function j(e,t){e.deleteText(0,e.getLength());let r=e.clipboard.convert({html:t,text:"\n"});e.updateContents(r,m().sources.USER),e.history.clear(),I(e)}function B(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";if(null===x.current)return;let o=x.current.getElementsByClassName("ql-"+e);if(0!==o.length)for(let e of o)e.innerHTML=r,e.addEventListener("click",function(e){e.preventDefault(),t(e)})}function I(e){e.root.style.border="",e.root.setAttribute("title","");let t=e.getLength();"number"==typeof d&&0!==d&&t>d&&(e.root.style.border="1px solid red",e.root.setAttribute("title",v("maximum_length_is")+" "+d))}});q.displayName="Editor";let v=(0,a.forwardRef)((e,t)=>{let{value:r,onChange:o,disabled:l,width:n,height:c,maxCharacters:m,placeholder:p,editorConfig:b,context:f}=e,g=(0,a.useRef)(null),{styles:v}=d(),x=(0,a.useRef)(setTimeout(()=>{})),[y,w]=(0,a.useState)(!1);return(0,a.useImperativeHandle)(t,()=>({onDrop:e=>{(0,s.isNull)(g.current)||g.current.onDrop(e)}})),(0,a.useEffect)(()=>()=>{clearTimeout(x.current)},[]),(0,i.jsx)("div",{className:["quill-editor",f===u.WysiwygContext.DOCUMENT?v["editor-document"]:v.editor,y?"quill-editor-focused":"quill-editor-unfocused"].join(" "),style:{maxWidth:(0,h.toCssDimension)(n),maxHeight:(0,h.toCssDimension)(c)},children:(0,i.jsx)(q,{defaultValue:r??"",editorConfig:b,maxCharacters:m,onFocusChange:w,onTextChange:e=>{var t;t=e,clearTimeout(x.current),null!=o&&o(t)},placeholder:p,readOnly:l,ref:g})})});v.displayName="QuillEditor";let x={onInit:()=>{o.container.get(l.serviceIds["App/ComponentRegistry/ComponentRegistry"]).override({component:v,name:n.componentConfig.wysiwyg.editor.name})}};void 0!==(e=r.hmd(e)).hot&&e.hot.accept();let y={name:"pimcore-quill-plugin",onInit:e=>{let{container:t}=e},onStartup:e=>{let{moduleSystem:t}=e;t.registerModule(x),console.log("Hello from quill.")}}}}]);