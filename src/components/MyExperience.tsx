'use client';
import { ExternalLink } from 'lucide-react';
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
import Link from 'next/link';
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
    company: 'Freelance Developer',
    role: 'Full-Stack Developer',
    roleDescription:
      'Working as an independent contractor, providing end-to-end software development services to clients across various industries. Responsible for designing, developing, and deploying scalable web and mobile applications, ensuring high-quality deliverables and client satisfaction.',
    beganDate: '2024',
    endDate: 'Present',
    achievements: [
      'Implemented modern technologies and frameworks (e.g., React, Node.js, Next.js) to build performant and user-friendly applications.',
      'Collaborated closely with clients to understand their business needs, translating them into technical solutions and delivering tailored results.',
      'Optimized application performance and scalability, improving load times and user experience for end users.',
    ],
  },
  {
    company: 'Inaltec SAS',
    urlCompany: 'https://www.inaltec.com.co/',
    role: 'Front-End Hybrid Mobile Developer',
    roleDescription:
      'Part of the Iuvity team responsible for developing a mobile application Davivienda banking company. The company specializes in providing essential services to the banking sector.',
    beganDate: '2019',
    endDate: '2024',
    achievements: [
      'Led the migration of a legacy application from a hardcoded PhoneGap instance to a modern framework, ensuring minimal disruption to the end-user experience.',
      'Successfully addressed significant technical debt within the legacy codebase, improving maintainability and scalability of the application.',
      "Executed a critical internal process that enhanced the application's performance and reliability, mitigating potential risks to the customer experience during the transition.",
    ],
  },
  {
    company: 'ARUS',
    urlCompany: 'https://www.arus.com.co/',
    role: 'Support Analyst',
    roleDescription:
      'Provided application and hardware support directly to end customers, fostering the development of critical soft skills such as analyzing, understanding, and scaling customer needs and requirements.',
    beganDate: '2017',
    endDate: '2019',
    achievements: [
      'Quickly became a key contributor in the role, taking on the responsibility of mentoring colleagues and future team members by sharing acquired knowledge.',
      "Developed and maintained comprehensive documentation for internal processes in the company's knowledge database, ensuring consistency and accessibility of information.",
      "Trained new employees, enabling them to effectively onboard and contribute to the team's success.",
    ],
  },
];

export const MyExperience = () => {
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
                key={company}
                className="flex flex-col items-center justify-around rounded-lg mb-4 min-h-[80vh] max-h-[80vh] w-[80vw] md:w-1/3"
              >
                <CardHeader>
                  <CardTitle className="text-lg md:text-xl">
                    <span className="capitalize">{company}</span>
                    <div className="flex items-center justify-center scale-[.65] text-foreground/50 ">
                      <p className="">{beganDate}</p>
                      <Separator
                        orientation="vertical"
                        className="h-3 mx-1 bg-primary"
                      />
                      <p className="">{endDate}</p>
                      {urlCompany && (
                        <Link href={urlCompany}>
                          <ExternalLink className=" inline-block" />
                        </Link>
                      )}
                    </div>
                  </CardTitle>
                  <CardDescription>
                    <p className="capitalize text-md font-bold md:text-lg">
                      {role}
                    </p>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="capitalize text-xs md:text-sm">
                    {roleDescription}
                  </p>
                </CardContent>
                <Separator
                  orientation="horizontal"
                  className="h-0.5 bg-primary w-[70%]"
                />
                <CardFooter className="w-full flex-col">
                  <p className="capitalize text-md md:text-lg">Achievements</p>
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
  return (
    <Accordion
      defaultValue="item-0"
      type="single"
      collapsible
      className="w-full capitalize text-sm"
    >
      {achievements.map((achievement, i) => {
        return (
          <AccordionItem key={achievement.substring(0, 3)} value={`item-${i}`}>
            <AccordionTrigger className="h-6 text-xs">See</AccordionTrigger>
            <AccordionContent>
              <p className="capitalize text-xs md:text-sm">{achievement}</p>
            </AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
};
