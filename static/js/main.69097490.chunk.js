(this["webpackJsonpdesarrollo-react"]=this["webpackJsonpdesarrollo-react"]||[]).push([[0],{33:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n(16),i=n.n(s),r=n(15),a=n(7),o=n(9),j=n.p+"static/media/pokeball.aa94db69.png",l=n(0);function u(){var e=Object(c.useState)(""),t=Object(a.a)(e,2),n=t[0],s=t[1];return Object(l.jsxs)("div",{className:"App-Header",children:[Object(l.jsx)("div",{className:"App-Header-Image",children:Object(l.jsx)(o.b,{to:"/",children:Object(l.jsx)("img",{src:j})})}),Object(l.jsxs)("div",{className:"App-Header-Form",children:[Object(l.jsx)("input",{placeholder:"Buscar Pokemon",onChange:function(e){s(e.target.value)},value:n}),Object(l.jsx)("button",{onClick:function(e){console.log(e.target)},children:"Buscar"})]}),Object(l.jsx)("div",{className:"App-Header-Links",children:Object(l.jsx)(o.b,{to:"/all",children:"Nuevo Dise\xf1o"})})]})}function d(e){var t=e.handlePaginator,n=function(e){t(e.target.name)};return Object(l.jsxs)("div",{className:"App-Paginator",children:[Object(l.jsx)("button",{name:"previus",onClick:n,children:" Anterior"}),Object(l.jsx)("button",{name:"next",onClick:n,children:"Siguiente"})]})}function b(e){var t=e.url,n=Object(c.useState)(!1),s=Object(a.a)(n,2),i=s[0],r=s[1],o=Object(c.useState)([]),j=Object(a.a)(o,2),u=j[0],d=j[1];Object(c.useEffect)((function(){b()}),[]);var b=function(){fetch(t).then((function(e){return e.ok&&e.json()})).then((function(e){d(e)}))};return Object(l.jsxs)("div",{className:"App-Card",children:[Object(l.jsx)("div",{className:"Card-Image",children:Object(l.jsx)("div",{children:Object(l.jsx)("img",{src:u.sprites?u.sprites.front_default:""})})}),Object(l.jsxs)("div",{children:[Object(l.jsxs)("h3",{children:["No.",u.id]}),Object(l.jsx)("h3",{children:u.name?u.name.replace(/^\w/,(function(e){return e.toUpperCase()})):""})]}),i?Object(l.jsx)("div",{className:"Card-Info",children:Object(l.jsxs)("div",{className:"Card-Info-Data",children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("span",{children:"Estad\xedsticas"}),Object(l.jsx)("ul",{children:u.stats?u.stats.map((function(e){return Object(l.jsx)("li",{children:e.base_stat})})):Object(l.jsx)("li",{children:"No hay registros"})})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("span",{children:"Habilidades"}),Object(l.jsx)("ul",{children:u.stats?u.abilities.map((function(e){return Object(l.jsx)("li",{children:e.ability.name})})):""})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("span",{children:"Tipo"}),Object(l.jsx)("ul",{children:u.types?u.types.map((function(e){return Object(l.jsx)("li",{children:e.type.name})})):Object(l.jsx)("li",{children:"Sin Tipo"})})]}),Object(l.jsx)("div",{style:{display:"flex","flex-direction":"column"},children:Object(l.jsx)("button",{onClick:function(){return r(!1)},children:"Close"})})]})}):Object(l.jsx)("div",{className:"Card-Button",children:Object(l.jsx)("button",{onClick:function(){return r(!0)},children:"Ver"})})]})}var h=function(){var e=Object(c.useState)({isLoading:!0}),t=Object(a.a)(e,2),n=t[0],s=t[1];Object(c.useEffect)((function(){i("https://pokeapi.co/api/v2/pokemon/?offset=10&limit=10")}),[]);var i=function(e){fetch(e).then((function(e){if(e.ok)return e.json();throw new Error(e.statusText)})).then((function(e){s({isLoading:!1,previus:e.previous||null,next:e.next,results:e.results})})).catch((function(e){return console.error(e)}))};return Object(l.jsxs)("div",{children:[Object(l.jsx)(u,{}),Object(l.jsxs)("div",{className:"App-Container",children:[Object(l.jsx)(d,{handlePaginator:function(e){var t=n[e];t&&i(t)}}),Object(l.jsx)("div",{className:"App-Content",children:!n.isLoading&&n.results.map((function(e){return Object(c.createElement)(b,Object(r.a)(Object(r.a)({},e),{},{key:e.name}))}))})]})]})},O=n(18),f=n(19),p={pokemons:"https://pokeapi.co/api/v2/pokemon/?limit=160"},x=function(){function e(){Object(O.a)(this,e)}return Object(f.a)(e,[{key:"getEachPokemon",value:function(){return fetch(p.pokemons).then((function(e){if(e.ok)return e.json()})).then((function(e){return e})).catch(console.error)}}]),e}();function m(){var e=Object(c.useState)({isComplete:!1,data:[]}),t=Object(a.a)(e,2),n=t[0],s=t[1],i=new x;return Object(c.useEffect)((function(){i.getEachPokemon().then((function(e){return function(e){var t=[];e.forEach((function(e){fetch(e.url).then((function(e){if(e.ok)return e.json()})).then((function(e){var n=e.sprites;t.push(n)})).catch((function(e){return console.log("Error Mijo",e)}))})),setTimeout((function(){s({isComplete:!0,data:t})}),5e3)}(e.results)}))}),[]),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(u,{}),Object(l.jsx)("div",{className:"App-Cool-Collage",children:n.isComplete&&n.data.map((function(e){return Object(l.jsx)("div",{children:Object(l.jsx)("img",{src:e.front_default?e.front_default:""})},e.front_default)}))})]})}var v=n(2);function g(){return Object(l.jsxs)(v.c,{children:[Object(l.jsx)(v.a,{path:"/all",children:Object(l.jsx)(m,{})}),Object(l.jsx)(v.a,{path:"/",children:Object(l.jsx)(h,{})})]})}n(33);i.a.render(Object(l.jsx)(o.a,{children:Object(l.jsx)(g,{})}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.69097490.chunk.js.map