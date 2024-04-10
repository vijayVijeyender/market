

export function Cart(props){

    
    return(
        <>
         <div className="container d-flex flex-row flex-grow-1 flex-shrink-1 justify-content-evenly"></div>
        <div className="offcanvas offcanvas-end" tabIndex={-1} id="navbar" aria-labelledby="navbarLabel">
            <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="navbarLabel">Cart</h5><button className="btn-close" type="button" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
                <div className="table-responsive" style={{ height:"100vh", }}>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Item name</th>
                                <th>Quantity</th>
                                <th>price</th>
                            </tr>
                        </thead>
                        <tbody>
                       { props.cartItems.map((items)=>(
                        <tr key={items.name}>
                                <td>{items.productName}</td>
                                <td>{items.productQty}</td>
                                <td>{items.productPrice}</td>
                            </tr>
                       ))}     
                            
                              
                            <tr>
                                <td>Total:</td>
                                <td></td>
                                <td></td>
                            </tr>
                        
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        </>
    )
}