import React,{Component} from 'react';
import {ButtonGroup,Button,InputGroup,FormControl} from 'react-bootstrap';

class MenuSecundary extends Component{
  render() {
    const { buttons } = this.props.menu;
    return (
      <ButtonGroup vertical >
        <InputGroup placeholder="DNI, Apellido, Carrera">
            <FormControl
            id="txtSearch"
            type="text"
            placeholder="Input group example"
            aria-label="Input group example"
            aria-describedby="btnGroupAddon"
          />
        </InputGroup>
        { buttons.map( (item, i)=> ( <Button key={i} variant="dark" onClick={()=>item.onClick()}>{item.name}</Button> ))}
      </ButtonGroup>
    );
  };
}


export default MenuSecundary;
