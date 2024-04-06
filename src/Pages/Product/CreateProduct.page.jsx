export function CreateProduct()
{
    return(
        <>
     <div className="row">
            <div className="col">
                <h1 className="text-secondary-emphasis" style={{ textAlign:"center", }}>Create a New Product</h1>
            </div>
        </div>
        <div className="row gy-3 text-center d-flex flex-row justify-content-center">
            <div className="col-auto col-xl-6"><label className="form-label float-start form-label form-label" for="productname">Enter Product Name</label><input type="text" className="form-control" name="productname" placeholder="Enter Product name" /></div>
            <div className="col-auto"><label className="form-label float-start form-label form-label">Enter Product Tamil Name</label><input type="text" className="form-control" placeholder="Enter Product name in tamil" /></div>
            <div className="col-auto"><label className="form-label float-start form-label form-label">Enter Product Description</label><input type="text" className="form-control" placeholder="Enter Product description " /></div>
            <div className="col-auto"><label className="form-label float-start form-label form-label">Enter Product Description in Tamil</label><input type="text" className="form-control" placeholder="Enter Product Description in tamil" /></div>
        </div>
        <div className="row d-flex justify-content-center" style={{ marginTop:"28px", }}>
            <div className="col-3" style={{ textAlign:"center", }}><button className="btn btn-success" type="button" style={{ textAlign:"center", }}>Create</button></div>
            <div className="col-3" style={{ textAlign:"center", }}><button className="btn btn-danger" type="button" style={{ textAlign:"center", }}>cancel</button></div>
        </div>
        </>
    )
}