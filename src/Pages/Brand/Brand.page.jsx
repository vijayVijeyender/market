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
        <div className="container">
            <div className="row" style={{
                "marginBottom": "46px"
            }}>
                <div className="col-5 col-xl-3 offset-4 text-center align-self-center">
                    <h1 className="text-secondary-emphasis">Brand Details</h1>
                </div>
                <div className="col text-end align-self-center">
                    <a className="btn btn-outline-info btn-lg" role="button" href="brand/createbrand">Create New Brand</a></div>
            </div>
            {responseStatus === "failed" ? <h1> Not able to fetch brand details</h1> :
                <div className="row gy-4 row-cols-1 row-cols-sm-2 row-cols-lg-3 mb-3">
                    {brandList.map((brand, index) => (
                        <div className="col" key={index}>
                            <div className="card border-0 shadow-none">
                                <div className="d-flex flex-column justify-content-center align-items-center">
                                    <div>
                                        <p className="fs-3 fw-bold text-center text-primary mb-0">{brand.brandName}</p>
                                        <p className="fs-3 fw-bold text-center text-primary mb-0">{brand.brandNameTn}</p>
                                    </div>
                                    <p className="text-center"><span>{brand.brandDescription}</span></p>
                                    <p className="text-center"><span>{brand.brandDescriptionTn}</span></p>
                                    <div className="d-flex">
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            }


        </div>
    );
}