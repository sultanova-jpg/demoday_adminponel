import { Link } from "react-router-dom";
import icon1 from "./../../public/icon1.png"
import icon2 from "./../../public/icon2.png"
import icon3 from "./../../public/icon3.png"
import turtule from "./../../public/turtule.png"
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";

import { ScaleLoader } from "react-spinners";
import { motion } from "framer-motion";
import instance from "../axiox";
import { CarouselWithContent } from "../components/Carusel";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const Home = () => {
     
 
 
  async function handleGet() {
  const response = await instance.get("/animals");
  return response.data;
}
 const { isLoading, error, data } = useQuery({
    queryKey: ["getProduct"],
    queryFn: handleGet,
  });
  

  



 async function handleFeed() {
  const response = await instance.get("/countries");
  return response.data;
}
const { isLoading: isLoading1, error: error1, data:data1 } = useQuery({
    queryKey: ["getFeed"],
    queryFn: handleFeed,
  });

  


  



  if (isLoading)
    return (
      <div className="text-center pt-[250px] mx-auto">
        <ScaleLoader height={100} width={8} color="#CFE3C9" />
      </div>
    );

  if (error) return <h1>{error.message}</h1>;

  return (
    <div>
      <div className="bg-[#E3EFEA] min-h-screen text-[#0A2317] dark:bg-[#101715]">
      <section className="relative bg-cover bg-center h-[600px] flex flex-col justify-center
       px-10 text-left bg-[#5f8576] min-h-screen dark:bg-[#264d3d] ">
        <div className="flex xl:flex-row 2xl:flex-row lg:flex-col items-center  md:flex-col sm:flex-col">
        <div className="z-10 relative max-w-xl lg:ml-28 md:text-center lg:mr-32 sm:text-center">
          <h1 className="2xl:text-5xl font-bold leading-tight mb-4  text-white drop-shadow-md dark:text-[#A8D29B] 
          lg:mt-20 sm:mt-20 md:text-4xl sm:text-4xl ">
            Explore the Animal Kingdom
          </h1>
          <p className="text-white mb-6 text-lg opacity-90 sm:text-sm dark:text-[#A8D29B]">
            Discover fascinating facts about animals from all around the world.
          </p>
          <Link to={"/animal"}>
            <Button className="bg-[#28604F] text-white text-lg px-8 py-3 rounded-full 
            shadow-md hover:bg-[#ffff] hover:text-[#28604F] transition-all duration-300 dark:bg-[#A8D29B]
             dark:text-[#3B6145]
             dark:hover:bg-[#3B6145] dark:hover:text-[#A8D29B] sm:w-44 sm:text-xs 2xl:w-72 2xl:text-sm">
              EXPLORE ANIMALS
            </Button>
          </Link>
        </div>
        <img src={turtule} className="w-[810px] h-[710px] xl:w-[490px] xl:h-[400px] lg:w-[480px] lg:h-[380px]
        md:w-[480px] md:h-[400px] sm:w-[480px] sm:h-[400px]" alt="" />
        </div>
      </section>

      <section className="py-12 px-6">
        <h5 className="text-2xl font-semibold mb-6 dark:text-[#A8D29B]">Categories</h5>
        <ul className="flex justify-center gap-10">
          {[
            {
              img: icon1,
              bg: "#DCC9A1",
              label: "Africa",
            },
            {
              img: icon2,
              bg: "#A3C6C4",
              label: "Classes",
            },
            {
              img: icon3,
              bg: "#8BA888",
              label: "Sizes",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
              className="text-center"
            >
              <li
                className="flex items-center justify-center rounded-full w-28 h-28 mx-auto shadow-md
                 dark:text-[#5B7F69]"
                style={{ backgroundColor: item.bg }}
              >
                <img src={item.img} alt={item.label} className="w-16 h-16 dark:text-[#5B7F69]" />
              </li>
              <p className="mt-2 text-lg font-medium dark:text-[#A8D29B]">{item.label}</p>
            </motion.div>
          ))}
        </ul>
      </section>

      <section className="px-6 py-12">
        <h5 className="text-2xl font-semibold mb-6 dark:text-[#A8D29B]">Animals</h5>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data?.slice(0, 3).map((animal) => (
            <motion.div
              key={animal.id}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <Card className="shadow-lg border border-gray-200 rounded-xl overflow-hidden
               bg-white dark:bg-[#18211E] dark:border-none">
                <CardHeader shadow={false} floated={false} className="h-72">
                  <img
                    src={animal.img}
                    alt="card-image"
                    className="h-full w-full object-cover"
                  />
                </CardHeader>
                <CardBody>
                  <Typography
                    color="blue-gray"
                    className="font-medium text-lg mb-2 dark:text-[#A8D29B]"
                  >
                    {animal.name}
                  </Typography>
                  <div className="mb-3 flex gap-2">
                    <Button
                      ripple={false}
                      className="bg-[#E8D8B4] text-[#0A2317] 
                    rounded-full px-4 py-1 text-sm dark:text-[#A8D29B] dark:bg-[#3B6145] "
                    >
                      {animal.place}
                    </Button>
                    <Button
                      ripple={false}
                      className="bg-[#CFE3C9] text-[#0A2317] rounded-full px-4 py-1 text-sm dark:bg-[#3B6145] dark:text-[#A8D29B]"
                    >
                      {animal.classes}
                    </Button>
                  </div>
                  <Typography
                    variant="small"
                    color="gray"
                    className="opacity-75 text-sm leading-relaxed dark:text-[#A8D29B]"
                  >
                    {animal.desc}
                  </Typography>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </div>

        <Link to={"/animal"}>
          <div className="mt-16 text-center">
            <button className="bg-[#28604F] text-white text-lg px-10 py-3 rounded-full shadow-md
             hover:bg-[#1f4a3d] transition-all duration-300 dark:bg-[#A8D29B] dark:text-[#3B6145]
             dark:hover:text-[#A8D29B] dark:hover:bg-[#3B6145]">
              See All
            </button>
          </div>
        </Link>
      </section>

      <section className="">
        <CarouselWithContent/>
      </section>

      <section className="px-6 py-12">
        <h5 className="text-2xl font-semibold mb-6">Feeds</h5>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data1?.slice(0, 3).map((country) => (
            <motion.div
              key={country.id}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <Card className="shadow-lg border border-gray-200 rounded-xl overflow-hidden 
              bg-white dark:bg-[#18211E] dark:border-none">
                <CardHeader shadow={false} floated={false} className="h-72">
                  <img
                    src={country.img}
                    alt="card-image"
                    className="h-full w-full object-cover"
                  />
                </CardHeader>
                <CardBody>
                  <Typography
                    color="blue-gray"
                    className="font-medium text-lg mb-2  dark:text-[#A8D29B]"
                  >
                    {country.name}
                  </Typography>
                  <Typography
                    color="blue-gray"
                    className="font-medium text-md mb-2  dark:text-[#A8D29B]"
                  >
                    {country.place}
                  </Typography>
                  <Typography
                    color="blue-gray"
                    className="font-medium text-md mb-2  dark:text-[#A8D29B]"
                  >
                    {country.classes}
                  </Typography>
                  <Typography
                    variant="small"
                    color="gray"
                    className="opacity-75 text-sm leading-relaxed  dark:text-[#A8D29B]"
                  >
                    {country.desc}
                  </Typography>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </div>

        <Link to={"/feed"}>
          <div className="mt-16 text-center">
            <button className="bg-[#28604F] text-white text-lg px-10 py-3 rounded-full 
            shadow-md hover:bg-[#1f4a3d] transition-all duration-300 dark:bg-[#A8D29B] dark:text-[#3B6145]
             dark:hover:text-[#A8D29B] dark:hover:bg-[#3B6145]">  
                See All
            </button>
          </div>
        </Link>
      </section>
    </div>
    </div>
  )
}

export default Home