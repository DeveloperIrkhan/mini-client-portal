const LoadingScreen = () => {
  return (
    <div
      className="z-50 fixed inset-0 flex justify-center items-center 
                 bg-darkColor/70 backdrop-blur-sm"
    >
      <div className="flex flex-col justify-center relative items-center text-2xl">
        <p className="text-black dark:text-white">
          Please Wait App is Loading....
        </p>
      </div>
    </div>
  );
};

export default LoadingScreen;
