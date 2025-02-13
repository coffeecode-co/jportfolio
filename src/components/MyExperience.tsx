'use client';
import { ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Separator } from './ui/separator';

interface Experience {
  company: string;
  role: string;
  roleDescription: string;
  beganDate: string;
  endDate: string;
  achievements: string[];
  urlCompany?: string;
}

const myExperiences: Experience[] = [
  {
    company: 'freelancer.company',
    role: 'freelancer.role',
    roleDescription: 'freelancer.roleDescription',
    beganDate: 'freelancer.beganDate',
    endDate: 'freelancer.endDate',
    achievements: [
      'freelancer.achievements.one',
      'freelancer.achievements.two',
      'freelancer.achievements.three',
    ],
  },
  {
    company: 'inaltec.company',
    urlCompany: 'https://www.inaltec.com.co/',
    role: 'inaltec.role',
    roleDescription: 'inaltec.roleDescription',
    beganDate: 'inaltec.beganDate',
    endDate: 'inaltec.endDate',
    achievements: [
      'inaltec.achievements.one',
      'inaltec.achievements.two',
      'inaltec.achievements.three',
    ],
  },
  {
    company: 'arus.company',
    urlCompany: 'https://www.arus.com.co/',
    role: 'arus.role',
    roleDescription: 'arus.roleDescription',
    beganDate: 'arus.beganDate',
    endDate: 'arus.endDate',
    achievements: [
      'arus.achievements.one',
      'arus.achievements.two',
      'arus.achievements.three',
    ],
  },
];

export const MyExperience = () => {
  const t = useTranslations('MyExperience');

  return (
    <section>
      <div className="flex items-center flex-col md:flex-row justify-center text-center mt-[-15rem] max-w-[80vw] md:max-w-screen-lg mx-auto">
        {myExperiences.map(
          ({
            company,
            urlCompany,
            role,
            beganDate,
            endDate,
            roleDescription,
            achievements,
          }) => {
            return (
              <Card
                key={t(company)}
                className="flex flex-col items-center justify-around rounded-lg mb-4 border-muted-foreground min-h-[80vh] max-h-[80vh] w-[80vw] md:w-1/3"
              >
                <CardHeader>
                  <CardTitle className="text-lg md:text-xl">
                    <span className="capitalize">{t(company)}</span>
                    <div className="flex items-center justify-center scale-[.65] text-foreground/50 ">
                      <p className="">{t(beganDate)}</p>
                      <Separator
                        orientation="vertical"
                        className="h-3 mx-1 bg-primary"
                      />
                      <p className="">{t(endDate)}</p>
                      {urlCompany && (
                        <Link href={urlCompany}>
                          <ExternalLink className=" inline-block" />
                        </Link>
                      )}
                    </div>
                  </CardTitle>
                  <CardDescription>
                    <p className="capitalize text-md font-bold md:text-lg">
                      {t(role)}
                    </p>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="capitalize text-xs md:text-sm">
                    {t(roleDescription)}
                  </p>
                </CardContent>
                <Separator
                  orientation="horizontal"
                  className="h-0.5 bg-primary w-[70%]"
                />
                <CardFooter className="w-full flex-col">
                  <p className="capitalize text-md md:text-lg">
                    {t('achievements')}
                  </p>
                  <Achievements achievements={achievements} />
                </CardFooter>
              </Card>
            );
          }
        )}
      </div>
    </section>
  );
};

const Achievements = ({ achievements }: { achievements: string[] }) => {
  const t = useTranslations('MyExperience');
  return (
    <Accordion
      defaultValue="item-0"
      type="single"
      collapsible
      className="w-full capitalize text-sm"
    >
      {achievements.map((achievement, i) => {
        return (
          <AccordionItem
            key={t(achievement).substring(0, 3)}
            value={`item-${i}`}
          >
            <AccordionTrigger dir="rtl" className="h-6 text-xs">
              &nbsp;
            </AccordionTrigger>
            <AccordionContent>
              <p className="capitalize text-xs md:text-sm">{t(achievement)}</p>
            </AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
};
