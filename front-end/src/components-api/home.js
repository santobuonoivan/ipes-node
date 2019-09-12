import React, {Component} from 'react';
import MenuPrincipal from './menus/menu_principal';
import { createStore } from 'redux';
import MenuSecundary from './menus/menu_secundary';
import './component.css';
import Prueba from './menus/Prueba';
import GirdUser from './grids/grid_users';

const store = createStore( () => {}, window.__REDUX_DEVTOOLS_EXTENSION__ && Window.__REDUX_DEVTOOLS_EXTENSION__());

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
    const action = { type: 'setMenu', value: args };
    store.dispatch( action );
    //this.setState({menuSeleccionado: args})
  }

  setWhatRender(response){
    const action = { type: 'setWhatRender', value: {component: response.component,users: response.users}};
    store.dispatch( action );
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
