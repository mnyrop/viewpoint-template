import{C as Ie,S as $e,i as we,s as Ee,e as _,k as j,j as W,c as v,a as b,d as o,n as O,m as X,b as h,f as P,H as f,J as Ne,o as Y,K as Z,x as z,u as F,v as x,L as Re,t as R,g as q,r as qe,w as Be,M as Ve,N as ae,O as ne,P as de,Q as at,R as it,I as he,T as Ue,U as je,V as De,h as Te,l as ze,W as Fe,X as nt,Y as ot,Z as ct,_ as Ge,$ as K,A as ft,a0 as He,a1 as ut,a2 as dt,a3 as Ke}from"../chunks/vendor-b0b63227.js";import{b as Qe}from"../chunks/paths-28a87002.js";const Ce="viewpoint",ht="/viewpoint",Je="embeddable iiif viewers with svelte-kit",ke=["https://purl.stanford.edu/wr796rv9498/iiif/manifest","https://gallica.bnf.fr/iiif/ark:/12148/btv1b90266728/manifest.json","https://iiif.bodleian.ox.ac.uk/iiif/manifest/e32a277e-91e2-4a6d-8ba6-cc4bad230410.json","https://jsonstorage.net/api/items/1a6e2d6e-fa90-4d44-95a5-35bb6c011aa2","https://www.e-codices.unifr.ch/metadata/iiif/bc-s-0007/manifest.json","https://www.e-codices.unifr.ch/metadata/iiif/bc-s-0058/manifest.json","https://www.e-codices.unifr.ch/metadata/iiif/snm-AG002760/manifest.json","https://www.e-codices.unifr.ch/metadata/iiif/hmtg-T09393/manifest.json","https://gallica.bnf.fr/iiif/ark:/12148/btv1b53212522c/manifest.json","https://gallica.bnf.fr/iiif/ark:/12148/btv1b8400342f/manifest.json","https://gallica.bnf.fr/iiif/ark:/12148/btv1b84006642/manifest.json","https://gallica.bnf.fr/iiif/ark:/12148/btv1b8490923n/manifest.json","https://jsonstorage.net/api/items/ce49ca3a-3031-4914-bb60-069a65642f9f"],Oe=ht,mt="URI input",Pe=[{id:"mirador",label:"Mirador",options:[{id:"theme",label:"Theme",values:["Dark","Light"],icon:"paintBrush"},{id:"view",label:"View style",values:["Single","Book","Gallery"]},{id:"thumbs",label:"Thumbnail view",values:["Off","Right","Bottom"]},{id:"workspacecontrols",label:"Show controls",values:["False","True"],icon:"cog"}]}],pt="06/29/23 @ 03:22 EST",oe=Ie(),Me=Ie(),Ae=Ie(""),ye=Ie({});function We(l,e,r){const t=l.slice();return t[10]=e[r],t[11]=e,t[12]=r,t}function _t(l){let e,r,t,a,s;r=new de({props:{data:Ue}});function u(){return l[5](l[12])}return{c(){e=_("button"),W(r.$$.fragment),this.h()},l(n){e=v(n,"BUTTON",{title:!0,class:!0});var E=b(e);X(r.$$.fragment,E),E.forEach(o),this.h()},h(){h(e,"title","Remove"),h(e,"class","button is-small")},m(n,E){P(n,e,E),Y(r,e,null),t=!0,a||(s=Z(e,"click",u),a=!0)},p(n,E){l=n},i(n){t||(z(r.$$.fragment,n),t=!0)},o(n){F(r.$$.fragment,n),t=!1},d(n){n&&o(e),x(r),a=!1,s()}}}function vt(l){let e,r,t;return r=new de({props:{data:Ue}}),{c(){e=_("button"),W(r.$$.fragment),this.h()},l(a){e=v(a,"BUTTON",{title:!0,class:!0});var s=b(e);X(r.$$.fragment,s),s.forEach(o),this.h()},h(){h(e,"title","Remove"),h(e,"class","button is-small"),e.disabled=!0},m(a,s){P(a,e,s),Y(r,e,null),t=!0},p:he,i(a){t||(z(r.$$.fragment,a),t=!0)},o(a){F(r.$$.fragment,a),t=!1},d(a){a&&o(e),x(r)}}}function Xe(l){let e,r,t,a,s,u,n,E,k,y,T,p,d,V,$,w,i,m;const c=[vt,_t],I=[];function g(M,D){return M[12]==0?0:1}t=g(l),a=I[t]=c[t](l);function A(){l[6].call(n,l[11],l[12])}T=new de({props:{data:at}});function G(){return l[7](l[12])}$=new de({props:{data:it}});function Q(){return l[8](l[12])}return{c(){e=_("div"),r=_("div"),a.c(),s=j(),u=_("div"),n=_("input"),E=j(),k=_("div"),y=_("button"),W(T.$$.fragment),p=j(),d=_("div"),V=_("button"),W($.$$.fragment),this.h()},l(M){e=v(M,"DIV",{class:!0});var D=b(e);r=v(D,"DIV",{class:!0});var S=b(r);a.l(S),S.forEach(o),s=O(D),u=v(D,"DIV",{class:!0});var ee=b(u);n=v(ee,"INPUT",{class:!0,type:!0,placeholder:!0}),ee.forEach(o),E=O(D),k=v(D,"DIV",{class:!0});var U=b(k);y=v(U,"BUTTON",{title:!0,class:!0});var se=b(y);X(T.$$.fragment,se),se.forEach(o),U.forEach(o),p=O(D),d=v(D,"DIV",{class:!0});var re=b(d);V=v(re,"BUTTON",{title:!0,class:!0});var C=b(V);X($.$$.fragment,C),C.forEach(o),re.forEach(o),D.forEach(o),this.h()},h(){h(r,"class","control"),h(n,"class","input is-expanded is-small"),h(n,"type","text"),h(n,"placeholder",mt),h(u,"class","control fullwidth"),h(y,"title","Random"),h(y,"class","button is-success is-small"),h(k,"class","control"),h(V,"title","Clear"),h(V,"class","button is-danger is-small"),h(d,"class","control"),h(e,"class","field has-addons fullwidth")},m(M,D){P(M,e,D),f(e,r),I[t].m(r,null),f(e,s),f(e,u),f(u,n),Ne(n,l[10]),f(e,E),f(e,k),f(k,y),Y(T,y,null),f(e,p),f(e,d),f(d,V),Y($,V,null),w=!0,i||(m=[Z(n,"input",A),Z(y,"click",G),Z(V,"click",Q)],i=!0)},p(M,D){l=M,a.p(l,D),D&1&&n.value!==l[10]&&Ne(n,l[10])},i(M){w||(z(a),z(T.$$.fragment,M),z($.$$.fragment,M),w=!0)},o(M){F(a),F(T.$$.fragment,M),F($.$$.fragment,M),w=!1},d(M){M&&o(e),I[t].d(),x(T),x($),i=!1,Re(m)}}}function bt(l){let e,r,t,a;return{c(){e=_("a"),r=R("Add another +"),this.h()},l(s){e=v(s,"A",{href:!0,class:!0});var u=b(e);r=q(u,"Add another +"),u.forEach(o),this.h()},h(){h(e,"href",""),h(e,"class","subtitle is-7")},m(s,u){P(s,e,u),f(e,r),t||(a=Z(e,"click",l[4]),t=!0)},p:he,d(s){s&&o(e),t=!1,a()}}}function gt(l){let e,r,t;return{c(){e=_("p"),r=R(Se),t=R(" items is the current maximum"),this.h()},l(a){e=v(a,"P",{class:!0});var s=b(e);r=q(s,Se),t=q(s," items is the current maximum"),s.forEach(o),this.h()},h(){h(e,"class","subtitle is-7")},m(a,s){P(a,e,s),f(e,r),f(e,t)},p:he,d(a){a&&o(e)}}}function $t(l){let e,r,t,a,s,u,n,E,k,y,T=l[0],p=[];for(let i=0;i<T.length;i+=1)p[i]=Xe(We(l,T,i));const d=i=>F(p[i],1,1,()=>{p[i]=null});function V(i,m){return i[0].length>=Se?gt:bt}let $=V(l),w=$(l);return{c(){e=_("h2"),r=R("IIIF Manifest"),t=j(),a=_("p"),s=R("Input your own URI or use a random example."),u=j();for(let i=0;i<p.length;i+=1)p[i].c();n=j(),w.c(),E=j(),k=_("div"),this.h()},l(i){e=v(i,"H2",{class:!0});var m=b(e);r=q(m,"IIIF Manifest"),m.forEach(o),t=O(i),a=v(i,"P",{class:!0});var c=b(a);s=q(c,"Input your own URI or use a random example."),c.forEach(o),u=O(i);for(let I=0;I<p.length;I+=1)p[I].l(i);n=O(i),w.l(i),E=O(i),k=v(i,"DIV",{class:!0}),b(k).forEach(o),this.h()},h(){h(e,"class","title is-6 mt-5"),h(a,"class","subtitle is-7"),h(k,"class","pt-3 pb-5")},m(i,m){P(i,e,m),f(e,r),P(i,t,m),P(i,a,m),f(a,s),P(i,u,m);for(let c=0;c<p.length;c+=1)p[c].m(i,m);P(i,n,m),w.m(i,m),P(i,E,m),P(i,k,m),y=!0},p(i,[m]){if(m&15){T=i[0];let c;for(c=0;c<T.length;c+=1){const I=We(i,T,c);p[c]?(p[c].p(I,m),z(p[c],1)):(p[c]=Xe(I),p[c].c(),z(p[c],1),p[c].m(n.parentNode,n))}for(qe(),c=T.length;c<p.length;c+=1)d(c);Be()}$===($=V(i))&&w?w.p(i,m):(w.d(1),w=$(i),w&&(w.c(),w.m(E.parentNode,E)))},i(i){if(!y){for(let m=0;m<T.length;m+=1)z(p[m]);y=!0}},o(i){p=p.filter(Boolean);for(let m=0;m<p.length;m+=1)F(p[m]);y=!1},d(i){i&&o(e),i&&o(t),i&&o(a),i&&o(u),Ve(p,i),i&&o(n),w.d(i),i&&o(E),i&&o(k)}}}let Se=4;function wt(l,e,r){let t,a;ae(l,oe,d=>r(0,t=d)),ae(l,ye,d=>r(9,a=d));function s(d){ne(oe,t[d]="",t)}function u(d){let V=t.length,$=t.slice(0,d).concat(t.slice(d+1,V));ne(oe,t=$,t)}function n(d){for(;;){let V=Math.floor(Math.random()*ke.length),$=ke[V];if($!==t[d]){ne(oe,t[d]=$,t);break}}}function E(){let d=t.length;ne(oe,t[d]=ke[d],t)}const k=d=>u(d);function y(d,V){d[V]=this.value,oe.set(t)}const T=d=>n(d),p=d=>s(d);return l.$$.update=()=>{l.$$.dirty&1&&ne(ye,a.manifests=t,a)},[t,s,u,n,E,k,y,T,p]}class Et extends $e{constructor(e){super();we(this,e,wt,$t,Ee,{})}}function Ye(l,e,r){const t=l.slice();return t[4]=e[r],t[5]=e,t[6]=r,t}function Ze(l,e,r){const t=l.slice();return t[7]=e[r],t}function xe(l,e,r){const t=l.slice();return t[10]=e[r],t}function et(l){let e,r=l[10].label+"",t,a;return{c(){e=_("option"),t=R(r),this.h()},l(s){e=v(s,"OPTION",{});var u=b(e);t=q(u,r),u.forEach(o),this.h()},h(){e.__value=a=l[10],e.value=e.__value},m(s,u){P(s,e,u),f(e,t)},p:he,d(s){s&&o(e)}}}function tt(l){let e,r=l[7]+"",t,a;return{c(){e=_("option"),t=R(r),this.h()},l(s){e=v(s,"OPTION",{});var u=b(e);t=q(u,r),u.forEach(o),this.h()},h(){e.__value=a=l[7].toLowerCase(),e.value=e.__value},m(s,u){P(s,e,u),f(e,t)},p(s,u){u&1&&r!==(r=s[7]+"")&&Te(t,r),u&1&&a!==(a=s[7].toLowerCase())&&(e.__value=a,e.value=e.__value)},d(s){s&&o(e)}}}function lt(l){let e,r,t=l[4].label+"",a,s,u,n,E,k,y,T,p=l[4].values,d=[];for(let $=0;$<p.length;$+=1)d[$]=tt(Ze(l,p,$));function V(){l[3].call(E,l[4])}return{c(){e=_("div"),r=_("div"),a=R(t),s=j(),u=_("div"),n=_("div"),E=_("select");for(let $=0;$<d.length;$+=1)d[$].c();k=j(),this.h()},l($){e=v($,"DIV",{class:!0});var w=b(e);r=v(w,"DIV",{class:!0});var i=b(r);a=q(i,t),i.forEach(o),s=O(w),u=v(w,"DIV",{class:!0});var m=b(u);n=v(m,"DIV",{class:!0});var c=b(n);E=v(c,"SELECT",{class:!0});var I=b(E);for(let g=0;g<d.length;g+=1)d[g].l(I);I.forEach(o),c.forEach(o),m.forEach(o),k=O(w),w.forEach(o),this.h()},h(){h(r,"class","control button no-hover is-primary is-small"),h(E,"class","fullwidth"),l[1][l[4].id]===void 0&&je(V),h(n,"class","select is-small fullwidth"),h(u,"class","control fullwidth"),h(e,"class","field has-addons has-addons-left fullwidth")},m($,w){P($,e,w),f(e,r),f(r,a),f(e,s),f(e,u),f(u,n),f(n,E);for(let i=0;i<d.length;i+=1)d[i].m(E,null);De(E,l[1][l[4].id]),f(e,k),y||(T=Z(E,"change",V),y=!0)},p($,w){if(l=$,w&1&&t!==(t=l[4].label+"")&&Te(a,t),w&1){p=l[4].values;let i;for(i=0;i<p.length;i+=1){const m=Ze(l,p,i);d[i]?d[i].p(m,w):(d[i]=tt(m),d[i].c(),d[i].m(E,null))}for(;i<d.length;i+=1)d[i].d(1);d.length=p.length}w&3&&De(E,l[1][l[4].id])},d($){$&&o(e),Ve(d,$),y=!1,T()}}}function kt(l){let e,r,t,a,s,u,n,E,k,y,T,p,d,V,$=Pe,w=[];for(let c=0;c<$.length;c+=1)w[c]=et(xe(l,$,c));let i=l[0].options,m=[];for(let c=0;c<i.length;c+=1)m[c]=lt(Ye(l,i,c));return{c(){e=_("h2"),r=R("Viewer Settings"),t=j(),a=_("div"),s=_("div"),u=R("Viewer"),n=j(),E=_("div"),k=_("div"),y=_("select");for(let c=0;c<w.length;c+=1)w[c].c();T=j();for(let c=0;c<m.length;c+=1)m[c].c();p=ze(),this.h()},l(c){e=v(c,"H2",{class:!0});var I=b(e);r=q(I,"Viewer Settings"),I.forEach(o),t=O(c),a=v(c,"DIV",{class:!0});var g=b(a);s=v(g,"DIV",{class:!0});var A=b(s);u=q(A,"Viewer"),A.forEach(o),n=O(g),E=v(g,"DIV",{class:!0});var G=b(E);k=v(G,"DIV",{class:!0});var Q=b(k);y=v(Q,"SELECT",{class:!0});var M=b(y);for(let D=0;D<w.length;D+=1)w[D].l(M);M.forEach(o),Q.forEach(o),G.forEach(o),g.forEach(o),T=O(c);for(let D=0;D<m.length;D+=1)m[D].l(c);p=ze(),this.h()},h(){h(e,"class","title is-6 mt-5"),h(s,"class","control button no-hover is-primary is-small"),h(y,"class","fullwidth"),l[0]===void 0&&je(()=>l[2].call(y)),h(k,"class","select is-small fullwidth"),h(E,"class","control fullwidth"),h(a,"class","field has-addons has-addons-left fullwidth")},m(c,I){P(c,e,I),f(e,r),P(c,t,I),P(c,a,I),f(a,s),f(s,u),f(a,n),f(a,E),f(E,k),f(k,y);for(let g=0;g<w.length;g+=1)w[g].m(y,null);De(y,l[0]),P(c,T,I);for(let g=0;g<m.length;g+=1)m[g].m(c,I);P(c,p,I),d||(V=Z(y,"change",l[2]),d=!0)},p(c,[I]){if(I&0){$=Pe;let g;for(g=0;g<$.length;g+=1){const A=xe(c,$,g);w[g]?w[g].p(A,I):(w[g]=et(A),w[g].c(),w[g].m(y,null))}for(;g<w.length;g+=1)w[g].d(1);w.length=$.length}if(I&1&&De(y,c[0]),I&3){i=c[0].options;let g;for(g=0;g<i.length;g+=1){const A=Ye(c,i,g);m[g]?m[g].p(A,I):(m[g]=lt(A),m[g].c(),m[g].m(p.parentNode,p))}for(;g<m.length;g+=1)m[g].d(1);m.length=i.length}},i:he,o:he,d(c){c&&o(e),c&&o(t),c&&o(a),Ve(w,c),c&&o(T),Ve(m,c),c&&o(p),d=!1,V()}}}function yt(l,e,r){let t,a;ae(l,Me,n=>r(0,t=n)),ae(l,ye,n=>r(1,a=n));function s(){t=Fe(this),Me.set(t)}function u(n){a[n.id]=Fe(this),ye.set(a)}return[t,a,s,u]}class It extends $e{constructor(e){super();we(this,e,yt,kt,Ee,{})}}function Vt(l){let e,r,t,a;return e=new Et({}),t=new It({}),{c(){W(e.$$.fragment),r=j(),W(t.$$.fragment)},l(s){X(e.$$.fragment,s),r=O(s),X(t.$$.fragment,s)},m(s,u){Y(e,s,u),P(s,r,u),Y(t,s,u),a=!0},p:he,i(s){a||(z(e.$$.fragment,s),z(t.$$.fragment,s),a=!0)},o(s){F(e.$$.fragment,s),F(t.$$.fragment,s),a=!1},d(s){x(e,s),s&&o(r),x(t,s)}}}function Dt(l,e,r){let t,a,s,u;return ae(l,ye,n=>r(0,t=n)),ae(l,Me,n=>r(1,a=n)),ae(l,Ae,n=>r(2,s=n)),ae(l,oe,n=>r(3,u=n)),ne(oe,u=[ke[0],ke[1]],u),ne(Me,a=Pe[0],a),l.$$.update=()=>{l.$$.dirty&3&&ne(Ae,s=`${Qe}/${a.id}#${nt.stringify(t,{arrayFormat:"bracket"})}`,s)},[t,a]}class Tt extends $e{constructor(e){super();we(this,e,Dt,Vt,Ee,{})}}function st(l){let e,r,t,a;return{c(){e=_("span"),r=R("\xA0Copied to clipboard!"),this.h()},l(s){e=v(s,"SPAN",{class:!0});var u=b(e);r=q(u,"\xA0Copied to clipboard!"),u.forEach(o),this.h()},h(){h(e,"class","ephemeral-message")},m(s,u){P(s,e,u),f(e,r),a=!0},i(s){a||(je(()=>{t||(t=Ge(e,He,{},!0)),t.run(1)}),a=!0)},o(s){t||(t=Ge(e,He,{},!1)),t.run(0),a=!1},d(s){s&&o(e),s&&t&&t.end()}}}function Ct(l){let e,r,t,a,s,u,n,E,k,y,T,p,d,V,$,w,i,m,c,I,g,A,G,Q,M,D,S,ee,U,se,re;y=new de({props:{data:ot}}),G=new de({props:{data:ct}});let C=l[2]&&st();return{c(){e=_("div"),r=_("div"),t=j(),a=_("div"),s=_("article"),u=_("div"),n=_("p"),E=R(`Link to Full Screen Viewer\xA0\xA0
					`),k=_("a"),W(y.$$.fragment),T=j(),p=_("div"),d=_("p"),V=_("a"),$=R(l[0]),w=j(),i=_("div"),m=_("article"),c=_("div"),I=_("p"),g=R(`Embed Code\xA0\xA0
					`),A=_("a"),W(G.$$.fragment),Q=j(),C&&C.c(),M=j(),D=_("div"),S=_("p"),ee=R(l[1]),this.h()},l(L){e=v(L,"DIV",{class:!0});var N=b(e);r=v(N,"DIV",{id:!0,class:!0,style:!0}),b(r).forEach(o),t=O(N),a=v(N,"DIV",{class:!0,style:!0});var te=b(a);s=v(te,"ARTICLE",{class:!0});var le=b(s);u=v(le,"DIV",{class:!0});var B=b(u);n=v(B,"P",{});var J=b(n);E=q(J,`Link to Full Screen Viewer\xA0\xA0
					`),k=v(J,"A",{title:!0,href:!0,target:!0});var _e=b(k);X(y.$$.fragment,_e),_e.forEach(o),J.forEach(o),B.forEach(o),T=O(le),p=v(le,"DIV",{class:!0});var ve=b(p);d=v(ve,"P",{style:!0});var ce=b(d);V=v(ce,"A",{href:!0,target:!0});var H=b(V);$=q(H,l[0]),H.forEach(o),ce.forEach(o),ve.forEach(o),le.forEach(o),te.forEach(o),w=O(N),i=v(N,"DIV",{class:!0,style:!0});var fe=b(i);m=v(fe,"ARTICLE",{class:!0});var ue=b(m);c=v(ue,"DIV",{id:!0,class:!0});var be=b(c);I=v(be,"P",{});var ie=b(I);g=q(ie,`Embed Code\xA0\xA0
					`),A=v(ie,"A",{title:!0});var ge=b(A);X(G.$$.fragment,ge),ge.forEach(o),Q=O(ie),C&&C.l(ie),ie.forEach(o),be.forEach(o),M=O(ue),D=v(ue,"DIV",{class:!0});var me=b(D);S=v(me,"P",{id:!0,style:!0});var pe=b(S);ee=q(pe,l[1]),pe.forEach(o),me.forEach(o),ue.forEach(o),fe.forEach(o),N.forEach(o),this.h()},h(){h(r,"id","iframe-container"),h(r,"class","column is-12"),K(r,"height","75vh"),K(r,"background","#292929"),h(k,"title","Open in new window"),h(k,"href",l[0]),h(k,"target","_none"),h(u,"class","message-header"),h(V,"href",l[0]),h(V,"target","_none"),K(d,"font-size",".8rem"),K(d,"word-wrap","break-word"),K(d,"max-width","100%"),h(p,"class","message-body"),h(s,"class","message is-primary"),h(a,"class","column is-half"),K(a,"display","flex"),h(A,"title","Copy to clipboard"),h(c,"id","embed-header"),h(c,"class","message-header"),h(S,"id","embed-code"),K(S,"font-size",".8rem"),K(S,"word-wrap","break-word"),K(S,"font-family","monospace"),K(S,"max-width","100%"),h(D,"class","message-body"),h(m,"class","message is-link mr-5"),h(i,"class","column is-half"),K(i,"display","flex"),h(e,"class","columns is-gapless is-multiline fullwidth")},m(L,N){P(L,e,N),f(e,r),f(e,t),f(e,a),f(a,s),f(s,u),f(u,n),f(n,E),f(n,k),Y(y,k,null),f(s,T),f(s,p),f(p,d),f(d,V),f(V,$),f(e,w),f(e,i),f(i,m),f(m,c),f(c,I),f(I,g),f(I,A),Y(G,A,null),f(I,Q),C&&C.m(I,null),f(m,M),f(m,D),f(D,S),f(S,ee),U=!0,se||(re=[Z(A,"click",l[6]),Z(A,"click",l[3]),Z(S,"click",l[7]),Z(S,"click",l[3])],se=!0)},p(L,[N]){(!U||N&1)&&h(k,"href",L[0]),(!U||N&1)&&Te($,L[0]),(!U||N&1)&&h(V,"href",L[0]),L[2]?C?N&4&&z(C,1):(C=st(),C.c(),z(C,1),C.m(I,null)):C&&(qe(),F(C,1,1,()=>{C=null}),Be()),(!U||N&2)&&Te(ee,L[1])},i(L){U||(z(y.$$.fragment,L),z(G.$$.fragment,L),z(C),U=!0)},o(L){F(y.$$.fragment,L),F(G.$$.fragment,L),F(C),U=!1},d(L){L&&o(e),x(y),x(G),C&&C.d(),se=!1,Re(re)}}}function rt(l){let e=document.getElementById(l).textContent;navigator.clipboard.writeText(e)}function Mt(l,e,r){let t;ae(l,Ae,p=>r(5,t=p));let a,s,u="",n=!1;function E(){r(2,n=!0),setTimeout(()=>{r(2,n=!1)},1e3)}function k(){if(typeof window!="undefined"){let p=document.getElementById("viewer-iframe"),d=document.getElementById("iframe-container");p!==null&&p.remove();let V=document.createElement("iframe");V.setAttribute("src",t),V.setAttribute("id","viewer-iframe"),V.style.width="100%",V.style.height="75vh",d.prepend(V)}}ft(async()=>{r(4,u=window.location.protocol+"//"+window.location.host),k()});const y=()=>rt("embed-code"),T=()=>rt("embed-code");return l.$$.update=()=>{l.$$.dirty&48&&r(0,s=u+t),l.$$.dirty&1&&r(1,a=`<iframe src="${s}" height="400"/>`),l.$$.dirty&32&&k()},[s,a,n,E,u,t,y,T]}class jt extends $e{constructor(e){super();we(this,e,Mt,Ct,Ee,{})}}function Ot(l){let e,r,t,a,s,u,n,E,k,y,T,p,d,V,$,w,i,m,c,I,g,A,G=pt.toLowerCase()+"",Q,M,D,S,ee,U,se,re,C,L,N,te,le;return document.title=e=Ce,d=new de({props:{data:ut,scale:"1.5"}}),C=new Tt({}),te=new jt({}),{c(){r=_("link"),t=j(),a=_("section"),s=_("div"),u=_("div"),n=_("div"),E=_("h1"),k=_("a"),y=R(Ce),T=R(`
					\xA0\xA0
					`),p=_("a"),W(d.$$.fragment),V=j(),$=_("p"),w=R(Je),i=j(),m=_("p"),c=R("!! for experimental use only !!"),I=j(),g=_("p"),A=R("last built on "),Q=R(G),M=j(),D=_("p"),S=_("img"),U=_("img"),re=j(),W(C.$$.fragment),L=j(),N=_("div"),W(te.$$.fragment),this.h()},l(B){const J=dt('[data-svelte="svelte-1lm9ztb"]',document.head);r=v(J,"LINK",{rel:!0,href:!0}),J.forEach(o),t=O(B),a=v(B,"SECTION",{class:!0});var _e=b(a);s=v(_e,"DIV",{class:!0});var ve=b(s);u=v(ve,"DIV",{class:!0});var ce=b(u);n=v(ce,"DIV",{class:!0});var H=b(n);E=v(H,"H1",{class:!0});var fe=b(E);k=v(fe,"A",{href:!0});var ue=b(k);y=q(ue,Ce),ue.forEach(o),T=q(fe,`
					\xA0\xA0
					`),p=v(fe,"A",{class:!0,href:!0});var be=b(p);X(d.$$.fragment,be),be.forEach(o),fe.forEach(o),V=O(H),$=v(H,"P",{class:!0});var ie=b($);w=q(ie,Je),ie.forEach(o),i=O(H),m=v(H,"P",{class:!0});var ge=b(m);c=q(ge,"!! for experimental use only !!"),ge.forEach(o),I=O(H),g=v(H,"P",{class:!0});var me=b(g);A=q(me,"last built on "),Q=q(me,G),me.forEach(o),M=O(H),D=v(H,"P",{});var pe=b(D);S=v(pe,"IMG",{src:!0,style:!0}),U=v(pe,"IMG",{src:!0,style:!0}),pe.forEach(o),re=O(H),X(C.$$.fragment,H),H.forEach(o),L=O(ce),N=v(ce,"DIV",{class:!0});var Le=b(N);X(te.$$.fragment,Le),Le.forEach(o),ce.forEach(o),ve.forEach(o),_e.forEach(o),this.h()},h(){h(r,"rel","icon"),h(r,"href",""+(Oe+"/favicon.png")),h(k,"href",""+(Qe+"/")),h(p,"class","is-link"),h(p,"href","https://github.com/nyu-dss/viewpoint"),h(E,"class","title is-size-4"),h($,"class","subtitle is-size-6"),h(m,"class","is-size-7 has-text-success"),h(g,"class","subtitle is-size-7"),Ke(S.src,ee=""+(Oe+"/eye.gif"))||h(S,"src",ee),K(S,"margin-left","-20px"),K(S,"width","80px"),Ke(U.src,se=""+(Oe+"/eye.gif"))||h(U,"src",se),K(U,"margin-left","-20px"),K(U,"width","80px"),h(n,"class","form-sidebar columnn p-5 is-one-third fullwidth"),h(N,"class","results-pane column is-two-thirds fullwidth"),h(u,"class","columns is-gapless m-0 fullwidth"),h(s,"class","hero-body m-0 p-0 fullwidth"),h(a,"class","hero m-0 p-0 is-fullheight")},m(B,J){f(document.head,r),P(B,t,J),P(B,a,J),f(a,s),f(s,u),f(u,n),f(n,E),f(E,k),f(k,y),f(E,T),f(E,p),Y(d,p,null),f(n,V),f(n,$),f($,w),f(n,i),f(n,m),f(m,c),f(n,I),f(n,g),f(g,A),f(g,Q),f(n,M),f(n,D),f(D,S),f(D,U),f(n,re),Y(C,n,null),f(u,L),f(u,N),Y(te,N,null),le=!0},p(B,[J]){(!le||J&0)&&e!==(e=Ce)&&(document.title=e)},i(B){le||(z(d.$$.fragment,B),z(C.$$.fragment,B),z(te.$$.fragment,B),le=!0)},o(B){F(d.$$.fragment,B),F(C.$$.fragment,B),F(te.$$.fragment,B),le=!1},d(B){o(r),B&&o(t),B&&o(a),x(d),x(C),x(te)}}}function Pt(l,e,r){return[!0]}class Lt extends $e{constructor(e){super();we(this,e,Pt,Ot,Ee,{prerender:0})}get prerender(){return this.$$.ctx[0]}}export{Lt as default};
