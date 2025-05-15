import IPG from "../assets/IPG.png";
import theyarImage from "../assets/theYarImage.jpg"
import colorgame from "../assets/colorgame.png";

const projectData = [
  {
    id: 1,
    title: "Africa Policy Lens",
    description:
      "A website for a political party in Nigeria. The website is built with React, Astro and TailwindCSS.",
    year: "2024",
    image: IPG,
    tags: ["REACT", "ASTRO", "TAILWINDCSS"],
    link: "https://africapolicylens.com/",
    animate: "fade-right",
    animatespeed: "1000",
  },
  {
    id: 2,
    title: "Young and Ready Dawn Prayers",
    description:
      "A group of vibrant you individuals dedication their morning the praising their maker",
    year: "2024",
    image: theyarImage,
    tags: ["REACT", "TAILWINDCSS"],
    link: "https://theyar.vercel.app/",
    animate: "fade-left",
    animatespeed: "1000",
  },
  {
    id: 3,
    title: "Color Game",
    description:
      "A website for a political party in Nigeria. The website is built with React, Astro and TailwindCSS.",
    year: "2025",
    image: colorgame,
    tags: ["REACT", "TAILWINDCSS"],
    link: "https://hng-12-color-game.vercel.app/",
    animate: "fade-right",
    animatespeed: "1000",
  },
];

export default projectData;
