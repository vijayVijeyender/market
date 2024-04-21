import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export function CreateProduct(props) {
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    productName: "",
    productNameTn: "",
    productDescription: "",
    productDescriptionTn: "",
    cName: "",
    bName: "",
  });
  const [responseStatus, setResponseStatus] = useState("");
  async function handleCreate() {
    // await axios
    //   .post("http://localhost:8080/product/createProduct", product)
    //   .then((res) => {
    //     setResponseStatus("success");
    //     navigate("/Product");
    //   })
    //   .catch((err) => {
    //     setResponseStatus(err.response.data);
    //   });
    props.setProductList([...props.productList,product])
    props.setShowCreateProduct(false)
  }
  function handleProductInput(inputType, e) {
    switch (inputType) {
      case "productName":
        setProduct({ ...product, productName: e.target.value });
        break;
      case "productNameTn":
        setProduct({ ...product, productNameTn: e.target.value });
        break;
      case "productDes":
        setProduct({ ...product, productDescription: e.target.value });
        break;
      case "productDesTn":
        setProduct({ ...product, productDescriptionTn: e.target.value });
        break;
      case "cName":
        setResponseStatus("")
        setProduct({ ...product, cName: e.target.value });
        break;
      case "bName":
        setResponseStatus("")
        setProduct({ ...product, bName: e.target.value });
        break;
    }
  }

  function handleNames(inputType){
    if(responseStatus===  ""){
      return "";
    }else {
      switch(inputType){
        case "cName" :
          return responseStatus.includes("Category") ? "is-invalid" : "is-valid"
        case "bName" :
          return responseStatus.includes("Brand") ? "is-invalid" : "is-valid"
      }
        
      }
  }
  return (
    <>
      {/* <div className="row">
        <div className="col">
          <h1 className="text-secondary-emphasis" style={{ textAlign: "center", }}>Create a New Product</h1>
        </div>
      </div> */}
      <div className="row gy-3 text-center d-flex flex-row justify-content-center">
        <div className="col-auto">
          <label className="form-label float-start form-label form-label" for="productname">Enter Product Name</label>
          <input type="text" onChange={(e) => handleProductInput("productName", e)} className="form-control" name="productname" placeholder="Enter Product name" />
        </div>
        <div className="col-auto">
          <label className="form-label float-start form-label form-label">Enter Product Tamil Name</label>
          <input type="text" onChange={(e) => handleProductInput("productNameTn", e)} className="form-control" placeholder="Enter Product name in tamil" />
         </div>
        <div className="col-auto">
          <label className="form-label float-start form-label form-label">Enter Product Description</label>
          <input type="text" onChange={(e) => handleProductInput("productDes", e)} className="form-control" placeholder="Enter Product description " />
         </div>
        <div className="col-auto">
          <label className="form-label float-start form-label form-label">Enter Product Description in Tamil</label>
          <input type="text" onChange={(e) => handleProductInput("productDesTn", e)} className="form-control" placeholder="Enter Product Description in tamil" />
         </div>
        <div className="col-auto">
          <label className="form-label float-start form-label form-label">Enter Category Name</label>
          <input type="text" onChange={(e) => handleProductInput("cName", e)} className={`form-control ${handleNames("cName")}`} placeholder="Enter Category Name" />
           <div className="valid-feedback">Success! category found.</div>
           <div className="invalid-feedback">Sorry, category does not exist. Try another?</div>
        </div>
        <div className="col-auto">
          <label className="form-label float-start form-label form-label">Enter Brand Name</label>
          <input type="text" onChange={(e) => handleProductInput("bName", e)}  className={`form-control ${handleNames("bName")}`} placeholder="Enter Brand Name" />
          <div className="valid-feedback">Success! Brand found.</div>
          <div className="invalid-feedback">Sorry, Brand does not exist. Try another?</div>
         </div>
      <div className="row d-flex justify-content-center" style={{ marginTop: "28px", }}>
        <div className="col-3" style={{ textAlign: "center", }}><button onClick={() => handleCreate()} className="btn btn-success" type="button" style={{ textAlign: "center", }}>Create</button></div>
        <div className="col-3" style={{ textAlign: "center", }}><button className="btn btn-danger" type="button" style={{ textAlign: "center", }}>cancel</button></div>
      </div>
      </div>
    </>
  );
}

