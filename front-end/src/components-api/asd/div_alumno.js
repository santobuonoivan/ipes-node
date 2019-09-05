import React from 'react';

const div_alumnos = (props) => {    
  return (
    <div className="container-fluid opacidad">
      <h2>Alumnos</h2>
      <ul className="nav nav-tabs" id="myTab" role="tablist">
  
  if(is_array($alumnos)){"{"}
  $totalDeRegistros=count($alumnos); $cantDeAgrupamiento=10;
  $cantidadDeTabs=intdiv($totalDeRegistros,$cantDeAgrupamiento);
  $resto=$totalDeRegistros%$cantDeAgrupamiento; if(count($alumnos)%10 &gt; 0)
  {"{"}
  $cantidadDeTabs++;
  {"}"}
  for ($i=0; $i &lt; $cantidadDeTabs; $i++) {"{"}
  if($i==0){"{"}
  $grilla2.= "
  <li className="nav-item">
    <a
      className="nav-link active"
      id='".($i+1)."-tab'
      data-toggle="tab"
      href='#".($i+1)."'
      role="tab"
      aria-controls="home"
      aria-selected="true"
    >
      ".($i+1)."
    </a>
  </li>
  ";
  {"}"}else{"{"}
  $grilla2.= '
  <li className="nav-item">
    <a
      className="nav-link"
      id="'.($i+1).'-tab"
      data-toggle="tab"
      href="#'.($i+1).'"
      role="tab"
      aria-controls="profile"
      aria-selected="false"
    >
      '.($i+1).'
    </a>
  </li>
  ';
  {"}"}
  {"}"}
  {"}"}
  $grilla2.='
</ul>
';
/************************************************************************************************/
// CARGO CONTENIDO DE HOJAS $grilla2.= '
<div className="tab-content" id="myTabContent">
  '; $encabezado= ''; if(is_array($alumnos)){"{"}
  for ($i=0; $i &lt; $cantidadDeTabs; $i++) {"{"}
  if($i==0){"{"}
  $grilla2.='
  <div
    id="'.($i+1).'"
    className="tab-pane fade show active"
    role="tabpanel"
    aria-labelledby="'.($i+1).'-tab"
  >
    ';
    {"}"}else{"{"}
    $grilla2.='
    <div
      id="'.($i+1).'"
      className="tab-pane fade"
      role="tabpanel"
      aria-labelledby="'.($i+1).'-tab"
    >
      ';
      {"}"}
      $grilla2.=$encabezado; // CARGAR TABLAS
      /***********************************************************************************
      */ /************************************solo el primera tanda
      ******************************** */
      /***********************************************************************************
      */ if($i==$cantidadDeTabs-1 &amp;&amp; $resto&gt;0){"{"}
      for ($j=10*$i; $j &lt;10*$i+$resto ; $j++){"{"}
      //$valor= $usuarios[$j]; //var_dump($usuarios[101]); $valorE =
      json_encode($alumnos[$j]); $valorM = json_encode($alumnos[$j]);
      $grilla2.= "
    </div>
  </div>
  "; /* $modales.= "
  <div
    id='myModal".$alumnos[$j]->id."'
    className="modal fade bd-example-modal-lg"
    tabIndex={-1}
    role="dialog"
    aria-labelledby='myModal".$alumnos[$j]->id."'
    aria-hidden="true"
  >
    ".
    Alumno::generarModalCuotasYPagos($alumnos[$j]-&gt;TraerCuotasPagos(),$alumnos[$j]-&gt;nombre,$alumnos[$j]-&gt;apellido).
    "
  </div>
  ";*/ continue;
  {"}"}
  {"}"}else{"{"}
  for ($j=10*$i; $j &lt;10*($i+1) ; $j++){"{"}
  $valorE = json_encode($alumnos[$j]); $valorM = json_encode($alumnos[$j]);
  $grilla2.= ""; /*$modales.= "
  <div
    id='myModal".$alumnos[$j]->id."'
    className="modal fade bd-example-modal-lg"
    tabIndex={-1}
    role="dialog"
    aria-labelledby="myLargeModalLabel"
    aria-hidden="true"
  >
    ".
    Alumno::generarModalCuotasYPagos($alumnos[$j]-&gt;TraerCuotasPagos(),$alumnos[$j]-&gt;nombre,$alumnos[$j]-&gt;apellido).
    "
  </div>
  ";*/
  {"}"}
  {"}"}
  $grilla2.= ""; $grilla2.= "
  <table className="table table-responsive table-hover">
    <thead className="bg-info">
      <tr>
        <th scope="col">#</th>
        <th scope="col">ID</th>
        <th scope="col">DNI</th>
        <th scope="col">NOMBRE</th>
        <th scope="col">APELLIDO</th>
        <th scope="col">SEXO</th>
        <th scope="col">LEGAJO</th>
        <th scope="col">ID CARRERA</th>
        <th scope="col">FECHA DE INSCRIPCION</th>
        <th scope="col">MODALIDAD</th>
        <th scope="col">TURNO</th>
        <th scope="col">AÑO CARRERA</th>
        <th scope="col">ACTIVO</th>
        <th scope="col">FECHA DE NACIMIENTO</th>
        <th scope="col">DIRECCION</th>
        <th scope="col">TEL</th>
        <th scope="col">CELULAR</th>
        <th scope="col">EST CIVIL</th>
        <th scope="col">SECUNDARIO</th>
        <th scope="col">EMAIL</th>
        <th scope="col">FACEBOOK</th>
        <th scope="col">TRABAJO</th>
        <th scope="col">ID DOCUMENTACION</th>
        <th scope="col">ACCION</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">".($j+1)."</th>
        <td>
          {"{"}$alumnos[$j]-&gt;id{"}"}
        </td>
        <td>
          {"{"}$alumnos[$j]-&gt;dni{"}"}
        </td>
        <td>
          {"{"}$alumnos[$j]-&gt;nombre{"}"}
        </td>
        <td>
          {"{"}$alumnos[$j]-&gt;apellido{"}"}
        </td>
        <td>
          {"{"}$alumnos[$j]-&gt;sexo{"}"}
        </td>
        <td>
          {"{"}$alumnos[$j]-&gt;legajo{"}"}
        </td>
        <td>
          {"{"}$alumnos[$j]-&gt;idcarrera{"}"}
        </td>
        <td>
          {"{"}$alumnos[$j]-&gt;fechadeinscripcion{"}"}
        </td>
        <td>
          {"{"}$alumnos[$j]-&gt;modalidad{"}"}
        </td>
        <td>
          {"{"}$alumnos[$j]-&gt;turno{"}"}
        </td>
        <td>
          {"{"}$alumnos[$j]-&gt;anio_carrera{"}"}
        </td>
        <td>
          {"{"}$alumnos[$j]-&gt;activo{"}"}
        </td>
        <td>
          {"{"}$alumnos[$j]-&gt;fechadenacimiento{"}"}
        </td>
        <td>
          {"{"}$alumnos[$j]-&gt;direccion{"}"}
        </td>
        <td>
          {"{"}$alumnos[$j]-&gt;tel{"}"}
        </td>
        <td>
          {"{"}$alumnos[$j]-&gt;celular{"}"}
        </td>
        <td>
          {"{"}$alumnos[$j]-&gt;estadocivil{"}"}
        </td>
        <td>
          {"{"}$alumnos[$j]-&gt;secundario{"}"}
        </td>
        <td>
          {"{"}$alumnos[$j]-&gt;email{"}"}
        </td>
        <td>
          {"{"}$alumnos[$j]-&gt;facebook{"}"}
        </td>
        <td>
          {"{"}$alumnos[$j]-&gt;trabajo{"}"}
        </td>
        <td>
          {"{"}$alumnos[$j]-&gt;id_documentacion{"}"}
        </td>
        <td>
          <div className="btn-group" role="group" aria-label="Basic example">
            ". //
            <button
              type="button"
              className="btn btn-primary"
              data-toggle="modal"
              data-target='#myModal".$alumnos[$j]->id."'
            >
              Consulta rapida
            </button>
            "
            <button type="button" className="btn btn-alert">
              MODIFICAR
            </button>
            <button type="button" className="btn btn-warning">
              ELIMINAR
            </button>
          </div>
        </td>
      </tr>
      <tr>
        <th scope="row">".($j+1)."</th>
        <td>
          {"{"}$alumnos[$j]-&gt;id{"}"}
        </td>
        <td>
          {"{"}$alumnos[$j]-&gt;dni{"}"}
        </td>
        <td>
          {"{"}$alumnos[$j]-&gt;nombre{"}"}
        </td>
        <td>
          {"{"}$alumnos[$j]-&gt;apellido{"}"}
        </td>
        <td>
          {"{"}$alumnos[$j]-&gt;sexo{"}"}
        </td>
        <td>
          {"{"}$alumnos[$j]-&gt;legajo{"}"}
        </td>
        <td>
          {"{"}$alumnos[$j]-&gt;idcarrera{"}"}
        </td>
        <td>
          {"{"}$alumnos[$j]-&gt;fechadeinscripcion{"}"}
        </td>
        <td>
          {"{"}$alumnos[$j]-&gt;modalidad{"}"}
        </td>
        <td>
          {"{"}$alumnos[$j]-&gt;turno{"}"}
        </td>
        <td>
          {"{"}$alumnos[$j]-&gt;anio_carrera{"}"}
        </td>
        <td>
          {"{"}$alumnos[$j]-&gt;activo{"}"}
        </td>
        <td>
          {"{"}$alumnos[$j]-&gt;fechadenacimiento{"}"}
        </td>
        <td>
          {"{"}$alumnos[$j]-&gt;direccion{"}"}
        </td>
        <td>
          {"{"}$alumnos[$j]-&gt;tel{"}"}
        </td>
        <td>
          {"{"}$alumnos[$j]-&gt;celular{"}"}
        </td>
        <td>
          {"{"}$alumnos[$j]-&gt;estadocivil{"}"}
        </td>
        <td>
          {"{"}$alumnos[$j]-&gt;secundario{"}"}
        </td>
        <td>
          {"{"}$alumnos[$j]-&gt;email{"}"}
        </td>
        <td>
          {"{"}$alumnos[$j]-&gt;facebook{"}"}
        </td>
        <td>
          {"{"}$alumnos[$j]-&gt;trabajo{"}"}
        </td>
        <td>
          {"{"}$alumnos[$j]-&gt;id_documentacion{"}"}
        </td>
        <td>
          <div className="btn-group" role="group" aria-label="Basic example">
            ". //
            <button
              type="button"
              className="btn btn-primary"
              data-toggle="modal"
              data-target='#myModal".$alumnos[$j]->id."'
            >
              Consulta rapida
            </button>
            "
            <button type="button" className="btn btn-warning">
              MODIFICAR
            </button>
            <button type="button" className="btn btn-danger">
              ELIMINAR
            </button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
  ";//. //$modales; $grilla2.="
</div>
</div>

  )
};

export default welcome;
