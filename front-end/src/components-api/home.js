import React, {Component} from 'react';
import { setMenu, setWhatRender } from './actions';
import { store } from './store';
import MenuPrincipal from './menus/menu_principal';
import MenuSecundary from './menus/menu_secundary';
import './component.css';
import Prueba from './menus/Prueba';
import GirdUser from './grids/grid_users';
import { from } from 'rxjs';



class Home extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      menuSeleccionado:[],
      component:null,
      users:null,
      getMenu: this.getMenu.bind(this), 
      getWhatRender: this.getWhatRender.bind(this),
    };
  };
  
  setMenu(args){
    store.dispatch( setMenu(args) );
    //this.setState({menuSeleccionado: args})
  }

  setWhatRender(response){
    store.dispatch( setWhatRender(response) );
    //this.setState({component: response.component,users: response.users});
  }
  
  render() {
    const { getMenu } = this.state;
    const {component,users} = this.state;
    return (
      <div>
        <MenuPrincipal 
         //events={events}
         action={getMenu}></MenuPrincipal>
        <div className='div-content'>
          <div key='menu-selected' className='div-menu-secundary' >
            {
              (this.state.menuSeleccionado.length) !==0 ?
              <MenuSecundary 
                menu={this.state.menuSeleccionado}
                whatRender={this.state.getWhatRender}/>: null
            }
          </div>
          <div className='div-workspace' key="workspace">
            {
              (component===null)?<Prueba/> : 
              (component ==='grid_user')?<GirdUser users={users}/> : null

            }
          </div>
        </div> 
      </div>
    );
  }
}

export default Home;
