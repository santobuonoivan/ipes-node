import React, {Component} from 'react';
import MenuPrincipal from './menus/menu_principal';
import { MenuSecundary } from './menus/menu_secundary';
import './component.css';

class Home extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      menuSeleccionado:[],
      getMenu: this.getMenu.bind(this),    
    };
  };
  
  getMenu(args){
    this.setState({menuSeleccionado: args})
  }
  
  render() {
    const { getMenu } = this.state;
    return (
      <div>
        <MenuPrincipal 
         //events={events}
         action={getMenu}></MenuPrincipal>
        <div key='menu-selected' className='div-menu-secundary' >
          {
            (this.state.menuSeleccionado.length) !==0 ?
            <MenuSecundary menu={this.state.menuSeleccionado}/>: null
          }
        </div>
        <div key="workspace">

        </div>
      </div>
    );
  }
}

export default Home;
