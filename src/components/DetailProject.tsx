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
import { Badge } from './ui/badge';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';
import { Download, ExternalLink } from 'lucide-react';
import Link from 'next/link';

export type ProjectImageType = {
  src: string;
  alt: string;
};

export type ProjectBadgeType = {
  label: string;
  className?: string;
};

export type LinkButtonType = { label: string; link: string };

interface DetailProjectProps {
  title: string;
  description: string;
  badges: ProjectBadgeType[];
  images: ProjectImageType[];
  download?: LinkButtonType;
  goIt?: LinkButtonType;
  projectVersion?: string;
}

export const DetailProject = ({
  title,
  description,
  badges,
  images,
  download,
  goIt,
  projectVersion,
}: DetailProjectProps) => {
  return (
    <section className="min-h-screen">
      <h2 className="text-center text-4xl my-8">{title}</h2>
      <div className="flex flex-wrap items-center justify-center mb-8">
        {badges.map((badge) => (
          <Badge
            key={badge.label}
            variant={'outline'}
            className={cn(badge.className, 'mx-0.5 mb-1')}
          >
            {badge.label}
          </Badge>
        ))}
      </div>
      <div className="flex flex-col justify-center items-center w-[80vw] mx-auto mb-8 ">
        <Carousel
          plugins={[
            Autoplay({
              delay: 10000,
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
                  width={1080}
                  height={720}
                  className="mx-auto"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="bg-background/50 left-1 border-primary rounded-sm" />
          <CarouselNext className="bg-background/50 right-1 border-primary rounded-sm" />
        </Carousel>
        <div className="md:w-8/12">
          <p className="my-8 text-center text-pretty md:mx-8">{description}</p>
          <div className="flex justify-center">
            {download && (
              <Link href={download.link} target="_self">
                <Button variant={'outline'}>
                  <span>{download.label}</span>
                  {projectVersion && (
                    <span
                      className="h-0 w-0 opacity-0 absolute"
                      id="projectVersion"
                    >
                      {projectVersion}
                    </span>
                  )}
                  <Download />
                </Button>
              </Link>
            )}
            {goIt && (
              <Link href={goIt.link} target="_blank">
                <Button variant={'default'}>
                  <span>{goIt.label}</span>
                  <ExternalLink />
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
