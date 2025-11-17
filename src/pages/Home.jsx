import { Link } from "react-router-dom";
import icon1 from "./../../public/icon1.png";
import icon2 from "./../../public/icon2.png";
import icon3 from "./../../public/icon3.png";
import turtule from "./../../public/turtule.png";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import { ScaleLoader } from "react-spinners";
import { motion } from "framer-motion";
import instance from "../axiox";
import { CarouselWithContent } from "../components/Carusel";
import { useQuery } from "@tanstack/react-query";

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

  const {
    isLoading: isLoading1,
    error: error1,
    data: data1,
  } = useQuery({
    queryKey: ["getFeed"],
    queryFn: handleFeed,
  });

  // if (isLoading)
  //   return (
  //     <div className="min-h-screen flex items-center justify-center bg-[#E3EFEA] dark:bg-[#101715]">
  //       <ScaleLoader height={80} width={6} color="#CFE3C9" />
  //     </div>
  //   );

  if (error) return <h1 className="p-4 text-red-600">{error.message}</h1>;

  return (
    <div className="bg-[#E3EFEA] min-h-screen text-[#0A2317] dark:bg-[#101715]">
      {/* HERO */}
      <section className="relative bg-[#5f8576] dark:bg-[#264d3d]">
        <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-6 lg:gap-10 px-3 xs:px-4 sm:px-6 md:px-10 py-10 md:py-16 lg:py-20">
          {/* текст */}
          <div className="z-10 relative w-full lg:w-1/2 text-center lg:text-left">
            <h1 className="font-bold mb-4 text-white drop-shadow-md dark:text-[#A8D29B] text-2xl xs:text-3xl sm:text-4xl md:text-4xl lg:text-5xl 2xl:text-5xl leading-tight">
              Explore the Animal Kingdom
            </h1>
            <p className="text-white mb-6 opacity-90 dark:text-[#A8D29B] text-sm sm:text-base md:text-lg">
              Discover fascinating facts about animals from all around the world.
            </p>
            <Link to={"/animal"}>
              <Button
                className="
                  bg-[#28604F] text-white
                  rounded-full shadow-md
                  hover:bg-[#ffff] hover:text-[#28604F]
                  transition-all duration-300
                  dark:bg-[#A8D29B] dark:text-[#3B6145]
                  dark:hover:bg-[#3B6145] dark:hover:text-[#A8D29B]
                  w-full xs:w-auto px-6 sm:px-8 py-2.5 sm:py-3
                  text-sm sm:text-base lg:text-lg
                "
              >
                EXPLORE ANIMALS
              </Button>
            </Link>
          </div>

          {/* картинка */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src={turtule}
              alt="turtle"
              className="
                w-full max-w-[420px] sm:max-w-[520px] md:max-w-[620px] lg:max-w-[480px]
                h-auto object-contain
              "
            />
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="py-10 sm:py-12 px-3 xs:px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <h5 className="text-xl sm:text-2xl font-semibold mb-6 dark:text-[#A8D29B]">
            Categories
          </h5>
          <ul className="flex flex-wrap justify-center gap-6 sm:gap-10">
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
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.25 }}
                className="text-center"
              >
                <li
                  className="
                    flex items-center justify-center
                    rounded-full shadow-md
                    w-20 h-20 xs:w-24 xs:h-24 sm:w-28 sm:h-28
                    dark:text-[#5B7F69]
                  "
                  style={{ backgroundColor: item.bg }}
                >
                  <img
                    src={item.img}
                    alt={item.label}
                    className="w-10 h-10 xs:w-12 xs:h-12 sm:w-16 sm:h-16"
                  />
                </li>
                <p className="mt-2 text-sm sm:text-lg font-medium dark:text-[#A8D29B]">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </ul>
        </div>
      </section>

      {/* ANIMALS */}
      <section className="px-3 xs:px-4 sm:px-6 py-10 sm:py-12">
        <div className="max-w-6xl mx-auto">
          <h5 className="text-xl sm:text-2xl font-semibold mb-6 dark:text-[#A8D29B]">
            Animals
          </h5>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {data?.slice(0, 3).map((animal) => (
              <motion.div
                key={animal.id}
                whileHover={{ scale: 1.03, y: -4 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <Card className="shadow-lg border border-gray-200 rounded-xl overflow-hidden bg-white dark:bg-[#18211E] dark:border-none">
                  <CardHeader shadow={false} floated={false} className="h-52 sm:h-64 md:h-72">
                    <img
                      src={animal.img}
                      alt={animal.name}
                      className="h-full w-full object-cover"
                    />
                  </CardHeader>
                  <CardBody className="p-4 sm:p-5">
                    <Typography
                      color="blue-gray"
                      className="font-medium text-base sm:text-lg mb-2 dark:text-[#A8D29B]"
                    >
                      {animal.name}
                    </Typography>
                    <div className="mb-3 flex flex-wrap gap-2">
                      <Button
                        ripple={false}
                        className="
                          bg-[#E8D8B4] text-[#0A2317]
                          rounded-full px-3 sm:px-4 py-1
                          text-xs sm:text-sm
                          dark:text-[#A8D29B] dark:bg-[#3B6145]
                        "
                      >
                        {animal.place}
                      </Button>
                      <Button
                        ripple={false}
                        className="
                          bg-[#CFE3C9] text-[#0A2317]
                          rounded-full px-3 sm:px-4 py-1
                          text-xs sm:text-sm
                          dark:bg-[#3B6145] dark:text-[#A8D29B]
                        "
                      >
                        {animal.classes}
                      </Button>
                    </div>
                    <Typography
                      variant="small"
                      color="gray"
                      className="opacity-75 text-xs sm:text-sm leading-relaxed dark:text-[#A8D29B]"
                    >
                      {animal.desc}
                    </Typography>
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </div>

          <Link to={"/animal"}>
            <div className="mt-10 sm:mt-12 text-center">
              <button
                className="
                  bg-[#28604F] text-white
                  rounded-full shadow-md
                  hover:bg-[#1f4a3d]
                  transition-all duration-300
                  dark:bg-[#A8D29B] dark:text-[#3B6145]
                  dark:hover:text-[#A8D29B] dark:hover:bg-[#3B6145]
                  w-full xs:w-auto px-6 sm:px-10 py-2.5 sm:py-3
                  text-sm sm:text-lg
                "
              >
                See All
              </button>
            </div>
          </Link>
        </div>
      </section>

      {/* CAROUSEL */}
      <section className="px-3 xs:px-4 sm:px-6 py-8 sm:py-10">
        <div className="max-w-6xl mx-auto">
          <CarouselWithContent />
        </div>
      </section>

      {/* FEEDS */}
      <section className="px-3 xs:px-4 sm:px-6 py-10 sm:py-12">
        <div className="max-w-6xl mx-auto">
          <h5 className="text-xl sm:text-2xl font-semibold mb-6 dark:text-[#A8D29B]">
            Feeds
          </h5>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {data1?.slice(0, 3).map((country) => (
              <motion.div
                key={country.id}
                whileHover={{ scale: 1.03, y: -4 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <Card className="shadow-lg border border-gray-200 rounded-xl overflow-hidden bg-white dark:bg-[#18211E] dark:border-none">
                  <CardHeader shadow={false} floated={false} className="h-52 sm:h-64 md:h-72">
                    <img
                      src={country.img}
                      alt={country.name}
                      className="h-full w-full object-cover"
                    />
                  </CardHeader>
                  <CardBody className="p-4 sm:p-5">
                    <Typography
                      color="blue-gray"
                      className="font-medium text-base sm:text-lg mb-2 dark:text-[#A8D29B]"
                    >
                      {country.name}
                    </Typography>
                    <Typography
                      color="blue-gray"
                      className="font-medium text-sm sm:text-md mb-1 dark:text-[#A8D29B]"
                    >
                      {country.place}
                    </Typography>
                    <Typography
                      color="blue-gray"
                      className="font-medium text-sm sm:text-md mb-2 dark:text-[#A8D29B]"
                    >
                      {country.classes}
                    </Typography>
                    <Typography
                      variant="small"
                      color="gray"
                      className="opacity-75 text-xs sm:text-sm leading-relaxed dark:text-[#A8D29B]"
                    >
                      {country.desc}
                    </Typography>
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </div>

          <Link to={"/feed"}>
            <div className="mt-10 sm:mt-12 text-center">
              <button
                className="
                  bg-[#28604F] text-white
                  rounded-full shadow-md
                  hover:bg-[#1f4a3d]
                  transition-all duration-300
                  dark:bg-[#A8D29B] dark:text-[#3B6145]
                  dark:hover:text-[#A8D29B] dark:hover:bg-[#3B6145]
                  w-full xs:w-auto px-6 sm:px-10 py-2.5 sm:py-3
                  text-sm sm:text-lg
                "
              >
                See All
              </button>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
