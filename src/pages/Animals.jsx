import { Card, Typography, Button } from "@material-tailwind/react";
import { useState } from "react";
import instance from "../axiox";
import Modal from "../components/Modal";
import Edit from "../components/Edit";
import { Link } from "react-router-dom";
import { ScaleLoader } from "react-spinners";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

const TABLE_HEAD = ["Image", "Name", "Description", "Place", "Class", "Edit", "Delete"];

const DescriptionCell = ({ text }) => {
  const [expanded, setExpanded] = useState(false);
  if (!text) return null;

  const words = text.split(" ");
  const shortText = words.slice(0, 4).join(" ");
  const restText = words.slice(4).join(" ");
  const hasMore = words.length > 4;

  return (
    <div className="text-sm leading-relaxed text-[#0A2317] dark:text-[#A8D29B]">
      <span>{shortText}</span>
      {hasMore && !expanded && (
        <span
          className="ml-1 cursor-pointer text-[#28604F] font-medium hover:underline dark:text-[#A8D29B]"
          onClick={() => setExpanded(true)}
        >
          ...
        </span>
      )}
      {expanded && hasMore && (
        <div className="mt-2 rounded-lg bg-[#E3EFEA]/60 p-2 shadow-sm dark:bg-[#18211E]">
          <p>{restText}</p>
          <span
            onClick={() => setExpanded(false)}
            className="mt-1 block cursor-pointer text-sm font-medium text-[#28604F] hover:underline dark:text-[#A8D29B]"
          >
            Hide
          </span>
        </div>
      )}
    </div>
  );
};

const Animals = () => {
  const queryClient = useQueryClient();

  async function handleGet() {
    const response = await instance.get("/animals");
    return response.data;
  }

  async function handleDelite(id) {
    await instance.delete(`/animals/${id}`);
  }

  const { isLoading, error, data } = useQuery({
    queryKey: ["getProduct"],
    queryFn: handleGet,
  });

  const mutation = useMutation({
    mutationFn: handleDelite,
    onSuccess: () => {
      toast.success("Information deleted");
      queryClient.invalidateQueries(["getProduct"]);
    },
  });

  if (isLoading)
    return (
      <div className="text-center pt-[250px]">
        <ScaleLoader height={100} width={8} color="#CFE3C9" />
      </div>
    );

  if (error) return <h1>{error.message}</h1>;

  return (
    <div className="w-full bg-[#E3EFEA] dark:bg-[#101715] px-4 md:px-8 py-8">
      <Card className="w-full shadow-xl rounded-2xl
       overflow-hidden border border-gray-200 dark:border-[#3B6145]
        bg-white dark:bg-[#18211E] transition-all duration-300">
        
        <div className="px-6 py-4 border-b border-gray-200 dark:border-[#3B6145] flex
         justify-between items-center bg-[#f8f9f7] dark:bg-[#1a2721]">
          <Typography variant="h5" className="text-[#0A2317] dark:text-[#A8D29B] font-semibold">
            🐾 Animals List
          </Typography>
          <Modal />
        </div>

        <div className="overflow-x-auto pr-2">
          <table className="w-full text-left">
            <thead className="sticky top-0 bg-[#CFE3C9] dark:bg-[#3B6145] z-10">
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th
                    key={head}
                    className="p-4 text-sm font-semibold uppercase tracking-wide text-[#0A2317] dark:text-[#A8D29B] border-b border-black/5 dark:border-white/10"
                  >
                    {head}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.length === 0 ? (
                <tr>
                  <td
                    colSpan={7}
                    className="p-10 text-center text-gray-500 dark:text-[#A8D29B] text-sm"
                  >
                    No animals yet. Click <span className="font-semibold">Add</span> to create one 🐢
                  </td>
                </tr>
              ) : (
                data.map((animal, index) => (
                  <tr
                    key={animal.id}
                    className={`transition-all duration-200 border-b border-black/5 dark:border-white/10 ${
                      index % 2 === 0 ? "bg-white dark:bg-[#18211E]" : "bg-[#F7FAF7] dark:bg-[#1a2721]"
                    } hover:bg-[#E6F1EC] dark:hover:bg-[#243a2f]`}
                  >
                    <td className="p-4">
                      <img
                        src={animal.img}
                        alt={animal.name}
                        className="h-14 w-14 rounded-lg object-cover shadow-md ring-1 ring-gray-300 dark:ring-[#3B6145]"
                      />
                    </td>

                    <td className="p-4 align-top font-medium text-[#0A2317] dark:text-[#A8D29B]">
                      {animal.name}
                    </td>

                    <td className="p-4 align-top max-w-xs">
                      <div className="max-w-xs whitespace-pre-wrap break-words">
                        <DescriptionCell text={animal.desc} />
                      </div>
                    </td>

                    <td className="p-4 align-top">
                      <span className="px-3 py-[6px] text-[12px] rounded-full bg-[#E8D8B4]/70 text-[#0A2317] ring-1 ring-black/5 dark:bg-[#3B6145] dark:text-[#A8D29B]">
                        {animal.place}
                      </span>
                    </td>

                    <td className="p-4 align-top">
                      <span className="px-3 py-[6px] text-[12px] rounded-full bg-[#CFE3C9]/70 text-[#0A2317] ring-1 ring-black/5 dark:bg-[#3B6145] dark:text-[#A8D29B]">
                        {animal.classes}
                      </span>
                    </td>

                    <td className="p-4 align-top">
                      <Link
                        to={`/animals/${animal.id}`}
                        className="text-[#28604F] font-semibold hover:underline dark:text-[#A8D29B]"
                      >
                        Update
                      </Link>
                    </td>

                    <td className="p-4 align-top">
                      <button
                        onClick={() => {
                          if (confirm(`Delete "${animal.name}"?`)) {
                            mutation.mutate(animal.id);
                          }
                        }}
                        className="text-sm font-semibold text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};

export default Animals;
