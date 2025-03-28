import SocialLinks from "./SocialLinks";
import "../Styles/wave.css";

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center p-4 lg:mt-10">
      <p className="text-lemon font-semibold uppercase">
        Say Hello
        <span className="wavy-hand">👋</span>
      </p>
      <h1 className="text-3xl sm:text-5xl font-bold mt-2">
        Let's Work Together.
      </h1>
      <p className="text-eggshell mt-4 max-w-lg">
        I’m always open to new opportunities and collaborations. Contact me via
        email or phone. I look forward to hearing from you soon. 😊
      </p>
      <div className="flex space-x-4 mt-6">
        <a
          href="https://wa.me/233551888255"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-700 text-white px-6 py-2 rounded-lg flex items-center"
        >
          WhatsApp Me
        </a>
        <a
          href="tel:+233551888255"
          className="text-black bg-lemon hover:bg-lightlemon px-6 py-2 rounded-lg flex items-center font-bold"
        >
          Call Me 📞
        </a>
      </div>
      <SocialLinks />
    </div>
  );
};

export default Contact;
