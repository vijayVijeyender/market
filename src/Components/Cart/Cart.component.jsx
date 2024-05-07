import { useEffect, useState } from "react";


export function Cart(props) {
  const [selectedItems, setSelectedItems] = useState([]);
  
  useEffect(() => {
    props.cartItems &&
      props.cartItems.map((items) =>
        setSelectedItems([...selectedItems, items])
      );
  }, [props.cartItems]);
  function handleRemoveCart(items) {
    const temp = selectedItems.filter((product) => product !== items);
    setSelectedItems(temp);
  }
  function handleTotal() {
    let total = 0;
    selectedItems.map((product) => {
      total = total + product.productQty * product.productPrice;
    });
    return total;
  }

  return (
    <>
      <div className="container d-flex flex-row flex-grow-1 flex-shrink-1 justify-content-evenly"></div>
      <div
        className={`offcanvas offcanvas-end ${props.showCart && "show"} `}
        tabIndex={-1}
        id="navbar"
        aria-labelledby="navbarLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="navbarLabel">
            Cart
          </h5>
          <button
            className="btn-close"
            type="button"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
            onClick={() => props.setShowCart(false)}
          ></button>
        </div>
        <div className="offcanvas-body">
          <div className="table-responsive" style={{ height: "100vh" }}>
            <table className="table">
              <thead>
                <tr>
                  <th>Pname</th>
                  <th>Count</th>
                  <th>Qty</th>
                  <th>price</th>
                 <th></th>
                </tr>
              </thead>
              <tbody>
                {selectedItems.map((items) => (
                  <tr key={items.name}>
                    <td>{items.productName}</td>
                    <td>{items.productQty}</td>
                    <td>{items.productCapacity}</td>
                    <td>{items.productQty * items.productPrice}</td>
                    <td>
                      
                        <svg onClick={() => handleRemoveCart(items)} class="bi bi-x" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"></path>
</svg>
                      
                    </td>
                  </tr>
                ))}

                <tr>
                  <td>Total</td>
                  <td></td>
                  <td></td>
                  <td>{handleTotal()}</td>
                </tr>
              </tbody>
            </table>
            <button className="btn btn-success" type="button" onClick={()=>{props.setShowCart(false);props.setShowContactModel(true)}}>Place Order</button>
          </div>
        </div>
      </div>
    </>
  );
}
