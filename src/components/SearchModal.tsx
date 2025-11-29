
const SearchModal = () => {
  return (
    <div
      className="modal fade"
      id="searchModal"
      tabIndex={-1}
      role="dialog"
      aria-labelledby="searchModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="searchModalLabel">
              Pesquisar no site
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body" style={{ zIndex: 999 }}>
            <form action="/pesquisa" method="get">
              <input
                type="text"
                className="form-control"
                name="q"
                aria-describedby="searchHelp"
                placeholder="Gerador..."
                required={true}
              />
              <hr />
              <button
                style={{ width: "100%" }}
                type="submit"
                className="btn btn-primary"
              >
                Pesquisar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
