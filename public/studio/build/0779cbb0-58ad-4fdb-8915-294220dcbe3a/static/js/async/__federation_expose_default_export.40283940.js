/*! For license information please see __federation_expose_default_export.40283940.js.LICENSE.txt */
"use strict";(self.webpackChunkpimcore_quill_bundle=self.webpackChunkpimcore_quill_bundle||[]).push([["249"],{2334:function(e,t,r){r.r(t),r.d(t,{QuillPlugin:()=>v});var o=r(4723),l=r(6236),n=r(6122),i=r(5893),a=r(2420);let s=(0,r(2432).kc)(e=>{let{css:t,token:r}=e;return{editor:t`
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
    `}});var d=r(6486),u=r(1925);r(4429),r(9716),r(2016);var c=r(9404),m=r.n(c);r(2564);var p=r(5907);let b=e=>{let{open:t,setOpen:r,html:o,save:n}=e,{t:s}=(0,l.useTranslation)(),[d,u]=(0,a.useState)(o);return(0,a.useEffect)(()=>{u(o)},[o]),(0,i.jsx)(p.Modal,{footer:(0,i.jsxs)(p.ModalFooter,{children:[(0,i.jsx)(p.Button,{danger:!0,onClick:()=>{r(!1)},children:s("cancel")},"cancel"),(0,i.jsx)(p.Button,{onClick:()=>{n(d),r(!1)},type:"primary",children:s("save")},"save")]}),onCancel:()=>{r(!1)},open:t,size:"XL",title:"HTML",children:(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(p.TextArea,{autoSize:{minRows:4},onChange:e=>{u(e.target.value)},value:d})})})};var f=r(2036);let g=(0,a.forwardRef)((e,t)=>{let{defaultValue:r="",onSelectionChange:o,onTextChange:n,maxCharacters:s,editorConfig:d,placeholder:c="",readOnly:g=!1}=e,{t:h}=(0,l.useTranslation)(),y=(0,a.useRef)(null),v=(0,a.useRef)(n),w=(0,a.useRef)(o),[x,T]=(0,a.useState)(),[k,_]=(0,a.useState)(!1),[q,C]=(0,a.useState)(""),[E,S]=(0,a.useState)();return(0,a.useImperativeHandle)(t,()=>({onDrop:e=>{void 0!==x&&function(e,t){let r=t.data,o=!1,l=E;void 0===l&&(l=new u.Range(0,0)),l.length>0&&(o=!0);let n=r.id,i=r.fullPath;if("asset"===t.type)if("image"!==r.type||o){e.format("link",i),e.format("pimcore_id",n),e.format("pimcore_type","asset");return}else{let t={width:"600px",alt:"asset_image",pimcore_id:n,pimcore_type:"asset"};void 0!==r.width&&(i=(0,p.createImageThumbnailUrl)(n,{width:600,mimeType:"JPEG"}),r.width<600&&["jpg","jpeg","gif","png"].includes(function(e){let t=e.split(".");return t[t.length-1]}(r.fullPath))&&(i=r.fullPath,t.pimcore_disable_thumbnail=!0),r.width<600&&(t.width=(0,f.toCssDimension)(r.width))),e.insertEmbed(l.index,"image",i,"user"),e.formatText(l.index,1,t);return}if(e.format("link",i),e.format("pimcore_id",n),"document"===r.elementType&&("page"===r.type||"hardlink"===r.type||"link"===r.type))return e.format("pimcore_type","document");"object"===r.elementType&&e.format("pimcore_type","object")}(x,e)}})),function(){u.default.register({"modules/table-better":m()},!0);let e=u.default.import("parchment");u.default.register({"modules/table-better":m()},!0);let t=new e.Attributor("pimcore_id","pimcore_id",{scope:e.Scope.INLINE});u.default.register(t);let r=new e.Attributor("pimcore_type","pimcore_type",{scope:e.Scope.INLINE});u.default.register(r);let o=new e.Attributor("pimcore_disable_thumbnail","pimcore_disable_thumbnail",{scope:e.Scope.INLINE});u.default.register(o);let l=new e.Attributor("class","class",{scope:e.Scope.ANY});u.default.register(l,!0);let n=new e.Attributor("id","id",{scope:e.Scope.ANY});u.default.register(n,!0);let i=new e.Attributor("style","style",{scope:e.Scope.ANY});u.default.register(i,!0)}(),(0,a.useLayoutEffect)(()=>{v.current=n,w.current=o}),(0,a.useEffect)(()=>{let e=y.current,t=e.appendChild(e.ownerDocument.createElement("div")),o=Object.assign({theme:"snow",modules:{}},d);var l,n=o;let i=n.modules;void 0===i.table&&(i.table=!1),void 0===i["table-better"]&&(i["table-better"]={language:"en_US",menus:["column","row","merge","table","cell","wrap","delete"],toolbarTable:!0}),void 0===i.keyboard&&(i.keyboard={bindings:m().keyboardBindings}),void 0===i.toolbar&&(i.toolbar={container:[["undo","redo"],[{header:[1,2,3,4,5,6,!1]}],["bold","italic"],[{align:[]}],[{list:"ordered"},{list:"bullet"}],[{indent:"-1"},{indent:"+1"}],["blockquote"],["link","table-better"],["clean","html-edit"]]}),void 0===i.history&&(i.history={delay:700,maxStack:200,userOnly:!0});let a=new u.default(t,o);return t.getElementsByClassName("ql-editor")[0].setAttribute("data-placeholder",c),a.enable(!g),T(a),l=a,N("undo",()=>{l.history.undo()}),N("redo",()=>{l.history.redo()}),N("html-edit",()=>{let e=l.getModule("table-better");null==e||e.deleteTableTemporary(),C(l.getSemanticHTML()),_(!0)}),A(a,r),a.on(u.default.events.TEXT_CHANGE,function(){for(var e,t=arguments.length,r=Array(t),o=0;o<t;o++)r[o]=arguments[o];let l=a.getModule("table-better");null==l||l.deleteTableTemporary(),null==(e=v.current)||e.call(v,a.getSemanticHTML()),j(a)}),a.on(u.default.events.SELECTION_CHANGE,function(){for(var e,t=arguments.length,r=Array(t),o=0;o<t;o++)r[o]=arguments[o];null==(e=w.current)||e.call(w,...r),S(r[0]??r[1])}),()=>{T(void 0),e.innerHTML=""}},[y]),(0,a.useEffect)(()=>{if(void 0===x)return;let e=x.getModule("table-better");null==e||e.deleteTableTemporary(),"<p></p>"!==r&&r!==x.getSemanticHTML()&&A(x,r)},[r]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{ref:y}),(0,i.jsx)(b,{html:q,open:k,save:e=>{void 0!==x&&A(x,e)},setOpen:_})]});function A(e,t){e.deleteText(0,e.getLength());let r=e.clipboard.convert({html:t,text:"\n"});e.updateContents(r,u.default.sources.USER),e.history.clear(),j(e)}function N(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",o=document.getElementsByClassName("ql-"+e);if(0!==o.length)for(let e of o)e.innerHTML=r,e.addEventListener("click",function(e){e.preventDefault(),t(e)})}function j(e){e.root.style.border="",e.root.setAttribute("title","");let t=e.getLength();"number"==typeof s&&0!==s&&t>s&&(e.root.style.border="1px solid red",e.root.setAttribute("title",h("maximum_length_is")+" "+s))}});g.displayName="Editor";let h=(0,a.forwardRef)((e,t)=>{let{value:r,onChange:o,disabled:l,width:n,height:u,maxCharacters:c,placeholder:m,editorConfig:p}=e,b=(0,a.useRef)(null),{styles:h}=s(),y=(0,a.useRef)(setTimeout(()=>{}));return(0,a.useImperativeHandle)(t,()=>({onDrop:e=>{(0,d.isNull)(b.current)||b.current.onDrop(e)}})),(0,a.useEffect)(()=>()=>{clearTimeout(y.current)},[]),(0,i.jsx)("div",{className:h.editor,style:{maxWidth:(0,f.toCssDimension)(n),maxHeight:(0,f.toCssDimension)(u)},children:(0,i.jsx)(g,{defaultValue:r??"",editorConfig:p,maxCharacters:c,onTextChange:e=>{var t;t=e,clearTimeout(y.current),y.current=setTimeout(()=>{null!=o&&o(t)},700)},placeholder:m,readOnly:l,ref:b})})});h.displayName="QuillEditor";let y={onInit:()=>{o.container.get(l.serviceIds["App/ComponentRegistry/ComponentRegistry"]).override({component:h,name:n.componentConfig.wysiwyg.editor.name})}};void 0!==(e=r.hmd(e)).hot&&e.hot.accept();let v={name:"pimcore-quill-plugin",onInit:e=>{let{container:t}=e},onStartup:e=>{let{moduleSystem:t}=e;t.registerModule(y),console.log("Hello from quill.")}}}}]);