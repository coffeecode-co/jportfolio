import { Code, TabletSmartphone, ChartNoAxesCombined } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card';

interface Service {
  title: string;
  TitleIcon: typeof Code | typeof TabletSmartphone | typeof ChartNoAxesCombined;
  description: string;
}

const servicesArray: Service[] = [
  {
    title: 'Web Design & Development',
    TitleIcon: Code,
    description:
      'We create visually appealing, user-friendly websites and develop robust solutions tailored to your business needs.',
  },
  {
    title: 'Mobile Apps',
    TitleIcon: TabletSmartphone,
    description:
      'We design and develop intuitive, high-performance mobile applications tailored to engage users and grow your business.',
  },
  {
    title: 'Analytics & SEO',
    TitleIcon: ChartNoAxesCombined,
    description:
      "We provide data-driven insights to optimize user behavior and boost your website's search engine rankings, driving growth and visibility.",
  },
];

export const MyServices = () => {
  return (
    <section>
      <div className="bg-primary text-background">
        <div className="flex items-center justify-center flex-col pt-20 pb-80 text-center max-w-[80vw] md:max-w-screen-md mx-auto sm:pt-32">
          <h3 className="text-2xl font-bold sm:text-4xl"> My Services </h3>
          <p className="text-lg sm:text-xl mt-4">
            I specialize in creating engaging, user-friendly websites and mobile
            apps, along with data-driven analytics and SEO strategies to boost
            visibility and drive business growth..
          </p>
        </div>
      </div>
      <div className="flex flex-wrap items-center flex-col md:flex-row justify-center text-center mt-[-15rem] max-w-[80vw] md:max-w-screen-lg mx-auto">
        {servicesArray.map(({ TitleIcon, ...service }) => {
          return (
            <Card
              key={service.title}
              className="flex flex-col items-center justify-around border-muted-foreground rounded-lg min-h-[50vh] max-h-[50vh] w-[80vw] md:w-1/3"
            >
              <CardHeader className=" items-center gap-2">
                <div className="border-2 border-primary rounded-[50%]">
                  <TitleIcon className=" p-3 h-14 w-14" />
                </div>

                <CardTitle className="text-xl lg:text-2xl">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm sm:text-lg lg:text-xl">
                  {service.description}
                </CardDescription>
              </CardContent>
              <CardFooter></CardFooter>
            </Card>
          );
        })}
      </div>
    </section>
  );
};
