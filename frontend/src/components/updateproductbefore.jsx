// import React from 'react'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Field, FieldGroup } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Pen } from "lucide-react";
import { useState } from "react";

const UpdateProductForm = ({product}) => {
   const [name,setName]=useState(product.name);
  const [price,setPrice]=useState(product.price);
  const [quantity,setQuantity]=useState(product.quantity);
  const [isLoading,setIsLoading]=useState(false);

    async function handleSubmit(e){
    e.preventDefault()
    // if(!name||!price||!quantity)return
    try{
      setIsLoading(true)
     const res=await fetch("http://localhost:4000/api/products",{
  method:"POST",
  headers:{
    "Content-Type":"application/json",
  },
  body: JSON.stringify({
    name,
    quantity,
    price
  })
})
if(!res.ok){throw new Error('Failed to Create product')}
const data=await res.json()
console.log(data);

  } catch(error){
      console.log(error);
      
    }finally{
setIsLoading(false)
setQuantity('')
setPrice('')
setName('')
    }
    }


  return (
    <div> 

            <Dialog>
     
        <DialogTrigger asChild>
          <Button variant="ghost"><Pen /></Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-sm">
           <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Update {product.name}</DialogTitle>
            <DialogDescription>
 Update {product.name}here.
            </DialogDescription>
          </DialogHeader>
          <FieldGroup>
            <Field>
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" placeholder=" Enter Name" value={name} onChange={(e)=>{setName(e.target.value) }}  />
            </Field>
            <Field>
              <Label htmlFor=" price">Price</Label>
              <Input id="price" name=" price" placeholder=" Enter Price" type="number"value={price} onChange={(e)=>{setPrice(e.target.value) }} />
            </Field>
            <Field>
              <Label htmlFor=" Quantity">Quantity</Label>
              <Input id="quantity" name="quantity" placeholder=" Enter Quantity" type="number" value={quantity} onChange={ (e)=>{setQuantity(e.target.value) }} />
            </Field>
          </FieldGroup>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
      </form>
        </DialogContent>
    </Dialog>
    </div>
  )
}

export default UpdateProductForm