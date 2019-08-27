<div className="container opacidad">
  <input
    type="text"
    id="idAlumno"
    name="idAlumno"
    style={{ visibility: "hidden" }}
  />
  <input
    type="text"
    id="idHiddenCarrera"
    name="idHiddenCarrera"
    style={{ visibility: "hidden" }}
  />
  <div className="container bootstrap-form">
    <h2> FICHA DE INSCRIPCIÓN </h2>
    <hr />
    <div className="container">
      <div className="row">
        <div className="form-group col-md-1">
          <label htmlFor="inputLegajo">Legajo</label>
          <input
            type="text"
            className="form-control"
            id="inputLegajo"
            placeholder="Legajo"
          />
          <div className="invalid-feedback">revisar!</div>
        </div>
        <div className="form-group col-md-3">
          <label htmlFor="inputCursoCarrera">Curso/Carrera</label>
          <select
            className="custom-select"
            id="inputCursoCarrera"
            onchange="Test.cargarModalidades();"
          >
            <option value>Seleccione...</option>
          </select>
          <div className="invalid-feedback">revisar!</div>
        </div>
        <div className="form-group col-md-1">
          <div className="checkbox">
            <label>
              <input
                id="checkActivo"
                type="checkbox"
                defaultValue={1}
                defaultChecked
              />
              Activo
            </label>
          </div>
          <div className="invalid-feedback">revisar!</div>
        </div>
        <div className="form-group col-md-3">
          <label htmlFor="inputInscripcion">Fecha de Inscripción</label>
          <input
            type="date"
            className="form-control"
            id="inputInscripcion"
            placeholder="Fecha de Inscripción"
          />
          <div className="invalid-feedback">revisar!</div>
        </div>
        <div className="form-group col-md-1">
          <label htmlFor="inputModalidad">Modalidad</label>
          <select className="custom-select" id="inputModalidad"></select>
          <div className="invalid-feedback">revisar!</div>
        </div>
        <div className="form-group col-md-1">
          <label htmlFor="inputTurno">Turno</label>
          <select className="custom-select" id="inputTurno"></select>
          <div className="invalid-feedback">revisar!</div>
        </div>
        <div className="form-group col-md-1">
          <label htmlFor="inputAnio">Año</label>
          <input
            type="text"
            className="form-control"
            id="inputAnio"
            placeholder="Año"
          />
          <div className="invalid-feedback">revisar!</div>
        </div>
        <div className="form-group col-md-2">
          <label htmlFor="inputDni">DNI</label>
          <input
            type="text"
            className="form-control"
            id="inputDni"
            placeholder="D.N.I."
          />
          <div className="invalid-feedback">revisar!</div>
        </div>
        <div className="form-group col-md-3">
          <label htmlFor="inputApellido">Apellido</label>
          <input
            type="text"
            className="form-control"
            id="inputApellido"
            placeholder="Apellido"
          />
          <div className="invalid-feedback">revisar!</div>
        </div>
        <div className="form-group col-md-3">
          <label htmlFor="inputNombre">Nombre</label>
          <input
            type="text"
            className="form-control"
            id="inputNombre"
            placeholder="Nombre"
          />
          <div className="invalid-feedback">revisar!</div>
        </div>
        <div className="form-group col-md-1">
          <label htmlFor="inputSexo">Sexo</label>
          <select className="custom-select" id="inputSexo">
            <option value checked>
              ...
            </option>
            <option value={1}>M/a</option>
            <option value={2}>F/a</option>
          </select>
          <div className="invalid-feedback">revisar!</div>
        </div>
        <div className="form-group col-md-3">
          <label htmlFor="inputCumpleanios">Fecha de Cumpleaños</label>
          <input
            type="date"
            className="form-control"
            id="inputCumpleanios"
            placeholder="Fecha de Cumpleaños"
          />
          <div className="invalid-feedback">revisar!</div>
        </div>
        <div className="form-group col-md-3">
          <label htmlFor="inputAddress">Direccion</label>
          <input
            type="text"
            className="form-control"
            id="inputAddress"
            placeholder="Direccion"
          />
          <div className="invalid-feedback">revisar!</div>
        </div>
        <div className="form-group col-md-2">
          <label htmlFor="inputTel">TEL</label>
          <input type="text" className="form-control" id="inputTel" />
          <div className="invalid-feedback">revisar!</div>
        </div>
        <div className="form-group col-md-2">
          <label htmlFor="inputCel">Celular</label>
          <input type="text" className="form-control" id="inputCel" />
          <div className="invalid-feedback">revisar!</div>
        </div>
        <div className="form-group col-md-2">
          <label htmlFor="inputEstadoCivil">Estado Civil</label>
          <select className="custom-select" id="inputEstadoCivil">
            <option value checked>
              Seleccione...
            </option>
            <option value={1}>Soltero/a</option>
            <option value={2}>Casado/a</option>
            <option value={3}>Divorciado/a</option>
            <option value={4}>Viudo/a</option>
          </select>
          <div className="invalid-feedback">revisar!</div>
        </div>
        <div className="form-group col-md-3">
          <label htmlFor="inputSecundario">Secundario</label>
          <input type="text" className="form-control" id="inputSecundario" />
          <div className="invalid-feedback">revisar!</div>
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="inputEmail">Email</label>
          <input
            type="email"
            className="form-control"
            id="inputEmail"
            placeholder="Email"
          />
          <div className="invalid-feedback">revisar!</div>
        </div>
        <div className="form-group col-md-3">
          <label htmlFor="inputFacebook">Facebook</label>
          <input
            type="text"
            className="form-control"
            id="inputFacebook"
            placeholder="Facebook"
          />
          <div className="invalid-feedback">revisar!</div>
        </div>
        <div className="form-group col-md-3">
          <label htmlFor="checkTrabajo">¿Trabaja?</label>
          <input
            type="text"
            className="form-control"
            id="checkTrabajo"
            placeholder="trabajo"
          />
          <div className="invalid-feedback">revisar!</div>
        </div>
        <div className="form-group col-md-3">
          <label htmlFor="inputConocer">¿Cómo nos conoció?</label>
          <select id="inputConocer" className="form-control">
            <option value selected>
              Choose...
            </option>
            <option value={1}>Internet</option>
            <option value={2}>Recomendado</option>
            <option value={3}>Pasacalle</option>
            <option value={4}>Otro</option>
          </select>
          <div className="invalid-feedback">revisar!</div>
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="inputPromo">Promo Actual</label>
          <textarea
            id="inputPromo"
            className="form-control"
            defaultValue={""}
          />
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="form-group col-md-4">
          <label htmlFor="divDoc">Documentación Entregada</label>
          <div className="checkbox" id="divDoc">
            <label>
              <input id="checkTitulo" type="checkbox" defaultValue={1} />
              Titulo Secundario
            </label>
          </div>
          <div className="checkbox">
            <label>
              <input id="checkDNI" type="checkbox" defaultValue={1} />
              Fotocopia DNI
            </label>
          </div>
          <div className="checkbox">
            <label>
              <input id="checkFoto" type="checkbox" defaultValue={1} />2 Foto
            </label>
          </div>
          <div className="form-group row">
            <label htmlFor="inputPago" className="col-sm-2 col-form-label">
              Pago
            </label>
            <div>
              <input type="text" className="form-control" id="inputPago" />
            </div>
          </div>
          <label htmlFor="checkMatricula">Comprende</label>
          <div className="checkbox">
            <label>
              <input id="checkMatricula" type="checkbox" defaultValue={1} />
              Matricula
            </label>
          </div>
          <div className="checkbox">
            <label>
              <input id="checkCuotas" type="checkbox" defaultValue={1} />
              Cuotas( )
            </label>
          </div>
          <div className="checkbox">
            <label>
              <input id="checkCertificacion" type="checkbox" defaultValue={1} />
              Certificacion
            </label>
          </div>
        </div>
        <div className="form-group col-md-6">
          <form>
            <div className="form-group row">
              <label htmlFor="inputMat" className="col-sm-3 col-form-label">
                Matricula
              </label>
              <div className="col-sm-3">
                <input
                  type="text"
                  className="form-control"
                  id="inputMat"
                  placeholder="Matricula"
                  onchange="Test.cargarTotal();"
                />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="inputCuota" className="col-sm-3 col-form-label">
                Cuota
              </label>
              <div className="col-sm-3">
                <input
                  type="text"
                  className="form-control"
                  id="inputCuota"
                  placeholder="precio"
                  onchange="Test.cargarTotal();"
                />
              </div>
            </div>
            <div className="form-group row">
              <label
                htmlFor="inputCantCuota"
                className="col-sm-3 col-form-label"
              >
                Cant. Cuotas
              </label>
              <div className="col-sm-3">
                <input
                  type="text"
                  className="form-control"
                  id="inputCantCuota"
                  placeholder="cantidad"
                  onchange="Test.cargarTotal();"
                />
              </div>
            </div>
            <div className="form-group row">
              <label
                htmlFor="inputDescuento"
                className="col-sm-3 col-form-label"
              >
                Descuento
              </label>
              <div className="col-sm-3">
                <input
                  type="text"
                  className="form-control"
                  id="inputDescuento"
                  placeholder="valor"
                  onchange="Test.cargarTotal();"
                />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="inputTotal" className="col-sm-3 col-form-label">
                Total
              </label>
              <div className="col-sm-3">
                <input
                  type="text"
                  className="form-control"
                  id="inputTotal"
                  placeholder="valor"
                  disabled
                  onchange="Test.cargarTotal();"
                />
              </div>
            </div>
          </form>
        </div>
        <div className="form-group col-md-12">
          <label htmlFor="inputObservaciones">Observaciones</label>
          <textarea
            id="inputObservaciones"
            className="form-control"
            defaultValue={""}
          />
        </div>
      </div>
      <hr />
      <button
        id="btnAgregar"
        className="btn btn-primary"
        onclick="Test.validarTodoFormAltaAlumno()"
      >
        Agregar
      </button>
    </div>
  </div>
</div>;
