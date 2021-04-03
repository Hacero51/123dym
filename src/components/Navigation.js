import React, { useState } from 'react';
import { Form, InputGroup, FormControl, Nav, Navbar } from 'react-bootstrap';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
////<Link to="/login" className="nav-link"><h4>Login</h4></Link>
const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    }
}));

function Navigations() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const classes = useStyles();
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="danger" variant="light">
                <br />
                <img src="123.png" width="220" height="100" class="d-inline-block align-top" alt="" />
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">

                    <Nav className="mr-auto">
                    </Nav>
                    <Nav className="mr-auto">
                        <Link to="/" className="nav-link"><h4>Home</h4></Link>
                        
                        <Link to="/alianzas" className="nav-link"><h4>Alianzas Comerciales</h4></Link>

                        <Link to="/quienesomos" className="nav-link"><h4>Quienes somos</h4></Link>

                        <Link to="/videos" className="nav-link"><h4>Videos</h4></Link>

                        
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default Navigations;