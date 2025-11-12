import {
  Input,
  Button,
  Card,
  Textarea,
  Typography,
  DialogBody,
  DialogHeader,
} from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import  { useEffect, useState } from "react";
import instance from "../axiox";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useMutation, useQuery } from "@tanstack/react-query";
import { ScaleLoader } from "react-spinners";
import { useForm } from "react-hook-form";

const Update = () => {

  let {id} = useParams()
  async function handleGetId() {
    const res = await instance.get(`/animals/${id}`)
    return res.data
  }


const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

 

let nav =useNavigate()



 
async function  handleUpdate(animal) {
 await instance.put(`/animals/${id}`, animal)
}

const mutation = useMutation({
  mutationFn: handleUpdate,
  onSuccess:()=>{
    toast.success("Information updated")
    nav("/animal")
    queryClient.invalidateQueries(["getProduct"])
    
  }
})



const onSubmit = (data) =>{
  console.log(data);
  
  mutation.mutate(data)
};

const {isLoading, error, data} = useQuery({
 queryKey: ["getProductId"],
 queryFn: handleGetId
})


 
if (isLoading)
    return (
      <div className="text-center pt-[250px]">
        <ScaleLoader height={100} width={8} color="#CFE3C9" />
      </div>
    );

  if (error) return <h1>{error.message}</h1>;
 
  return (
    

        
     
    
        <Card className="ml-72 mt-20">
 <DialogHeader className="relative m-0 block">
          <Typography variant="h4" color="blue-gray">
            Add Product
          </Typography>
          
          
            
        </DialogHeader>
        <DialogBody  className="space-y-4 pb-6">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex gap-4">
          <div>
            <Typography
              variant="small"
              color="blue-gray"
              className="mb-2 text-left font-medium"
            >
              Image
            </Typography>
            <Input
            defaultValue={data.img}
            {...register("img")}
              color="gray"
              size="lg"
              placeholder="eg. White Shoes"
              className="placeholder:opacity-100 focus:!border-t-gray-900"
              containerProps={{
                className: "!min-w-full",
              }}
              labelProps={{
                className: "hidden",
              }}
            />
          </div>
          <div>
            <Typography
              variant="small"
              color="blue-gray"
              className="mb-2 text-left font-medium"
            >
              Name
            </Typography>
            <Input
            defaultValue={data.name}
            {...register("name")}
            
              color="gray"
              size="lg"
              placeholder="eg. White Shoes"
              className="placeholder:opacity-100 focus:!border-t-gray-900"
              containerProps={{
                className: "!min-w-full",
              }}
              labelProps={{
                className: "hidden",
              }}
            />
          </div>
          </div>


          <div className="flex gap-4">
          <div>
            <Typography
              variant="small"
              color="blue-gray"
              className="mb-2 text-left font-medium"
            >
              Place
            </Typography>
            <Input
            defaultValue={data.place}
            {...register("place")}
            
              color="gray"
              size="lg"
              placeholder="eg. White Shoes"
              className="placeholder:opacity-100 focus:!border-t-gray-900"
              containerProps={{
                className: "!min-w-full",
              }}
              labelProps={{
                className: "hidden",
              }}
            />
          </div>
          
            <div>
            <Typography
              variant="small"
              color="blue-gray"
              className="mb-2 text-left font-medium"
            >
              
              Classes
            </Typography>
            <Input
            defaultValue={data.classes}
            {...register("classes")}
              color="gray"
              size="lg"
              placeholder="eg. White Shoes"
              className="placeholder:opacity-100  focus:!border-t-gray-900"
              containerProps={{
                className: "!min-w-full",
              }}
              labelProps={{
                className: "hidden",
              }}
            />
          </div>
           </div>
          
          <div>
            <Typography
              variant="small"
              color="blue-gray"
              className="mb-2 text-left font-medium"
            >
              Description (Optional)
            </Typography>
            <Textarea
            {...register("desc")}
            defaultValue={data.desc}
              rows={7}
              placeholder="eg. This is a white shoes with a comfortable sole."
              className="!w-full !border-[1.5px] !border-blue-gray-200/90
               !border-t-blue-gray-200/90 bg-white text-gray-600 
               ring-4 ring-transparent focus:!border-primary focus:!border-t-blue-gray-900 
               group-hover:!border-primary"
              labelProps={{
                className: "hidden",
              }}
            />
          </div>
          
          <Button className="ml-auto"  type="submit">
            Add Product
          </Button>
            </form>
         
        </DialogBody>
    
        
        </Card>
       
      
 
  )
}

export default Update