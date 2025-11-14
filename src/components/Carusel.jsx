import { Carousel, Typography } from "@material-tailwind/react";
import fox from "../../public/fox-imgmmm.jpg";

export function CarouselWithContent() {
  return (
    <Carousel
      className="
        rounded-2xl
        mt-20 mb-20
        w-full max-w-5xl mx-auto
        shadow-xl overflow-hidden
      "
    >
      {/* Slide 1 – Quokka */}
      <div className="relative h-[380px] sm:h-[420px] md:h-[460px] lg:h-[500px] w-full">
        <img
          src="https://media.istockphoto.com/id/2166572265/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%BF%D0%BE%D1%80%D1%82%D1%80%D0%B5%D1%82-%D0%BA%D0%B2%D0%BE%D0%BA%D0%BA%D0%B8-%D0%BA%D1%80%D1%83%D0%BF%D0%BD%D1%8B%D0%BC-%D0%BF%D0%BB%D0%B0%D0%BD%D0%BE%D0%BC-%D0%BD%D0%B0-%D0%BF%D0%BE%D0%BB%D0%B5.jpg?s=612x612&w=0&k=20&c=K3YJflZfmZ_ie5IdObEaOdFxurKA34RSnIGsGvq6gyE="
          alt="Quokka"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/70">
          <div className="w-10/12 md:w-2/3 text-center">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold dark:text-[#A8D29B]"
            >
              Quokka
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-4 sm:mb-6 text-sm sm:text-base md:text-lg opacity-80 dark:text-[#A8D29B]"
            >
              The quokka is a small marsupial native to Australia. 
              Known as “the happiest animal on Earth,” it is famous for its natural smile, 
              round ears, and soft grey-brown fur. These gentle and curious animals live 
              on islands with warm climates and spend most of their time foraging for leaves and grasses.
            </Typography>
          </div>
        </div>
      </div>

      {/* Slide 2 – Emperor Tamarin */}
      <div className="relative h-[380px] sm:h-[420px] md:h-[460px] lg:h-[500px] w-full">
        <img
          src="https://a-z-animals.com/media/animals/images/original/emperor_tamarin.jpg"
          alt="Emperor Tamarin"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-center bg-black/70">
          <div className="w-11/12 sm:w-4/5 md:w-2/3 lg:w-1/2 pl-6 sm:pl-10 md:pl-16 lg:pl-24">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold dark:text-[#A8D29B]"
            >
              Emperor Tamarin
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-4 sm:mb-6 text-sm sm:text-base md:text-lg opacity-80 dark:text-[#A8D29B]"
            >
              The emperor tamarin is a small monkey from the Amazon rainforest, 
              easily recognized by its long, elegant white mustache. 
              Its fur is a mix of grey, brown, and reddish shades, and it moves 
              quickly through the treetops using its long tail for balance. 
              These intelligent primates live in social groups and communicate 
              with a variety of calls.
            </Typography>
          </div>
        </div>
      </div>

      {/* Slide 3 – Fennec Fox */}
      <div className="relative h-[380px] sm:h-[420px] md:h-[460px] lg:h-[500px] w-full">
        <img
          src={fox}
          alt="Fennec Fox"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-end bg-black/70">
          <div className="w-11/12 sm:w-4/5 md:w-2/3 lg:w-1/2 pl-6 sm:pl-10 md:pl-16 lg:pl-24 pb-8 sm:pb-10 md:pb-14 lg:pb-16">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold dark:text-[#A8D29B]"
            >
              Fennec Fox
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-4 sm:mb-6 text-sm sm:text-base md:text-lg opacity-80 dark:text-[#A8D29B]"
            >
              The fennec fox is the smallest fox in the world and lives in the Sahara Desert. 
              Its oversized ears help release heat and allow it to hear even underground movements. 
              With thick, sand-colored fur and furry paws, it is perfectly adapted to survive 
              in extreme desert temperatures. Fennec foxes are active at night 
              and live in small family groups in deep burrows.
            </Typography>
          </div>
        </div>
      </div>
    </Carousel>
  );
}
