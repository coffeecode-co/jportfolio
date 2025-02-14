'use client';

import Image from 'next/image';

import Autoplay from 'embla-carousel-autoplay';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel';

export type ProjectImageType = {
  src: string;
  alt: string;
};

interface DetailProjectProps {
  images: ProjectImageType[];
}

export const DetailProject = ({ images }: DetailProjectProps) => {
  return (
    <section className="flex flex-col justify-center items-center w-[80vw] mx-auto sm:flex-row">
      <Carousel
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
        opts={{
          loop: true,
        }}
      >
        <CarouselContent>
          {images.map((image) => (
            <CarouselItem key={image.alt}>
              <Image
                src={image.src}
                alt="project image"
                width={320}
                height={180}
                className="mx-auto"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="bg-transparent left-1 border-primary" />
        <CarouselNext className="bg-transparent right-1 border-primary" />
      </Carousel>
      <p className="my-8 sm:mx-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
        laudantium reprehenderit fugiat nostrum provident eaque quibusdam,
        cupiditate cum sequi deleniti iure, pariatur vitae placeat dolore ipsam
        qui earum vero maiores?
      </p>
    </section>
  );
};
