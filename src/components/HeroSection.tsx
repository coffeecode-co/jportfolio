import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { AspectRatio } from './ui/aspect-ratio';
import { Button } from './ui/button';
import { FaWhatsapp } from 'react-icons/fa';
import { Download } from 'lucide-react';

import ProfileImg from '@/../public/profile-cartoon.png';

export const HeroSection = () => {
  const t = useTranslations('HeroSection');
  return (
    <main className=" flex flex-col items-center justify-center bg-background text-foreground min-h-screen w-[80vw] max-w-screen-lg mx-auto">
      <h1 className="text-4xl font-bold mb-4 text-center md:text-5xl">
        {t('title')}
      </h1>
      <p className="text-xl mb-8 md:text-2xl">{t('subtitle')}</p>
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
              className="shadow-none hover:bg-background hover:border-primary min-w-32 w-1/2 mx-2"
            >
              {t('cvBtn')}
              <Download />
            </Button>
          </Link>
          <Link href={'https://wa.me/573124134220'} target="_blank">
            <Button
              variant="outline"
              className="shadow-none hover:bg-background hover:border-primary min-w-32 w-1/2 mx-2"
            >
              {t('wppBtn')}
              <FaWhatsapp />
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
};
