<div>
  <div classname="row">
    <div classname="btn-group-vertical">
      <input
        classname="form-control mr-sm-2"
        id="txtSearch"
        placeholder="DNI, Apellido, Carrera"
        aria-label="Search"
      />
      <button
        classname="btn btn-outline-success my-2 my-sm-0"
        onclick="Test.buscarPorDniApellidoNombreAlumno()"
      >
        Buscar Alumno
      </button>
      <button
        type="button"
        classname="btn btn-secondary"
        onclick="Test.formAltaAlumno()"
      >
        Agregar Alumno
      </button>
      <button
        type="button"
        onclick="Test.grillaAlumnos()"
        classname="btn btn-secondary"
      >
        Lista Alumno
      </button>
      <button
        type="button"
        onclick="Test.grillaCarreras()"
        classname="btn btn-secondary"
      >
        Listar cursos
      </button>
      <button
        type="button"
        onclick="Test.formAltaCarrera()"
        classname="btn btn-secondary"
      >
        Cargar cursos
      </button>
    </div>
  </div>
  ;
</div>;
