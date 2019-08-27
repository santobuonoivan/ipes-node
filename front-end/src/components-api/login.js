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
  {/* JS */}
  {/*script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script*/}
  {/*script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script*/}
  {/* AGREGO LA LIBRERIA DE JQUERY */}
  <div id="divLoguin" className="container centrar  ">
    <h1>Login</h1>
    <div className="row col-centrada ">
      <div className="form-group container col-lg-12 ">
        <label htmlFor="inputUsuario" className="control-label">
          Usuario
        </label>
        <input
          type="text"
          className="form-control col-lg-12"
          id="inputUsuario"
          placeholder="Usuario"
          data-error="ojo, revisa Usuario"
          required
        />
      </div>
      <div className="form-group col-centrada col-lg-12 ">
        <label htmlFor="inputPassword" className="control-label">
          clave
        </label>
        <input
          type="password"
          data-minlength={4}
          data-maxlength={8}
          className="form-control col-lg-12 "
          id="inputPassword"
          placeholder="Password"
          required
        />
        <div className="help-block">acepta entre 4 a 8 characteres</div>
      </div>
      <div className="form-group col-lg-12">
        <button className="btn btn-primary" onclick="Test.Login()">
          enviar
        </button>
        <button className="btn btn-primary">limpiar</button>
      </div>
    </div>
  </div>
</div>;
