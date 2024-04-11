import React from 'react'

const CreateNewCategory = () => {






  return (
    <>
      <header style={{ marginBottom: "24px", }}>
        <div className="row">
          <div className="col">
            <h1 className="text-secondary-emphasis" style={{ textAlign: "center", }}>Create a New Category</h1>
          </div>
        </div>
      </header>
      <div className="row gy-3 text-center d-flex flex-row justify-content-center">
        <div className="col-auto col-xl-6"><label className="form-label float-start form-label form-label" for="categoryname">Enter Category Name</label><input type="text" className="form-control" name="categoryname" placeholder="Enter Category name" /></div>
        <div className="col-auto"><label className="form-label float-start form-label form-label">Enter Category Tamil Name</label><input type="text" className="form-control" placeholder="Enter category name in tamil" /></div>
        <div className="col-auto"><label className="form-label float-start form-label form-label">Enter Category Description</label><input type="text" className="form-control" placeholder="Enter Category description " /></div>
        <div className="col-auto"><label className="form-label float-start form-label form-label">Enter Category Description in Tamil</label><input type="text" className="form-control" placeholder="Enter Category Description in tamil" /></div>
      </div>
      <div className="row d-flex justify-content-center" style={{ marginTop: "28px", }}>
        <div className="col-3" style={{ textAlign: "center", }}><button className="btn btn-success" type="button" style={{ textAlign: "center", }}>Create</button></div>
        <div className="col-3" style={{ textAlign: "center", }}><button className="btn btn-danger" type="button" style={{ textAlign: "center", }}>cancel</button></div>
      </div>
    </>
  )
}

export default CreateNewCategory