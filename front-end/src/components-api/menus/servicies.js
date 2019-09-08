/*

  goToHome = () => { alert('home') }
  goToUserMenu = () => { alert('user-menu') }
  goToAlumnMenu = () => { this.setState({ menu: 'alumn'}); }
  goToADMMenu = () => { alert('adm-menu') }
  goToCaja = () => { alert('caja-menu') }
  close = () => { alert('close') }

    const events = {
    goToHome: this.goToHome,
    goToUserMenu: this.goToUserMenu,
    goToAlumnMenu: this.goToAlumnMenu,
    goToADMMenu: this.goToADMMenu,
    goToCaja: this.goToCaja,
    close: this.close,
    };
*/
const searchUser = () => {
    //const filt = document.getElementById('txtSearch').value;
    const url = 'http://localhost:5000/users/';
        
    const miInit = { 
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'x-auth-token' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJpdmFuQGl2YW4uY29tIiwiaWF0IjoxNTY2NDE2MjE3fQ.crMa9pJRK9eT2vqW7tuJsRog_CY8eoezOYXTlJOouB8',
        },
    mode: 'cors',
    cache: 'default' };
    
    fetch(url,miInit)
    .then( data => (data.json()) )
    .then( otra_data => { console.log( otra_data ) } )
    .catch( (e) => { console.log(e) } )
}
const menus = {
    alumn: {
        buttons: [{
            name: 'Buscar Alumno',
            onClick: searchUser
        },{
            name: 'Agregar Alumno',
            onClick: searchUser
        },{
            name: 'Lista Alumno',
            onClick: searchUser
        }]    
    },
    user: {
        buttons: [{
            name: 'Buscar Usuario',
            onClick: searchUser
        },{
            name: 'Agregar Usuario',
            onClick: searchUser
        },{
            name: 'Lista Usuario',
            onClick: searchUser
        }]
    },
    adm: {
        buttons: [{
            name: 'Buscar Alumno',
            onClick: searchUser
        },{
            name: 'Consultar',
            onClick: searchUser
        },{
            name: 'Deuda',
            onClick: searchUser
        },{
            name: 'FLUJO',
            onClick: searchUser
        },{
            name: 'Registro',
            onClick: searchUser
        }]
    },
    caja: {
        buttons: [{
            name: 'Abrir',
            onClick: searchUser
        },{
            name: 'Entrada',
            onClick: searchUser
        },{
            name: 'Salida',
            onClick: searchUser
        },{
            name: 'Cerrar',
            onClick: searchUser
        },{
            name: 'Estadisticas',
            onClick: searchUser
        }]
    },
};

export default menus;
