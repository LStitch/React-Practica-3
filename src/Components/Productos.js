import React from 'react'
import '../App.css';
import { Button, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Productos (props){
    return(
        <div class='Productos'>
        <h4>Productos</h4>
        <Table striped bordered hover style={{verticalAlign: 'middle'}}>
            <thead>
            <tr>
                <th>Codigo</th>
                <th>Juego</th>
                <th>Imagen</th>
                <th>Precio</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            {
                props.productosLista.map((a,index)=>
                <tr key={index}>
                <td>{a.codigo}</td>
                <td>{a.descripcion}</td>
                <td><img src={a.url} className="App-descripcion" style={{height: '5vmin'}}/></td>
                <td>${a.precio}</td>
                <td>{<Button variant="success"onClick={()=>props.enviar(a)}>Llevele</Button>} </td>
                </tr>
                )
            }
            </tbody>
        </Table>
        </div>
    )
}