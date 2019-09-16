import React from 'react';
import MenuBarContainer from './../containers/MenuBarContainer';
import MenuWorkContainer from './../containers/MenuWorkContainer';
import WorkspaceContainer from './../containers/WorkspaceContainer';
import './component.css';
//import Prueba from './menus/Prueba';
//import GirdUser from './grids/grid_users';


const Home = () => {
  return(
    <div>
      <MenuBarContainer/>
      <div className='div-content'>
        <div key='menu-selected' className='div-menu-secundary' >
          <MenuWorkContainer/>
        </div>
        <div key="workspace" className='div-workspace' >
            <WorkspaceContainer/>
        </div>
      </div> 
    </div>
  );  
}

export default Home;
