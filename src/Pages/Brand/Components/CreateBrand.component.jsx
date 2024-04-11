import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export function CreateBrand() {
    const navigate= useNavigate();
    const [brand,setBrand]=useState({
        brandName:'',
        brandNameTn:'',
        brandDescription:'',
        brandDescriptionTn:''
    })
    const [responseStatus,setResponseStatus]= useState('')
    async function Create(){
        await axios.post("http://localhost:8080/brand/createbrand",brand).then(
            res => {
                setResponseStatus("success");
            }
        )
            .catch(err => {
                setResponseStatus("failed");
            });
          navigate(-1);
    }

    function handleBrandInput(inputType, e){
        switch(inputType){
            case "brandname":
                setBrand({...brand,brandName:e.target.value})
                break;
            case "brandnameTn":
                setBrand({...brand,brandNameTn:e.target.value})
                break;
            case "branddesc":
                setBrand({...brand,brandDescription:e.target.value})
                break;
            case "branddescTn":
                setBrand({...brand,brandDescriptionTn:e.target.value})
                break;
        }
    }
    return <>
        <div className="row">
            <div className="col">
                <h1 className="text-secondary-emphasis" style={{
                    "textAlign": "center"
                }}>Create a Brand</h1>
            </div>
        </div>
        <div className="row gy-3 text-center d-flex flex-row justify-content-center">
            <div className="col-auto">
            <label className="form-label float-start form-label form-label" for="brandname">Enter Brand Name</label>
            <input onChange={(e)=>handleBrandInput("brandname",e)} className="form-control" type="text" name="brandname" placeholder="Enter Brand name" />
            </div>
            <div className="col-auto"><label className="form-label float-start form-label form-label">Enter Brand Tamil Name</label>
            <input onChange={(e)=>handleBrandInput("brandnameTn",e)} className="form-control" type="text" placeholder="Enter Brand name in tamil" /></div>
            <div className="col-auto"><label className="form-label float-start form-label form-label">Enter Brand Description</label>
            <input onChange={(e)=>handleBrandInput("branddesc",e)}className="form-control" type="text" placeholder="Enter Brand description " /></div>
            <div className="col-auto"><label className="form-label float-start form-label form-label">Enter Brand Description in Tamil</label>
            <input onChange={(e)=>handleBrandInput("branddescTn",e)} className="form-control" type="text" placeholder="Enter Brand Description in tamil" /></div>
        </div>
        <div className="row d-flex justify-content-center" style={{
            "marginTop": "28px"
        }}>
            <div className="col-3" style={{
                "textAlign": "center"
            }}><button 
            onClick={()=>Create()}
            className="btn btn-success" type="button" style={{
                "textAlign": "center"
            }}>Create</button></div>
            <div className="col-3" style={{
                "textAlign": "center"
            }}><button className="btn btn-danger" type="button" style={{
                "textAlign": "center"
            }}>cancel</button></div>
        </div>
    </>;
}