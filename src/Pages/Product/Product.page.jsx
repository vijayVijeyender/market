import { useEffect, useState } from "react";
import axios from "axios";
export function Product()
{
    const [productList,setProductList] = useState([])
    const [responseStatus,setResponseStatus]= useState('')

    async function fetchProductDetails(){
        await axios.get("http://localhost:8080/product").then(
            res=>{ 
                 setProductList(res.data);
                 setResponseStatus("success");
           }
         )
         .catch(err=>{
           setResponseStatus("failed");    
         });
    }
    
    useEffect(()=>{
        fetchProductDetails();
    },[setProductList])
    const product=[
        {
productImg:<img srcSet="src/assets/img/Product/been.jpg" />,
productNameEng:"Beens",
productNameTn:"பீன்ஸ்",
        },
        {
productImg:<img srcSet="src/assets/img/Product/Butter.jpg" />,
 productNameEng:"வெண்ணெய்",
productNameTn:"பீன்ஸ்",
                    },
                    {
productImg:<img srcSet="src/assets/img/Product/DriedFruit.jpg" />,
productNameEng:"Dried Fruits",
productNameTn:"உலர்ந்த பழங்கள்",
                                },
                                {
productImg:<img srcSet="src/assets/img/Product/Pasta.jpg" />,
productNameEng:"Pasta",
  productNameTn:"பாஸ்தா",
  },
  {
   productImg:<img srcSet="src/assets/img/Product/BiryaniRice.jpg" />,
productNameEng:"Biryani Rice",
productNameTn:"பிரியாணி சாதம்",
},
{
    productImg:<img srcSet="src/assets/img/Product/Redchillipowder.jpg" />,
    productNameEng:"Red chilli powder",
    productNameTn:"சிவப்பு மிளகாய் தூள்",
            },
            {
    productImg:<img srcSet="src/assets/img/Product/Sambarpowder.jpg" />,
     productNameEng:"Sambar powder",
    productNameTn:"சாம்பார் பொடி",
                        },
                        {
    productImg:<img srcSet="src/assets/img/Product/Pepper.jpg" />,
    productNameEng:"Pepper",
    productNameTn:"மிளகு",
                                    },
                                    {
    productImg:<img srcSet="src/assets/img/Product/Ragiflour.jpg" />,
    productNameEng:"Ragi flour",
      productNameTn:"ராகி மாவு",
      },
      {
       productImg:<img srcSet="src/assets/img/Product/Noodles.jpg" />,
    productNameEng:"Noodles",
    productNameTn:"நூடுல்ஸ்",
    },        {
        productImg:<img srcSet="src/assets/img/Product/Teapowder.jpg" />,
        productNameEng:"Tea powder",
        productNameTn:"தேயிலை தூள்",
                },
                {
        productImg:<img srcSet="src/assets/img/Product/Sugar.jpg" />,
         productNameEng:"Sugar",
        productNameTn:"சர்க்கரை",
                            },
                            {
        productImg:<img srcSet="src/assets/img/Product/Bakingpowder.jpg" />,
        productNameEng:"Baking powder",
        productNameTn:"பேக்கிங் பவுடர்",
                                        },
                                        {
        productImg:<img srcSet="src/assets/img/Product/Almonds.jpg" />,
        productNameEng:"Almonds",
          productNameTn:"பாதாம்",
          },
          {
           productImg:<img srcSet="src/assets/img/Product/Dates.jpg" />,
        productNameEng:"Dates",
        productNameTn:"பேரிச்சை",
        },
    ]
    return(
        <>
       <section id="products" className="photo-gallery">
        <div className="container">
          
            <div className="row mb-3">
                <div className="col-8 text-center mx-auto">
                    <h2>Products</h2>
                    <p className="w-lg-50">Here You can find the groups of products that meet a similar consumer need or that can substitute for each</p>
                </div>  <div className="col-2 text-end align-self-center"><a className="btn btn-outline-info btn-lg" role="button" href="product/CreateProduct">Create New Product</a></div>
            </div>
            <div className="row gx-2 gy-2 row-cols-md-2 row-cols-xl-3 photos" data-bss-baguettebox="">
            {productList.map((item)=>(
                <div className="col item">
                    <div className="card border-0 shadow-none">
                        <div className="card-body text-center d-flex flex-column align-items-center p-0">{item.productImg}
                            <div className="row" style={{ margin:"0px", marginRight:"0px", marginBottom:"10px", marginTop:"0px", }}>
                                <div className="col">
                                    <h5 className="fw-bold text-primary mb-0">{item.productName}</h5>
                                    <h5 className="fw-bold text-primary mb-0">{item.productNameTn}</h5>

                                </div>
                               <p>
                                <div className="col align-self-center"><select>
                                        <option value="13">250 g</option>
                                        <option value="12" selected="">500 g</option>
                                        <option value="14">1kg</option>
                                    </select></div>
                                    </p>
                            </div>
                            <div className="row" style={{ marginRight:"-20px", marginBottom:"10px", }}>
                                <div className="col" style={{ background:"#e43c3c", }}><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none">
                                        <path d="M4 12C4 11.4477 4.44772 11 5 11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H5C4.44772 13 4 12.5523 4 12Z" fill="currentColor"></path>
                                    </svg></div>
                                <div className="col"><input type="number" style={{ width:"100px", }} /></div>
                                <div className="col" style={{ background:"#50d966", }}><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icon-tabler-plus">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <line x1="12" y1="5" x2="12" y2="19"></line>
                                        <line x1="5" y1="12" x2="19" y2="12"></line>
                                    </svg></div>
                            </div><button className="btn btn-primary" type="button" style={{ width:"57%", }}>Add to Cart</button>
                        </div>
                    </div>
                </div>
))}
               </div>
               </div>
    </section>
        </>
    )
}