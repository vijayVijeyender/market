export function ContactModel() {
  return (
    <div
      className="modal fade show"
      id="modal-2"
      role="dialog"
      tabindex="-1"
      style={{
        display: "block",
      }}
    >
      <div className="modal-dialog modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">Modal Title</h4>
            <button
              className="btn-close"
              type="button"
              aria-label="Close"
              data-bs-dismiss="modal"
            />
          </div>
          <div className="modal-body">
            <form>
              <div className="row gx-2">
                <div className="col">
                  <label className="form-label">Name</label>
                  <input className="form-control" type="text" />
                </div>
                <div className="col">
                  <label className="form-label">Mobile Number</label>
                  <input className="form-control" type="text" />
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <label className="form-label">Full Address</label>
                  <textarea className="form-control" />
                </div>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button
              className="btn btn-light"
              type="button"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button className="btn btn-primary" type="button">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
