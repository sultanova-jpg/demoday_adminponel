import {
  Input,
  Option,
  Select,
  Button,
  Dialog,
  Textarea,
  IconButton,
  Typography,
  DialogBody,
  DialogHeader,
  DialogFooter,
} from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import instance from "../axiox";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Modal = () => {
const [open,  setOpen] = React.useState(false);
const handleOpen = () => setOpen(!open);

 
   const [img, setImg] = useState("")
  const [name, setName] = useState("")
  const [desc, setDesc] = useState("")
  const [place, setPlace] = useState("")
  const [classes, setClasses] = useState("")
 
let nav =useNavigate()
  
 
  return (
    
    <div>
        <Button onClick={handleOpen} variant="gradient" className="mt-14 ">
        Edit Product 
      </Button>
      <div className="">
      <Dialog size="sm" open={open} handler={handleOpen} className="p-4 ">
        <DialogHeader className="relative m-0 block">
          <Typography variant="h4" color="blue-gray">
            Add Product
          </Typography>
          
          <IconButton
            size="sm"
            variant="text"
            className="!absolute right-3.5 top-3.5"
            onClick={handleOpen}
          >
            <XMarkIcon className="h-4 w-4 stroke-2" />
          </IconButton>
        </DialogHeader>
        <DialogBody  className="space-y-4 pb-6">
            <form >
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
            onChange={(e)=> setImg(e.target.value)}
              color="gray"
              size="lg"
              placeholder="eg. White Shoes"
              name="name"
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
            onChange={(e)=> setName(e.target.value)}
              color="gray"
              size="lg"
              placeholder="eg. White Shoes"
              name="name"
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
            onChange={(e)=> setPlace(e.target.value)}
              color="gray"
              size="lg"
              placeholder="eg. White Shoes"
              name="name"
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
            onChange={(e)=> setClasses(e.target.value)}
              color="gray"
              size="lg"
              placeholder="eg. White Shoes"
              name="name"
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
            onChange={(e)=> setDesc(e.target.value)}
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
          
          <Button className="ml-auto" type="submit" onClick={handleOpen} >
            Add Product
          </Button>
            </form>
         
        </DialogBody>
    
        
      </Dialog>
      </div>
    </div>
  )
}

export default Modal