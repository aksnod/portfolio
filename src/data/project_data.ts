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
    title: "IIFL Security",
    description:
      "IIFL Securities: A high-performance platform for stock trading, investment management, and real-time financial insights, designed for both novice and experienced investors.",
    fullDescription: `IIFL Securities is a trading and investment platform that provides real-time data, advanced charting tools, and secure portfolio management. It offers live market tracking, one-click trade execution, and access to various financial instruments. With its user-friendly interface and security features like encryption and multi-factor authentication, users can make informed investment decisions easily.`,
    imageUrl: "/iifl.jpeg",
    link: "https://www.iiflcapital.com/",
    technologies: [
      "Node.js",
      "Nest.js",
      "PostgreSQl",
      "React",
      "Trello",
      "Docker",
      "Microservices",
      "Kafka",
    ],
  },
  {
    title: "Attributely",
    description:
      "Attributely is a business platform that helps dealerships optimize marketing efforts. By combining sales, analytics, and marketing data, Attributely provides actionable insights to improve ROI, conversions, and customer experience",
    fullDescription:
      "Attributely offers a data-driven solution for dealerships, integrating marketing, sales, and analytics data into a comprehensive platform. It ensures clean, accurate data and allows for custom tracking based on personalized goals. The platform delivers real-time insights with a focus on improving advertising efficiency, optimizing the shopper experience, and boosting sales velocity. It adapts to evolving needs and provides transparency with data integrity and relevant metrics to ensure continuous improvement",
    imageUrl: "/attributely.jpeg",
    link: "https://attributely.com/",
    technologies: [
      "Nest.js",
      "Node.js",
      "MySQL",
      "Python",
      "Airflow",
      "TypeScript",
    ],
  },
  {
    title: "CrossWord BookStore",
    description:
      "CrossWord Bookstore: A modern, user-friendly online bookstore offering a wide selection of books, e-books, and audiobooks, with a personalized shopping experience and fast delivery.",
    fullDescription:
      "CrossWord Bookstore is a comprehensive online bookstore designed to cater to the needs of book lovers around the world. The platform offers a wide variety of books across genres like fiction, non-fiction, science, self-help, and more, including e-books and audiobooks. With its user-friendly interface, CrossWord Bookstore makes it easy for customers to search, browse, and purchase books at competitive prices.",
    imageUrl: "/attachment.png",
    link: "",
    gitHubLink: "https://github.com/aksnod/CrossWord-bookStore",
    technologies: ["Java", "Hibernate", "JSP", "Stripe", "JavaScript", "MySQL"],
  },
  {
    title: "FaceChat",
    description:
      "FaceChat: A dynamic social networking platform that connects people through posts, messages, and live interactions, allowing users to share content, stay updated, and engage with their community.",
    fullDescription:
      "FaceChat is a feature-rich social networking platform designed to bring people together through seamless communication and interactive features. The platform allows users to create profiles, share text, images, and videos, as well as comment, like, and share posts. Users can interact with their friends, join groups, follow pages, and engage in live conversations through private messages",
    imageUrl: "/face.jpeg",
    link: "",
    gitHubLink: "https://github.com/aksnod/Facechat",
    technologies: ["Nodejs", "Javascript", "AJAX", "Express.js", "Mongodb"],
  },
  {
    title: "Bonzai",
    description:
      "Bonzai is a collaboration and productivity platform designed to enhance team communication, streamline workflows, and optimize project management. It offers various tools for better team engagement and project tracking.",
    fullDescription:
      "Bonzai offers a comprehensive solution for teams to collaborate more efficiently. With features like task management, file sharing, and real-time communication, it helps organizations organize their workflows, enhance productivity, and improve overall project outcomes. Bonzai integrates easily with other tools, creating a seamless experience across various business processes.",
    imageUrl: "/attachment.png",
    link: "",
    technologies: ["Nest.js", "Node.js", "AWS Lambda", "Python", "PostGreSQL"],
  },
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio website to showcase projects and skills.",
    fullDescription:
      "This portfolio website was built using Next.js and TailwindCSS. It features dynamic routing to display projects and blogs, and integrates a contact form that sends emails using an API.",
    imageUrl: "/portfolio.jpeg",
    gitHubLink: "https://github.com/aksnod/portfolio",
    link: "https://portfolio-mu-ten-51.vercel.app",
    technologies: ["Next.js", "TailwindCSS", "Node.js"],
  },
  // Additional projects...
];
