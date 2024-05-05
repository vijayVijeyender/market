export function ThanksModel(props) {
  return (
    <div
      className="modal fade show"
      id="modal-1"
      role="dialog"
      tabindex={-1}
      style={{ display: "block" }}
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">Order placed</h4>
            <button
              className="btn-close"
              type="button"
              aria-label="Close"
              data-bs-dismiss="modal"
              onClick={()=> props.setShowThanksModel(false)}
            />
          </div>
          <div className="modal-body">
            <p>
              Thank you for placing order.
              <br />
              Your order will be delivered by tomorrow
              <br />
              between<b> 6.00 Am - 9:00 Am.</b>
              <br />
              <br />
              Have a Nice Day.
              <br />
              <br />
            </p>
          </div>
          <div className="modal-footer">
            <button
              className="btn btn-light"
              type="button"
              data-bs-dismiss="modal"
              onClick={()=> props.setShowThanksModel(false) }
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
