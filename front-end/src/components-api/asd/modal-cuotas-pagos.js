<div className="modal-dialog modal-lg">
  <div className="modal-content">
    <div className="modal-header">
      <h4 className="modal-title">
        Cuotas y Pagos de: ".$apellido.", ".$nombre."
      </h4>
      <button type="button" className="close" data-dismiss="modal">
        ×
      </button>
    </div>
    <div className="modal-body">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            ";
            $modal.=Cuotas::generarDivCuotasDeUnAlumno($cuotasPagos-&gt;cuotas).
            "
          </div>
          <div className="col-md-6">
            "; $modal.=Pagos::generarDivPagosDeUnAlumno($cuotasPagos-&gt;pagos).
            "
          </div>
        </div>
      </div>
    </div>
    <div className="modal-footer">
      <button type="button" className="btn btn-default" data-dismiss="modal">
        Cerrar
      </button>
    </div>
  </div>
</div>;
