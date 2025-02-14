'use client';

import { useTranslations } from 'next-intl';
import {
  IoLogoReact,
  IoLogoIonic,
  IoLogoHtml5,
  IoLogoNodejs,
} from 'react-icons/io5';
import {
  SiApachecordova,
  SiJquery,
  SiTailwindcss,
  SiChromewebstore,
} from 'react-icons/si';
import { RiJavascriptLine } from 'react-icons/ri';
import { TbBrandTypescript } from 'react-icons/tb';
import { FaCss3 } from 'react-icons/fa6';
import { motion } from 'motion/react';

interface Skill {
  name: string;
  Icon:
    | typeof RiJavascriptLine
    | typeof TbBrandTypescript
    | typeof IoLogoReact
    | typeof IoLogoIonic
    | typeof SiApachecordova
    | typeof SiJquery
    | typeof IoLogoHtml5
    | typeof IoLogoNodejs
    | typeof FaCss3
    | typeof SiTailwindcss
    | typeof SiChromewebstore;
}

const skills: Skill[] = [
  {
    name: 'JavaScript',
    Icon: RiJavascriptLine,
  },
  {
    name: 'TypeScript',
    Icon: TbBrandTypescript,
  },
  {
    name: 'React',
    Icon: IoLogoReact,
  },
  {
    name: 'Ionic',
    Icon: IoLogoIonic,
  },
  {
    name: 'Apache Cordova',
    Icon: SiApachecordova,
  },
  {
    name: 'jQuery',
    Icon: SiJquery,
  },
  {
    name: 'HTML5',
    Icon: IoLogoHtml5,
  },
  {
    name: 'Node.js',
    Icon: IoLogoNodejs,
  },
  {
    name: 'CSS Wizardry',
    Icon: FaCss3,
  },
  {
    name: 'Tailwind CSS',
    Icon: SiTailwindcss,
  },
  {
    name: 'Chrome Webstore',
    Icon: SiChromewebstore,
  },
];

export const MySkills = () => {
  const t = useTranslations('MySkills');
  return (
    <section className="py-10 sm:py-20">
      <h3 className="text-center text-2xl font-bold md:text-4xl">
        {t('title')}
      </h3>
      <div className="flex flex-wrap items-center justify-center w-[80vw] gap-6 mx-auto my-10 sm:py-20">
        {skills.map(({ name, Icon }) => (
          <motion.div
            key={name}
            className="w-1/5 py-4 text-5xl text-primary md:text-9xl"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.4,
              scale: { type: 'spring', visualDuration: 0.4, bounce: 0.5 },
            }}
          >
            <Icon className="text-muted-foreground mx-auto" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};
