(this.webpackJsonpmovie_app_2021=this.webpackJsonpmovie_app_2021||[]).push([[0],{19:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a(2),i=a.n(n),s=a(13),r=a.n(s),o=a(3);a(19),a(20),a(39);var d=function(e){var t=e.date,a=e.title,n=e.summary,i=e.poster_path,s=e.genre_ids,r=e.genres_category,o="https://image.tmdb.org/t/p/w200/".concat(i),d=function(e,t){var a=[];return e.forEach((function(e){t.forEach((function(t){t.id===e&&a.push(t.name)}))})),a}(s,r);return Object(c.jsxs)("div",{className:"movie",children:[Object(c.jsx)("img",{src:o,alt:a,title:a}),Object(c.jsxs)("div",{className:"movie__data",children:[Object(c.jsx)("h3",{className:"movie__title",children:a}),Object(c.jsx)("h5",{className:"movie__date",children:t}),Object(c.jsx)("ul",{className:"movie__genres",children:d.map((function(e,t){return Object(c.jsx)("li",{className:"genres__genre",children:e},t)}))}),Object(c.jsxs)("p",{className:"movie__summary",children:[n.slice(0,170),"..."]})]})]})},l=(a(40),"efe03a6d3db809fae4ff34eeb880e298"),m="fr-FR",u=("https://api.themoviedb.org/3/movie/550?api_key=".concat(l),"https://api.themoviedb.org/3/genre/movie/list?api_key=efe03a6d3db809fae4ff34eeb880e298&language=".concat(m)),j=("https://api.themoviedb.org/3/movie/top_rated?api_key=".concat(l,"&language=").concat(m),"https://api.themoviedb.org/3/movie/popular?api_key=".concat(l,"&language=").concat(m));var h=function(){var e=Object(n.useState)(!0),t=Object(o.a)(e,2),a=t[0],i=t[1],s=Object(n.useState)([]),r=Object(o.a)(s,2),l=r[0],m=r[1],h=Object(n.useState)([]),p=Object(o.a)(h,2),b=p[0],_=p[1];return Object(n.useEffect)((function(){fetch(j).then((function(e){return e.json()})).then((function(e){i(!1),m(e.results)})),fetch(u).then((function(e){return e.json()})).then((function(e){_(e.genres)}))}),[]),Object(c.jsx)("section",{className:"container",children:a?Object(c.jsx)("div",{className:"loader",children:Object(c.jsx)("span",{className:"loader__text",children:"Loading..."})}):Object(c.jsx)("div",{className:"movies",children:l.map((function(e){return Object(c.jsx)(d,{id:e.id,date:e.release_date,title:e.title,summary:e.overview,poster_path:e.poster_path,genre_ids:e.genre_ids,genres_category:b},e.id)}))})})};r.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(h,{})}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.efddb395.chunk.js.map