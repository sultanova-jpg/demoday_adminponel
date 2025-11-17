import {
  Input,
  Button,
  Card,
  Textarea,
  Typography,
  DialogBody,
  DialogHeader,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import instance from "../axiox";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useMutation, useQuery } from "@tanstack/react-query";
import { ScaleLoader } from "react-spinners";
import { useForm } from "react-hook-form";

const Update = () => {
  let { id } = useParams();

  async function handleGetId() {
    const res = await instance.get(`/animals/${id}`);
    return res.data;
  }

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  let nav = useNavigate();

  async function handleUpdate(animal) {
    await instance.put(`/animals/${id}`, animal);
  }

  const mutation = useMutation({
    mutationFn: handleUpdate,
    onSuccess: () => {
      toast.success("Information updated");
      nav("/animal");
      // queryClient.invalidateQueries(["getProduct"]);
    },
  });

  const onSubmit = (data) => {
    mutation.mutate(data);
  };

  const { isLoading, error, data } = useQuery({
    queryKey: ["getProductId"],
    queryFn: handleGetId,
  });

  if (isLoading)
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#E3EFEA] dark:bg-[#101715]">
        <ScaleLoader height={100} width={8} color="#CFE3C9" />
      </div>
    );

  if (error) return <h1 className="p-4 text-red-600">{error.message}</h1>;

  return (
    <div className="min-h-screen bg-[#E3EFEA] dark:bg-[#101715] flex justify-center px-3 sm:px-4 py-6 sm:py-10">
      {/* чтобы карточка была по центру и не липла к одной стороне */}
      <div className="w-full max-w-lg sm:max-w-2xl lg:max-w-3xl mx-auto">
        <Card className="w-full shadow-xl rounded-2xl border border-gray-200 
        dark:border-[#3B6145] bg-white dark:bg-[#18211E]">
          <DialogHeader className="relative m-0 px-4 sm:px-6 pt-5 pb-3 border-b
          border-gray-200 dark:border-[#3B6145]">
            <Typography
              variant="h4"
              className="text-[#0A2317] dark:text-[#A8D29B] font-semibold text-xl sm:text-2xl"
            >
              Update Animal
            </Typography>
          </DialogHeader>

          <DialogBody className="pb-6 px-4 sm:px-6 pt-4">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* image + name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div className="w-full">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="mb-2 text-left font-medium dark:text-[#A8D29B]"
                  >
                    Image
                  </Typography>
                  <Input
                    defaultValue={data.img}
                    {...register("img")}
                    color="gray"
                    size="lg"
                    placeholder="https://example.com/image.jpg"
                    className="placeholder:opacity-80 focus:!border-t-gray-900"
                    containerProps={{
                      className: "!min-w-full",
                    }}
                    labelProps={{
                      className: "hidden",
                    }}
                  />
                </div>

                <div className="w-full">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="mb-2 text-left font-medium dark:text-[#A8D29B]"
                  >
                    Name
                  </Typography>
                  <Input
                    defaultValue={data.name}
                    {...register("name")}
                    color="gray"
                    size="lg"
                    placeholder="eg. Fennec Fox"
                    className="placeholder:opacity-80 focus:!border-t-gray-900"
                    containerProps={{
                      className: "!min-w-full",
                    }}
                    labelProps={{
                      className: "hidden",
                    }}
                  />
                </div>
              </div>

              {/* place + classes */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div className="w-full">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="mb-2 text-left font-medium dark:text-[#A8D29B]"
                  >
                    Place
                  </Typography>
                  <Input
                    defaultValue={data.place}
                    {...register("place")}
                    color="gray"
                    size="lg"
                    placeholder="eg. Sahara Desert"
                    className="placeholder:opacity-80 focus:!border-t-gray-900"
                    containerProps={{
                      className: "!min-w-full",
                    }}
                    labelProps={{
                      className: "hidden",
                    }}
                  />
                </div>

                <div className="w-full">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="mb-2 text-left font-medium dark:text-[#A8D29B]"
                  >
                    Classes
                  </Typography>
                  <Input
                    defaultValue={data.classes}
                    {...register("classes")}
                    color="gray"
                    size="lg"
                    placeholder="eg. Mammal"
                    className="placeholder:opacity-80 focus:!border-t-gray-900"
                    containerProps={{
                      className: "!min-w-full",
                    }}
                    labelProps={{
                      className: "hidden",
                    }}
                  />
                </div>
              </div>

              {/* description */}
              <div>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="mb-2 text-left font-medium dark:text-[#A8D29B]"
                >
                  Description (Optional)
                </Typography>
                <Textarea
                  {...register("desc")}
                  defaultValue={data.desc}
                  rows={5}
                  placeholder="Short description about the animal..."
                  className="
                    !w-full !border-[1.5px] !border-blue-gray-200/90
                    !border-t-blue-gray-200/90 bg-white text-gray-600
                    ring-4 ring-transparent focus:!border-primary focus:!border-t-blue-gray-900
                    group-hover:!border-primary
                    dark:bg-[#101715] dark:text-[#E3EFEA]
                  "
                  labelProps={{
                    className: "hidden",
                  }}
                />
              </div>

              {/* кнопка */}
              <div className="flex justify-end pt-2">
                <Button
                  className="bg-[#28604F] text-white rounded-full px-6 py-2 text-sm sm:text-base
                    hover:bg-[#1f4a3d] transition-all duration-300
                    dark:bg-[#A8D29B] dark:text-[#3B6145]
                    dark:hover:bg-[#3B6145] dark:hover:text-[#A8D29B]"
                  type="submit"
                >
                  Save Changes
                </Button>
              </div>
            </form>
          </DialogBody>
        </Card>
      </div>
    </div>
  );
};

export default Update;
