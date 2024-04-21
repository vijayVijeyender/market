import { useEffect, useState } from "react";
import axios from "axios";
import { ProductModel } from "./Components/productModel.component";

import { Cart } from "../../Components/Cart/Cart.component";
import { CreateProduct } from "./CreateProduct.page";

export function Product() {
    const [productList, setProductList] = useState([])
    const [selectedProduct, setSelectedProduct] = useState([])
    const [showCart, setShowCart]=  useState(false)
    const [showModel, setShowModel] = useState(false)
    const [showCreateProduct, setShowCreateProduct] = useState(false)
    const [product, setProduct] = useState({})

    const handleCart = (items) => {
        const addItems = {
            productName: items.productName,
            productQty: "1",
            productPrice: "Rs.10"
        }
        setSelectedProduct([...selectedProduct, addItems])
        setShowCart(true)
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
    
    function handleEditButton(item) {
        setShowModel(!showModel)
        setProduct(item)
        handleDelete(item)
    }

    function handleDelete(item) {
        const temp = productList.filter((product) => product.productName !== item.productName)
        setProductList(temp);
    }

    useEffect(() => {
        fetchProductDetails();
    }, [setProductList])
    const productll = [
        {

            productName: "Beens",
            productNameTn: "பீன்ஸ்",
        },
        {

            productName: "வெண்ணெய்",
            productNameTn: "பீன்ஸ்",
        },
        {

            productName: "Dried Fruits",
            productNameTn: "உலர்ந்த பழங்கள்",
        },
        {

            productName: "Pasta",
            productNameTn: "பாஸ்தா",
        },
        {

            productName: "Biryani Rice",
            productNameTn: "பிரியாணி சாதம்",
        },
        {

            productName: "Red chilli powder",
            productNameTn: "சிவப்பு மிளகாய் தூள்",
        },
        {

            productName: "Sambar powder",
            productNameTn: "சாம்பார் பொடி",
        },
        {

            productName: "Pepper",
            productNameTn: "மிளகு",
        },
        {

            productName: "Ragi flour",
            productNameTn: "ராகி மாவு",
        },
        {

            productName: "Noodles",
            productNameTn: "நூடுல்ஸ்",
        }, {

            productName: "Tea powder",
            productNameTn: "தேயிலை தூள்",
        },
        {

            productName: "Sugar",
            productNameTn: "சர்க்கரை",
        },
        {

            productName: "Baking powder",
            productNameTn: "பேக்கிங் பவுடர்",
        },
        {

            productName: "Almonds",
            productNameTn: "பாதாம்",
        },
        {

            productName: "Dates",
            productNameTn: "பேரிச்சை",
        },
    ]
    return (
        <div className="container">
            <div className="row mb-5">
                <div className="col-8 col-xl-9 text-center mx-auto">
                    <h2><br /><strong>Products</strong><br /></h2>
                    <p className="w-lg-50"><br />Here You can find the groups of products that meet a similar consumer need or that can substitute for each<br /></p>
                </div>
                <div className="col align-self-center" style={{ textAlign: "center" }}>
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
                                        <h4 className="card-title">{item.productNameTn}</h4>
                                        <h4 className="card-title">{item.productName}</h4>
                                    </div>
                                    <br />
                                    <div className="col align-self-center">
                                        <select>
                                            <option value="13">250 g</option>
                                            <option value="12" selected>500 g</option>
                                            <option value="14">1kg</option>
                                        </select></div>
                                </div>
                                <div className="row" style={{ marginRight: "-20px", marginBottom: "10px", }}>
                                    <div className="col" onClick={() => alert("Hi")} style={{ background: "#e43c3c", }}><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none">
                                        <path
                                            d="M4 12C4 11.4477 4.44772 11 5 11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H5C4.44772 13 4 12.5523 4 12Z"
                                            fill="currentColor" />
                                    </svg></div>
                                    <div className="col"><input type="number" style={{ width: "100px", }} /></div>
                                    <div className="col" style={{ background: "#50d966", }}><svg className="icon icon-tabler icon-tabler-plus" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M12 5l0 14" />
                                        <path d="M5 12l14 0" />
                                    </svg></div>
                                </div><button className="btn btn-primary" onClick={() => handleCart(item)} type="button" style={{ width: "57%", }}>Add to Cart</button>
                            </div>
                            <div className="row" style={{ marginTop: "20px" }}>
                                <div className="col"><button className="btn btn-primary" onClick={() => handleEditButton(item)} type="button">Edit</button></div>
                                <div className="col"><button onClick={() => handleDelete(item)} className="btn btn-primary" type="button">Delete</button></div>
                            </div>
                        </div>
                    </div>
                ))}
                {showModel && <ProductModel setShowModel={setShowModel} product={product} setProduct={setProduct} productList={productList} setProductList={setProductList} />}
                {showCreateProduct && <div className="modal fade show" id="modal-1" role="dialog" tabindex="-1" style={{ display: "block", }}>
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title">Create a New Product</h4>
                                <button
                                    onClick={() => setShowCreateProduct(false)}
                                    className="btn-close"
                                    type="button"
                                    aria-label="Close"
                                    data-bs-dismiss="modal" />
                            </div>
                            <div className="modal-body">
                                <CreateProduct productList={productList} setProductList={setProductList} setShowCreateProduct={setShowCreateProduct} />
                            </div>
                        </div>
                    </div>
                </div>}
                <Cart cartItems={selectedProduct}  showCart={showCart} setShowCart={setShowCart}/>
            </div>

        </div>
    );

}