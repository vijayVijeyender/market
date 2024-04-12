import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export function CreateProduct()
{
    const navigate= useNavigate();
    const [product, setProduct]=useState(
        {
            productName:'',
            productNameTn:'',
            productDescription:'',
            productDescriptionTn:'',
            cName:'',
            bName:'',
        }
    )
    const [responseStatus,setResponseStatus]= useState('')
    async function handleCreate(){
        await axios.post("http://localhost:8080/product/createProduct", product).then(
            res => {
                setResponseStatus("success");
            }
        )
            .catch(err => {
                setResponseStatus("failed");
            });
          navigate("/Product");
    }
    function handleProductInput(inputType, e)
    {
switch(inputType)
{
case "productName":
    setProduct({...product,productName:e.target.value})
    break;
    case "productNameTn":
    setProduct({...product,productNameTn:e.target.value})
    break;
    case "productDes":
    setProduct({...product,productDescription:e.target.value})
    break;
    case "productDesTn":
    setProduct({...product,productDescriptionTn:e.target.value})
    break;
    case "cName":
    setProduct({...product,cName:e.target.value})
    break;
    case "bName":
    setProduct({...product,bName:e.target.value})
    break;
}

    }
    return(
        <>
     <div className="row">
            <div className="col">
                <h1 className="text-secondary-emphasis" style={{ textAlign:"center", }}>Create a New Product</h1>
            </div>
        </div>
        <div className="row gy-3 text-center d-flex flex-row justify-content-center">
            <div className="col-auto"><label className="form-label float-start form-label form-label" for="productname">Enter Product Name</label><input type="text" onChange={(e)=>handleProductInput("productName",e)} className="form-control" name="productname" placeholder="Enter Product name" /></div>
            <div className="col-auto"><label className="form-label float-start form-label form-label">Enter Product Tamil Name</label><input type="text" onChange={(e)=>handleProductInput("productNameTn",e)} className="form-control" placeholder="Enter Product name in tamil" /></div>
            <div className="col-auto"><label className="form-label float-start form-label form-label">Enter Product Description</label><input type="text" onChange={(e)=>handleProductInput("productDes",e)} className="form-control" placeholder="Enter Product description " /></div>
            <div className="col-auto"><label className="form-label float-start form-label form-label">Enter Product Description in Tamil</label><input type="text" onChange={(e)=>handleProductInput("productDesTn",e)} className="form-control" placeholder="Enter Product Description in tamil" /></div>
            <div className="col-auto"><label className="form-label float-start form-label form-label">Enter Category Name</label><input type="text" onChange={(e)=>handleProductInput("cName",e)} className="form-control" placeholder="Enter Category Name" /></div>
            <div className="col-auto"><label className="form-label float-start form-label form-label">Enter Brand Name</label><input type="text" onChange={(e)=>handleProductInput("bName",e)} className="form-control" placeholder="Enter Brand Name" /></div>
        </div>
        <div className="row d-flex justify-content-center" style={{ marginTop:"28px", }}>
            <div className="col-3" style={{ textAlign:"center", }}><button onClick={()=>handleCreate()} className="btn btn-success" type="button" style={{ textAlign:"center", }}>Create</button></div>
            <div className="col-3" style={{ textAlign:"center", }}><button className="btn btn-danger" type="button" style={{ textAlign:"center", }}>cancel</button></div>
        </div>
    

        </>
    )
}