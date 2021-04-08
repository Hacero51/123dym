import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from "../imagen/Tarjeta1.jpg";
import img2 from "../imagen/Tarjeta2.jpg";
import Whatsapp from './Whatsapp';

export default class Home extends Component {



    render() {
        return (
            <div>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={img1}
                            height="500px"
                            width="250px"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={img2}
                            height="500px"
                            width="250px"
                        />
                    </Carousel.Item> 
                </Carousel>     

                <Whatsapp />
            </div>
        )
    }
}
