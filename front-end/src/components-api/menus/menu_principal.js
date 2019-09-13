import React from 'react';
import PropTypes from 'prop-types';
import {Navbar,Nav,Form,FormControl,Button} from 'react-bootstrap';
import menus from './servicies';

const MunuPrincipal = props => {
        
    const { action } = props;

    return (
        <Navbar bg="dark"  variant="dark" expand="lg">
            <Navbar.Brand href="/" onClick={()=>action({ buttons: []})} >Home</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link onClick={()=>action(menus.user)}>Usuarios</Nav.Link>
                <Nav.Link onClick={()=>action(menus.adm)}>Administracion</Nav.Link>
                <Nav.Link onClick={()=>action(menus.alumn)}>Alumnos</Nav.Link>
                <Nav.Link onClick={()=>action(menus.caja)}>Caja</Nav.Link>
                <Nav.Link disabled >Salir</Nav.Link>
            </Nav>
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
            </Form>
            </Navbar.Collapse>
        </Navbar>
    );
}

MunuPrincipal.protoTypes = {
    action: PropTypes.func.isRequired,
}

export default MunuPrincipal;