import React, {Component} from 'react';
import MenuBarContainer from './../containers/MenuBarContainer';
import MenuWorkContainer from './../containers/MenuWorkContainer';
import './component.css';
import Prueba from './menus/Prueba';
import GirdUser from './grids/grid_users';


class Home extends Component {

  render() {
    //const {component,users} = this.state;
    return (
      <div>
        <MenuBarContainer/>
        <div className='div-content'>
          <div key='menu-selected' className='div-menu-secundary' >
            <MenuWorkContainer/>
          </div>
          <div className='div-workspace' key="workspace">
            {/*
              (component===null)?<Prueba/> : 
              (component ==='grid_user')?<GirdUser users={users}/> : null

            */}
          </div>
        </div> 
      </div>
    );
  }
}

export default Home;
