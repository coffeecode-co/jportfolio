export const AboutMe = () => {
  return (
    <section className="bg-primary text-background">
      <div className="flex items-center justify-center flex-col pt-20 pb-80 text-center max-w-[80vw] md:max-w-screen-md mx-auto sm:pt-32">
        <p className="text-3xl mb-8">{`Hi, I'm Juan. Nice to meet you.`}</p>
        <p className="text-lg mb-8">
          {`Since starting my career as a Software Developer over 5 years ago,
          I've specialized in building web and hybrid mobile solutions for the
          financial sector, while also gaining valuable experience in IT
          customer service. I'm highly analytical, deeply curious, and
          constantly sharpening my skills to adapt and excel in dynamic
          environments.`}
        </p>
      </div>
    </section>
  );
};
