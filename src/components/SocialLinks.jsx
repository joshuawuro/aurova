import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import socials from "../data/socials";

const iconComponents = {
  FaGithub: FaGithub,
  FaLinkedin: FaLinkedin,
  FaTwitter: FaTwitter,
  FaEnvelope: FaEnvelope,
};

const SocialLinks = () => {
  return (
    <div className="flex space-x-4 mt-4">
      {socials.map((link) => {
        const Icon = iconComponents[link.icon]; // Get icon component from object

        return (
          <a
            key={link.id}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lemon hover:text-lightlemon text-2xl transition duration-300"
          >
            {Icon && <Icon />} {/* Render the icon if it exists */}
          </a>
        );
      })}
    </div>
  );
};

export default SocialLinks;
