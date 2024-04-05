

export function Cart(){

    return(
        <>
         <div className="container d-flex flex-row flex-grow-1 flex-shrink-1 justify-content-evenly"><input className="bg-secondary-subtle border rounded-pill border-primary-subtle shadow-lg d-flex flex-row flex-grow-1" type="search" placeholder="Search for Products, Brands and More" autoFocus="" autoComplete="on" style={{ paddingLeft:"20px", margin:"0px", marginRight:"10px", marginLeft:"0px", paddingTop:"0px", paddingRight:"0px", }} /><button className="btn btn-primary" type="submit">Search</button></div>
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
                           
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                              
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