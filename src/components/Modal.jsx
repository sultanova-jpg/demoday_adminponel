import {
  Input,
  Button,
  Dialog,
  Textarea,
  IconButton,
  Typography,
  DialogBody,
  DialogHeader,
} from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import React from "react";
import instance from "../axiox";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const Modal = () => {
  const queryClient = useQueryClient();

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(!open);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function handleCreate(animal) {
    await instance.post("/animals", animal);
  }

  const mutation = useMutation({
    mutationFn: handleCreate,
    onSuccess: () => {
      toast.success("Information created");
      queryClient.invalidateQueries(["getProduct"]);
    },
  });

  const onSubmit = (data) => {
    mutation.mutate(data);
  };

  return (
    <div>
      <Button
        onClick={handleOpen}
        className="
          mt-[70px]
          bg-[#28604F] text-white text-sm
          px-5 py-2 rounded-full shadow-md
          hover:bg-[#1f4a3d] transition-all duration-200
          dark:bg-[#A8D29B] dark:text-[#18211E]
          dark:hover:bg-[#3B6145] dark:hover:text-[#A8D29B]
        "
      >
        Add Product
      </Button>

      <Dialog
        size="sm"
        open={open}
        handler={handleOpen}
        className="
          p-4
          bg-white dark:bg-[#18211E]
          text-[#0A2317] dark:text-[#A8D29B]
          border border-gray-200/70 dark:border-[#3B6145]
          rounded-2xl shadow-xl
        "
      >
        <DialogHeader className="relative m-0 block pb-2 border-b border-gray-200/70 dark:border-[#3B6145]">
          <Typography
            variant="h4"
            className="text-[#0A2317] dark:text-[#A8D29B] font-semibold"
          >
            Add Product
          </Typography>

          <IconButton
            size="sm"
            variant="text"
            className="!absolute right-3.5 top-3.5 text-[#0A2317] dark:text-[#A8D29B]"
            onClick={handleOpen}
          >
            <XMarkIcon className="h-4 w-4 stroke-2" />
          </IconButton>
        </DialogHeader>

        {/* ------------ SCROLL ADDED HERE ------------- */}
        <DialogBody
          className="
            space-y-4 pb-4 pt-4
            max-h-[70vh] overflow-y-auto
            scrollbar-thin scrollbar-thumb-[#3B6145] scrollbar-track-transparent
          "
        >
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Image + Name */}
            <div className="flex gap-4 flex-col sm:flex-row">
              <div className="flex-1">
                <Typography
                  variant="small"
                  className="mb-2 text-left font-medium text-[#0A2317] dark:text-[#A8D29B]"
                >
                  Image
                </Typography>
                <Input
                  {...register("img")}
                  color="gray"
                  size="lg"
                  placeholder="https://example.com/image.jpg"
                  className="
                    placeholder:opacity-70
                    !border-[1.5px] !border-blue-gray-200/80
                    focus:!border-[#28604F] focus:!border-t-[#28604F]
                    dark:!border-[#3B6145] dark:bg-[#101715]
                    dark:text-[#A8D29B]
                  "
                  labelProps={{ className: "hidden" }}
                  containerProps={{ className: "!min-w-full" }}
                />
              </div>

              <div className="flex-1">
                <Typography
                  variant="small"
                  className="mb-2 text-left font-medium text-[#0A2317] dark:text-[#A8D29B]"
                >
                  Name
                </Typography>
                <Input
                  {...register("name")}
                  color="gray"
                  size="lg"
                  placeholder="Blue Whale"
                  className="
                    placeholder:opacity-70
                    !border-[1.5px] !border-blue-gray-200/80
                    focus:!border-[#28604F] focus:!border-t-[#28604F]
                    dark:!border-[#3B6145] dark:bg-[#101715]
                    dark:text-[#A8D29B]
                  "
                  labelProps={{ className: "hidden" }}
                  containerProps={{ className: "!min-w-full" }}
                />
              </div>
            </div>

            {/* Place + Classes */}
            <div className="flex gap-4 flex-col sm:flex-row">
              <div className="flex-1">
                <Typography
                  variant="small"
                  className="mb-2 text-left font-medium text-[#0A2317] dark:text-[#A8D29B]"
                >
                  Place
                </Typography>
                <Input
                  {...register("place")}
                  color="gray"
                  size="lg"
                  placeholder="Open ocean"
                  className="
                    placeholder:opacity-70
                    !border-[1.5px] !border-blue-gray-200/80
                    focus:!border-[#28604F] focus:!border-t-[#28604F]
                    dark:!border-[#3B6145] dark:bg-[#101715]
                    dark:text-[#A8D29B]
                  "
                  labelProps={{ className: "hidden" }}
                  containerProps={{ className: "!min-w-full" }}
                />
              </div>

              <div className="flex-1">
                <Typography
                  variant="small"
                  className="mb-2 text-left font-medium text-[#0A2317] dark:text-[#A8D29B]"
                >
                  Classes
                </Typography>
                <Input
                  {...register("classes")}
                  color="gray"
                  size="lg"
                  placeholder="Mammalia"
                  className="
                    placeholder:opacity-70
                    !border-[1.5px] !border-blue-gray-200/80
                    focus:!border-[#28604F] focus:!border-t-[#28604F]
                    dark:!border-[#3B6145] dark:bg-[#101715]
                    dark:text-[#A8D29B]
                  "
                  labelProps={{ className: "hidden" }}
                  containerProps={{ className: "!min-w-full" }}
                />
              </div>
            </div>

            {/* Description */}
            <div>
              <Typography
                variant="small"
                className="mb-2 text-left font-medium text-[#0A2317] dark:text-[#A8D29B]"
              >
                Description (Optional)
              </Typography>
              <Textarea
                {...register("desc")}
                rows={6}
                placeholder="Short description about this animal..."
                className="
                  !w-full !border-[1.5px] !border-blue-gray-200/80
                  !border-t-blue-gray-200/80 bg-white text-gray-700
                  ring-4 ring-transparent focus:!border-[#28604F] focus:!border-t-[#28604F]
                  dark:bg-[#101715] dark:text-[#A8D29B]
                  dark:!border-[#3B6145] dark:!border-t-[#3B6145]
                "
                labelProps={{ className: "hidden" }}
              />
            </div>

            {/* Submit button */}
            <div className="flex justify-end pt-2">
              <Button
                type="submit"
                className="
                  bg-[#28604F] text-white px-6 py-2 rounded-full
                  shadow-md hover:bg-[#1f4a3d] transition-all duration-200
                  dark:bg-[#A8D29B] dark:text-[#18211E]
                  dark:hover:bg-[#3B6145] dark:hover:text-[#A8D29B]
                "
                onClick={handleOpen}
              >
                Add Product
              </Button>
            </div>
          </form>
        </DialogBody>
      </Dialog>
    </div>
  );
};

export default Modal;
