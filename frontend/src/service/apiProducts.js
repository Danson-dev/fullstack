import axios from "axios";

export const getProducts= async()=>{
try{
const res=await axios.get("https://mongodb-api-kappa.vercel.app/api/products",{
    withCredentials:true
})
const data=res.data
return data
}catch(error){
console.log(error);

}
}
export const getProduct=async (id)=>{
    try{
        const res=await axios.delete(`https://mongodb-api-kappa.vercel.app/api/products/${id}`)
        const data=res.data
return data
    }catch(error){
console.error(error);

}
}
export const deleteProduct=async (id, )=>{
    try{
        const res=await axios.delete(`https://mongodb-api-kappa.vercel.app/api/products/${id}` )
        const data=res.data
return data
    }catch(error){
console.error(error);

}
}
export const updateProduct=async (id,productData)=>{
    try{
        const res=await axios.patch(`https://mongodb-api-kappa.vercel.app/api/products/${id}`,{...productData})
        const data=res.data
return data
    }catch(error){
console.error(error);

}
}




