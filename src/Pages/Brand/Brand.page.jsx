import { useEffect, useState } from "react";
import axios from "axios";
export default function Brand() {
    const [brandList, setBrandList] = useState([])
    const [responseStatus, setResponseStatus] = useState('')

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
            <div className="row mb-5">
                <div className="col-8 text-center mx-auto">
                    <h2>Brand</h2>
                    <p className="w-lg-50">Here You can find the Brand details</p>
                </div>  <div className="col-2 text-end align-self-center"><a className="btn btn-outline-info btn-lg" role="button" href="brand/createbrand">Create New Brand</a></div>
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