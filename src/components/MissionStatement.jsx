const MissionStatement = () => {
  return (
    <div className="relative flex justify-center items-center w-full px-4 sm:px-8 md:px-16 py-12 md:py-16 lg:py-20">
      {/* Glowing Effect Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-10 top-10 w-40 h-40 bg-green-400 blur-3xl opacity-40 rounded-full"></div>
        <div className="absolute right-20 top-1/3 w-48 h-48 bg-pink-400 blur-3xl opacity-30 rounded-full"></div>
      </div>

      {/* Full-Width Mission Statement Box */}
      <div
        className="relative w-full bg-lemon text-black text-lg lg:text-3xl italic py-6 md:py-8 px-4 sm:px-12 max-w-7xl text-center leading-relaxed shadow-lg rounded-lg"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <p>
          My mission is to assist startups and enterprises in building intuitive
          and visually appealing user interfaces that foster a seamless and
          engaging experience for their customers,
          <strong>
            {" "}
            creating a strong connection between the product and its users.
          </strong>
        </p>
      </div>
    </div>
  );
};

export default MissionStatement;
