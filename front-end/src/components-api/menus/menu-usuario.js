<div className="float-sm-left">
  <div className="row">
    <div className="btn-group-vertical">
      <input
        className="form-control mr-sm-2 "
        id="txtSearch"
        placeholder="DNI, Apellido, Nombre"
        aria-label="Search"
      />
      <button
        className="btn btn-outline-success my-2 my-sm-0 "
        onclick="Test.buscarPorDniApellidoCarrera()"
      >
        Buscar
      </button>
      <button
        type="button"
        className="btn btn-secondary"
        onclick="Test.formAltaUsuario()"
      >
        Agregar Usuario
      </button>
      <button
        type="button"
        onclick="Test.grillaUsuarios()"
        className="btn btn-secondary"
      >
        Lista Usuarios
      </button>
    </div>
  </div>
</div>;
