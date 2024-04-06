export function Product()
{
    const product=[
        {
productImg:<img srcSet=".src/assets/img/Product/been.jpg" />,
productNameEng:"Beens",
productNameTn:"பீன்ஸ்",
        },
        {
productImg:<img srcSet=".src/assets/img/Product/Butter.jpg" />,
 productNameEng:"Butter",
productNameTn:"பீன்ஸ்",
                    },
                    {
productImg:<img srcSet=".src/assets/img/Product/DriedFruit.jpg" />,
productNameEng:"Dried Fruits",
productNameTn:"பீன்ஸ்",
                                },
                                {
productImg:<img srcSet=".src/assets/img/Product/Pasta.jpg" />,
productNameEng:"Pasta",
  productNameTn:"பீன்ஸ்",
  },
  {
   productImg:<img srcSet=".src/assets/img/Product/been.jpg" />,
productNameEng:"Beens",
productNameTn:"பீன்ஸ்",
},
{
    productImg:<img srcSet=".src/assets/img/Product/been.jpg" />,
    productNameEng:"Beens",
    productNameTn:"பீன்ஸ்",
            },
            {
    productImg:<img srcSet=".src/assets/img/Product/been.jpg" />,
     productNameEng:"Beens",
    productNameTn:"பீன்ஸ்",
                        },
                        {
    productImg:<img srcSet=".src/assets/img/Product/been.jpg" />,
    productNameEng:"Beens",
    productNameTn:"பீன்ஸ்",
                                    },
                                    {
    productImg:<img srcSet=".src/assets/img/Product/been.jpg" />,
    productNameEng:"Beens",
      productNameTn:"பீன்ஸ்",
      },
      {
       productImg:<img srcSet=".src/assets/img/Product/been.jpg" />,
    productNameEng:"Beens",
    productNameTn:"பீன்ஸ்",
    },        {
        productImg:<img srcSet=".src/assets/img/Product/been.jpg" />,
        productNameEng:"Beens",
        productNameTn:"பீன்ஸ்",
                },
                {
        productImg:<img srcSet=".src/assets/img/Product/been.jpg" />,
         productNameEng:"Beens",
        productNameTn:"பீன்ஸ்",
                            },
                            {
        productImg:<img srcSet=".src/assets/img/Product/been.jpg" />,
        productNameEng:"Beens",
        productNameTn:"பீன்ஸ்",
                                        },
                                        {
        productImg:<img srcSet=".src/assets/img/Product/been.jpg" />,
        productNameEng:"Beens",
          productNameTn:"பீன்ஸ்",
          },
          {
           productImg:<img srcSet=".src/assets/img/Product/been.jpg" />,
        productNameEng:"Beens",
        productNameTn:"பீன்ஸ்",
        },
    ]
    return(
        <>
       <section id="products" className="photo-gallery py-4 py-xl-5">
        <div className="container">
          
            <div className="row mb-5">
                <div className="col-md-8 col-xl-6 text-center mx-auto">
                    <h2>Products</h2><button style={{float:"right"}}>Add to Product</button>
                    <p className="w-lg-50">Here You can find the groups of products that meet a similar consumer need or that can substitute for each</p>
                </div>
            </div>
            <div className="row gx-2 gy-2 row-cols-md-2 row-cols-xl-3 photos" data-bss-baguettebox="">
            {product.map((item)=>(
                <div className="col item">
                    <div className="card border-0 shadow-none">
                        <div className="card-body text-center d-flex flex-column align-items-center p-0">{item.productImg}
                            <div className="row" style={{ margin:"0px", marginRight:"0px", marginBottom:"10px", marginTop:"0px", }}>
                                <div className="col">
                                    <h5 className="fw-bold text-primary mb-0">{item.productNameEng}</h5>
                                    <h5 className="fw-bold text-primary mb-0">{item.productNameTn}</h5>

                                </div>
                                <br></br>
                                <div className="col align-self-center"><select>
                                        <option value="13">250 g</option>
                                        <option value="12" selected="">500 g</option>
                                        <option value="14">1kg</option>
                                    </select></div>
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