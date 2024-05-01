import { useEffect, useState } from "react"


export function Cart(props){
const[selectedItems, setSelectedItems]=useState([])
useEffect(() => {
    props.cartItems && props.cartItems.map((items)=>setSelectedItems([...selectedItems,items]))
    // setSelectedItems([...selectedItems,props.cartItems])
},[props.cartItems])
function handleRemoveCart(items)
{
    const temp = selectedItems.filter((product) => product !== items)
    setSelectedItems(temp);
}
function handleTotal()
{
    let total=0
    selectedItems.map((product)=>{
        total=total + (product.productQty*(product.productPrice));
    }
)
return total
}

    return(
        <>
         <div className="container d-flex flex-row flex-grow-1 flex-shrink-1 justify-content-evenly"></div>
         <div className={`offcanvas offcanvas-end ${props.showCart && "show"} `} tabIndex={-1} id="navbar" aria-labelledby="navbarLabel">
            <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="navbarLabel">Cart</h5><button className="btn-close" type="button" data-bs-dismiss="offcanvas" aria-label="Close" onClick={()=>props.setShowCart(false)}></button>
            </div>
            <div className="offcanvas-body">
                <div className="table-responsive" style={{ height:"100vh", }}>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Item name</th>
                                <th>NOB</th>
                                <th>Quantity</th>
                                <th>price</th>
                                <th>Remove</th>

                            </tr>
                        </thead>
                        <tbody>
                       { selectedItems.map((items)=>(
                        <tr key={items.name}>
                                <td>{items.productName}</td>
                                <td>{items.productQty}</td>
                                <td>{items.productKgs}</td>
                                <td>{items.productQty*(items.productPrice)}</td>
                                 <button onClick={()=>handleRemoveCart(items)} style={{marginRight:"1mm", marginTop:"1mm"}}>-</button>
                            </tr>
                       ))}     
                            
                              
                            <tr>
                                <td>Total:{handleTotal()}</td>
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