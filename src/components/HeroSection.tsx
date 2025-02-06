import Image from 'next/image';
import { AspectRatio } from './ui/aspect-ratio';
import ProfileImg from '@/../public/profile-cartoon.png';

export const HeroSection = () => {
  return (
    <main className=" flex flex-col items-center justify-center bg-background text-foreground min-h-screen w-[80vw] max-w-screen-lg mx-auto">
      <h1 className="text-4xl font-bold mb-4 text-center md:text-5xl">
        Front-End / FullStack Web & Mobile Developer
      </h1>
      <p className="text-xl mb-8 md:text-2xl">Desarrollador Full Stack</p>
      <div className="w-80 justify-self-end">
        <AspectRatio ratio={1}>
          <Image
            src={ProfileImg}
            alt="Profile Image"
            className="rounded-md object-cover drop-shadow-cm"
          />
        </AspectRatio>
      </div>
    </main>
  );
};
