(this.webpackJsonpseasons=this.webpackJsonpseasons||[]).push([[0],{12:function(e,t,s){},14:function(e,t,s){"use strict";s.r(t);var n=s(3),a=s(4),r=s(7),c=s(6),i=s(1),o=s.n(i),l=s(5),u=s.n(l),j=(s(12),s(0)),d={summer:{text:"Let's hit the beach!",iconName:"sun"},winter:{text:"Burr, it is cold!",iconName:"snowflake"}},m=function(e){var t,s,n=(t=e.lat,(s=(new Date).getMonth())>2&&s<9?t>0?"summer":"winter":t>0?"winter":"summer"),a=d[n],r=a.text,c=a.iconName;return Object(j.jsxs)("div",{className:"season-display ".concat(n),children:[Object(j.jsx)("i",{className:"icon-left massive ".concat(c," icon")}),Object(j.jsx)("h1",{children:r}),Object(j.jsx)("i",{className:"icon-right massive ".concat(c," icon")})]})},h=function(e){return Object(j.jsx)("div",{className:"ui active dimmer",children:Object(j.jsx)("div",{className:"ui big text loader",children:e.message})})};h.defaultProps={message:"Loading..."};var b=h,v=function(e){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("i",{className:"massive eye slash icon"}),Object(j.jsx)("br",{}),Object(j.jsx)("h1",{children:Object(j.jsx)("div",{center:"true",children:e.message})})]})},x=function(e){Object(r.a)(s,e);var t=Object(c.a)(s);function s(){var e;Object(n.a)(this,s);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={lat:null,errorMessage:""},e}return Object(a.a)(s,[{key:"componentDidMount",value:function(){var e=this;window.navigator.geolocation.getCurrentPosition((function(t){return e.setState({lat:t.coords.latitude})}),(function(t){return e.setState({errorMessage:t.message})}))}},{key:"renderContent",value:function(){return this.state.errorMessage&&!this.state.lat?Object(j.jsx)(v,{message:"You didn't allow to access location"}):!this.state.errorMessage&&this.state.lat?Object(j.jsx)(m,{lat:this.state.lat}):Object(j.jsx)(b,{message:"Please accept location request"})}},{key:"render",value:function(){return Object(j.jsx)("div",{className:"border red",children:this.renderContent()})}}]),s}(o.a.Component);u.a.render(Object(j.jsx)(x,{}),document.querySelector("#root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.f5ced536.chunk.js.map