import {useProducts } from '@/hooks/useProducts';
// import React from 'react'
   import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import UpdateProductForm from './UpdateProductForm';
import DeleteProduct from './DeleteProduct';

const Productstable = () => {
  const {isLoading,error,products}=useProducts()
  return (
    <div> 

   
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>PRODUCT</TableHead>
          <TableHead>PRICE</TableHead>
          <TableHead>QUANTITY</TableHead>
          <TableHead className="text-right"> UPDATED AT </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {products?.map((product)=>(
            <TableRow key={product._id}>
          <TableCell className="font-medium">{product?.name}</TableCell>
          <TableCell>{ product?.price}</TableCell>
          <TableCell>{ product?.quantity}</TableCell>
          <TableCell>{ product?.createdAt}</TableCell>
          <TableCell className="text-right">
            <div className='flex '>
              <UpdateProductForm product={product}  />
          <DeleteProduct id={product._id}/> 
            </div>
        
          </TableCell>
        </TableRow>       
        ))}

       
    
      </TableBody>
    </Table>
  


    </div>
  )
}

export default Productstable