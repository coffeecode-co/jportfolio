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
  title: 'ScTools',
  description: 'Serverless computing tools',
  keywords: ['serverless', 'sc', 'tools', 'development'],
  creator: 'Juan Pablo Leon Maya',
  publisher: 'Juan Pablo Leon Maya',
  alternates: {
    languages: { en: 'en', es: 'es' },
  },
};

const scToolsPojectImages: ProjectImageType[] = [
  {
    src: 'https://pub-fda94ed7b1d0487db34447feefb77dbb.r2.dev/sc1.png',
    alt: 'sc functions',
  },
  {
    src: 'https://pub-fda94ed7b1d0487db34447feefb77dbb.r2.dev/sc2.png',
    alt: 'sc functions 2',
  },
  {
    src: 'https://pub-fda94ed7b1d0487db34447feefb77dbb.r2.dev/sm1.png',
    alt: 'sm function',
  },
  {
    src: 'https://pub-fda94ed7b1d0487db34447feefb77dbb.r2.dev/ct1.png',
    alt: 'ct funtion',
  },
];
const scToolsBadges: ProjectBadgeType[] = [
  { label: 'React', className: 'bg-[#58c4dc] text-[#fff]' },
  { label: 'TypeScript', className: 'bg-[#3178C6] text-[#fff]' },
  { label: 'TailwindCSS', className: 'bg-[#00BCFF] text-[#fff]' },
  { label: 'Vite', className: 'bg-[#FFC820] text-[#fff]' },
  { label: 'Vitest', className: 'bg-[#729B1B] text-[#fff]' },
  { label: 'Crxjs' },
  { label: 'ShadCn', className: 'bg-[#fff] text-[#000]' },
];

export default function Page() {
  const t = useTranslations('ProjectDetails');
  const scDownloadButton: LinkButtonType = {
    label: t('scTools.downloadButton.label'),
    link: t('scTools.downloadButton.link'),
  };

  const scGoIt: LinkButtonType = {
    label: t('scTools.goIt.label'),
    link: t('scTools.goIt.link'),
  };

  return (
    <section>
      <NavBar from="sctools" />
      <DetailProject
        title={t('scTools.title')}
        description={t('scTools.desc')}
        badges={scToolsBadges}
        images={scToolsPojectImages}
        download={scDownloadButton}
        goIt={scGoIt}
        projectVersion="0.2.0"
      />
    </section>
  );
}
