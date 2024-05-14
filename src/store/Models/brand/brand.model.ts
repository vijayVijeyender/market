import { Action, Thunk, action, thunk } from "easy-peasy";
import { Brand } from "../../interface";

interface BrandState{
    brand: Brand;
    brandList: Array<Brand>;
}

interface BrandActions{
    setBrand: Action<this, Brand>;
    setBrandList:Action<this, Array<Brand>>;
}


export interface BrandModel extends BrandState, BrandActions{

}

export const brandModel: BrandModel={
    brand: {},
    brandList: [],

    setBrand: action((state, brand) => {
        state.brand = brand;
    }),
    setBrandList: action((state, brandList) => {
        state.brandList = brandList;
    }),
}