<div>
  <h1>Deuda</h1>
  <div className="table" id="table1">
    ";
    {"}"}
    $div.= "
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Estado</th>
          <th scope="col">Concepto</th>
          <th scope="col">Fecha</th>
          <th scope="col">Importe</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td scope="col" contentEditable="false">
            Vencida
          </td>
          <td scope="col" contentEditable="false">
            ".$arrayDeuda[$i]-&gt;concepto."
          </td>
          <td scope="col" contentEditable="false">
            ".$arrayDeuda[$i]-&gt;fecha."
          </td>
          <td scope="col" contentEditable="false">
            ".$arrayDeuda[$i]-&gt;importe."
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <div className="row">
    <div className="input-group mb-3 col-sm-4">
      <div className="input-group-prepend">
        <span className="input-group-text">Deuda</span>
      </div>
      <input type="text" className="form-control" defaultValue="{$deuda}" />
    </div>
    <div className="input-group mb-3 col-sm-4">
      <div className="input-group-prepend">
        <span className="input-group-text">Saldo a favor</span>
      </div>
      <input
        type="text"
        className="form-control"
        defaultValue="{$saldoAFavor}"
      />
    </div>
  </div>
</div>;
