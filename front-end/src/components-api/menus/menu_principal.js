import React, {Component} from 'react';
import {Navbar,Nav,Form,FormControl,Button} from 'react-bootstrap';

class MunuPrincipal extends Component {
        
    render() {
        const { goToHome, goToUserMenu, goToAlumnMenu, goToADMMenu, goToCaja, close} = this.props.events;
        return (
        <Navbar bg="dark"  variant="dark" expand="lg">
            <Navbar.Brand href="#home" onClick={goToHome} >Home</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link onClick={goToUserMenu}>Usuarios</Nav.Link>
                <Nav.Link onClick={goToAlumnMenu}>Alumnos</Nav.Link>
                <Nav.Link onClick={goToADMMenu}>Administracion</Nav.Link>
                <Nav.Link onClick={goToCaja}>Caja</Nav.Link>
                <Nav.Link onClick={close}>Salir</Nav.Link>
            </Nav>
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
            </Form>
            </Navbar.Collapse>
        </Navbar>
        );
    }
}
/* TODO add propstypes
MunuPrincipal.protoTypes = {
    goToHome, goToUserMenu, goToAlumnMenu, goToADMMenu, goToCaja, close,
}*/

export default MunuPrincipal;