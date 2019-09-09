import React from 'react';
import {ButtonGroup,Button,InputGroup,FormControl} from 'react-bootstrap';
//import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";

const MenuSecundary = (props) =>{
  
  const { buttons } = props.menu;
  const { whatRender } = props;
  
  return ( 
    <ButtonGroup vertical >          
      { buttons.length !== 0 ? <InputGroup> 
        <FormControl id="txtSearch" type="text" placeholder="DNI, Apellido, Carrera"/>
        </InputGroup> : null }
      { buttons.map( (item, i)=> ( <Button key={i} variant="dark" onClick={()=>item.onClick(whatRender)}>{item.name}</Button> ))}
    </ButtonGroup>
     
  );
  
}


export default MenuSecundary;
