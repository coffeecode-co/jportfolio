import { useTranslations } from 'next-intl';

export const AboutMe = () => {
  const t = useTranslations('AboutMe');
  return (
    <section className="bg-primary text-background">
      <div className="flex items-center justify-center flex-col pt-20 pb-80 text-center max-w-[80vw] md:max-w-screen-md mx-auto sm:pt-32">
        <p className="text-3xl mb-8">{t('greeting')}</p>
        <p className="text-lg mb-8">{t('resume')}</p>
      </div>
    </section>
  );
};
