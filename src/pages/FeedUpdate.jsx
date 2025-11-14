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
import { useEffect, useState } from "react";
import instance from "../axiox";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { ScaleLoader } from "react-spinners";
import { useForm } from "react-hook-form";

const FeedUpdate = () => {
  const { id } = useParams();
  const nav = useNavigate();
  const queryClient = useQueryClient();

  async function handleGetId() {
    const res = await instance.get(`/countries/${id}`);
    return res.data;
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function handleUpdate(countrie) {
    await instance.put(`/countries/${id}`, countrie);
  }

  const mutation = useMutation({
    mutationFn: handleUpdate,
    onSuccess: () => {
      toast.success("Information updated");
      queryClient.invalidateQueries(["getProduct"]);
      nav("/feed");
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
      <div className="min-h-screen bg-[#E3EFEA] dark:bg-[#101715] flex items-center justify-center">
        <ScaleLoader height={80} width={6} color="#CFE3C9" />
      </div>
    );

  if (error) return <h1 className="p-6 text-red-600">{error.message}</h1>;

  return (
    <div className="min-h-screen bg-[#E3EFEA] dark:bg-[#101715] flex items-center justify-center px-2 xs:px-3 sm:px-4 md:px-6 py-6 md:py-10">
      <Card className="w-full max-w-xl sm:max-w-2xl md:max-w-3xl shadow-xl rounded-2xl border border-gray-200 dark:border-[#3B6145] bg-white dark:bg-[#18211E]">
        <DialogHeader className="relative m-0 px-4 sm:px-6 pt-4 pb-2 border-b border-gray-200 dark:border-[#3B6145]">
          <Typography
            variant="h4"
            className="text-lg sm:text-xl md:text-2xl font-semibold text-[#0A2317] dark:text-[#A8D29B]"
          >
            Update Marine Animal
          </Typography>
        </DialogHeader>

        <DialogBody className="space-y-4 pb-6 px-4 sm:px-6 pt-4">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Image + Name */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="w-full md:w-1/2">
                <Typography
                  variant="small"
                  className="mb-2 text-left font-medium text-[#0A2317] dark:text-[#A8D29B]"
                >
                  Image
                </Typography>
                <Input
                  defaultValue={data.img}
                  {...register("img")}
                  color="gray"
                  size="lg"
                  placeholder="Image URL"
                  className="placeholder:opacity-80 text-sm sm:text-base
                             !border-[1.5px] !border-blue-gray-200/90
                             bg-white dark:bg-[#18211E]
                             text-[#0A2317] dark:text-[#A8D29B]
                             focus:!border-t-gray-900"
                  containerProps={{
                    className: "!min-w-full",
                  }}
                  labelProps={{
                    className: "hidden",
                  }}
                />
              </div>

              <div className="w-full md:w-1/2">
                <Typography
                  variant="small"
                  className="mb-2 text-left font-medium text-[#0A2317] dark:text-[#A8D29B]"
                >
                  Name
                </Typography>
                <Input
                  defaultValue={data.name}
                  {...register("name")}
                  color="gray"
                  size="lg"
                  placeholder="Name"
                  className="placeholder:opacity-80 text-sm sm:text-base
                             !border-[1.5px] !border-blue-gray-200/90
                             bg-white dark:bg-[#18211E]
                             text-[#0A2317] dark:text-[#A8D29B]
                             focus:!border-t-gray-900"
                  containerProps={{
                    className: "!min-w-full",
                  }}
                  labelProps={{
                    className: "hidden",
                  }}
                />
              </div>
            </div>

            {/* Place + Classes */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="w-full md:w-1/2">
                <Typography
                  variant="small"
                  className="mb-2 text-left font-medium text-[#0A2317] dark:text-[#A8D29B]"
                >
                  Place
                </Typography>
                <Input
                  defaultValue={data.place}
                  {...register("place")}
                  color="gray"
                  size="lg"
                  placeholder="Habitat / Location"
                  className="placeholder:opacity-80 text-sm sm:text-base
                             !border-[1.5px] !border-blue-gray-200/90
                             bg-white dark:bg-[#18211E]
                             text-[#0A2317] dark:text-[#A8D29B]
                             focus:!border-t-gray-900"
                  containerProps={{
                    className: "!min-w-full",
                  }}
                  labelProps={{
                    className: "hidden",
                  }}
                />
              </div>

              <div className="w-full md:w-1/2">
                <Typography
                  variant="small"
                  className="mb-2 text-left font-medium text-[#0A2317] dark:text-[#A8D29B]"
                >
                  Classes
                </Typography>
                <Input
                  defaultValue={data.classes}
                  {...register("classes")}
                  color="gray"
                  size="lg"
                  placeholder="e.g. Mammal, Fish"
                  className="placeholder:opacity-80 text-sm sm:text-base
                             !border-[1.5px] !border-blue-gray-200/90
                             bg-white dark:bg-[#18211E]
                             text-[#0A2317] dark:text-[#A8D29B]
                             focus:!border-t-gray-900"
                  containerProps={{
                    className: "!min-w-full",
                  }}
                  labelProps={{
                    className: "hidden",
                  }}
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
                defaultValue={data.desc}
                rows={6}
                placeholder="Short description about this marine animal."
                className="!w-full !border-[1.5px] !border-blue-gray-200/90
                           !border-t-blue-gray-200/90
                           bg-white dark:bg-[#18211E]
                           text-gray-700 dark:text-[#A8D29B]
                           placeholder:opacity-70
                           ring-4 ring-transparent
                           focus:!border-primary focus:!border-t-blue-gray-900
                           group-hover:!border-primary text-sm sm:text-base"
                labelProps={{
                  className: "hidden",
                }}
              />
            </div>

            <div className="flex justify-end pt-2">
              <Button
                className="px-6 py-2 text-sm sm:text-base bg-[#28604F] text-white
                           hover:bg-[#1f4a3d] transition-all duration-200
                           dark:bg-[#A8D29B] dark:text-[#3B6145]
                           dark:hover:bg-[#3B6145] dark:hover:text-[#A8D29B]"
                type="submit"
              >
                Update
              </Button>
            </div>
          </form>
        </DialogBody>
      </Card>
    </div>
  );
};

export default FeedUpdate;
