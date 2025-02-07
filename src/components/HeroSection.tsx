import Image from 'next/image';
import { AspectRatio } from './ui/aspect-ratio';
import ProfileImg from '@/../public/profile-cartoon.png';
import { Button } from './ui/button';
import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa';
import { Download } from 'lucide-react';

export const HeroSection = () => {
  return (
    <main className=" flex flex-col items-center justify-center bg-background text-foreground min-h-screen w-[80vw] max-w-screen-lg mx-auto">
      <h1 className="text-4xl font-bold mb-4 text-center md:text-5xl">
        Front-End / FullStack Web & Mobile Developer
      </h1>
      <p className="text-xl mb-8 md:text-2xl">Desarrollador Full Stack</p>
      <div className="w-80 justify-self-end ">
        <AspectRatio ratio={1}>
          <Image
            src={ProfileImg}
            alt="Profile Image"
            className="rounded-md object-cover drop-shadow-cm"
          />
        </AspectRatio>
        <div className="flex justify-around mt-8">
          <Link
            href={
              'https://pub-001b6d146cb14cfcac56c049c5d435f1.r2.dev/Juan_Pablo_Leon_CV.pdf'
            }
            target="_blank"
          >
            <Button
              variant="outline"
              className="shadow-none hover:bg-background hover:border-primary min-w-32 "
            >
              Get CV <Download />
            </Button>
          </Link>
          <Link href={'https://wa.me/573124134220'} target="_blank">
            <Button
              variant="outline"
              className="shadow-none hover:bg-background hover:border-primary min-w-32 "
            >
              Talk to me <FaWhatsapp />
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
};
