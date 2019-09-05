<div className="container opacidad">
  <input
    type="text"
    id="idUsuario"
    name="idUsuario"
    style={{ visibility: "hidden" }}
  />
  <div className="container bootstrap-form" id="AltaUsiario">
    <div className="row">
      <div className="form-group col-md-3">
        <label htmlFor="inputNombre" className="control-label">
          Nombre
        </label>
        <input
          type="text"
          className="form-control"
          maxLength={20}
          id="inputNombre"
          placeholder="Nombre"
          required
        />
        <div className="invalid-feedback">
          revisar no puede estar vacio y minimo 4 letras!
        </div>
      </div>
      <div className="form-group col-md-3">
        <label htmlFor="inputApellido">Apellido</label>
        <input
          type="text"
          className="form-control"
          id="inputApellido"
          placeholder="Apellido"
          required
        />
        <div className="invalid-feedback">
          revisar no puede estar vacio y minimo 4 letras!
        </div>
      </div>
      <div className="form-group col-md-3">
        <label htmlFor="inputDni">DNI</label>
        <input
          type="number"
          className="form-control"
          id="inputDni"
          min={4000000}
          max={100000000}
          placeholder="D.N.I."
          required
        />
        <div className="invalid-feedback">revisar!</div>
      </div>
      <div className="form-group col-md-3">
        <label htmlFor="inputCumpleanios">Fecha de Cumpleaños</label>
        <input
          type="date"
          className="form-control"
          id="inputCumpleanios"
          min="{$fechaMinima}"
          max="{$hoy}"
          required
        />
        <div className="invalid-feedback">revisar!</div>
      </div>
      <div className="form-group col-md-3">
        <label htmlFor="inputEmail">Email</label>
        <input
          type="email"
          className="form-control"
          id="inputEmail"
          placeholder="Email"
          data-error="Bruh, Ingrese email valido"
          required
        />
        <div className="invalid-feedback">revisar!</div>
      </div>
      <div className="form-group col-md-3">
        <label htmlFor="inputUsuario">Usuario</label>
        <input
          type="text"
          className="form-control"
          id="inputUsuario"
          placeholder="Usuario"
          required
        />
        <div className="invalid-feedback">revisar!</div>
      </div>
      <div className="form-group col-md-3">
        <label htmlFor="inputPassword">Password</label>
        <input
          type="password"
          className="form-control"
          id="inputPassword"
          placeholder="Password"
          required
        />
        <div className="invalid-feedback">revisar!</div>
      </div>
      <div className="form-group col-md-3">
        <label htmlFor="inputPerfil">Perfil</label>
        <select id="inputPerfil" className="form-control" required>
          <option value>seleccione uno</option>
          <option value="Empleado">Empleado</option>
          <option value="Jefe">Jefe</option>
          <option value="WebMaster">WebMaster</option>
        </select>
        <div className="invalid-feedback">revisar!</div>
      </div>
      <div className="form-group col-md-3">
        <label htmlFor="inputTurno">Turno</label>
        <input type="text" className="form-control" id="inputTurno" required />
        <div className="invalid-feedback">revisar!</div>
      </div>
      <div className="form-group col-md-3">
        <label htmlFor="inputTel">TEL</label>
        <input type="text" className="form-control" id="inputTel" required />
        <div className="invalid-feedback">revisar!</div>
      </div>
      <div className="form-group col-md-3">
        <label htmlFor="inputCel">Celular</label>
        <input type="text" className="form-control" id="inputCel" />
      </div>
      <div className="form-group col-md-3">
        <label htmlFor="inputAddress">Direccion</label>
        <input
          type="text"
          className="form-control"
          id="inputAddress"
          placeholder="Direccion 1"
          required
        />
        <div className="invalid-feedback">revisar!</div>
      </div>
      <div className="form-group col-md-3">
        <label htmlFor="inputAddress2">Direccion 2</label>
        <input
          type="text"
          className="form-control"
          id="inputAddress2"
          placeholder="Direccion 2"
        />
      </div>
      <div className="form-group col-md-3">
        <label htmlFor="inputCity">Ciudad</label>
        <input type="text" className="form-control" id="inputCity" required />
      </div>
      <div className="form-group col-md-3">
        <label htmlFor="inputState">Provincia</label>
        <select id="inputState" className="form-control">
          <option selected>Choose...</option>
          <option value="BuenosAires">Buenos Aires</option>
          <option value="Catamarca">Catamarca</option>
          <option value="Chaco">Chaco</option>
        </select>
        <div className="invalid-feedback">revisar!</div>
      </div>
      <div className="form-group col-md-3">
        <label htmlFor="inputZip">Zip</label>
        <input type="text" className="form-control" id="inputZip" required />
        <div className="invalid-feedback">revisar!</div>
      </div>
      <button
        id="btnAgregar"
        className="btn btn-primary btn-submit"
        onclick="Test.validarTodoFormAltaUsiario();"
      >
        Agregar
      </button>
      <button type="reset">Limpiar</button>
    </div>
  </div>
</div>;
