import {useState, useEffect} from 'react'
import axios from "axios";
const Category = () => {
    const categoryList =[
        {
            id:1,
            categoryName:"Cooking Essentials",
            categoryNameTn:"சமையல் அத்தியாவசிய பொருட்கள்",
        },
        {
            id:2,
            categoryName:"Baby Care",
            categoryNameTn:"குழந்தை பராமரிப்பு பொருட்கள்",
        },
{
    id:3,
    categoryName:"Bakery",
    categoryNameTn:"பேக்கரி",
        },
{
    id:4,
    categoryName:"Beverages",
    categoryNameTn:"பானங்கள்",
        },
{
    id:5,
    categoryName:"Beauty and Care",
    categoryNameTn:"அழகு மற்றும் பராமரிப்பு பொருட்கள்",
        },
{
    id:6,
    categoryName:"Dairy and Eggs",
    categoryNameTn:"பால் மற்றும் முட்டை",
        },
{
    id:7,
    categoryName:"Fruits and Veggies",
    categoryNameTn:"பழங்கள் மற்றும் காய்கறிகள்",
        },
{
    id:8,
    categoryName:"Household Needs",
    categoryNameTn:"வீட்டு தேவைகள்",
        },
{
    id:9,
    categoryName:"Pets",
    categoryNameTn:"செல்லப்பிராணிகள்",
        },
{
    id:10,
    categoryName:"Snacks",
    categoryNameTn:"சிற்றுண்டி பொருட்கள்",
        },
{
    id:11,
    categoryName:"Ready to Cook",
    categoryNameTn:"சிற்றுண்டி பொருட்கள்",
        },
{
    id:12,
    categoryName:"Readymade Foods",
    categoryNameTn:"சிற்றுண்டி பொருட்கள்",
        },
{
    id:13,
    categoryName:"Stationery",
    categoryNameTn:"சிற்றுண்டி பொருட்கள்",
        },
{
    id:14,
    categoryName:"Water Can",
    categoryNameTn:"சிற்றுண்டி பொருட்கள்",
        }
    ]

 const [categories,setCategories] = useState([])
const [responseStatus,setResponseStatus]= useState('')

async function fetchCategoryDetails(){
    await axios.get("http://localhost:8080/category").then(
        res=>{ 
            setCategories(res.data);
             setResponseStatus("success");
       }
     )
     .catch(err=>{
       setResponseStatus("failed");    
     });
}

useEffect(()=>{
    fetchCategoryDetails();
},[setCategories])


  return (
    <section className="photo-gallery">
        
    <div className="container">
            <div className="row mb-3" style={{ marginLeft:"0px", }}>
            <div className="col-8 col-md-8 col-xl-10 text-center" style={{ marginRight:"0px", }}>
                <h2>Category</h2>
                <p className="w-lg-50">Here You can find the groups of products that meet a similar consumer need or that can substitute for each</p>
            </div>
            <div className="col-auto col-md-8 col-xl-1 text-center align-self-center" style={{ marginRight:"0px", }}><a className="btn btn-outline-info btn-lg" role="button" href="/category/createCategory">Create New Category</a></div>
        </div>
        
        <div className="row gx-2 gy-2 row-cols-md-2 row-cols-xl-3 photos" data-bss-baguettebox="">
        {categories.map((category)=>(
        
            <div className="col item"><a href="">
                    <div className="card border-0 shadow-none">
                        <div className="card-body text-center d-flex flex-column align-items-center p-0"><img className="rounded-circle mb-3 fit-cover" width="130" height="130" src="assets\img\category\cooking_essentials.jpeg" />
                            <h5 className="fw-bold text-primary card-title mb-0">{category.categoryName}/ </h5>
                            <h5 className="fw-bold text-primary card-title mb-0">{category.categoryNameTn}</h5>
                        </div>
                    </div>
                </a></div>
                
                ))}
                </div>
                </div>
    </section>
  )
}

export default Category