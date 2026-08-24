import { useMutation, useQueryClient } from "@tanstack/react-query";
import{updateProduct as updateProductApi} from "@/service/apiProducts"
import { toast } from "sonner";
export const useUpdateProduct=()=>{
    const queryClient=useQueryClient()
    const {mutate:updateProduct,isUpdating}=useMutation({
        mutationFn:({id,productData})=>updateProductApi(id,productData),
        onSuccess:()=>{
            toast.success("product updated succesfully")
queryClient.invalidateQueries({
    queryKey:["products"]
})
        },
        onError:(err)=>{
toast.error(err.message)
        }
        
    })
return {updateProduct,isUpdating}

}