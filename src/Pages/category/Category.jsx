import { useState, useEffect } from 'react'
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Category = () => {
const navigate=useNavigate();
    const [categories, setCategories] = useState([])
    const [responseStatus, setResponseStatus] = useState('')

    async function fetchCategoryDetails() {
        await axios.get("http://localhost:8080/category").then(
            res => {
                setCategories(res.data);
                setResponseStatus("success");
            }
        )
            .catch(err => {
                setResponseStatus("failed");
            });
    }


  async function fetchProductDetails(category) {
    await axios
      .get(`http://localhost:8080/product/productcategory/`+category.id)
      .then((res) => {
        // setCategoryData(res.data);
        navigate("/product");
      })
      .catch((err) => {
        setResponseStatus("failed");
      });
  }

    useEffect(() => {
        fetchCategoryDetails();
    }, [setCategories])


    return (
        <div className="container">
    <div className="row mb-5">
        <div className="col-md-8 col-xl-9 text-center mx-auto">
            <h2><br /><strong>Category</strong><br /><br /></h2>
            <p className="w-lg-50">Curae hendrerit donec commodo hendrerit egestas tempus, turpis facilisis nostra nunc. Vestibulum dui eget ultrices.</p>
        </div>
        <div className="col align-self-center" style={{ textAlign:"center", }}>
            <a className="btn btn-outline-info btn-lg" role="button" href="category/createcategory">Create New Category</a></div>
    </div>
    <div className="row gy-4 row-cols-1 row-cols-md-2 row-cols-xl-3">
    {categories.map((category) => (
        <div className="col" key={category.id}>
            <div className="card" onClick={() => fetchProductDetails(category)}>
                <div className="card-body p-4">
                    <h4 className="card-title">{category.categoryName} / </h4>
                    <h4 className="card-title">{category.categoryNameTn}</h4>
                    <p className="card-text">{category.categoryDescription}</p>
                    <p className="card-text">{category.categoryDescriptionTn}</p>
                </div>
            </div>
        </div>
        ))}
    </div>
</div>
    )
}


export default Category;
