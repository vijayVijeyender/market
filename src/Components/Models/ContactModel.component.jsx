import { useEffect, useState } from "react";


export function ContactModel(props) {
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    mobile: "",
    email: "",
    address: "",
  });
  const [validateCustomerInfo, setValidateCustomerInfo] = useState({});

  function handleCustomerInfo(field, e) {
    switch (field) {
      case "Name":
        setCustomerInfo({ ...customerInfo, name: e.target.value });
        break;
      case "Mobile":
        setCustomerInfo({ ...customerInfo, mobile: e.target.value });
        break;
      case "Address":
        setCustomerInfo({ ...customerInfo, address: e.target.value });
        break;
      case "Email":
        setCustomerInfo({ ...customerInfo, email: e.target.value });
        break;
    }
  }

  function validateCustomerInfoFun() {
    const namePattern = /^[A-Za-z ]+$/;
    const validateName = namePattern.test(customerInfo.name)
      ? "is-valid"
      : "is-invalid";

    const emailPattern = /\S+@\S+\.\S+/;
    const validateEmail = emailPattern.test(customerInfo.email)
      ? "is-valid"
      : "is-invalid";

    const mobilePattern = /^[6789]\d{9}$/;
    const validateMobile = mobilePattern.test(customerInfo.mobile)
      ? "is-valid"
      : "is-invalid";

    const addressPattern = /^[a-zA-Z0-9\s,'-]{10,}$/;
    const validateAddress = addressPattern.test(customerInfo.address)
      ? "is-valid"
      : "is-invalid";
    setValidateCustomerInfo({
      name: validateName,
      email: validateEmail,
      address: validateAddress,
      mobile: validateMobile,
    });
    if (
      validateCustomerInfo.name === "is-valid" &&
      validateCustomerInfo.email === "is-valid" &&
      validateCustomerInfo.mobile === "is-valid" &&
      validateCustomerInfo.address === "is-valid"
    ) {
      return true;
    } else {
      return false;
    }
  }

  useEffect(() => {}, [
    setValidateCustomerInfo,
    validateCustomerInfo,
    customerInfo,
    setCustomerInfo,
  ]);

  function handlePlaceOrder() {
    if (validateCustomerInfoFun()) {
      props.setShowContactModel(false);
      props.setShowThanksModel(true);
    }
  }

  return (
    <div
      className="modal fade show"
      id="modal-2"
      role="dialog"
      tabindex="-1"
      style={{ display: "block" }}
    >
      <div className="modal-dialog modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">
              Contact Information / Delivery Details
            </h4>
            <button
              className="btn-close"
              type="button"
              aria-label="Close"
              data-bs-dismiss="modal"
              onClick={() => props.setShowContactModel(false)}
            />
          </div>
          <div className="modal-body">
            <form>
              <div className="row ">
                <div className="col">
                  <label className="form-label " for="name">
                    Name
                  </label>
                  <input
                    type="text"
                    className={`form-control ${validateCustomerInfo.name}`}
                    id="name"
                    onChange={(e) => handleCustomerInfo("Name", e)}
                  />
                  <div className="invalid-feedback">
                    Sorry, atleast 4 char Long (example: vijay) No special char
                    expect space
                  </div>
                  <div className="valid-feedback">Success! You've done it.</div>
                </div>

                <div className="col">
                  <label className="form-label">Mobile Number</label>
                  <input
                    className={`form-control ${validateCustomerInfo.mobile}`}
                    type="text"
                    onChange={(e) => handleCustomerInfo("Mobile", e)}
                  />
                  <div className="invalid-feedback">
                    Sorry, Invalid Mobile Number
                  </div>
                  <div className="valid-feedback">Success! You've done it.</div>
                </div>
              </div>

              <div>
                <label for="exampleInputEmail1" className="form-label mt-4">
                  Email address
                </label>
                <input
                  type="email"
                  className={`form-control ${validateCustomerInfo.email}`}
                  onChange={(e) => handleCustomerInfo("Email", e)}
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />

                <div className="invalid-feedback">
                  Sorry, Invalid Email Address
                </div>
                <div className="valid-feedback">Success! You've done it.</div>
              </div>

              <div className="row">
                <div className="col">
                  <label className="form-label">Full Address</label>
                  <textarea
                    className={`form-control ${validateCustomerInfo.address}`}
                    onChange={(e) => handleCustomerInfo("Address", e)}
                  />
                  <div className="invalid-feedback">
                    Sorry, min 10 char required
                  </div>
                  <div className="valid-feedback">Success! You've done it.</div>
                </div>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button
              className="btn btn-light"
              type="button"
              data-bs-dismiss="modal"
              onClick={() => props.setShowContactModel(false)}
            >
              Close
            </button>
            <button
              className="btn btn-success"
              type="button"
              onClick={() => handlePlaceOrder()}
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
