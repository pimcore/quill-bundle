/*! For license information please see __federation_expose_default_export.c0ccc573.js.LICENSE.txt */
"use strict";(self["chunk_pimcore_quill_bundle "]=self["chunk_pimcore_quill_bundle "]||[]).push([["525"],{1022(e,t,r){r.r(t),r.d(t,{QuillPlugin:()=>v});var o=r(2977),l=r(4781),n=r(2703),i=r(4848),a=r(9932),d=r(9869);let u=(0,r(7489).createStyles)(e=>{let{css:t,token:r}=e;return{editor:t`
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
    `}});var s=r(2543),c=r(3535),m=r.n(c);r(6532),r(2415),r(8828);var p=r(2571),b=r.n(p);r(4229);var g=r(2696);let f=e=>{let{open:t,setOpen:r,html:o,save:n}=e,{t:d}=(0,l.useTranslation)(),[u,s]=(0,a.useState)(o);return(0,a.useEffect)(()=>{s(o)},[o]),(0,i.jsx)(g.Modal,{footer:(0,i.jsxs)(g.ModalFooter,{children:[(0,i.jsx)(g.Button,{danger:!0,onClick:()=>{r(!1)},children:d("cancel")},"cancel"),(0,i.jsx)(g.Button,{onClick:()=>{n(u),r(!1)},type:"primary",children:d("save")},"save")]}),onCancel:()=>{r(!1)},open:t,size:"XL",title:"HTML",children:(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(g.TextArea,{autoSize:{minRows:4},onChange:e=>{s(e.target.value)},value:u})})})};var h=r(8267);let q=(0,a.forwardRef)((e,t)=>{let{defaultValue:r="",onSelectionChange:o,onTextChange:n,onFocusChange:d,maxCharacters:u,editorConfig:s,placeholder:p="",readOnly:q=!1}=e,{t:x}=(0,l.useTranslation)(),y=(0,a.useRef)(null),v=(0,a.useRef)(n),w=(0,a.useRef)(o),k=(0,a.useRef)(d),[T,E]=(0,a.useState)(),[_,C]=(0,a.useState)(!1),[N,S]=(0,a.useState)(""),[L,A]=(0,a.useState)(),R=(0,a.useRef)(null);return(0,a.useImperativeHandle)(t,()=>({onDrop:e=>{void 0!==T&&function(e,t){let r=t.data,o=!1,l=L??new c.Range(0,0);l.length>0&&(o=!0);let n=r.id,i=r.fullPath;if("asset"===t.type)if("image"!==r.type||o){e.format("link",i),e.format("pimcore_id",n),e.format("pimcore_type","asset");return}else{let t,o={width:"600px",alt:"asset_image",pimcore_id:n,pimcore_type:"asset"};void 0!==r.width&&(i=(0,g.createImageThumbnailUrl)(n,{width:600,mimeType:"JPEG"}),r.width<600&&["jpg","jpeg","gif","png"].includes((t=r.fullPath.split("."))[t.length-1])&&(i=r.fullPath,o.pimcore_disable_thumbnail=!0),r.width<600&&(o.width=(0,h.toCssDimension)(r.width))),e.insertEmbed(l.index,"image",i,"user"),e.formatText(l.index,1,o);return}(e.format("link",i),e.format("pimcore_id",n),"document"===r.elementType&&("page"===r.type||"hardlink"===r.type||"link"===r.type))?e.format("pimcore_type","document"):"object"===r.elementType&&e.format("pimcore_type","object")}(T,e)}})),(0,a.useEffect)(()=>{let e,t,r,o,l,n,i;m().register({"modules/table-better":b()},!0),e=m().import("parchment"),m().register({"modules/table-better":b()},!0),t=new e.Attributor("pimcore_id","pimcore_id",{scope:e.Scope.INLINE}),m().register(t),r=new e.Attributor("pimcore_type","pimcore_type",{scope:e.Scope.INLINE}),m().register(r),o=new e.Attributor("pimcore_disable_thumbnail","pimcore_disable_thumbnail",{scope:e.Scope.INLINE}),m().register(o),l=new e.Attributor("class","class",{scope:e.Scope.ANY}),m().register(l,!0),n=new e.Attributor("id","id",{scope:e.Scope.ANY}),m().register(n,!0),i=new e.Attributor("style","style",{scope:e.Scope.ANY}),m().register(i,!0)},[]),(0,a.useLayoutEffect)(()=>{v.current=n,w.current=o,k.current=d}),(0,a.useEffect)(()=>{var e;let t,o=y.current,l=o.appendChild(o.ownerDocument.createElement("div")),n=Object.assign({theme:"snow",modules:{}},s);void 0===(t=n.modules).table&&(t.table=!1),void 0===t["table-better"]&&(t["table-better"]={language:"en_US",menus:["column","row","merge","table","cell","wrap","delete"],toolbarTable:!0}),void 0===t.keyboard&&(t.keyboard={bindings:b().keyboardBindings}),void 0===t.toolbar&&(t.toolbar={container:[["undo","redo"],[{header:[1,2,3,4,5,6,!1]}],["bold","italic"],[{align:[]}],[{list:"ordered"},{list:"bullet"}],[{indent:"-1"},{indent:"+1"}],["blockquote"],["link","table-better"],["clean","html-edit"]]}),void 0===t.history&&(t.history={delay:700,maxStack:200,userOnly:!0});let i=new(m())(l,n);l.getElementsByClassName("ql-editor")[0].setAttribute("data-placeholder",p),i.enable(!q),E(i),e=i,B("undo",()=>{e.history.undo()}),B("redo",()=>{e.history.redo()}),B("html-edit",()=>{let t=e.getModule("table-better");null==t||t.deleteTableTemporary(),S(e.getSemanticHTML()),C(!0)}),j(i,r),i.on(m().events.TEXT_CHANGE,function(){for(var e,t=arguments.length,r=Array(t),o=0;o<t;o++)r[o]=arguments[o];let l=i.getModule("table-better");null==l||l.deleteTableTemporary(),null==(e=v.current)||e.call(v,i.getSemanticHTML()),I(i)}),i.on(m().events.SELECTION_CHANGE,function(){for(var e,t,r=arguments.length,o=Array(r),l=0;l<r;l++)o[l]=arguments[l];null==(e=w.current)||e.call(w,...o),A(o[0]??o[1]),null!=o[0]&&(null!==R.current&&(clearTimeout(R.current),R.current=null),null==(t=k.current)||t.call(k,!0))});let a=l.getElementsByClassName("ql-editor")[0];null!==a&&a.addEventListener("focus",()=>{var e;null!==R.current&&void 0!==R.current&&(clearTimeout(R.current),R.current=null),null==(e=k.current)||e.call(k,!0)});let d=e=>{if(null!==y.current&&!y.current.contains(e.target)){var t;null==(t=k.current)||t.call(k,!1)}};document.addEventListener("mousedown",d);let u=l.getElementsByClassName("ql-toolbar")[0];return null!=u&&u.addEventListener("mousedown",()=>{var e;null!==R.current&&(clearTimeout(R.current),R.current=null),null==(e=k.current)||e.call(k,!0)}),()=>{document.removeEventListener("mousedown",d),null!==R.current&&void 0!==R.current&&clearTimeout(R.current),E(void 0),o.innerHTML=""}},[y]),(0,a.useEffect)(()=>{if(void 0===T)return;let e=T.getModule("table-better");null==e||e.deleteTableTemporary(),"<p></p>"!==r&&r!==T.getSemanticHTML()&&j(T,r)},[r]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{className:"editor",ref:y}),(0,i.jsx)(f,{html:N,open:_,save:e=>{void 0!==T&&j(T,e)},setOpen:C})]});function j(e,t){e.deleteText(0,e.getLength());let r=e.clipboard.convert({html:t,text:"\n"});e.updateContents(r,m().sources.USER),e.history.clear(),I(e)}function B(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";if(null===y.current)return;let o=y.current.getElementsByClassName("ql-"+e);if(0!==o.length)for(let e of o)e.innerHTML=r,e.addEventListener("click",function(e){e.preventDefault(),t(e)})}function I(e){e.root.style.border="",e.root.setAttribute("title","");let t=e.getLength();"number"==typeof u&&0!==u&&t>u&&(e.root.style.border="1px solid red",e.root.setAttribute("title",x("maximum_length_is")+" "+u))}});q.displayName="Editor";let x=(0,a.forwardRef)((e,t)=>{let{value:r,onChange:o,disabled:l,width:n,height:c,maxCharacters:m,placeholder:p,editorConfig:b,context:g}=e,f=(0,a.useRef)(null),{styles:x}=u(),[y,v]=(0,a.useState)(!1);return(0,a.useImperativeHandle)(t,()=>({onDrop:e=>{(0,s.isNull)(f.current)||f.current.onDrop(e)}})),(0,i.jsx)("div",{className:["quill-editor",g===d.WysiwygContext.DOCUMENT?x["editor-document"]:x.editor,y?"quill-editor-focused":"quill-editor-unfocused"].join(" "),style:{maxWidth:(0,h.toCssDimension)(n),maxHeight:(0,h.toCssDimension)(c)},children:(0,i.jsx)(q,{defaultValue:r??"",editorConfig:b,maxCharacters:m,onFocusChange:v,onTextChange:e=>{null!=o&&o(e)},placeholder:p,readOnly:l,ref:f})})});x.displayName="QuillEditor";let y={onInit:()=>{o.container.get(l.serviceIds["App/ComponentRegistry/ComponentRegistry"]).override({component:x,name:n.componentConfig.wysiwyg.editor.name})}};void 0!==(e=r.hmd(e)).hot&&e.hot.accept();let v={name:"pimcore-quill-plugin",onInit:e=>{let{container:t}=e},onStartup:e=>{let{moduleSystem:t}=e;t.registerModule(y),console.log("Hello from quill.")}}}}]);