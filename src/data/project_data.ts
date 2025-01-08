export interface ProjectInterface {
  title: string;
  description: string;
  imageUrl: string;
  fullDescription?: string; // Optional
  technologies?: string[]; // Optional
  link?: string; // Optional
  gitHubLink?: string; // Optional
}
export const projectsData: ProjectInterface[] = [
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio website to showcase projects and skills.",
    fullDescription:
      "This portfolio website was built using Next.js and TailwindCSS. It features dynamic routing to display projects and blogs, and integrates a contact form that sends emails using an API.  This portfolio website was built using Next.js and TailwindCSS. It features dynamic routing to display projects and blogs, and integrates a contact form that sends emails using an API. This portfolio website was built using Next.js and TailwindCSS. It features dynamic routing to display projects and blogs, and integrates a contact form that sends emails using an API. This portfolio website was built using Next.js and TailwindCSS. It features dynamic routing to display projects and blogs, and integrates a contact form that sends emails using an API.This portfolio website was built using Next.js and TailwindCSS. It features dynamic routing to display projects and blogs, and integrates a contact form that sends emails using an API. This portfolio website was built using Next.js and TailwindCSS. It features dynamic routing to display projects and blogs, and integrates a contact form that sends emails using an API. This portfolio website was built using Next.js and TailwindCSS. It features dynamic routing to display projects and blogs, and integrates a contact form that sends emails using an API. This portfolio website was built using Next.js and TailwindCSS. It features dynamic routing to display projects and blogs, and integrates a contact form that sends emails using an API.",
    imageUrl: "/attachment.png",
    link: "https://yourportfolio.com",
    technologies: ["Next.js", "TailwindCSS", "Node.js"],
  },
  {
    title: "E-commerce App",
    description:
      "A fully functional e-commerce website for buying and selling products.",
    fullDescription:
      "This e-commerce app was built using React.js and Firebase for real-time data handling. It features user authentication, product listings, a shopping cart, and payment integration via Stripe.",
    imageUrl: "/attachment.png",
    link: "",
    gitHubLink: "https://github.com/username/project1",
    technologies: ["React.js", "Firebase", "Stripe", "Node.js"],
  },
  {
    title: "Weather Dashboard",
    description:
      "A dashboard to check real-time weather information using a third-party API.",
    fullDescription:
      "Built with React.js and the OpenWeather API, this weather dashboard allows users to search for any city and view current weather conditions and a 5-day forecast.",
    imageUrl: "/attachment.png",
    link: "https://weather-dashboard.com",
    gitHubLink: "https://github.com/username/project1",
    technologies: ["React.js", "OpenWeather API", "CSS"],
  },
  {
    title: "Weather Dashboard",
    description:
      "A dashboard to check real-time weather information using a third-party API.",
    fullDescription:
      "Built with React.js and the OpenWeather API, this weather dashboard allows users to search for any city and view current weather conditions and a 5-day forecast.",
    imageUrl: "/attachment.png",
    link: "",
    technologies: ["React.js", "OpenWeather API", "CSS"],
  },
  // Additional projects...
];
