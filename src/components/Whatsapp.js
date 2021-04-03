import React, { Component } from "react";
import { Button } from 'react-bootstrap';
import '../App.css';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

export default class Whatsapp extends Component {
    render() {
        return (
            <div className="container">
                <div>
                <a href="https://wa.me/573203014991?text=Hola%20Estoy%20Interesado(a)%20En%20Un%20Servicio%20O%20Producto" class="whatsapp" target="_blank"><WhatsAppIcon style={{ fontSize: 40 }}/></a>
                </div>
            </div>

        );
    }
}