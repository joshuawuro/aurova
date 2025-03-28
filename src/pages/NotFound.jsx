const NotFoundPage = () => {
  return (
    <div
      className="flex flex-col items-center justify-center h-screen text-eggshell text-center px-6 space-y-6"
      data-aos="fade-up"
    >
      <div className="space-y-2">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-light text-eggshell">
          The page you were
        </h1>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-light text-eggshell">
          looking for doesn't exist.
        </h1>
      </div>

      <div className="space-y-4">
        <p className="text-lemon text-sm sm:text-base">
          <a href="/" className="underline hover:text-eggshell">
            Go back to Homepage
          </a>{" "}
          <span className="text-eggshell">or</span>{" "}
          <a
            href="mailto:joshuawuro@gmail.com"
            className="underline hover:text-eggshell"
          >
            send me a message
          </a>
        </p>
        <p className="text-eggshell text-xs sm:text-sm">
          If you need something specific
        </p>
      </div>

      <h1 className="text-9xl sm:text-[10rem] font-bold text-lemon">404</h1>
    </div>
  );
};

export default NotFoundPage;
