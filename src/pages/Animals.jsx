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
    <div className="text-[10px] xs:text-[11px] sm:text-xs md:text-sm leading-relaxed text-[#0A2317] dark:text-[#A8D29B]">
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
            className="mt-1 block cursor-pointer text-[10px] xs:text-[11px] sm:text-xs font-medium text-[#28604F] hover:underline dark:text-[#A8D29B]"
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
      <div className="text-center pt-[150px] sm:pt-[200px] md:pt-[250px]">
        <ScaleLoader height={80} width={6} color="#CFE3C9" />
      </div>
    );

  if (error) return <h1>{error.message}</h1>;

  return (
    <div className="w-full min-h-screen bg-[#E3EFEA] dark:bg-[#101715] px-2 xs:px-3 sm:px-4 md:px-6 lg:px-8 py-4 md:py-8">
      <Card className="w-full max-w-6xl mx-auto shadow-xl rounded-2xl
       overflow-hidden border border-gray-200 dark:border-[#3B6145]
        bg-white dark:bg-[#18211E] transition-all duration-300">
        
        {/* Header */}
        <div className="px-3 xs:px-4 sm:px-6 py-3 sm:py-4 border-b border-gray-200 dark:border-[#3B6145] 
          flex items-center justify-between gap-2 bg-[#f8f9f7] dark:bg-[#1a2721]">
          <Typography
            variant="h5"
            className="text-sm xs:text-base sm:text-lg md:text-xl text-[#0A2317] dark:text-[#A8D29B] font-semibold"
          >
            🐾 Animals List
          </Typography>
          <div className="shrink-0">
            <Modal />
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left min-w-[600px]">
            <thead className="sticky top-0 bg-[#CFE3C9] dark:bg-[#3B6145] z-10">
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th
                    key={head}
                    className="p-2 xs:p-3 md:p-4 text-[9px] xs:text-[10px] sm:text-xs md:text-sm 
                    font-semibold uppercase tracking-wide text-[#0A2317] dark:text-[#A8D29B] 
                    border-b border-black/5 dark:border-white/10"
                  >
                    {head}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {(!data || data.length === 0) ? (
                <tr>
                  <td
                    colSpan={7}
                    className="p-6 sm:p-8 md:p-10 text-center text-[11px] sm:text-sm text-gray-500 dark:text-[#A8D29B]"
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
                    {/* Image */}
                    <td className="p-2 xs:p-3 md:p-4">
                      <img
                        src={animal.img}
                        alt={animal.name}
                        className="h-10 w-10 xs:h-11 xs:w-11 sm:h-12 sm:w-12 md:h-14 md:w-14 
                        rounded-lg object-cover shadow-md ring-1 ring-gray-300 dark:ring-[#3B6145]"
                      />
                    </td>

                    {/* Name */}
                    <td className="p-2 xs:p-3 md:p-4 align-top font-medium 
                      text-[11px] xs:text-xs sm:text-sm md:text-base text-[#0A2317] dark:text-[#A8D29B]">
                      {animal.name}
                    </td>

                    {/* Description */}
                    <td className="p-2 xs:p-3 md:p-4 align-top max-w-[140px] xs:max-w-[180px] sm:max-w-xs">
                      <div className="whitespace-pre-wrap break-words">
                        <DescriptionCell text={animal.desc} />
                      </div>
                    </td>

                    {/* Place */}
                    <td className="p-2 xs:p-3 md:p-4 align-top">
                      <span className="px-2 xs:px-3 py-[4px] xs:py-[5px] text-[9px] xs:text-[10px] sm:text-xs 
                        rounded-full bg-[#E8D8B4]/70 text-[#0A2317] ring-1 ring-black/5 
                        dark:bg-[#3B6145] dark:text-[#A8D29B]">
                        {animal.place}
                      </span>
                    </td>

                    {/* Class */}
                    <td className="p-2 xs:p-3 md:p-4 align-top">
                      <span className="px-2 xs:px-3 py-[4px] xs:py-[5px] text-[9px] xs:text-[10px] sm:text-xs 
                        rounded-full bg-[#CFE3C9]/70 text-[#0A2317] ring-1 ring-black/5 
                        dark:bg-[#3B6145] dark:text-[#A8D29B]">
                        {animal.classes}
                      </span>
                    </td>

                    {/* Update */}
                    <td className="p-2 xs:p-3 md:p-4 align-top">
                      <Link
                        to={`/animals/${animal.id}`}
                        className="text-[10px] xs:text-[11px] sm:text-xs md:text-sm 
                        text-[#28604F] font-semibold hover:underline dark:text-[#A8D29B]"
                      >
                        Update
                      </Link>
                    </td>

                    {/* Delete */}
                    <td className="p-2 xs:p-3 md:p-4 align-top">
                      <button
                        onClick={() => {
                          if (confirm(`Delete "${animal.name}"?`)) {
                            mutation.mutate(animal.id);
                          }
                        }}
                        className="text-[10px] xs:text-[11px] sm:text-xs md:text-sm 
                        font-semibold text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300"
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
