import { useEffect, useState } from "react";
import axios from "axios";
export function Product() {
    const [productList, setProductList] = useState([])
    const [responseStatus, setResponseStatus] = useState('')

    async function fetchProductDetails() {
        await axios.get("http://localhost:8080/product").then(
            res => {
                setProductList(res.data);
                setResponseStatus("success");
            }
        )
            .catch(err => {
                setResponseStatus("failed");
            });
    }

    useEffect(() => {
        fetchProductDetails();
    }, [setProductList])
    const product = [
        {
            productImg: <img srcSet="src/assets/img/Product/been.jpg" />,
            productNameEng: "Beens",
            productNameTn: "பீன்ஸ்",
        },
        {
            productImg: <img srcSet="src/assets/img/Product/Butter.jpg" />,
            productNameEng: "வெண்ணெய்",
            productNameTn: "பீன்ஸ்",
        },
        {
            productImg: <img srcSet="src/assets/img/Product/DriedFruit.jpg" />,
            productNameEng: "Dried Fruits",
            productNameTn: "உலர்ந்த பழங்கள்",
        },
        {
            productImg: <img srcSet="src/assets/img/Product/Pasta.jpg" />,
            productNameEng: "Pasta",
            productNameTn: "பாஸ்தா",
        },
        {
            productImg: <img srcSet="src/assets/img/Product/BiryaniRice.jpg" />,
            productNameEng: "Biryani Rice",
            productNameTn: "பிரியாணி சாதம்",
        },
        {
            productImg: <img srcSet="src/assets/img/Product/Redchillipowder.jpg" />,
            productNameEng: "Red chilli powder",
            productNameTn: "சிவப்பு மிளகாய் தூள்",
        },
        {
            productImg: <img srcSet="src/assets/img/Product/Sambarpowder.jpg" />,
            productNameEng: "Sambar powder",
            productNameTn: "சாம்பார் பொடி",
        },
        {
            productImg: <img srcSet="src/assets/img/Product/Pepper.jpg" />,
            productNameEng: "Pepper",
            productNameTn: "மிளகு",
        },
        {
            productImg: <img srcSet="src/assets/img/Product/Ragiflour.jpg" />,
            productNameEng: "Ragi flour",
            productNameTn: "ராகி மாவு",
        },
        {
            productImg: <img srcSet="src/assets/img/Product/Noodles.jpg" />,
            productNameEng: "Noodles",
            productNameTn: "நூடுல்ஸ்",
        }, {
            productImg: <img srcSet="src/assets/img/Product/Teapowder.jpg" />,
            productNameEng: "Tea powder",
            productNameTn: "தேயிலை தூள்",
        },
        {
            productImg: <img srcSet="src/assets/img/Product/Sugar.jpg" />,
            productNameEng: "Sugar",
            productNameTn: "சர்க்கரை",
        },
        {
            productImg: <img srcSet="src/assets/img/Product/Bakingpowder.jpg" />,
            productNameEng: "Baking powder",
            productNameTn: "பேக்கிங் பவுடர்",
        },
        {
            productImg: <img srcSet="src/assets/img/Product/Almonds.jpg" />,
            productNameEng: "Almonds",
            productNameTn: "பாதாம்",
        },
        {
            productImg: <img srcSet="src/assets/img/Product/Dates.jpg" />,
            productNameEng: "Dates",
            productNameTn: "பேரிச்சை",
        },
    ]
    return (
        <div className="container py-4 py-xl-5">
            <div className="row mb-5">
                <div className="col-8 col-xl-9 text-center mx-auto">
                    <h2><br /><strong>Products</strong><br /></h2>
                    <p className="w-lg-50"><br />Here You can find the groups of products that meet a similar consumer need or that can substitute for each<br /></p>
                </div>
                <div className="col align-self-center" style={{ textAlign: "center", }}><button className="btn btn-primary" type="button">Create New Product</button></div>
            </div>
            <div className="row gy-4 row-cols-1 row-cols-md-2 row-cols-xl-3">
{productList.map((item) => (
                <div className="col item">
                    <div className="card">
                        <div className="card-body text-center d-flex flex-column align-items-center p-0"><img className="rounded-circle mb-3 fit-cover" width="130" height="130" src="ready_to_cook.jpeg" />
                            <div className="row row-cols-1" style={{ margin: "0px", marginRight: "0px", marginBottom: "10px", marginTop: "0px", }}>
                                <div className="col">
                                    <h4 className="card-title">{item.productNameTn}</h4>
                                    <h4 className="card-title">{item.productName}</h4>
                                </div>
                                <br/>  
                                <div className="col align-self-center">
                                    <select>
                                    <option value="13">250 g</option>
                                    <option value="12" selected>500 g</option>
                                    <option value="14">1kg</option>
                                </select></div>
                            </div>
                            <div className="row" style={{ marginRight: "-20px", marginBottom: "10px", }}>
                                <div className="col" style={{ background: "#e43c3c", }}><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none">
                                    <path
                                        d="M4 12C4 11.4477 4.44772 11 5 11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H5C4.44772 13 4 12.5523 4 12Z"
                                        fill="currentColor" />
                                </svg></div>
                                <div className="col"><input type="number" style={{ width: "100px", }} /></div>
                                <div className="col" style={{ background: "#50d966", }}><svg className="icon icon-tabler icon-tabler-plus" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M12 5l0 14" />
                                    <path d="M5 12l14 0" />
                                </svg></div>

                            </div><button className="btn btn-primary" type="button" style={{ width: "57%", }}>Add to Cart</button>

                        </div>
                    </div>
                </div>
                ))}
            </div>
        </div>
    );
}