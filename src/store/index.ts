import { createStore as createEasyPeasyStore } from "easy-peasy";
import { HttpService } from "../services/http/http.service";



export interface AppStoreModel{

}
export const appStoreModel: AppStoreModel ={
   
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