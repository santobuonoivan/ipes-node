<div class="container-fluid opacidad ">
  <br />
  <div class="pt-1 pb-1 bg-secondary text-white rounded container fullWidth">
    <div class="input-group row">
      <div class="col-8">
        <span id="spanTitelCaja"></span>
      </div>
    </div>
  </div>
  <div class="">
    <div class="col-md-4">
      <label>Feha y Hora</label>
      <input
        type="datetime-local"
        class="form-control"
        id="inputFechaYHoraAperturaCaja"
        disabled
      />
    </div>
    <div class="col-md-4">
      <label>Importe</label>
      <input
        type="text"
        class=""
        id="inputImporteAperturCaja"
        placeholder=":importe"
      />
    </div>
    <div class="form col-md-8">
      <label>Detalle</label>
      <textarea
        type="textarea"
        class="form"
        rows="1"
        id="textAreaDetalle"
        placeholder=":detalle"
      ></textarea>
    </div>
    <div>
      <label>Usuario</label>
      <input type='text' class='' id='inputUsuario' placeholder=':usuario'
      disabled/>
    </div>
    <div class="col-md-4">
      <button
        type="botton"
        onclick="Test.AperturaCaja()"
        id="btnFormCaja"
        class="btn btn-secondary text-white rounded"
      >
        abrir
      </button>
    </div>
    <br />
  </div>
</div>