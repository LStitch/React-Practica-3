(this.webpackJsonppractica3=this.webpackJsonppractica3||[]).push([[0],{20:function(t,e,c){},22:function(t,e,c){"use strict";c.r(e);var i=c(1),r=c.n(i),o=c(10),n=c.n(o),s=(c(20),c(9)),a=c(11),d=c(12),l=c(14),j=c(13),h=(c(5),c(8),c(0)),p=function(){return Object(h.jsx)("header",{className:"App-header",children:Object(h.jsx)("img",{src:"https://bazardelaesquina.com/wp-content/uploads/2019/08/logo-bdq-bazar.png",class:"App-logo",alt:"nLogo1"})})},b=c(23),u=c(24);function O(t){return Object(h.jsxs)("div",{class:"Productos",children:[Object(h.jsx)("h4",{children:"Productos"}),Object(h.jsxs)(b.a,{striped:!0,bordered:!0,hover:!0,style:{verticalAlign:"middle"},children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"Codigo"}),Object(h.jsx)("th",{children:"Juego"}),Object(h.jsx)("th",{children:"Imagen"}),Object(h.jsx)("th",{children:"Precio"}),Object(h.jsx)("th",{})]})}),Object(h.jsx)("tbody",{children:t.productosLista.map((function(e,c){return Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:e.codigo}),Object(h.jsx)("td",{children:e.descripcion}),Object(h.jsx)("td",{children:Object(h.jsx)("img",{src:e.url,className:"App-descripcion",style:{height:"5vmin"}})}),Object(h.jsxs)("td",{children:["$",e.precio]}),Object(h.jsxs)("td",{children:[Object(h.jsx)(u.a,{variant:"success",onClick:function(){return t.enviar(e)},children:"Llevele"})," "]})]},c)}))})]})]})}var x=function(t){return Object(h.jsx)("div",{className:"Lista",children:0===t.carrito.length?Object(h.jsxs)("div",{children:[Object(h.jsx)("h4",{children:"El Buen Carrito"}),Object(h.jsx)("div",{children:"Hechale Productos Valedor"})]}):Object(h.jsxs)("div",{children:[Object(h.jsx)("h4",{children:"El Buen Carrito"}),Object(h.jsxs)("div",{class:"Contenedores2",children:[Object(h.jsxs)("p",{children:["Total:$",t.total]}),Object(h.jsx)("div",{onClick:function(){return t.eliminarCarrito()},children:Object(h.jsx)("img",{src:"https://thumbs.dreamstime.com/b/papelera-de-reciclaje-l%C3%ADnea-blanca-con-icono-s%C3%ADmbolo-aislado-en-fondo-negro-la-signo-cubo-basura-reciclar-cesta-bot%C3%B3n-color-184448687.jpg",class:"App-bote",alt:"logo"})})]}),Object(h.jsxs)(b.a,{striped:!0,bordered:!0,hover:!0,style:{verticalAlign:"middle"},children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"Cantidad"}),Object(h.jsx)("th",{children:"Codigo"}),Object(h.jsx)("th",{children:"Descripcion"}),Object(h.jsx)("th",{children:"Precio"}),Object(h.jsx)("th",{children:"Importe"}),Object(h.jsx)("th",{})]})}),Object(h.jsx)("tbody",{children:t.carrito.map((function(e,c){return Object(h.jsxs)("tr",{children:[Object(h.jsxs)("td",{children:[e.cantidad," "]}),Object(h.jsx)("td",{children:e.codigo}),Object(h.jsx)("td",{children:e.descripcion}),Object(h.jsxs)("td",{children:["$",e.precio]}),Object(h.jsxs)("td",{children:["$",e.cantidad*e.precio]}),Object(h.jsxs)("td",{children:[Object(h.jsx)(u.a,{variant:"danger",onClick:function(){return t.eliminar(e,c)},children:"Saquelo"})," "]})]},c)}))})]})]})})},g=function(t){Object(l.a)(c,t);var e=Object(j.a)(c);function c(){var t;return Object(a.a)(this,c),(t=e.call(this)).enviar=function(e){var c,i=t.state.carrito.find((function(t){return t.codigo===e.codigo})),r=t.state.carrito;void 0!==i?(c={cantidad:i.cantidad+1,codigo:e.codigo,descripcion:e.descripcion,precio:e.precio},r=t.state.carrito.filter((function(t){return t.codigo!==e.codigo}))):c={cantidad:1,codigo:e.codigo,descripcion:e.descripcion,precio:e.precio},t.setState({carrito:[].concat(Object(s.a)(r),[c]),total:t.state.total+e.precio})},t.eliminar=function(e,c){var i;if(1===e.cantidad)i=t.state.carrito.filter((function(t,e){return e!==c}));else{var r={cantidad:e.cantidad-1,codigo:e.codigo,descripcion:e.descripcion,precio:e.precio};i=t.state.carrito.filter((function(t,e){return e!==c})),i=[].concat(Object(s.a)(i),[r])}t.setState({carrito:i,total:t.state.total-e.precio})},t.eliminarCarrito=function(){t.setState({carrito:[],total:0})},t.state={carrito:[],total:0,productosLista:[{codigo:1,descripcion:"Devil May Cry 5",precio:599,url:"https://www.muycomputer.com/wp-content/uploads/2019/02/devil-may-cry-5-4k-e1549546760685.jpg"},{codigo:2,descripcion:"DRAGON BALL FighterZ",precio:1100,url:"https://www.gamersrd.com/wp-content/uploads/2018/01/Dragon-Ball-FighterZ-review-0-GamersRD.png"},{codigo:3,descripcion:"Hollow Knight",precio:149,url:"https://cdn.cloudflare.steamstatic.com/steam/apps/367520/capsule_616x353.jpg?t=1625363925"},{codigo:4,descripcion:"Monster Hunter: World",precio:303,url:"https://cdn-ext.fanatical.com/production/product/1280x720/7f6e4bbc-69a4-4910-a424-8b4f14100c12.jpeg"},{codigo:5,descripcion:"Assassin's Creed Odyssey",precio:1199,url:"https://live.mrf.io/statics/i/ps/www.muycomputer.com/wp-content/uploads/2018/09/Assassins-Creed-Odyssey.jpg?width=1200&enable=upscale"},{codigo:6,descripcion:"Crash Bandicoot N. Sane Trilogy",precio:999,url:"https://www.comunidadxbox.com/wp-content/uploads/Crash-Bandicoot-N.-Sane-Trilogy-Comunidad-Xbox.jpg"}],cantidad:1},t}return Object(d.a)(c,[{key:"render",value:function(){var t=this.state.carrito.sort((function(t,e){return t.codigo-e.codigo}));return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(p,{}),Object(h.jsxs)("div",{class:"Contenedores",children:[Object(h.jsx)(O,{productosLista:this.state.productosLista,enviar:this.enviar}),Object(h.jsx)(x,{carrito:t,eliminar:this.eliminar,total:this.state.total,eliminarCarrito:this.eliminarCarrito})]})]})}}]),c}(i.Component),m=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,25)).then((function(e){var c=e.getCLS,i=e.getFID,r=e.getFCP,o=e.getLCP,n=e.getTTFB;c(t),i(t),r(t),o(t),n(t)}))};n.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(g,{})}),document.getElementById("root")),m()},5:function(t,e,c){}},[[22,1,2]]]);
//# sourceMappingURL=main.f7b95f64.chunk.js.map