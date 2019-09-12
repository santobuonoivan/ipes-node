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


const searchUser = (whatRender) => {
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
    
    const res = fetch(url,miInit)
    .then( data => (data.json()) )
    .then( otra_data => { 
        whatRender({component:'grid_user', users: otra_data});

    } )
    .catch( (e) => { console.log(e) } )
    return res
}
const menus = {
    alumn: {
        buttons: [{
            name: 'Buscar Alumno',
            onClick: searchUser,
            whatRender:''
        },{
            name: 'Agregar Alumno',
            onClick: searchUser,
            whatRender:''
        },{
            name: 'Lista Alumno',
            onClick: searchUser,
            whatRender:''
        }]    
    },
    user: {
        buttons: [{
            name: 'Buscar Usuario',
            onClick: searchUser,
            whatRender:''
        },{
            name: 'Agregar Usuario',
            onClick: searchUser,
            whatRender:''
        },{
            name: 'Lista Usuario',
            onClick: searchUser,
            whatRender:''
        }]
    },
    adm: {
        buttons: [{
            name: 'Buscar Alumno',
            onClick: searchUser,
            whatRender:''
        },{
            name: 'Consultar',
            onClick: searchUser,
            whatRender:''
        },{
            name: 'Deuda',
            onClick: searchUser,
            whatRender:''
        },{
            name: 'FLUJO',
            onClick: searchUser,
            whatRender:''
        },{
            name: 'Registro',
            onClick: searchUser,
            whatRender:''
        }]
    },
    caja: {
        buttons: [{
            name: 'Abrir',
            onClick: searchUser,
            whatRender:''
        },{
            name: 'Entrada',
            onClick: searchUser,
            whatRender:''
        },{
            name: 'Salida',
            onClick: searchUser,
            whatRender:''
        },{
            name: 'Cerrar',
            onClick: searchUser,
            whatRender:''
        },{
            name: 'Estadisticas',
            onClick: searchUser,
            whatRender:''
        }]
    },
};

export default menus;
