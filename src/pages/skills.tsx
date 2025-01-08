import { FaAws, FaJava, FaNodeJs, FaPython, FaReact } from "react-icons/fa";
import { MdOutlineApi } from "react-icons/md";
import {
  SiAmazonapigateway,
  SiAmazoncloudwatch,
  SiAmazoncognito,
  SiAmazondocumentdb,
  SiAmazondynamodb,
  SiAmazonec2,
  SiAmazonecs,
  SiAmazons3,
  SiAmazonsimpleemailservice,
  SiAmazonsqs,
  SiAmazonwebservices,
  SiAwsamplify,
  SiBitbucket,
  SiBootstrap,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiGit,
  SiGithub,
  SiGitlab,
  SiGraphql,
  SiHtml5,
  SiJavascript,
  SiJira,
  SiJquery,
  SiMongodb,
  SiMysql,
  SiNestjs,
  SiPostgresql,
  SiSass,
  SiSonarqube,
  SiSqlite,
  SiTailwindcss,
  SiTrello,
  SiTypescript,
} from "react-icons/si";

const Skills = () => {
  const skills = {
    "Programming Languages": [
      { name: "Java", icon: <FaJava /> },
      { name: "Python", icon: <FaPython /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "TypeScript", icon: <SiTypescript /> },
    ],
    "Frontend Development": [
      { name: "React.js", icon: <FaReact /> },
      { name: "Next.js", icon: <FaReact /> },
      { name: "jQuery", icon: <SiJquery /> },
      { name: "HTML5/CSS3", icon: <SiHtml5 /> },
      { name: "SCSS/SASS", icon: <SiSass /> },
      { name: "Bootstrap 4|5", icon: <SiBootstrap /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    ],
    "Backend Development": [
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Nest.js", icon: <SiNestjs /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "GraphQL", icon: <SiGraphql /> },
      { name: "FastAPI", icon: <MdOutlineApi /> },
      { name: "Flask", icon: <FaPython /> },
    ],
    Databases: [
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "MySQL", icon: <SiMysql /> },
      { name: "DynamoDB", icon: <SiAmazondynamodb /> },
      { name: "BigQuery", icon: <FaReact /> },
      { name: "Firebase", icon: <SiFirebase /> },
      { name: "SQLite", icon: <SiSqlite /> },
    ],
    "Cloud Services": [
      { name: "AWS Lambda", icon: <FaAws /> },
      { name: "AWS S3", icon: <SiAmazons3 /> },
      { name: "AWS CloudWatch", icon: <SiAmazoncloudwatch /> },
      { name: "AWS API Gateway", icon: <SiAmazonapigateway /> },
      { name: "AWS Amplify", icon: <SiAwsamplify /> },
      { name: "AWS EC2", icon: <SiAmazonec2 /> },
      { name: "AWS ECS", icon: <SiAmazonecs /> },
      { name: "AWS SNS", icon: <SiAmazonsimpleemailservice /> },
      { name: "AWS SQS", icon: <SiAmazonsqs /> },
      { name: "AWS Cognito", icon: <SiAmazoncognito /> },
      { name: "AWS Rekognition", icon: <SiAmazonwebservices /> },
      { name: "AWS SES", icon: <SiAmazonsimpleemailservice /> },
      { name: "AWS AppSync", icon: <SiAmazondocumentdb /> },
    ],
    "Tools & Project Management": [
      { name: "Git", icon: <SiGit /> },
      { name: "GitHub", icon: <SiGithub /> },
      { name: "GitLab", icon: <SiGitlab /> },
      { name: "Bitbucket", icon: <SiBitbucket /> },
      { name: "Jira", icon: <SiJira /> },
      { name: "Trello", icon: <SiTrello /> },
      { name: "Docker", icon: <SiDocker /> },
      { name: "SonarQube", icon: <SiSonarqube /> },
    ],
  };

  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-r from-blue-50 to-indigo-100 mt-5 mb-10 shadow-2xl rounded-3xl transform "
    >
      <h2 className="text-4xl font-extrabold mb-12 text-center text-gray-800">
        Skills
      </h2>
      <div className="space-y-10  px-6">
        {Object.entries(skills).map(([category, skillList], idx) => (
          <div key={idx}>
            <h3 className="text-2xl font-semibold text-gray-700 mb-1 capitalize">
              {category}
            </h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
              {skillList.map((skill, index) => (
                <span
                  key={index}
                  className="bg-gradient-to-r from-blue-500 to-teal-400 text-white px-1 py-1 rounded-full shadow-lg transform transition-all duration-300 ease-in-out hover:scale-90 hover:shadow-xl flex items-center justify-center gap-3"
                >
                  <span className="text-xl">{skill.icon}</span>
                  <span className="text-sm font-medium">{skill.name}</span>
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
