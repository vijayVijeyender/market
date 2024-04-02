

export interface Brand {
    id?:number;
    brandName?:string;
    brandNameTamil?:string;
}

export interface Category
{
    id?:number,
   categoryName:string,
   categoryNameTamil:string
}
export interface Product
{
    id?:number,
   productName:string,
   productNameTamil:string,
   productQuantity:number,
   productSellingPrice:number,
   productCostPrice:number,
   productBrandName:string,
   productCategoryName:string
}