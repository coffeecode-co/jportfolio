import { useTranslations } from 'next-intl';

import { ProjectThumbnail } from './ProjectThumbnail';

export interface GalleryItem {
  projectName: string;
  imgUrl: string;
  alt: string;
  url: string;
  seeMoreUrl?: string;
}

export const MyProjects = () => {
  const t = useTranslations('MyProjects');
  const galleryItems: GalleryItem[] = [
    {
      projectName: 'Redna-Models',
      imgUrl:
        'https://pub-fda94ed7b1d0487db34447feefb77dbb.r2.dev/redna-models-icon-2.webp',
      alt: 'Redna-Models',
      url: 'https://www.estrellaswebcam.com/guides/extensiones/redna-models',
      seeMoreUrl: t('scTools.seeMore'),
    },
    {
      projectName: 'mango',
      imgUrl: 'https://pub-fda94ed7b1d0487db34447feefb77dbb.r2.dev/mango-preview.png',
      alt: 'mango TUI assistant',
      url: 'https://github.com/juanleon8581/mango-assistant',
      seeMoreUrl: t('mangoAssistant.seeMore'),
    },
    {
      projectName: 'Docucofi',
      imgUrl:
        'https://pub-fda94ed7b1d0487db34447feefb77dbb.r2.dev/docucofi.png',
      alt: 'Docucofi - Document Generator',
      url: 'https://docucofi.coficode.dev/',
      seeMoreUrl: t('docucofi.seeMore'),
    },
  ];
  return (
    <section className="my-16" id={'projects'}>
      <h3 className="text-2xl font-bold text-center mb-10">{t('title')}</h3>
      <div className="flex flex-col items-center justify-center max-w-[70vw] mx-auto md:flex-row">
        {galleryItems.map((item) => {
          return <ProjectThumbnail key={item.projectName} item={item} />;
        })}
      </div>
    </section>
  );
};
