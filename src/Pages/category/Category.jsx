import { useState, useEffect } from 'react'
import axios from "axios";
const Category = () => {
    const categoryList = [
        {
            id: 1,
            categoryName: "Cooking Essentials",
            categoryNameTn: "சமையல் அத்தியாவசிய பொருட்கள்",
        },
        {
            id: 2,
            categoryName: "Baby Care",
            categoryNameTn: "குழந்தை பராமரிப்பு பொருட்கள்",
        },
        {
            id: 3,
            categoryName: "Bakery",
            categoryNameTn: "பேக்கரி",
        },
        {
            id: 4,
            categoryName: "Beverages",
            categoryNameTn: "பானங்கள்",
        },
        {
            id: 5,
            categoryName: "Beauty and Care",
            categoryNameTn: "அழகு மற்றும் பராமரிப்பு பொருட்கள்",
        },
        {
            id: 6,
            categoryName: "Dairy and Eggs",
            categoryNameTn: "பால் மற்றும் முட்டை",
        },
        {
            id: 7,
            categoryName: "Fruits and Veggies",
            categoryNameTn: "பழங்கள் மற்றும் காய்கறிகள்",
        },
        {
            id: 8,
            categoryName: "Household Needs",
            categoryNameTn: "வீட்டு தேவைகள்",
        },
        {
            id: 9,
            categoryName: "Pets",
            categoryNameTn: "செல்லப்பிராணிகள்",
        },
        {
            id: 10,
            categoryName: "Snacks",
            categoryNameTn: "சிற்றுண்டி பொருட்கள்",
        },
        {
            id: 11,
            categoryName: "Ready to Cook",
            categoryNameTn: "சிற்றுண்டி பொருட்கள்",
        },
        {
            id: 12,
            categoryName: "Readymade Foods",
            categoryNameTn: "சிற்றுண்டி பொருட்கள்",
        },
        {
            id: 13,
            categoryName: "Stationery",
            categoryNameTn: "சிற்றுண்டி பொருட்கள்",
        },
        {
            id: 14,
            categoryName: "Water Can",
            categoryNameTn: "சிற்றுண்டி பொருட்கள்",
        }
    ]

    const [categories, setCategories] = useState([])
    const [category, setCategory] = useState({
        categoryName: '',
        categoryNameTn: ''
    })
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

    useEffect(() => {
        fetchCategoryDetails();
    }, [setCategories])


    return (
        <div className="container py-4 py-xl-5">
    <div className="row mb-5">
        <div className="col-md-8 col-xl-9 text-center mx-auto">
            <h2><br /><strong>Category</strong><br /><br /></h2>
            <p className="w-lg-50">Curae hendrerit donec commodo hendrerit egestas tempus, turpis facilisis nostra nunc. Vestibulum dui eget ultrices.</p>
        </div>
        <div className="col align-self-center" style={{ textAlign:"center", }}><a className="btn btn-outline-info btn-lg" role="button" href="category/createcategory">Create New Category</a></div>
    </div>
    <div className="row gy-4 row-cols-1 row-cols-md-2 row-cols-xl-3">
    {categoryList.map((category) => (
        <div className="col">
            <div className="card">
                <div className="card-body p-4"><img className="rounded-circle mb-3 fit-cover" width="130" height="130" src="cooking_essentials.jpeg" />
                    <h4 className="card-title">{category.categoryName} / </h4>
                    <h4 className="card-title">{category.categoryNameTn}</h4>
                    <p className="card-text">Category Description</p>
                </div>
            </div>
        </div>
        ))}
    </div>
</div>
    )
}

export default Category