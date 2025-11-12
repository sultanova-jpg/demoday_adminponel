import { Carousel, Typography, Button } from "@material-tailwind/react";

import fox from "../../public/fox-imgmmm.jpg"
export function CarouselWithContent() {
  return (
    <Carousel className="rounded-xl mt-40 mb-40 w-[900px] ml-28 ">
      <div className="relative h-full w-full">
        <img
          src="https://media.istockphoto.com/id/2166572265/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%BF%D0%BE%D1%80%D1%82%D1%80%D0%B5%D1%82-%D0%BA%D0%B2%D0%BE%D0%BA%D0%BA%D0%B8-%D0%BA%D1%80%D1%83%D0%BF%D0%BD%D1%8B%D0%BC-%D0%BF%D0%BB%D0%B0%D0%BD%D0%BE%D0%BC-%D0%BD%D0%B0-%D0%BF%D0%BE%D0%BB%D0%B5.jpg?s=612x612&w=0&k=20&c=K3YJflZfmZ_ie5IdObEaOdFxurKA34RSnIGsGvq6gyE="
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl dark:text-[#A8D29B]"
            >
              Quokka
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80 dark:text-[#A8D29B]"
            >
              The quokka is a small marsupial of the kangaroo famili, about the
              size of a domestic cat, often called 'the happiest animal on EArth
              ' due to its 'smiling' face. It has thick gray-brown fur, rounded
              ears, and a short tail, and its 'smile' is caused by the
              relaxation of its jaw muscles.
            </Typography>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <img
          src="https://a-z-animals.com/media/animals/images/original/emperor_tamarin.jpg"
          alt="image 2"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
          <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl dark:text-[#A8D29B]"
            >
              Emperor Tamarin
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80 sm:text-lg dark:text-[#A8D29B]"
            >
              Emperor tamarins are small monkeys distinguished by their
              long,white mustaches that sweep back from their faces. They
              haveprimarily gray or speckled brown fur, with golden or
              reddishhighlights and a long, reddish-orange tail. These
              arborealprimates are native to the Amazon Basin and have claws,
              except forthe big toe, which aid in climbing.
            </Typography>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <img
          src={fox}
          alt="image 3"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-end bg-black/75">
          <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl dark:text-[#A8D29B]"
            >
              Fennec fox
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80 sm:text-base dark:text-[#A8D29B]"
            >
              The fennec fox is the smallest canid, known for its enormous
              earsthat help it dissipate heat and hear prey. It has a long,
              thick,sand-colored coat that insulates it from both hot days and
              coldnights, and hairy paws for walking on hot sand.
              Thesedesert-adapted animals are nocturnal, live in family groups
              inburrows, and get most of their water from their diet of
              insects,rodents, eggs, and plants.
            </Typography>
          </div>
        </div>
      </div>
    </Carousel>
  );
}
