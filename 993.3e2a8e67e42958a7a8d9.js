"use strict";(self.webpackChunkdelon=self.webpackChunkdelon||[]).push([[993],{5993:(Wt,k,s)=>{s.r(k),s.d(k,{DevTestModule:()=>Vt});var p=s(3423),d=s(8583),Z=s(9765),v=s(6782);var t=s(7716);const R=["host"];function q(n,i){1&n&&t.Hsn(0)}const j=["*"];let N=(()=>{class n{constructor(){this.hidden="none",this.direction="right"}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["layout-default-header-item"]],viewQuery:function(e,o){if(1&e&&t.Gf(R,7),2&e){let a;t.iGM(a=t.CRH())&&(o.host=a.first)}},inputs:{hidden:"hidden",direction:"direction"},ngContentSelectors:j,decls:2,vars:0,consts:[["host",""]],template:function(e,o){1&e&&(t.F$t(),t.YNc(0,q,1,0,"ng-template",null,0,t.W1O))},encapsulation:2}),n})();var D=s(8058),h=s(9643);function G(n,i){1&n&&t._UZ(0,"div",4)}function V(n,i){1&n&&t.GkF(0)}function K(n,i){1&n&&t.GkF(0)}function W(n,i){1&n&&t._UZ(0,"layout-default-nav",8)}function X(n,i){if(1&n&&(t.TgZ(0,"div",5),t.TgZ(1,"div",6),t.YNc(2,V,1,0,"ng-container",3),t.YNc(3,K,1,0,"ng-container",3),t.YNc(4,W,1,0,"layout-default-nav",7),t.qZA(),t.qZA()),2&n){const e=t.oxw();t.xp6(2),t.Q6J("ngTemplateOutlet",e.asideUser),t.xp6(1),t.Q6J("ngTemplateOutlet",e.nav),t.xp6(1),t.Q6J("ngIf",!e.nav)}}function tt(n,i){1&n&&t.GkF(0)}const et=["*"];let b=(()=>{class n{constructor(e,o,a,l,r,f){this.settings=a,this.el=l,this.renderer=r,this.doc=f,this.destroy$=new Z.xQ,this.isFetching=!1,e.events.pipe((0,v.R)(this.destroy$)).subscribe(c=>{if(!this.isFetching&&c instanceof p.xV&&(this.isFetching=!0),c instanceof p.Q3||c instanceof p.gk)return this.isFetching=!1,void(c instanceof p.Q3&&o.error(`Could not load ${c.url} route`,{nzDuration:3e3}));(c instanceof p.m2||c instanceof p.GH)&&this.isFetching&&setTimeout(()=>{this.isFetching=!1},100)})}setClass(){const{el:e,doc:o,renderer:a,settings:l}=this,r=l.layout;(function(n,i,e,o=!1){!0===o?i.removeAttribute(n,"class"):function(n,i,e){Object.keys(i).forEach(o=>e.removeClass(n,o))}(n,e,i),function(n,i,e){for(const o in i)i[o]&&e.addClass(n,o)}(n,e=Object.assign({},e),i)})(e.nativeElement,a,{"alain-default":!0,"alain-default__fixed":r.fixed,"alain-default__collapsed":r.collapsed,"alain-default__hide-aside":this.options.hideAside}),o.body.classList[r.colorWeak?"add":"remove"]("color-weak")}ngOnInit(){this.options=Object.assign({logoExpanded:"./assets/logo-full.svg",logoCollapsed:"./assets/logo.svg",logoLink:"/",hideAside:!1},this.options);const{settings:e,destroy$:o}=this;e.notify.pipe((0,v.R)(o)).subscribe(()=>this.setClass()),this.setClass()}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(p.F0),t.Y36(D.dD),t.Y36(h.gb),t.Y36(t.SBq),t.Y36(t.Qsj),t.Y36(d.K0))},n.\u0275cmp=t.Xpm({type:n,selectors:[["layout-default"]],contentQueries:function(e,o,a){if(1&e&&t.Suo(a,N,4),2&e){let l;t.iGM(l=t.CRH())&&(o.headerItems=l)}},inputs:{options:"options",asideUser:"asideUser",nav:"nav",content:"content"},exportAs:["layoutDefault"],ngContentSelectors:et,decls:6,vars:3,consts:[["class","alain-default__progress-bar",4,"ngIf"],["class","alain-default__aside",4,"ngIf"],[1,"alain-default__content"],[4,"ngTemplateOutlet"],[1,"alain-default__progress-bar"],[1,"alain-default__aside"],[1,"alain-default__aside-inner"],["class","d-block py-lg",4,"ngIf"],[1,"d-block","py-lg"]],template:function(e,o){1&e&&(t.F$t(),t.YNc(0,G,1,0,"div",0),t._UZ(1,"layout-default-header"),t.YNc(2,X,5,3,"div",1),t.TgZ(3,"section",2),t.YNc(4,tt,1,0,"ng-container",3),t.Hsn(5),t.qZA()),2&e&&(t.Q6J("ngIf",o.isFetching),t.xp6(2),t.Q6J("ngIf",!o.options.hideAside),t.xp6(2),t.Q6J("ngTemplateOutlet",o.content))},encapsulation:2}),n})();var z=s(5329),A=s(4401),T=s(7828),S=s(7420);function it(n,i){1&n&&t.GkF(0)}function ot(n,i){if(1&n&&(t.TgZ(0,"li"),t.YNc(1,it,1,0,"ng-container",11),t.qZA()),2&n){const e=i.$implicit;t.ekj("hidden-mobile","mobile"===e.hidden)("hidden-pc","pc"===e.hidden),t.xp6(1),t.Q6J("ngTemplateOutlet",e.host)}}function at(n,i){1&n&&t.YNc(0,ot,2,5,"li",10),2&n&&t.Q6J("ngForOf",i.$implicit)}function lt(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"li"),t.TgZ(1,"div",12),t.NdJ("click",function(){return t.CHM(e),t.oxw().toggleCollapsed()}),t._UZ(2,"i",13),t.qZA(),t.qZA()}if(2&n){const e=t.oxw();t.xp6(2),t.Q6J("nzType",e.collapsedIcon)}}function st(n,i){}function ct(n,i){1&n&&t.GkF(0)}function rt(n,i){if(1&n&&(t.TgZ(0,"div",14),t.YNc(1,ct,1,0,"ng-container",11),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngTemplateOutlet",e.middle[0].host)}}function ut(n,i){}const O=function(n){return{$implicit:n}};let Q=(()=>{class n{constructor(e,o,a){this.settings=e,this.parent=o,this.cdr=a,this.destroy$=new Z.xQ,this.left=[],this.middle=[],this.right=[]}get options(){return this.parent.options}get app(){return this.settings.app}get collapsed(){return this.settings.layout.collapsed}get collapsedIcon(){let e=this.collapsed?"unfold":"fold";return"rtl"===this.settings.layout.direction&&(e=this.collapsed?"fold":"unfold"),`menu-${e}`}refresh(){const e=this.parent.headerItems.toArray();this.left=e.filter(o=>"left"===o.direction),this.middle=e.filter(o=>"middle"===o.direction),this.right=e.filter(o=>"right"===o.direction),this.cdr.detectChanges()}ngAfterViewInit(){this.parent.headerItems.changes.pipe((0,v.R)(this.destroy$)).subscribe(()=>this.refresh()),this.refresh()}toggleCollapsed(){this.settings.setLayout("collapsed",!this.settings.layout.collapsed)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(h.gb),t.Y36(b),t.Y36(t.sBO))},n.\u0275cmp=t.Xpm({type:n,selectors:[["layout-default-header"]],hostVars:2,hostBindings:function(e,o){2&e&&t.ekj("alain-default__header",!0)},decls:13,vars:17,consts:[["render",""],[1,"alain-default__header-logo"],[1,"alain-default__header-logo-link",3,"routerLink"],[1,"alain-default__header-logo-expanded"],[1,"alain-default__header-logo-collapsed"],[1,"alain-default__nav-wrap"],[1,"alain-default__nav"],[4,"ngIf"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],["class","alain-default__nav alain-default__nav-middle",4,"ngIf"],[3,"hidden-mobile","hidden-pc",4,"ngFor","ngForOf"],[4,"ngTemplateOutlet"],[1,"alain-default__nav-item","alain-default__nav-item--collapse",3,"click"],["nz-icon","",3,"nzType"],[1,"alain-default__nav","alain-default__nav-middle"]],template:function(e,o){if(1&e&&(t.YNc(0,at,1,1,"ng-template",null,0,t.W1O),t.TgZ(2,"div",1),t.TgZ(3,"a",2),t._UZ(4,"img",3),t._UZ(5,"img",4),t.qZA(),t.qZA(),t.TgZ(6,"div",5),t.TgZ(7,"ul",6),t.YNc(8,lt,3,1,"li",7),t.YNc(9,st,0,0,"ng-template",8),t.qZA(),t.YNc(10,rt,2,1,"div",9),t.TgZ(11,"ul",6),t.YNc(12,ut,0,0,"ng-template",8),t.qZA(),t.qZA()),2&e){const a=t.MAs(1);t.xp6(2),t.Udp("width",o.options.logoFixWidth,"px"),t.xp6(1),t.Q6J("routerLink",o.options.logoLink),t.xp6(1),t.uIk("src",o.options.logoExpanded,t.LSH)("alt",o.app.name),t.xp6(1),t.uIk("src",o.options.logoCollapsed,t.LSH)("alt",o.app.name),t.xp6(3),t.Q6J("ngIf",!o.options.hideAside),t.xp6(1),t.Q6J("ngTemplateOutlet",a)("ngTemplateOutletContext",t.VKq(13,O,o.left)),t.xp6(1),t.Q6J("ngIf",o.middle.length>0),t.xp6(2),t.Q6J("ngTemplateOutlet",a)("ngTemplateOutletContext",t.VKq(15,O,o.right))}},directives:[p.yS,d.O5,d.tP,d.sg,T.Ls],encapsulation:2,changeDetection:0}),n})();var y=s(4762),dt=s(5435),x=s(1674),pt=s(6728),_t=s(9075),mt=s(946);function gt(n,i){if(1&n&&t._UZ(0,"i",11),2&n){const e=t.oxw(2).$implicit;t.Q6J("nzType",e.value)("nzTheme",e.theme)("nzSpin",e.spin)("nzTwotoneColor",e.twoToneColor)("nzIconfont",e.iconfont)("nzRotate",e.rotate)}}function ft(n,i){if(1&n&&t._UZ(0,"i",12),2&n){const e=t.oxw(2).$implicit;t.Q6J("nzIconfont",e.iconfont)}}function ht(n,i){if(1&n&&t._UZ(0,"img",13),2&n){const e=t.oxw(2).$implicit;t.Q6J("src",e.value,t.LSH)}}function vt(n,i){if(1&n&&t._UZ(0,"span",14),2&n){const e=t.oxw(2).$implicit;t.Q6J("innerHTML",e.value,t.oJD)}}function yt(n,i){if(1&n&&t._UZ(0,"i"),2&n){const e=t.oxw(2).$implicit;t.Gre("sidebar-nav__item-icon ",e.value,"")}}function xt(n,i){if(1&n&&(t.ynx(0,5),t.YNc(1,gt,1,6,"i",6),t.YNc(2,ft,1,1,"i",7),t.YNc(3,ht,1,1,"img",8),t.YNc(4,vt,1,1,"span",9),t.YNc(5,yt,1,3,"i",10),t.BQk()),2&n){const e=t.oxw().$implicit;t.Q6J("ngSwitch",e.type),t.xp6(1),t.Q6J("ngSwitchCase","icon"),t.xp6(1),t.Q6J("ngSwitchCase","iconfont"),t.xp6(1),t.Q6J("ngSwitchCase","img"),t.xp6(1),t.Q6J("ngSwitchCase","svg")}}function Tt(n,i){1&n&&t.YNc(0,xt,6,5,"ng-container",4),2&n&&t.Q6J("ngIf",i.$implicit)}function Ct(n,i){}const C=function(n){return{$implicit:n}};function Lt(n,i){if(1&n&&(t.ynx(0),t.YNc(1,Ct,0,0,"ng-template",25),t.BQk()),2&n){const e=t.oxw(4).$implicit;t.oxw(2);const o=t.MAs(1);t.xp6(1),t.Q6J("ngTemplateOutlet",o)("ngTemplateOutletContext",t.VKq(2,C,e.icon))}}function Dt(n,i){}function bt(n,i){if(1&n&&(t.TgZ(0,"span",26),t.YNc(1,Dt,0,0,"ng-template",25),t.qZA()),2&n){const e=t.oxw(4).$implicit;t.oxw(2);const o=t.MAs(1);t.Q6J("nzTooltipTitle",e.text),t.xp6(1),t.Q6J("ngTemplateOutlet",o)("ngTemplateOutletContext",t.VKq(3,C,e.icon))}}function Zt(n,i){if(1&n&&(t.ynx(0),t.YNc(1,Lt,2,4,"ng-container",22),t.YNc(2,bt,2,5,"span",24),t.BQk()),2&n){const e=t.oxw(5);t.xp6(1),t.Q6J("ngIf",!e.collapsed),t.xp6(1),t.Q6J("ngIf",e.collapsed)}}const Nt=function(n){return{"sidebar-nav__item-disabled":n}};function At(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"a",21),t.NdJ("click",function(){t.CHM(e);const a=t.oxw(2).$implicit;return t.oxw(2).to(a)}),t.YNc(1,Zt,3,2,"ng-container",22),t._UZ(2,"span",23),t.qZA()}if(2&n){const e=t.oxw(2).$implicit;t.Q6J("ngClass",t.VKq(5,Nt,e.disabled)),t.uIk("data-id",e._id),t.xp6(1),t.Q6J("ngIf",e._needIcon),t.xp6(1),t.Q6J("innerHTML",e._text,t.oJD),t.uIk("title",e.text)}}function Ht(n,i){}function It(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"a",27),t.NdJ("click",function(){t.CHM(e);const a=t.oxw(2).$implicit;return t.oxw(2).toggleOpen(a)})("mouseenter",function(a){t.CHM(e);const l=t.oxw(2).$implicit;return t.oxw(2).showSubMenu(a,l)}),t.YNc(1,Ht,0,0,"ng-template",25),t._UZ(2,"span",23),t._UZ(3,"i",28),t.qZA()}if(2&n){const e=t.oxw(2).$implicit;t.oxw(2);const o=t.MAs(1);t.xp6(1),t.Q6J("ngTemplateOutlet",o)("ngTemplateOutletContext",t.VKq(4,C,e.icon)),t.xp6(1),t.Q6J("innerHTML",e._text,t.oJD),t.uIk("title",e.text)}}function wt(n,i){if(1&n&&(t.TgZ(0,"div"),t.TgZ(1,"em"),t._uU(2),t.qZA(),t.qZA()),2&n){const e=t.oxw(2).$implicit;t.Gre("badge badge-",e.badgeStatus,""),t.ekj("badge-dot",e.badgeDot),t.uIk("title",e.badge),t.xp6(2),t.Oqu(e.badge)}}function kt(n,i){}function zt(n,i){if(1&n&&(t.TgZ(0,"ul"),t.YNc(1,kt,0,0,"ng-template",25),t.qZA()),2&n){const e=t.oxw(2).$implicit;t.oxw(2);const o=t.MAs(3);t.Gre("sidebar-nav sidebar-nav__sub sidebar-nav__depth",e._depth,""),t.xp6(1),t.Q6J("ngTemplateOutlet",o)("ngTemplateOutletContext",t.VKq(5,C,e.children))}}function St(n,i){if(1&n&&(t.TgZ(0,"li",16),t.YNc(1,At,3,7,"a",17),t.YNc(2,It,4,6,"a",18),t.YNc(3,wt,3,7,"div",19),t.YNc(4,zt,2,7,"ul",20),t.qZA()),2&n){const e=t.oxw().$implicit;t.ekj("sidebar-nav__selected",e._selected)("sidebar-nav__open",e._open),t.xp6(1),t.Q6J("ngIf",0===e.children.length),t.xp6(1),t.Q6J("ngIf",e.children.length>0),t.xp6(1),t.Q6J("ngIf",e.badge),t.xp6(1),t.Q6J("ngIf",e.children.length>0)}}function Ot(n,i){if(1&n&&(t.ynx(0),t.YNc(1,St,5,8,"li",15),t.BQk()),2&n){const e=i.$implicit;t.xp6(1),t.Q6J("ngIf",!0!==e._hidden)}}function Qt(n,i){1&n&&t.YNc(0,Ot,2,1,"ng-container",3),2&n&&t.Q6J("ngForOf",i.$implicit)}function Yt(n,i){if(1&n&&(t.TgZ(0,"li",30),t._UZ(1,"span",31),t.qZA()),2&n){const e=t.oxw().$implicit;t.xp6(1),t.Q6J("innerHTML",e._text,t.oJD)}}function Jt(n,i){}function Ft(n,i){if(1&n&&(t.ynx(0),t.YNc(1,Yt,2,1,"li",29),t.YNc(2,Jt,0,0,"ng-template",25),t.BQk()),2&n){const e=i.$implicit;t.oxw();const o=t.MAs(3);t.xp6(1),t.Q6J("ngIf",e.group),t.xp6(1),t.Q6J("ngTemplateOutlet",o)("ngTemplateOutletContext",t.VKq(3,C,e.children))}}const H="sidebar-nav__floating-show",I="sidebar-nav__floating";class m{constructor(i,e,o,a,l,r,f,c,u,$){this.menuSrv=i,this.settings=e,this.router=o,this.render=a,this.cdr=l,this.ngZone=r,this.sanitizer=f,this.doc=c,this.win=u,this.directionality=$,this.destroy$=new Z.xQ,this.dir="ltr",this.list=[],this.disabledAcl=!1,this.autoCloseUnderPad=!0,this.recursivePath=!0,this.openStrictly=!1,this.maxLevelIcon=3,this.select=new t.vpe}get collapsed(){return this.settings.layout.collapsed}getLinkNode(i){return"A"!==(i="A"===i.nodeName?i:i.parentNode).nodeName?null:i}floatingClickHandle(i){i.stopPropagation();const e=this.getLinkNode(i.target);if(null==e)return!1;const o=+e.dataset.id;if(isNaN(o))return!1;let a;return this.menuSrv.visit(this.list,l=>{!a&&l._id===o&&(a=l)}),this.to(a),this.hideAll(),i.preventDefault(),!1}clearFloating(){!this.floatingEl||(this.floatingEl.removeEventListener("click",this.floatingClickHandle.bind(this)),this.floatingEl.hasOwnProperty("remove")?this.floatingEl.remove():this.floatingEl.parentNode&&this.floatingEl.parentNode.removeChild(this.floatingEl))}genFloating(){this.clearFloating(),this.floatingEl=this.render.createElement("div"),this.floatingEl.classList.add(`${I}-container`),this.floatingEl.addEventListener("click",this.floatingClickHandle.bind(this),!1),this.bodyEl.appendChild(this.floatingEl)}genSubNode(i,e){const o=`_sidebar-nav-${e._id}`,l=(e.badge?i.nextElementSibling.nextElementSibling:i.nextElementSibling).cloneNode(!0);return l.id=o,l.classList.add(I),l.addEventListener("mouseleave",()=>{l.classList.remove(H)},!1),this.floatingEl.appendChild(l),l}hideAll(){const i=this.floatingEl.querySelectorAll(`.${I}`);for(let e=0;e<i.length;e++)i[e].classList.remove(H)}calPos(i,e){const o=i.getBoundingClientRect(),a=Math.max(this.doc.documentElement.scrollTop,this.bodyEl.scrollTop),l=Math.max(this.doc.documentElement.clientHeight,this.bodyEl.clientHeight);let f=-5;l<o.top+e.clientHeight&&(f=o.top+e.clientHeight-l+5),e.style.top=o.top+a-f+"px","rtl"===this.dir?e.style.right=`${o.width+5}px`:e.style.left=`${o.right+5}px`}showSubMenu(i,e){if(!0!==this.collapsed)return;i.preventDefault();const o=i.target;this.genFloating();const a=this.genSubNode(o,e);this.hideAll(),a.classList.add(H),this.calPos(o,a)}to(i){if(this.select.emit(i),!i.disabled){if(i.externalLink)return void("_blank"===i.target?this.win.open(i.externalLink):this.win.location.href=i.externalLink);this.ngZone.run(()=>this.router.navigateByUrl(i.link))}}toggleOpen(i){if(!this.openStrictly){this.menuSrv.visit(this.list,o=>{o!==i&&(o._open=!1)});let e=i._parent;for(;e;)e._open=!0,e=e._parent}i._open=!i._open,this.cdr.markForCheck()}_click(){this.isPad&&this.collapsed&&(this.openAside(!1),this.hideAll())}_docClick(){this.collapsed&&this.hideAll()}openedByUrl(i){const{menuSrv:e,recursivePath:o,openStrictly:a}=this;let l=e.getHit(this.menuSrv.menus,i,o,r=>{r._selected=!1,a||(r._open=!1)});if(null!=l)do{l._selected=!0,a||(l._open=!0),l=l._parent}while(l)}ngOnInit(){var i;const{doc:e,router:o,destroy$:a,menuSrv:l,settings:r,cdr:f}=this;this.bodyEl=e.querySelector("body"),this.openedByUrl(o.url),this.ngZone.runOutsideAngular(()=>this.genFloating()),l.change.pipe((0,v.R)(a)).subscribe(c=>{l.visit(c,(u,$,Kt)=>{u._text=this.sanitizer.bypassSecurityTrustHtml(u.text),u._needIcon=Kt<=this.maxLevelIcon&&!!u.icon,u._aclResult||(this.disabledAcl?u.disabled=!0:u._hidden=!0),this.openStrictly&&(u._open=null!=u.open&&u.open);const L=u.icon;L&&"svg"===L.type&&"string"==typeof L.value&&(L.value=this.sanitizer.bypassSecurityTrustHtml(L.value))}),this.list=l.menus.filter(u=>!0!==u._hidden),f.detectChanges()}),o.events.pipe((0,v.R)(a)).subscribe(c=>{c instanceof p.m2&&(this.openedByUrl(c.urlAfterRedirects),this.underPad(),this.cdr.detectChanges())}),r.notify.pipe((0,v.R)(a),(0,dt.h)(c=>"layout"===c.type&&"collapsed"===c.name)).subscribe(()=>this.clearFloating()),this.underPad(),this.dir=this.directionality.value,null===(i=this.directionality.change)||void 0===i||i.pipe((0,v.R)(a)).subscribe(c=>{this.dir=c})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete(),this.clearFloating()}get isPad(){return this.doc.defaultView.innerWidth<768}underPad(){this.autoCloseUnderPad&&this.isPad&&!this.collapsed&&setTimeout(()=>this.openAside(!0))}openAside(i){this.settings.setLayout("collapsed",i)}}m.\u0275fac=function(i){return new(i||m)(t.Y36(h.hl),t.Y36(h.gb),t.Y36(p.F0),t.Y36(t.Qsj),t.Y36(t.sBO),t.Y36(t.R0b),t.Y36(_t.H7),t.Y36(d.K0),t.Y36(pt.m),t.Y36(mt.Is,8))},m.\u0275cmp=t.Xpm({type:m,selectors:[["layout-default-nav"]],hostBindings:function(i,e){1&i&&t.NdJ("click",function(){return e._click()})("click",function(){return e._docClick()},!1,t.evT)},inputs:{disabledAcl:"disabledAcl",autoCloseUnderPad:"autoCloseUnderPad",recursivePath:"recursivePath",openStrictly:"openStrictly",maxLevelIcon:"maxLevelIcon"},outputs:{select:"select"},decls:6,vars:1,consts:[["icon",""],["tree",""],[1,"sidebar-nav"],[4,"ngFor","ngForOf"],[3,"ngSwitch",4,"ngIf"],[3,"ngSwitch"],["class","sidebar-nav__item-icon","nz-icon","",3,"nzType","nzTheme","nzSpin","nzTwotoneColor","nzIconfont","nzRotate",4,"ngSwitchCase"],["class","sidebar-nav__item-icon","nz-icon","",3,"nzIconfont",4,"ngSwitchCase"],["class","sidebar-nav__item-icon sidebar-nav__item-img",3,"src",4,"ngSwitchCase"],["class","sidebar-nav__item-icon sidebar-nav__item-svg",3,"innerHTML",4,"ngSwitchCase"],[3,"class",4,"ngSwitchDefault"],["nz-icon","",1,"sidebar-nav__item-icon",3,"nzType","nzTheme","nzSpin","nzTwotoneColor","nzIconfont","nzRotate"],["nz-icon","",1,"sidebar-nav__item-icon",3,"nzIconfont"],[1,"sidebar-nav__item-icon","sidebar-nav__item-img",3,"src"],[1,"sidebar-nav__item-icon","sidebar-nav__item-svg",3,"innerHTML"],["class","sidebar-nav__item",3,"sidebar-nav__selected","sidebar-nav__open",4,"ngIf"],[1,"sidebar-nav__item"],["class","sidebar-nav__item-link",3,"ngClass","click",4,"ngIf"],["class","sidebar-nav__item-link",3,"click","mouseenter",4,"ngIf"],[3,"class","badge-dot",4,"ngIf"],[3,"class",4,"ngIf"],[1,"sidebar-nav__item-link",3,"ngClass","click"],[4,"ngIf"],[1,"sidebar-nav__item-text",3,"innerHTML"],["nz-tooltip","","nzTooltipPlacement","right",3,"nzTooltipTitle",4,"ngIf"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],["nz-tooltip","","nzTooltipPlacement","right",3,"nzTooltipTitle"],[1,"sidebar-nav__item-link",3,"click","mouseenter"],[1,"sidebar-nav__sub-arrow"],["class","sidebar-nav__item sidebar-nav__group-title",4,"ngIf"],[1,"sidebar-nav__item","sidebar-nav__group-title"],[3,"innerHTML"]],template:function(i,e){1&i&&(t.YNc(0,Tt,1,1,"ng-template",null,0,t.W1O),t.YNc(2,Qt,1,1,"ng-template",null,1,t.W1O),t.TgZ(4,"ul",2),t.YNc(5,Ft,3,5,"ng-container",3),t.qZA()),2&i&&(t.xp6(5),t.Q6J("ngForOf",e.list))},directives:[d.sg,d.O5,d.RF,d.n9,d.ED,T.Ls,d.mk,d.tP,S.SY],encapsulation:2,changeDetection:0}),(0,y.gn)([(0,x.yF)()],m.prototype,"disabledAcl",void 0),(0,y.gn)([(0,x.yF)()],m.prototype,"autoCloseUnderPad",void 0),(0,y.gn)([(0,x.yF)()],m.prototype,"recursivePath",void 0),(0,y.gn)([(0,x.yF)()],m.prototype,"openStrictly",void 0),(0,y.gn)([(0,x.Rn)()],m.prototype,"maxLevelIcon",void 0),(0,y.gn)([(0,x.EA)()],m.prototype,"showSubMenu",null);let Mt=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[d.ez,p.Bz,S.cg,T.PV,z.Rt,A.b1,D.gR]]}),n})();t.B6R(b,[d.O5,Q,d.tP,m],[]);var Ut=s(1337),$t=s(4927);const Et=["sf"];let Y=(()=>{class n{constructor(e){this.msg=e,this.schema={properties:{single:{type:"boolean",title:"\u540c\u610f\u672c\u534f\u8bae",description:"\u300a\u7528\u6237\u534f\u8bae\u300b",ui:{widget:"checkbox"},default:!0},mulit:{type:"string",title:"Mulit",enum:["Apple","Pear","Orange"],ui:{widget:"checkbox",span:8,checkAll:!1}}},required:["mulit"],ui:{debug:!0}}}submit(e){var o;this.msg.success(`${null===(o=this.sf)||void 0===o?void 0:o.valid},${JSON.stringify(e)}`)}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(D.dD))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-demo"]],viewQuery:function(e,o){if(1&e&&t.Gf(Et,5),2&e){let a;t.iGM(a=t.CRH())&&(o.sf=a.first)}},decls:5,vars:7,consts:[[3,"schema","formSubmit"],["sf",""]],template:function(e,o){if(1&e&&(t.TgZ(0,"sf",0,1),t.NdJ("formSubmit",function(l){return o.submit(l)}),t.qZA(),t._uU(2),t.ALo(3,"json"),t.ALo(4,"json")),2&e){const a=t.MAs(1);t.Q6J("schema",o.schema),t.xp6(2),t.AsE(" result: ",t.lcZ(3,3,a.valid),", ",t.lcZ(4,5,a.value)," ")}},directives:[$t.k],pipes:[d.Ts],encapsulation:2}),n})();var J=s(7555);let F=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["dev-home"]],decls:2,vars:1,consts:[[3,"autoBreadcrumb"]],template:function(e,o){1&e&&(t._UZ(0,"page-header",0),t._uU(1," home ")),2&e&&t.Q6J("autoBreadcrumb",!1)},directives:[J.q],encapsulation:2}),n})();var _=s(6390),Bt=s(4514),Pt=s(4604),Rt=s(4746),M=s(3730);function qt(n,i){if(1&n&&(t.TgZ(0,"div",10),t._UZ(1,"nz-avatar",11),t.TgZ(2,"div",12),t.TgZ(3,"strong"),t._uU(4),t.qZA(),t.TgZ(5,"p",13),t._uU(6),t.qZA(),t.qZA(),t.qZA(),t.TgZ(7,"nz-dropdown-menu",null,14),t.TgZ(9,"ul",15),t.TgZ(10,"li",16),t._uU(11),t.qZA(),t.TgZ(12,"li",17),t._uU(13),t.qZA(),t.qZA(),t.qZA()),2&n){const e=t.MAs(8),o=t.oxw();t.Q6J("nzDropdownMenu",e),t.xp6(1),t.Q6J("nzSrc",o.user.avatar),t.xp6(3),t.Oqu(o.user.name),t.xp6(2),t.Oqu(o.user.email),t.xp6(5),t.Oqu("menu.account.center"),t.xp6(2),t.Oqu("menu.account.settings")}}const jt=[_.LBP,_._ry,_.rHg,_.M4u,_.rk5,_.SFb,_.OeK,_.nZ9,_.zdJ,_.ECR,_.ItN,_.RU0,_.u8X,_.s4U,_.yhW];let U=(()=>{class n{constructor(e,o,a,l,r,f){this.menuSrv=o,this.settings=a,this.msgSrv=l,this.i18n=r,this.rtl=f,this.options={logoExpanded:"./assets/logo-full.svg",logoCollapsed:"./assets/logo.svg"},this.lang="zh-CN",this.menus=[{text:"test",group:!0,children:[{text:"Dashboard-DISABLED",link:"/dev",icon:"anticon anticon-dashboard",i18n:"app.header.menu.home",badge:5,disabled:!0},{text:"\u6d4b\u8bd5view1-id",link:"/dev/view/1"},{text:"\u6d4b\u8bd5view2-id",link:"/dev/view/2"},{text:"lazy\u6d4b\u8bd51",link:"/dev/lazy/p1"},{text:"lazy\u6d4b\u8bd52",link:"/dev/lazy/p2"},{text:"lazy\u6d4b\u8bd5view1-id",link:"/dev/lazy/1/view"},{text:"lazy\u6d4b\u8bd5view2-id",link:"/dev/lazy/2/view"},{text:"Level1",link:"#",icon:"anticon anticon-appstore",children:[{text:"Level2",link:"#",children:[{text:"Level3A",link:"/dev/l1"},{text:"Level3B-DISABLED",link:"/dev/l1",disabled:!0}]},{text:"Level2-DISABLED",link:"/dev/l2",disabled:!0}]},{text:"ABC",icon:"anticon anticon-appstore",children:[{text:"Reuse Tab1",link:"/dev/l1",i18n:"app.header.menu.docs"},{text:"Reuse Tab2",link:"/dev/l2"},{text:"Reuse Tab3",link:"/dev/l3"},{text:"Reuse Tab4",link:"/dev/l4"},{text:"Reuse Tab5",link:"/dev/l5"},{text:"Reuse Tab6",link:"/dev/l6"},{text:"Reuse Tab7",link:"/dev/l7"},{text:"Ellipsis",link:"/dev/l8"}]},{text:"LIST",icon:"anticon anticon-appstore",children:[{text:"list",link:"/dev/list"},{text:"list/item",link:"/dev/list/item"}]}]}],this.customContextMenu=[{id:"custom1",title:"\u81ea\u5b9a\u4e491",fn:(c,u)=>{console.log("\u81ea\u5b9a\u4e491",c,u)}},{id:"custom2",title:"\u81ea\u5b9a\u4e492",disabled:()=>!0,fn:(c,u)=>{console.log("\u81ea\u5b9a\u4e492",c,u)}}],e.addIcon(...jt)}get user(){return this.settings.user}toggleCollapsedSideabar(){this.settings.setLayout("collapsed",!this.settings.layout.collapsed)}toggleLang(){this.lang="zh-CN"===this.lang?"en-US":"zh-CN",this.i18n.use(this.lang)}ngOnInit(){this.menuSrv.add(this.menus)}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(T.H5),t.Y36(h.hl),t.Y36(h.gb),t.Y36(D.dD),t.Y36(h.Oi),t.Y36(h.aP))},n.\u0275cmp=t.Xpm({type:n,selectors:[["dev-layout"]],hostVars:2,hostBindings:function(e,o){2&e&&t.ekj("alain-default",!0)},decls:17,vars:7,consts:[[3,"options","asideUser"],["direction","left"],["href","//github.com/ng-alain/ng-alain","target","_blank",1,"alain-default__nav-item"],["nz-icon","","nzType","github"],["direction","right"],[1,"alain-default__nav-item",3,"click"],["asideUserTpl",""],[3,"mode","customContextMenu"],["reuseTab",""],[3,"activate"],["nz-dropdown","","nzTrigger","click",1,"alain-default__aside-user",3,"nzDropdownMenu"],[1,"alain-default__aside-user-avatar",3,"nzSrc"],[1,"alain-default__aside-user-info"],[1,"mb0"],["userMenu","nzDropdownMenu"],["nz-menu",""],["nz-menu-item","","routerLink","/pro/account/center"],["nz-menu-item","","routerLink","/pro/account/settings"]],template:function(e,o){if(1&e){const a=t.EpF();t.TgZ(0,"layout-default",0),t.TgZ(1,"layout-default-header-item",1),t.TgZ(2,"a",2),t._UZ(3,"i",3),t.qZA(),t.qZA(),t.TgZ(4,"layout-default-header-item",4),t.TgZ(5,"a",5),t.NdJ("click",function(){return o.rtl.toggle()}),t._uU(6),t.ALo(7,"uppercase"),t.qZA(),t.qZA(),t.TgZ(8,"layout-default-header-item",4),t.TgZ(9,"a",2),t._uU(10," githbu "),t.qZA(),t.qZA(),t.YNc(11,qt,14,6,"ng-template",null,6,t.W1O),t._UZ(13,"reuse-tab",7,8),t.TgZ(15,"router-outlet",9),t.NdJ("activate",function(r){return t.CHM(a),t.MAs(14).activate(r)}),t.qZA(),t.qZA(),t._UZ(16,"setting-drawer")}if(2&e){const a=t.MAs(12);t.Q6J("options",o.options)("asideUser",a),t.xp6(6),t.Oqu(t.lcZ(7,5,o.rtl.nextDir)),t.xp6(7),t.Q6J("mode",2)("customContextMenu",o.customContextMenu)}},directives:[b,N,Bt.w,T.Ls,Pt.g,p.lC,Rt.w,A.cm,z.Dz,A.RR,M.wO,M.r9,p.rH],pipes:[d.gd],encapsulation:2}),n})();var w=s(1172);let g=(()=>{class n{constructor(e){this.route=e,this.first=(0,w.Z)(new Date,"yyyy-MM-dd HH:mm:ss"),this.now=(0,w.Z)(new Date,"yyyy-MM-dd HH:mm:ss"),this.id=0}ngOnInit(){console.log("ngoninit"),this.route.params.subscribe(e=>this.id=+e.id)}_onReuseInit(){this.now=(0,w.Z)(new Date,"yyyy-MM-dd HH:mm:ss"),console.log("by _onReuseInit",this.route.snapshot.url.toString())}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(p.gz))},n.\u0275cmp=t.Xpm({type:n,selectors:[["dev-page"]],decls:10,vars:12,template:function(e,o){1&e&&(t._UZ(0,"page-header"),t.TgZ(1,"p"),t._uU(2),t.ALo(3,"json"),t.ALo(4,"json"),t.qZA(),t.TgZ(5,"p"),t._uU(6),t.ALo(7,"json"),t.qZA(),t._uU(8),t.ALo(9,"json")),2&e&&(t.xp6(2),t.AsE("first: ",t.lcZ(3,4,o.first),"\uff0cnow: ",t.lcZ(4,6,o.now),""),t.xp6(4),t.hij("id: ",t.lcZ(7,8,o.id),""),t.xp6(2),t.hij(" page: ",t.lcZ(9,10,o.route.url)," "))},directives:[J.q],pipes:[d.Ts],encapsulation:2}),n})();const Gt=[{path:"demo",component:Y},{path:"",component:U,children:[{path:"",component:F},{path:"l1",component:g},{path:"l2",component:g},{path:"l3",component:g},{path:"l4",component:g},{path:"l5",component:g},{path:"l6",component:g},{path:"l7",component:g},{path:"l8",component:g},{path:"login",component:g},{path:"view/:id",component:g},{path:"lazy",loadChildren:()=>s.e(794).then(s.bind(s,9794)).then(n=>n.DevLazyModule)},{path:"list",loadChildren:()=>s.e(286).then(s.bind(s,1286)).then(n=>n.DevListModule)}]}];let Vt=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[Ut.m,p.Bz.forChild(Gt),Mt]]}),n})()}}]);