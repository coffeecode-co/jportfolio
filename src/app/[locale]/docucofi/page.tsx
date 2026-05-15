import { DetailProject } from '@/components/DetailProject';
import type {
  ProjectImageType,
  ProjectBadgeType,
  LinkButtonType,
} from '@/components/DetailProject';
import { NavBar } from '@/components/NavBar';
import { Metadata } from 'next';
import { useTranslations } from 'next-intl';

export const metadata: Metadata = {
  title: 'Docucofi',
  description: 'Web application for formal document generation for freelancers and small teams',
  keywords: ['documents', 'pdf', 'invoice', 'next.js', 'supabase', 'typescript'],
  creator: 'Juan Pablo Leon Maya',
  publisher: 'Juan Pablo Leon Maya',
  alternates: {
    languages: { en: 'en', es: 'es' },
  },
};

const docucofiImages: ProjectImageType[] = [
  {
    src: 'https://pub-fda94ed7b1d0487db34447feefb77dbb.r2.dev/docucofi.png',
    alt: 'Docucofi document generator',
  },
];

const docucofiBadges: ProjectBadgeType[] = [
  { label: 'Next.js', className: 'bg-[#000000] text-white' },
  { label: 'TypeScript', className: 'bg-[#3178C6] text-white' },
  { label: 'Supabase', className: 'bg-[#3ECF8E] text-black' },
  { label: 'Tailwind CSS', className: 'bg-[#00BCFF] text-white' },
  { label: 'React PDF', className: 'bg-[#EC5990] text-white' },
  { label: 'Zod' },
  { label: 'Zustand' },
];

export default function Page() {
  const t = useTranslations('ProjectDetails');

  const docucofiGithub: LinkButtonType = {
    label: t('docucofi.github.label'),
    link: t('docucofi.github.link'),
  };

  const docucofiGoIt: LinkButtonType = {
    label: t('docucofi.goIt.label'),
    link: t('docucofi.goIt.link'),
  };

  return (
    <section>
      <NavBar from="docucofi" />
      <DetailProject
        title={t('docucofi.title')}
        description={t('docucofi.desc')}
        badges={docucofiBadges}
        images={docucofiImages}
        github={docucofiGithub}
        goIt={docucofiGoIt}
      />
    </section>
  );
}
