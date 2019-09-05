import React,{Component} from 'react';
import {ButtonGroup,Button,InputGroup} from 'react-bootstrap';

class MenuAlumno extends Component{
  render() {
    return (
      <ButtonGroup vertical>
        <InputGroup key="txtSearch" placeholder="DNI, Apellido, Carrera"/>
        <Button>Buscar Alumno</Button>
        <Button>Agregar Alumno</Button>
        <Button>Lista Alumno</Button>    
      </ButtonGroup>
    );
  };
}


export default MenuAlumno;
