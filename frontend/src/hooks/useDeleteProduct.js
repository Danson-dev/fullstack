import { useMutation, useQueryClient } from "@tanstack/react-query";
import{deleteProduct as deleteProductApi} from "@/service/apiProducts";
import { toast } from "sonner";

 export const useDeleteProduct=()=>{
const queryClient=useQueryClient();

const {mutate:deleteProduct,isPending:isDeleting}=useMutation({
    mutationFn:({id})=>deleteProductApi(id),
    onSuccess:()=>{
        toast.success("Product Deleted succesfully");
        queryClient.invalidateQueries({
            queryKey:["product"]
        })
    },
 onError:()=>{
    toast.error("Unable to deleteProduct")    
}

 })
 return {deleteProduct,isDeleting}

 }