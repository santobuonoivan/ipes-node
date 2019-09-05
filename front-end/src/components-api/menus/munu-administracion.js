<div className="row">
  <div className="btn-group-vertical">
    <input
      className="form-control mr-sm-2"
      id="txtSearch"
      placeholder="DNI, Apellido, Carrera"
      aria-label="Search"
    />
    <button className="btn btn-outline-success my-2 my-sm-0" onclick>
      Buscar Alumno
    </button>
    <button
      type="button"
      onclick="Test.formAdm()"
      className="btn btn-secondary"
    >
      Consultar
    </button>
    <button
      type="button"
      onclick="Test.GenerarDeudaTotalAlumnos()"
      className="btn btn-secondary"
    >
      Deuda
    </button>
    <button type="button" onclick className="btn btn-secondary" disabled>
      FLUJO
    </button>
    <button type="button" onclick className="btn btn-secondary" disabled>
      Registro
    </button>
  </div>
</div>;
