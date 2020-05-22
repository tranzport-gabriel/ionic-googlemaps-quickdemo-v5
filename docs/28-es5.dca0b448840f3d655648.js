function _classCallCheck(l,n){if(!(l instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(l,n){for(var e=0;e<n.length;e++){var u=n[e];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(l,u.key,u)}}function _createClass(l,n,e){return n&&_defineProperties(l.prototype,n),e&&_defineProperties(l,e),l}(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{"jk+E":function(l,n,e){"use strict";e.r(n);var u=e("8Y7J"),t=e("mrSG"),o=e("i9w2"),a=e("6awz"),i=function(){function l(n){_classCallCheck(this,l),this.mapService=n}return _createClass(l,[{key:"ngOnInit",value:function(){this.loadMap()}},{key:"ngOnDestroy",value:function(){this.mapService.detachMap()}},{key:"loadMap",value:function(){return t.a(this,void 0,void 0,regeneratorRuntime.mark((function l(){var n,e=this;return regeneratorRuntime.wrap((function(l){for(;;)switch(l.prev=l.next){case 0:return n=[{lat:35.548852,lng:139.784086},{lat:21.324513,lng:-157.925074},{lat:37.615223,lng:-122.389979}],l.next=3,this.mapService.attachMap("map_canvas",{camera:{target:n},gestures:{scroll:!1,tilt:!1,rotate:!1,zoom:!1}});case 3:this.map=l.sent,this.map.addPolylineSync({points:n,color:"#AA00FF",width:10,geodesic:!0,clickable:!0}).on(o.g.POLYLINE_CLICK).subscribe((function(l){var n=l[0];e.map.addMarkerSync({position:n,title:n.toUrlValue(),disableAutoPan:!0}).showInfoWindow()}));case 5:case"end":return l.stop()}}),l,this)})))}}]),l}(),r=function l(){_classCallCheck(this,l)},c=e("pMnS"),s=e("MKJQ"),b=e("sZkV"),p=u.nb({encapsulation:0,styles:[["ion-menu-button[_ngcontent-%COMP%]{color:var(--ion-color-primary)}#container[_ngcontent-%COMP%]{position:relative;width:100%;padding:2vmin}#container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:20px;line-height:26px}#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;line-height:22px;color:#8c8c8c;margin:0}#container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}#container[_ngcontent-%COMP%]   #map_canvas[_ngcontent-%COMP%]{width:100%;height:75vh;margin-top:1%;margin-bottom:1%;border:1px solid #fff}"]],data:{}});function h(l){return u.Gb(0,[(l()(),u.pb(0,0,null,null,14,"ion-header",[],null,null,null,s.v,s.e)),u.ob(1,49152,null,0,b.y,[u.h,u.k,u.x],{translucent:[0,"translucent"]},null),(l()(),u.pb(2,0,null,0,12,"ion-toolbar",[],null,null,null,s.H,s.q)),u.ob(3,49152,null,0,b.wb,[u.h,u.k,u.x],null,null),(l()(),u.pb(4,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,s.t,s.c)),u.ob(5,49152,null,0,b.i,[u.h,u.k,u.x],null,null),(l()(),u.pb(6,0,null,0,1,"ion-menu-button",[],null,null,null,s.B,s.l)),u.ob(7,49152,null,0,b.O,[u.h,u.k,u.x],null,null),(l()(),u.pb(8,0,null,0,6,"ion-title",[],null,null,null,s.G,s.p)),u.ob(9,49152,null,0,b.ub,[u.h,u.k,u.x],null,null),(l()(),u.Fb(-1,0,[" Polyline "])),(l()(),u.pb(11,0,null,0,3,"ion-label",[["end",""]],null,null,null,s.y,s.h)),u.ob(12,49152,null,0,b.K,[u.h,u.k,u.x],null,null),(l()(),u.pb(13,0,null,0,1,"a",[["class","sourcecode"],["href","https://github.com/mapsplugin/ionic-googlemaps-quickdemo-v5/blob/master/src/app/polyline/polyline.page.ts"],["target","_blank"]],null,null,null,null,null)),(l()(),u.Fb(-1,null,["[source code]"])),(l()(),u.pb(15,0,null,null,12,"ion-content",[],null,null,null,s.u,s.d)),u.ob(16,49152,null,0,b.r,[u.h,u.k,u.x],{fullscreen:[0,"fullscreen"]},null),(l()(),u.pb(17,0,null,0,6,"ion-header",[["collapse","condense"]],null,null,null,s.v,s.e)),u.ob(18,49152,null,0,b.y,[u.h,u.k,u.x],{collapse:[0,"collapse"]},null),(l()(),u.pb(19,0,null,0,4,"ion-toolbar",[],null,null,null,s.H,s.q)),u.ob(20,49152,null,0,b.wb,[u.h,u.k,u.x],null,null),(l()(),u.pb(21,0,null,0,2,"ion-title",[["size","large"]],null,null,null,s.G,s.p)),u.ob(22,49152,null,0,b.ub,[u.h,u.k,u.x],{size:[0,"size"]},null),(l()(),u.Fb(-1,0,["Polyline"])),(l()(),u.pb(24,0,null,0,3,"div",[["id","container"]],null,null,null,null,null)),(l()(),u.pb(25,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),u.Fb(-1,null,["Click on the polyline!"])),(l()(),u.pb(27,0,null,null,0,"div",[["id","map_canvas"]],null,null,null,null,null))],(function(l,n){l(n,1,0,!0),l(n,16,0,!0),l(n,18,0,"condense"),l(n,22,0,"large")}),null)}var d=u.lb("app-polyline",i,(function(l){return u.Gb(0,[(l()(),u.pb(0,0,null,null,1,"app-polyline",[],null,null,null,h,p)),u.ob(1,245760,null,0,i,[a.a],null,null)],(function(l,n){l(n,1,0)}),null)}),{},{},[]),g=e("SVse"),y=e("s7LF"),f=e("iInd");e.d(n,"PolylinePageModuleNgFactory",(function(){return m}));var m=u.mb(r,[],(function(l){return u.xb([u.yb(512,u.j,u.X,[[8,[c.a,d]],[3,u.j],u.v]),u.yb(4608,g.k,g.j,[u.s,[2,g.q]]),u.yb(4608,y.d,y.d,[]),u.yb(4608,b.a,b.a,[u.x,u.g]),u.yb(4608,b.Bb,b.Bb,[b.a,u.j,u.p]),u.yb(4608,b.Eb,b.Eb,[b.a,u.j,u.p]),u.yb(1073742336,g.b,g.b,[]),u.yb(1073742336,y.c,y.c,[]),u.yb(1073742336,y.a,y.a,[]),u.yb(1073742336,b.yb,b.yb,[]),u.yb(1073742336,f.o,f.o,[[2,f.t],[2,f.m]]),u.yb(1073742336,r,r,[]),u.yb(1024,f.k,(function(){return[[{path:"",component:i}]]}),[])])}))}}]);