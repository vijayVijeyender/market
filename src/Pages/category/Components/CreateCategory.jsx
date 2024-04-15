import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const CreateCategory = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState({
    categoryName: "",
    categoryNameTn: "",
    categoryDescription: "",
    categoryDescriptionTn: "",
  });
  const [responseStatus, setResponseStatus] = useState("");
  async function Create() {
    await axios
      .post("http://localhost:8080/category/createcategory", category)
      .then((res) => {
        setResponseStatus("success");
        navigate("/category");
      })
      .catch((err) => {
        setResponseStatus("failed");
      });
  }

  function handleCategoryInput(inputType, e) {
    switch (inputType) {
      case "categoryName":
        setCategory({ ...category, categoryName: e.target.value });
        break;
      case "categoryNameTn":
        setCategory({ ...category, categoryNameTn: e.target.value });
        break;
      case "categoryDescription":
        setCategory({ ...category, categoryDescription: e.target.value });
        break;
      case "categoryDescriptionTn":
        setCategory({ ...category, categoryDescriptionTn: e.target.value });
        break;
    }
  }

  return (
    <>
      <header style={{ marginBottom: "24px" }}>
        <div className="row">
          <div className="col">
            <h1
              className="text-secondary-emphasis"
              style={{ textAlign: "center" }}
            >
              Create a New Category
            </h1>
          </div>
        </div>
      </header>
      <div className="row gy-3 text-center d-flex flex-row justify-content-center">
        <div className="col-auto "><label className="form-label float-start form-label form-label" htmlFor="categoryname">Enter Category Name</label>
        <input onChange={(e) => handleCategoryInput("categoryName", e)} type="text" className="form-control" name="categoryname" placeholder="Enter Category name" />
          </div>
        <div className="col-auto"><label className="form-label float-start form-label form-label">Enter Category Tamil Name</label>
        <input onChange={(e) => handleCategoryInput("categoryNameTn", e)} type="text" className="form-control" placeholder="Enter category name in tamil" /></div>
        <div className="col-auto"><label className="form-label float-start form-label form-label">Enter Category Description</label>
        <input onChange={(e) => handleCategoryInput("categoryDescription", e)} type="text" className="form-control" placeholder="Enter Category description " /></div>
        <div className="col-auto">
          <label className="form-label float-start form-label form-label">Enter Category Description in Tamil</label>
        <input onChange={(e) => handleCategoryInput("categoryDescriptionTn", e)} type="text" className="form-control" placeholder="Enter Category Description in tamil" />
        </div>
      </div>
      <div
        className="row d-flex justify-content-center"
        style={{ marginTop: "28px" }}
      >
        <div className="col-3" style={{ textAlign: "center" }}>
          <button
            onClick={() => Create()}
            className="btn btn-success"
            type="button"
            style={{ textAlign: "center" }}
          >
            Create
          </button>
        </div>
        <div className="col-3" style={{ textAlign: "center" }}>
          <button
            onClick={() => navigate(-1)}
            className="btn btn-danger"
            type="button"
            style={{ textAlign: "center" }}
          >
            cancel
          </button>
        </div>
      </div>
    </>
  );
};

export default CreateCategory;
