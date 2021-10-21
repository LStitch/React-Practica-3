import React from 'react'
import '../App.css';
import { Button, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Listado (props){
    return(  
        <div className="Lista">
        
        <div>
            <h4>El Buen Carrito</h4>
            <div class="Contenedores2">
                <p>Total ${props.total}</p>
                <div onClick={()=>props.eliminarCarrito()}>
                <img src="https://thumbs.dreamstime.com/b/papelera-de-reciclaje-l%C3%ADnea-blanca-con-icono-s%C3%ADmbolo-aislado-en-fondo-negro-la-signo-cubo-basura-reciclar-cesta-bot%C3%B3n-color-184448687.jpg" 
                class="App-bote" alt="logo"/></div>
            </div>
            <Table striped bordered hover style={{verticalAlign: 'middle'}}>
                <thead>
                    <tr>
                        <th>Cantidad</th>
                        <th>Codigo</th>
                        <th>Descripcion</th>
                        <th>Precio</th>
                        <th>Importe</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                    props.carrito.map((f,ini)=>
                    <tr key={ini}>
                        <td>{f.cantidad} </td>
                        <td>{f.codigo}</td>
                        <td>{f.descripcion}</td>
                        <td>${f.precio}</td>
                        <td>${f.cantidad*f.precio}</td>
                        <td>{<Button variant="danger"onClick={()=>props.eliminar(f,ini)} >Saquelo</Button>} </td>
                    </tr>)
                    }
                </tbody>
            </Table>
            </div>
        </div>
    )
}