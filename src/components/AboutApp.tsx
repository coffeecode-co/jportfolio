import PackageInfo from '@/../package.json';

export const AboutApp = () => {
  return (
    <div className="about-app-content flex justify-center items-center text-center text-xs ">
      <div className="mx-2">{`${PackageInfo.author.name}`}</div>
      <div className="mx-2">
        <span>Version: </span>
        {PackageInfo.version}
      </div>
    </div>
  );
};
