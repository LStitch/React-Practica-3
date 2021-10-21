import React,{Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Productos from './Components/Productos';
import Lista from './Components/Lista';

class App extends Component {

  constructor() {
    super();
    this.state = {
    carrito:[],
    total:0,
    productosLista:[
    {codigo:1,descripcion:"Devil May Cry 5", precio:599, url:'https://www.muycomputer.com/wp-content/uploads/2019/02/devil-may-cry-5-4k-e1549546760685.jpg'},
    {codigo:2,descripcion:"DRAGON BALL FighterZ", precio:1100, url:'https://www.gamersrd.com/wp-content/uploads/2018/01/Dragon-Ball-FighterZ-review-0-GamersRD.png'},
    {codigo:3,descripcion:"Hollow Knight", precio:149, url:'https://cdn.cloudflare.steamstatic.com/steam/apps/367520/capsule_616x353.jpg?t=1625363925'},
    {codigo:4,descripcion:"Monster Hunter: World", precio:303, url:'https://cdn-ext.fanatical.com/production/product/1280x720/7f6e4bbc-69a4-4910-a424-8b4f14100c12.jpeg'},
    {codigo:5,descripcion:"Assassin's Creed Odyssey", precio:1199, url:'https://live.mrf.io/statics/i/ps/www.muycomputer.com/wp-content/uploads/2018/09/Assassins-Creed-Odyssey.jpg?width=1200&enable=upscale'},
    {codigo:6,descripcion:"Crash Bandicoot N. Sane Trilogy", precio:999, url:'https://www.comunidadxbox.com/wp-content/uploads/Crash-Bandicoot-N.-Sane-Trilogy-Comunidad-Xbox.jpg'},
    ],
    cantidad:1,
    };
  }

  enviar=(a)=>
  {
    let producto=this.state.carrito.find(e=>e.codigo===a.codigo);
    let temporal_carrito=this.state.carrito;
    let temporal;

    if(producto!==undefined)
    {
        temporal=
        {
          cantidad:producto.cantidad+1,
          codigo:a.codigo,
          descripcion:a.descripcion,
          precio:a.precio
        }
        temporal_carrito=this.state.carrito.filter(e=>e.codigo!==a.codigo)
      
    }
    else
    {
      temporal=
      {
        cantidad:1,
        codigo:a.codigo,
        descripcion:a.descripcion,
        precio:a.precio,
      }
    }

    this.setState({
      carrito:[...temporal_carrito,temporal],
      total:this.state.total+a.precio
    })
  
  }

  eliminar=(f,ini)=>
  {
    let temporal;
      
      if(f.cantidad===1){
        temporal = this.state.carrito.filter((f,i)=>i!==ini)
      }
      else{
        const car_temporal={
          cantidad:f.cantidad-1,
          codigo:f.codigo,
          descripcion:f.descripcion,
          precio:f.precio
        }

        temporal = this.state.carrito.filter((f,i)=>i!==ini)
        temporal=[...temporal,car_temporal]
      }

      this.setState({
        carrito:temporal,
        total:this.state.total-f.precio
      })
  }

  eliminarCarrito=()=>{
    this.setState({
      carrito:[],
      total:0
    })
  }

  render(){
    
    return (
      <div className="App">
        <Header/>
        <div class='Contenedores'>
          
          <Productos
            productosLista={this.state.productosLista}
            enviar={this.enviar}
          />

          <Lista
            carrito={this.state.carrito}
            eliminar={this.eliminar}
            total={this.state.total}
            eliminarCarrito={this.eliminarCarrito}
          />
          
        </div>
      </div>
    )
  }
}

export default App;
