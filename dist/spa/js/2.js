(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{120:function(t,n,s){"use strict";s.r(n);var i=s(73),o=s(7),a={name:"ugc",data:()=>({ugcs:[]}),mounted(){Object(o.b)("public","原创","","",1,30).then(t=>{this.ugcs=t.data.posts})},methods:{refresh(t,n){Object(o.b)("public",t,n,"",1,30).then(t=>{this.ugcs=t.data.posts})}},components:{UgcList:i.a}},e=s(0),r=Object(e.a)(a,function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"ugc"},[n("ugc-list",{attrs:{posts:this.ugcs,isShow:""},on:{refresh:this.refresh}})],1)},[],!1,null,null,null);n.default=r.exports},70:function(t,n,s){var i=s(74);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,s(2).default)("3ed77f09",i,!0,{})},73:function(t,n,s){"use strict";var i=s(5),o=s(77),a=s.n(o),e={props:{posts:Array,isShow:Boolean},data:()=>({tags:["推荐","转载","漫画改","小说改","耽美","乙女","百合","后宫","热血","战斗","运动","奇幻","神魔","搞笑","冒险","日常","古风","恋爱","r15","泡面番","治愈","鬼畜","AMV/MAD","音乐·PV","游戏·GMV","VOCALOID","影视","其它"],sorts:["原创","新番","完结","剧场版"],sort:"原创",tag:"推荐"}),methods:{getAvatar:t=>Object(i.d)(t),getSuo:t=>Object(i.e)(t),marked:t=>void 0===t?"少年祈祷中……":a()(t),isActive(t){return this.tag.indexOf(t)>-1||this.sort===t?"active":""},selectSort(t){this.sort=t},selectTag(t){this.tag.indexOf(t)>-1?this.tag=this.tag.replace(` ${t}`,""):this.tag+=` ${t}`}},watch:{tag(){this.$emit("refresh",this.sort,this.tag)},sort(){this.$emit("refresh",this.sort,this.tag)}}},r=(s(75),s(0)),c=Object(r.a)(e,function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"ugc-list"},[s("ul",{staticClass:"masonry"},[t.isShow?s("div",{staticClass:"option"},[s("ul",{staticClass:"sort"},[s("h1",[t._v("分类")]),t._v(" "),t._l(t.sorts,function(n){return s("li",{class:t.isActive(n),on:{click:function(s){return t.selectSort(n)}}},[t._v(t._s(n))])})],2),t._v(" "),s("ul",{staticClass:"tag"},[s("h1",[t._v("标签")]),t._v(" "),t._l(t.tags,function(n){return s("li",{class:t.isActive(n),on:{click:function(s){return t.selectTag(n)}}},[t._v(t._s(n))])})],2)]):t._e(),t._v(" "),t._l(t.posts,function(n){return t.posts?s("li",{staticClass:"item"},[s("router-link",{attrs:{to:"/play/gv"+n.id}},[s("div",{staticClass:"post"},[s("div",{staticClass:"user-info"},[s("div",{staticClass:"avatar"},[s("img",{attrs:{src:t.getAvatar(n.uqq)}})]),t._v(" "),s("div",{staticClass:"name"},[t._v(t._s(n.uname))])]),t._v(" "),s("h1",{staticClass:"title"},[t._v(t._s(n.title))]),t._v(" "),s("div",{staticClass:"content"},[s("img",{attrs:{src:t.getSuo(n.content)}})]),t._v(" "),s("div",{staticClass:"info"},[s("span",{domProps:{textContent:t._s("# "+n.sort)}}),t._v(" "),s("span",{domProps:{textContent:t._s("# "+n.tag)}}),t._v(" "),s("span",{staticClass:"right"},[t._v(t._s(n.time.slice(0,-3)))])]),t._v(" "),s("h1",{staticClass:"count"},[t._v(t._s(n.count.cv+" 评论"))])])])],1):t._e()})],2),t._v(" "),s("div",{staticClass:"clear"})])},[],!1,null,null,null);n.a=c.exports},74:function(t,n,s){(t.exports=s(3)(!1)).push([t.i,".ugc-list {\n  width: 1260px;\n  margin: 0 auto;\n}\n.ugc-list .masonry {\n  column-count: 4;\n  column-gap: 0;\n}\n.ugc-list .masonry .item {\n  break-inside: avoid;\n  box-sizing: border-box;\n  background: #fbfeff;\n  margin: 0 20px 20px 0;\n  border-radius: 2px;\n}\n.ugc-list .masonry .item .title {\n  padding: 10px;\n}\n.ugc-list .option {\n  padding: 0 20px 20px;\n}\n.ugc-list .option .sort {\n  margin-bottom: 10px;\n}\n.ugc-list .option li {\n  display: inline-block;\n  background: rgba(255,255,255,0.05);\n  color: #fff;\n  border-radius: 4px;\n  padding: 2px 10px;\n  margin: 10px 5px;\n  cursor: pointer;\n}\n.ugc-list .option h1 {\n  font-weight: bold;\n  color: #fff;\n  padding: 10px;\n  border-bottom: 1px solid #21374f;\n  margin-bottom: 10px;\n}\n.ugc-list .option .active {\n  background: #00fff6;\n  color: #001935;\n}\n.ugc-list .post {\n  color: #333;\n}\n.ugc-list .user-info {\n  padding: 20px;\n  display: flex;\n  align-items: center;\n  border-bottom: 1px solid #eee;\n}\n.ugc-list .user-info .avatar img {\n  height: 40px;\n  width: 40px;\n  border-radius: 50%;\n  margin-right: 10px;\n}\n.ugc-list .user-info h1 {\n  font-size: 18px;\n  font-weight: bold;\n  float: right;\n}\n.ugc-list .content img {\n  width: 100%;\n  box-sizing: border-box;\n  min-height: 200px;\n  margin: 5px 0;\n}\n.ugc-list .info {\n  padding: 10px 5px;\n}\n.ugc-list .info span {\n  padding: 4px;\n  color: #666;\n  font-size: 10px;\n}\n.ugc-list .count {\n  font-size: 14px;\n  padding: 0 10px 10px;\n  font-weight: bold;\n}\n",""])},75:function(t,n,s){"use strict";var i=s(70);s.n(i).a}}]);