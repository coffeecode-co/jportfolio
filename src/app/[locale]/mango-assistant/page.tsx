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
  title: 'mango',
  description: 'Keyboard-driven TUI assistant for running shell command sequences',
  keywords: ['tui', 'terminal', 'python', 'cli', 'textual', 'macros'],
  creator: 'Juan Pablo Leon Maya',
  publisher: 'Juan Pablo Leon Maya',
  alternates: {
    languages: { en: 'en', es: 'es' },
  },
};

const mangoImages: ProjectImageType[] = [
  {
    src: 'https://pub-fda94ed7b1d0487db34447feefb77dbb.r2.dev/mango-preview.png',
    alt: 'mango TUI main view',
  },
];

const mangoBadges: ProjectBadgeType[] = [
  { label: 'Python', className: 'bg-[#3776AB] text-white' },
  { label: 'Textual', className: 'bg-[#004578] text-white' },
  { label: 'PyPI', className: 'bg-[#006DAD] text-white' },
];

export default function Page() {
  const t = useTranslations('ProjectDetails');

  const mangoDownload: LinkButtonType = {
    label: t('mangoAssistant.pypi.label'),
    link: t('mangoAssistant.pypi.link'),
  };

  const mangoGoIt: LinkButtonType = {
    label: t('mangoAssistant.goIt.label'),
    link: t('mangoAssistant.goIt.link'),
  };

  return (
    <section>
      <NavBar from="mango-assistant" />
      <DetailProject
        title={t('mangoAssistant.title')}
        description={t('mangoAssistant.desc')}
        badges={mangoBadges}
        images={mangoImages}
        download={mangoDownload}
        goIt={mangoGoIt}
      />
    </section>
  );
}
