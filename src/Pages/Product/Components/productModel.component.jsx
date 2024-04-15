import {  useState } from "react";
import axios from "axios";
export function ProductModel(props){
    const [responseStatus, setResponseStatus] = useState('')
function handleProductName(e,inputType){ 
    if(inputType === "productNameTn"){
    props.setProduct({...props.product,productNameTn:e.target.value})
}else{
    props.setProduct({...props.product,productName:e.target.value})
}
}
async function UpdateProductDetail(){
    await axios.put("http://localhost:8080/product",props.product).then(
        res=>{ 
             setResponseStatus("success");
             props.setShowModel(false)
       }
     )
     .catch(err=>{
       setResponseStatus("failed");    
     });
}
    return (     
          <div className="modal fade show" id="modal-1" role="dialog" tabindex="-1" style={{ display:"block", }}>
    <div className="modal-dialog" role="document">
        <div className="modal-content">
            <div className="modal-header">
                <h4 className="modal-title">Edit Product Details</h4>
                <button
                onClick={()=> props.setShowModel(false)}
                className="btn-close"
                type="button"
                aria-label="Close"
                data-bs-dismiss="modal" />
            </div>
            <div className="modal-body">
                <div className="row row-cols-1">
                    <div className="col">
                        <label className="form-label" style={{ marginRight:"80px", }}>Product Name</label>
                        <input type="text" onChange={(e)=>handleProductName(e,"productName")} value={props.product.productName}/></div>
                    <div className="col">
                        <label className="form-label" style={{ marginRight:"36px", }}>Product Name Tamil</label>
                    <input type="text" onChange={(e)=>handleProductName(e,"productNameTn")} value={props.product.productNameTn} style={{ marginLeft:"4px", }} /></div>
                    {responseStatus === "failed" && <div className="invalid-feedback">
            Sorry, Product update failed. Try again?
          </div>}
                </div>
            </div>
            <div className="modal-footer">
            <button className="btn btn-light" type="button" data-bs-dismiss="modal" onClick={()=> props.setShowModel(false)}>Close</button>
            <button className="btn btn-primary" onClick={()=>UpdateProductDetail()}type="button">Save</button></div>
          
        </div>
    </div>
</div>)
}