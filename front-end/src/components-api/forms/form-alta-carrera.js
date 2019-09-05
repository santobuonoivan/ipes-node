<div className="container opacidad">
  <input
    type="text"
    id="idCarrera"
    name="idCarrera"
    style={{ visibility: "hidden" }}
  />
  <input
    type="text"
    id="idModalidades"
    name="idModalidades"
    style={{ visibility: "hidden" }}
  />
  <input
    type="text"
    id="idTurnos"
    name="idTurnos"
    style={{ visibility: "hidden" }}
  />
  <div className="container">
    <div className="row">
      <div className="form-group col-md-3">
        <label htmlFor="inputNombre">Nombre</label>
        <input
          type="text"
          className="form-control"
          id="inputNombre"
          placeholder="Nombre"
        />
      </div>
      <div className="form-group col-md-3">
        <label htmlFor="divModalidades">Modalidades</label>
        <div id="divModalidades">
          <div className="form-check form-check-inline">
            <label className="form-check-label">
              <input
                className="form-check-input"
                type="checkbox"
                id="inlineCheckbox0"
                defaultValue={1}
              />
              P
            </label>
          </div>
          <div className="form-check form-check-inline">
            <label className="form-check-label">
              <input
                className="form-check-input"
                type="checkbox"
                id="inlineCheckbox1"
                defaultValue={1}
              />
              SP
            </label>
          </div>
          <div className="form-check form-check-inline">
            <label className="form-check-label">
              <input
                className="form-check-input"
                type="checkbox"
                id="inlineCheckbox2"
                defaultValue={1}
              />
              V
            </label>
          </div>
        </div>
      </div>
      <div className="form-group col-md-3">
        <label htmlFor="divTurnos">Modalidades</label>
        <div id="divTurnos">
          <div className="form-check form-check-inline">
            <label className="form-check-label">
              <input
                className="form-check-input"
                type="checkbox"
                id="inlineCheckboxTurnos0"
                defaultValue={1}
              />
              M
            </label>
          </div>
          <div className="form-check form-check-inline">
            <label className="form-check-label">
              <input
                className="form-check-input"
                type="checkbox"
                id="inlineCheckboxTurnos1"
                defaultValue={1}
              />
              T
            </label>
          </div>
          <div className="form-check form-check-inline ">
            <label className="form-check-label">
              <input
                className="form-check-input"
                type="checkbox"
                id="inlineCheckboxTurnos2"
                defaultValue={1}
              />
              N
            </label>
          </div>
        </div>
      </div>
      <div className="form-group col-md-3">
        <label htmlFor="inputDuración">duración</label>
        <input
          type="text"
          className="form-control"
          id="inputDuración"
          placeholder="Duración"
        />
      </div>
      <button
        id="btnAgregar"
        className="btn btn-primary"
        onclick="Test.agregarCarrera()"
      >
        Agregar
      </button>
    </div>
  </div>
</div>
