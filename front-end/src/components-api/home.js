<div>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
  <title> HOME </title>
  {/* css  4.0 */}
  <link rel="stylesheet" href="libs/bootstrap/dist/css/bootstrap.min.css" />
  {/*link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link*/}
  <link
    rel="stylesheet"
    href="http://netdna.bootstrapcdn.com/bootstrap/3.0.0-rc2/css/bootstrap-glyphicons.css"
  />
  <link rel="stylesheet" href="libs/css/style.css" />
  {/*validaciones bstp*/}
  {/* JS */}
  {/*script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script*/}
  {/*script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script*/}
  {/* AGREGO LA LIBRERIA DE JQUERY */}
  {/*?php 
  //require_once "./backend/clases/validarSesion.php";
    ?*/}
  <div
    className="btn-toolbar justify-content-between "
    role="toolbar"
    aria-label="Toolbar with button groups"
  >
    <div className="btn-group" role="group" aria-label="First group">
      <button type="button" className="btn btn-secondary" onclick="Test.home()">
        Home
      </button>
      {/*?php  
          if(isset($_SESSION['perfil']) && ( $_SESSION['perfil']=='WebMaster' || $_SESSION['perfil']=='Jefe')){
              echo "<button type='button' class='btn btn-secondary' onclick='Test.menuUsuarios()' */}
      Gestion Usuarios";
      {"}"}
      ?&gt;
      <button
        type="button"
        className="btn btn-secondary"
        onclick="Test.menuAlumnos()"
      >
        Gestion Alumnos
      </button>
      <button
        type="button"
        className="btn btn-secondary "
        onclick="Test.menuAdministracion()"
      >
        Administracion
      </button>
      <button
        type="button"
        className="btn btn-secondary "
        onclick="Test.menuCaja()"
      >
        Caja
      </button>
      <button type="button" className="btn btn-alert" onclick="Test.Logout()">
        Salir
      </button>
    </div>
    <form className="form-inline my-2 my-lg-0">
      <input
        className="form-control mr-sm-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
        Search
      </button>
    </form>
  </div>
  <div className="container-fluid">
    <div className="row">
      <div className="col-md-2 " id="divMenu" />
      <div className="col-md-10 " id="divResultado" />
    </div>
  </div>
  <div className="col-md-5">
    <canvas id="myChart" width={400} height={400} />
  </div>
</div>;
