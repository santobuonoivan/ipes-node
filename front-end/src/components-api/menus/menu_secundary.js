import React,{Component} from 'react';
import {ButtonGroup,Button,InputGroup,FormControl} from 'react-bootstrap';
import { BrowserRouter, Route, Link } from "react-router-dom";
import withRouter from 'react-router-dom';

class MenuSecundary extends Component{


  render() {
    const { buttons } = this.props.menu;
    return (
      <ButtonGroup vertical >
        { buttons.length !== 0 ? <InputGroup> 
            <FormControl
              id="txtSearch"
              type="text"
              placeholder="DNI, Apellido, Carrera"
            />
          </InputGroup> : null }
        { buttons.map( (item, i)=> ( <Button key={i} variant="dark" onClick={()=>item.onClick()}>{item.name}</Button> ))}
      </ButtonGroup>
    );
  };
}


export default withRouter( MenuSecundary );
