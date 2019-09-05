<div className="container opacidad">
  <div className="p-3 mb-2 bg-secondary text-white rounded container ">
    <div className="input-group row">
      <div className="col-8">
        <span> Consulta Deuda Total </span>
      </div>
      <div className="col-8">
        <button
          type="button"
          className="btn btn-default btn-sm"
          onclick='Test.Imprimir(\"divResultado\")'
        >
          <span className="glyphicon glyphicon-print" />
        </button>
      </div>
    </div>
  </div>
  "; $deudaTotal=0; foreach ($Alumnos as $alumno){"{"}//recorre alumnos
  $todasLasCuotasPagosAlumno=$alumno-&gt;TraerCuotasPagos(); $saldoAFavor=0;
  $deuda=0; $arrayDeuda = array(); for ($i = 0; $i &lt;
  count($todasLasCuotasPagosAlumno-&gt;cuotas); $i++) {"{"}// recoore cuotas
  alum $cuota = $todasLasCuotasPagosAlumno-&gt;cuotas[$i]; if($cuota-&gt;fecha
  &lt; $fechaHoy){"{"}//chequea vencimiento $importe = $cuota-&gt;importe; for
  ($j = 0; $j &lt; count($todasLasCuotasPagosAlumno-&gt;pagos); $j++) {"{"}{" "}
  //recorre pagos $pago = $todasLasCuotasPagosAlumno-&gt;pagos[$j]; if
  ($cuota-&gt;concepto == $pago-&gt;concepto){"{"}//resta imporets
  $importe=$importe-$pago-&gt;importe;
  {"}"}
  {"}"}
  if($importe&gt;0){"{"}//acumula si hay deuda $cuota-&gt;importe=$importe;
  array_push($arrayDeuda,$cuota); $deuda=$deuda+$importe;
  {"}"}else{"{"}
  $saldoAFavor=$saldoAFavor+$importe;
  {"}"}
  {"}"}
  {"}"}
  if(empty($arrayDeuda)){"{"}
  {"}"}else{"{"}
  $div.="{" "}
  <div className="p-1 mb-2 bg-secondary text-white rounded container">
    Deuda {"{"}$alumno-&gt;apellido{"}"},{"{"}$alumno-&gt;nombre{"}"}
    ,-----Email:{"{"}$alumno-&gt;email{"}"},-----tel:{"{"}$alumno-&gt;tel{"}"}/
    {"{"}$alumno-&gt;celular{"}"}
  </div>
  <div>
    "; "; $deudaTotal+=$arrayDeuda[$i]-&gt;importe;
    {"}"}
    if($saldoAFavor&gt;0){"{"}
    $div.= "";
    {"}"}else{"{"}
    $div.= "";
    {"}"}
    $div.= "
    <table className="table miTable">
      <thead>
        <tr>
          <th scope="col" className="misTds">
            Estado
          </th>
          <th scope="col" className="misTds">
            Concepto
          </th>
          <th scope="col" className="misTds">
            Fecha
          </th>
          <th scope="col" className="misTds">
            Importe
          </th>
        </tr>
      </thead>
      <tbody>
        {/*for($i=0;$i<count($arrayDeuda);$i++){                    
									$div.=  "*/}
        <tr>
          <td scope="col" className="misTds" contentEditable="false">
            Vencida
          </td>
          <td scope="col" className="misTds" contentEditable="false">
            ".$arrayDeuda[$i]-&gt;concepto."
          </td>
          <td scope="col" className="misTds" contentEditable="false">
            ".$arrayDeuda[$i]-&gt;fecha."
          </td>
          <td scope="col" className="misTds" contentEditable="false">
            ".$arrayDeuda[$i]-&gt;importe."
          </td>
        </tr>
        <tr>
          <th scope="col" className="misTds" contentEditable="false">
            Saldo a favor
          </th>
          <th scope="col" className="misTds" contentEditable="false">
            {"{"}$saldoAFavor{"}"}
          </th>
          <th scope="col" className="misTds" contentEditable="false">
            Deuda
          </th>
          <th scope="col" className="misTds" contentEditable="false">
            {"{"}$deuda{"}"}
          </th>
        </tr>
        <tr>
          <th />
          <th />
          <th scope="col" className="misTds" contentEditable="false">
            Deuda
          </th>
          <th scope="col" className="misTds" contentEditable="false">
            {"{"}$deuda{"}"}
          </th>
        </tr>
      </tbody>
    </table>
  </div>
  ";
  {"}"}
  unset($arrayDeuda);
  {"}"}
  $div.= "
  <div className="input-group mb-3 col-sm-12">
    <span className="input-group-text">
      Total Deuda {"{"}$deudaTotal{"}"}
    </span>
  </div>
</div>;
