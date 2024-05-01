import { useEffect, useState } from "react";
import axios from "axios";
import { ProductModel } from "./Components/productModel.component";

import { Cart } from "../../Components/Cart/Cart.component";
import { CreateProduct } from "./CreateProduct.page";

export function Product() {
    const [productList, setProductList] = useState([])
    // const [responseStatus, setResponseStatus] = useState('')
    const [selectedProduct, setSelectedProduct] = useState([])
    const [showModel, setShowModel] = useState(false)
    const [product, setProduct] = useState({})
    const [showCreateProduct, setShowCreateProduct] = useState(false)
    const [showCart, setShowCart]=  useState(false)
    const[productQTY, setProductQTY]=useState(1)
    const[quantity, setQuantity]=useState('')
    const[price, setPrice]=useState('')

function handleQty(item,e)
{
    setProductQTY(e.target.value)
   productList.map((product)=>{
    if(product.productID===item.productID)
    {
product.productQty=e.target.value;
return product
    }
   }

)
}

function handleQuantity(item,e)
{
//     setQuantity(e.target.value)
//     productList.map((product)=>{
//     if(product.productID===item.productID)
//     {
//         product.productKgs= e.target.value;
//         return product;
//     }
// })
setQuantity(e.target.value)
    productList.map((product) => {
        if (product.productID === item.productID) {
                product.productKgs= e.target.value;
            return product;
        }
    });

}

//// Cart function

    const handleCart = (items) => {
        let tempPrice=items.productPrice*handleProductKgs(items.productKgs)
        const addItems = {
            productName: items.productName,
            productQty: items.productQty,
            productKgs: items.productKgs,
            productPrice: tempPrice
        }
        setSelectedProduct([...selectedProduct, addItems])
        setShowCart(true)
    }
    function handleProductKgs(productKgs){
        switch(productKgs){
            case "250 g":
                return 1;
            case "500 g":
                return 2;
            case "1 kg":
                return 4;
        }
        
    }

    async function fetchProductDetails() {
        // await axios.get("http://localhost:8080/product").then(
        //     res => {
        //         setProductList(res.data);
        //         setResponseStatus("success");
        //     }
        // )
        //     .catch(err => {
        //         setResponseStatus("failed");
        //     });
        setProductList(productll)
    }

    useEffect(() => {
        fetchProductDetails();
    }, [setProductList])

//// Edit Button function

    function handleEditButton(item) {
        setShowModel(!showModel)
        setProduct(item)
    }

/// Delete Button function

    function handleDeleteButton(item)
    {
        const temp = productList.filter((product) => product.productName !== item.productName)
        setProductList(temp);
    }
    const productll = [
        {
            productID: 1,
            productName: "Beens",
            productNameTn: "பீன்ஸ்",
            productKgs:"250 g",
            productQty:1,
            productPrice: 25,

        },
        {
            productID: 2,
            productName: "Butter",
            productNameTn: "வெண்ணெய்",
            productKgs:"250 g",
            productQty:1,
            productPrice: 50,
        },
        {
            productID: 3,
            productName: "Dried Fruits",
            productNameTn: "உலர்ந்த பழங்கள்",
            productKgs:"250 g",
            productQty:1,
            productPrice: 125,
        },
        {
            productID: 4,
            productName: "Pasta",
            productNameTn: "பாஸ்தா",
            productKgs:"250 g",
            productQty:1,
            productPrice: 80,
        },
        {
            productID: 5,
            productName: "Biryani Rice",
            productNameTn: "பிரியாணி சாதம்",
            productKgs:"250 g",
            productQty:1,
            productPrice: 75,
        },
        {
            productID: 6,
            productName: "Red chilli powder",
            productNameTn: "சிவப்பு மிளகாய் தூள்",
            productKgs:"250 g",
            productQty:1,
            productPrice: 15,
        },
        {
            productID: 7,
            productName: "Sambar powder",
            productNameTn: "சாம்பார் பொடி",
            productKgs:"250 g",
            productQty:1,
            productPrice: 10,

        },
        {
            productID: 8,
            productName: "Pepper",
            productNameTn: "மிளகு",
            productKgs:"250 g",
            productQty:1,
            productPrice: 45,
        },
        {
            productID: 9,
            productName: "Ragi flour",
            productNameTn: "ராகி மாவு",
            productKgs:"250 g",
            productQty:1,
            productPrice: 75,
        },
        {
            productID: 10,
            productName: "Noodles",
            productNameTn: "நூடுல்ஸ்",
            productKgs:"250 g",
            productQty:1,
            productPrice: 40,
        }, 
        {
            productID: 11,
            productName: "Tea powder",
            productNameTn: "தேயிலை தூள்",
            productKgs:"250 g",
            productQty:1,
            productPrice: 120,
        },
        {
            productID: 12,
            productName: "Sugar",
            productNameTn: "சர்க்கரை",
            productKgs:"250 g",
            productQty:1,
            productPrice: 30,
        },
        {
            productID: 13,
            productName: "Baking powder",
            productNameTn: "பேக்கிங் பவுடர்",
            productKgs:"250 g",
            productQty:1,
            productPrice: 65,
        },
        {
            productID: 14,
            productName: "Almonds",
            productNameTn: "பாதாம்",
            productKgs:"250 g",
            productQty:1,
            productPrice: 250,
        },
        {
            productID: 15,
            productName: "Dates",
            productNameTn: "பேரிச்சை",
            productKgs:"250 g",
            productQty:1,
            productPrice: 200,
        },
    ]


    return (
        <div className="container">

            <div className="row mb-5">
                <div className="col-8 col-xl-9 text-center mx-auto">
                    <h2><br /><strong>Products</strong><br /></h2>
                    <p className="w-lg-50"><br />Here You can find the groups of products that meet a similar consumer need or that can substitute for each<br /></p>
                </div>
                <div className="col align-self-center" style={{ textAlign: "center", }}>
                    <a className="btn btn-outline-info btn-lg" role="button" onClick={() => setShowCreateProduct(true)}>Create New Product</a>
                </div>
            </div>

            <div className="row gy-4 row-cols-1 row-cols-md-2 row-cols-xl-3">

                {productList.map((item) => (
                    <div className="col item">
                        <div className="card">
                            <div className="card-body text-center d-flex flex-column align-items-center p-0">
                                <div className="row row-cols-1" style={{ margin: "0px", marginRight: "0px", marginBottom: "10px", marginTop: "0px", }}>
                                    <div className="col">
                                        <h4 className="card-title">{item.productName}</h4>
                                        <h4 className="card-title">{item.productNameTn}</h4>
                                    </div>
                                    <br />
                                    <div className="col align-self-center">
                                        <select  onChange={(e)=>handleQuantity(item,e)}>
                                        <option value="250 g" >250 g</option>
                                            <option  value="500 g" >500 g</option>
                                            <option  value="1 kg" >1 kg</option>
                                        </select>
                                        </div>
                                        <h4 className="card-title">Rs.{item.productPrice*handleProductKgs(item.productKgs)}</h4>

                                </div>

                                <div className="row" style={{ marginRight: "-20px", marginBottom: "10px", }}>
                                    <div className="col"><input type="number" id="points" name="points" min="1" max="10" onChange={(e)=>handleQty(item,e)} style={{ width: "100px", }} /></div>


                                </div><button onClick={() => handleCart(item)} className="btn btn-primary" type="button" style={{ width: "57%", }}>Add to Cart</button>


                            </div>
                            <div className="row" style={{ marginTop: "20px" }}>
                                <div className="col"><button className="btn btn-primary" onClick={() => handleEditButton(item)} type="button">Edit</button></div>
                                <div className="col"><button className="btn btn-primary" type="button" onClick={() => handleDeleteButton(item)} >Delete</button></div>
                            </div>
                        </div>
                    </div>
                ))}

                {showModel && <ProductModel setShowModel={setShowModel} product={product} setProduct={setProduct} productList={productList} setProductList={setProductList}/>}




                <Cart cartItems={selectedProduct} showCart={showCart} setShowCart={setShowCart}/>
                {   showCreateProduct &&       <div className="modal fade show" id="modal-1" role="dialog" tabindex="-1" style={{ display:"block", }}>
    <div className="modal-dialog" role="document">
        <div className="modal-content">
            <div className="modal-header">
            <h4 className="modal-title">Edit Product Details</h4>
                <button
                onClick={()=>setShowCreateProduct(false)}
                className="btn-close"
                type="button"
                aria-label="Close"
                data-bs-dismiss="modal" />
                   </div>
                 <div className="modal-body">
                <CreateProduct quantity={quantity} productList={productList} setProductList={setProductList} setShowCreateProduct={setShowCreateProduct} />
                </div>

                </div>
                </div>
                </div>}

      


            </div>

        </div>



    )

}