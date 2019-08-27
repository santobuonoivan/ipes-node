<div>
  <link rel="stylesheet" href="libs/css/style.css" />
  <br />
  <div className="container-fluid opacidad">
    {/* contiene a todo y lo alinea */}
    <div className="p-3 mb-2 bg-secondary text-white rounded">
      <h2>Consulta ADM</h2>
    </div>
    <div className="row opacidad border-1">
      {/* mapea para usarlo como grid */}
      <div className="col-5">
        {/* div busqueda */}
        <div className="input-group">
          <div className="input-group-prepend ">
            <span className="input-group-text">Busque alumno</span>
          </div>
          <input
            className="form-control"
            list="inputDataList"
            id="inputAlumnoSelect"
            type="text"
            onchange="Test.cargarDivCuotasPagos()"
          />
          <datalist id="inputDataList"></datalist>
        </div>
      </div>
      <div className="col-6 ">
        {/* div pluss */}
        <span> pluss</span>
        <input type="checkbox" name="checkActivo" id="checkActivo" />
        <input
          type="button"
          defaultValue="Deuda Alumno"
          onclick="Test.GenerarDeudaAlumno()"
        />
        <input type="button" defaultValue="Algo2" />
        <div
          className="modal fade bd-example-modal-lg"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="myLargeModalLabel"
          aria-hidden="true"
          id="pop"
        >
          <div className="modal-content"></div>
        </div>
      </div>
      <div className="col-12">
        {/* div info */}
        <div className="row">
          <div className="input-group col-sm-2">
            <div className="input-group-prepend ">
              <span className="input-group-text">Legajo</span>
            </div>
            <input
              type="text"
              className="form-control"
              id="inputLegajo"
              placeholder="Legajo"
            />
          </div>
          <div className="input-group col-sm-3">
            <div className="input-group-prepend">
              <span className="input-group-text">Trabajo</span>
            </div>
            <input
              type="text"
              className="form-control"
              id="inputTrabajo"
              placeholder="Trabajo"
            />
          </div>
          <div className="input-group col-sm-4">
            <div className="input-group-prepend">
              <span className="input-group-text">Email</span>
            </div>
            <input
              type="text"
              className="form-control"
              id="inputEmail"
              placeholder="Email"
            />
          </div>
          <div className="input-group col-sm-3">
            <div className="input-group-prepend">
              <span className="input-group-text">Tel</span>
            </div>
            <input
              type="text"
              className="form-control"
              id="inputTelefono"
              placeholder="Tel"
            />
          </div>
          <div className="input-group col-sm-2">
            <div className="input-group-prepend">
              <span className="input-group-text">Dni</span>
            </div>
            <input
              type="text"
              className="form-control"
              id="inputDni"
              placeholder="D.N.I."
            />
          </div>
          <div className="input-group col-sm-3">
            <div className="input-group-prepend">
              <span className="input-group-text">Cel</span>
            </div>
            <input
              type="text"
              className="form-control"
              id="inputCel"
              placeholder="Cel"
            />
          </div>
          <div className="input-group col-sm-4">
            <div className="input-group-prepend">
              <span className="input-group-text">Direccion</span>
            </div>
            <input
              type="text"
              className="form-control"
              id="inputDir"
              placeholder="Direccion"
            />
          </div>
          <div className="input-group col-sm-3">
            <div className="input-group-prepend">
              <span className="input-group-text">Fech. Nac.</span>
            </div>
            <input type="date" className="form-control" id="inputFech" />
          </div>
        </div>
      </div>
      <div className="input-group col-sm-12" id="divDeudas"></div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6" id="divCuotas">
            DIV CUOTAS
          </div>
          <div className="col-md-6" id="divPagos">
            DIV PAGOS
          </div>
        </div>
      </div>
    </div>
    <div className="p-3 mb-2 bg-secondary text-white rounded col-12">
      <span> botones</span>
      <input type="checkbox" name="checkActivo" id="checkActivo" />
      <input type="button" defaultValue="Algo" />
      <input type="button" defaultValue="Algo2" />
    </div>
  </div>
</div>;
