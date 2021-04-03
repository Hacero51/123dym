import React, { Component } from "react";
import { Navbar } from 'react-bootstrap';
import '../App.css';

import FacebookIcon from '@material-ui/icons/Facebook';


export default class Footer extends Component {
    render() {
        return (
            <>
                <Navbar bg="success" className="">
                        <div >
                            <p className="footer" ><strong><b>Copyright &copy; {(new Date().getFullYear())} By </b></strong><a href="https://www.facebook.com/123domiciliosymensajeria" target="_blank"><FacebookIcon style={{ fontSize: 25 }} color="primary" /></a></p>
                        </div>
                </Navbar>
            </>

        );
    }
}