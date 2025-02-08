import PackageInfo from '@/../package.json';

export const AboutApp = () => {
  return (
    <div className="about-app-content flex justify-center items-center text-center text-xs ">
      <div>Web by: {PackageInfo.author.name}</div>
      <div>Version: {PackageInfo.version}</div>
    </div>
  );
};
