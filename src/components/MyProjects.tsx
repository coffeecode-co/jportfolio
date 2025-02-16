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
      projectName: 'ScTools',
      imgUrl:
        'https://pub-fda94ed7b1d0487db34447feefb77dbb.r2.dev/sctools-4-3.png',
      alt: 'Web Model Tools',
      url: 'https://github.com/webmodelcode/sctools',
      seeMoreUrl: t('scTools.seeMore'),
    },
    {
      projectName: 'Espíritu Guerrero',
      imgUrl:
        'https://pub-fda94ed7b1d0487db34447feefb77dbb.r2.dev/espiritu-thumbnail-4-3.png',
      alt: 'Espíritu Guerrero Centro de Rehabilitación',
      url: 'https://espirituguerrero.com/',
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
