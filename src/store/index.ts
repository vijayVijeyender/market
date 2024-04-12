import { createStore as createEasyPeasyStore } from "easy-peasy";
import { HttpService } from "../services/http/http.service";
import { BrandModel, brandModel } from "./Models/brand/brand.model";



export interface AppStoreModel{
brandModel: BrandModel;
}
export const appStoreModel: AppStoreModel ={
   brandModel : brandModel
}

function createStore(defaultValues?: any){
    return createEasyPeasyStore(appStoreModel,{
        injections:{
            httpService: new HttpService(),
        },
        initialState:{
            ...defaultValues,
        },
    });
}

export const store =createStore();