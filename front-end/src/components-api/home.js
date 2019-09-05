import React, {Component} from 'react';
import MenuPrincipal from './menus/menu_principal';
import MenuAlumno from './menus/menu_alumnos';


const menus = {
  alumno:['hola', 'chau', 'que tal?'],
  profesor: ['si', 'no', 'otro']
}

class Home extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      menu: null,
      menuSeleccionado:[]
    };
  };
  /*
  goToHome = () => { alert('home') }
  goToUserMenu = () => { alert('user-menu') }
  goToAlumnMenu = () => { this.setState({ menu: 'alumn'}); }
  goToADMMenu = () => { alert('adm-menu') }
  goToCaja = () => { alert('caja-menu') }
  close = () => { alert('close') }
*/
  getMenu(type){
    this.setState({menuSeleccionado: menus.type})
  }

  render() {
    /*const events = {
      goToHome: this.goToHome,
      goToUserMenu: this.goToUserMenu,
      goToAlumnMenu: this.goToAlumnMenu,
      goToADMMenu: this.goToADMMenu,
      goToCaja: this.goToCaja,
      close: this.close,
    };*/
    const { menu } = this.state;
    return (
      <div>
        <MenuPrincipal 
        //events={events}
         action={this.getMenu}></MenuPrincipal>
        <div key='menu-selected'>
          <MenuAlumno menu={this.state.menuSeleccionado.length===0 && this.state.menuSeleccionado}/>
        </div>
        <div key="workspace"></div>
      </div>
    );
  }
}

export default Home;
