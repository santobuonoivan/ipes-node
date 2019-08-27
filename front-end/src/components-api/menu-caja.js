<div>
  <div className="row">
    <div className="btn-group-vertical">
      <input
        className="form-control mr-sm-2"
        id="txtImporte"
        placeholder="Importe"
        style={{ textAlign: "center" }}
        disabled
      />
      <button
        type="button"
        id="btnApertura"
        onclick="Test.GenerarFormAperturaCaja()"
        className="btn btn-secondary"
        style={{ width: "100%" }}
      >
        Abrir
      </button>
      <button
        type="button"
        id="btnEntrada"
        onclick="Test.GenerarFormEntradaDeCaja()"
        className="btn btn-secondary "
        style={{ width: "100%" }}
        disabled
      >
        Entrada
      </button>
      <button
        type="button"
        id="btnSalida"
        onclick="Test.GenerarFormSalidaDeCaja()"
        className="btn btn-secondary "
        style={{ width: "100%" }}
        disabled
      >
        Salida
      </button>
      <button
        type="button"
        id="btnCierre"
        onclick="Test.CierreCaja()"
        className="btn btn-secondary"
        style={{ width: "100%" }}
        disabled
      >
        Cerrar
      </button>
      <button
        type="button"
        id="btnActualizar"
        onclick="Test.GenerarActualizar()"
        className="btn btn-secondary"
        style={{ width: "100%" }}
        disabled
      >
        Actualizar
      </button>
      <button
        type="button"
        id="btnEstadistica"
        onclick="Test.Estadisticas()"
        className="btn btn-secondary"
        style={{ width: "100%" }}
      >
        Estadisticas
      </button>
    </div>
  </div>
  <div className="row">
    <div className="col-md-6">
      <div className="p-2 mb-1 bg-secondary text-white rounded">
        <h2>Movimientos</h2>
      </div>
      <div id="divFormularioCaja" />
    </div>
    <div className="col-md-6" id="divMovimientos">
      <div className="p-2 mb-1 bg-secondary text-white rounded">
        <h2>Movimientos</h2>
      </div>
    </div>
  </div>
</div>;
