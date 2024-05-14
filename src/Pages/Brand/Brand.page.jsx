import { useEffect, useState } from "react";
import axios from "axios";
import { useStoreActions, useStoreState } from "easy-peasy";
export default function Brand() {
    const [brandList, setBrandList] = useState([])
    const [responseStatus, setResponseStatus] = useState('')

    const {brand}=useStoreState((state)=> state.brandModel);

    const {setBrand} =useStoreActions((actions)=> actions.brandModel)

    async function fetchBrandDetails() {
        await axios.get("http://localhost:8080/brand").then(
            res => {
                setBrandList(res.data);
                setResponseStatus("success");
            }
        )
            .catch(err => {
                setResponseStatus("failed");
            });
    }

    useEffect(() => {
        fetchBrandDetails();
    }, [setBrandList])

    return (
        <div className="container ">
    <div className="row mb-5">
        <div className="col-md-8 col-xl-9 text-center mx-auto" style={{ flex:"0 0 auto !important", width:"933px !important", }}>
        <h2><br /><strong>Brand</strong><br /></h2>
                    <p className="w-lg-50"><br />Here You can find the groups of products that meet a similar consumer need or that can substitute for each<br /></p>
        </div>
        <div className="col align-self-center"><a className="btn btn-outline-info btn-lg" role="button" href="brand/createbrand">Create New Brand</a></div>
    </div>
    {responseStatus === "failed" ? <h1> Not able to fetch brand details</h1> :
    <div className="row gy-4 row-cols-1 row-cols-md-2 row-cols-xl-3">
        {brandList.map((brand, index) => (
        <div className="col" key={index}>
            <div className="card">
                <div className="card-body p-4">
                <h4 className="card-title">{brand.brandName}</h4>
                    <h4 className="card-title">{brand.brandNameTn}</h4>
                    <p className="card-text">{brand.brandDescription}</p>
                    <p className="card-text">{brand.brandDescriptionTn}</p>
                </div>
            </div>
        </div>
      ))}
       
    </div>
}
</div>
    );
}