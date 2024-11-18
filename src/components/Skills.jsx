import React from "react";
import {
  FaReact,
  FaGitAlt,
  FaGithub,
  FaNpm,
  FaBootstrap,
  FaHtml5,
  FaCss3,
  FaPython,
  FaNodeJs,
} from "react-icons/fa";
import { TbCircleLetterC, TbBrandCpp } from "react-icons/tb";
import { DiJavascript1, DiPostgresql } from "react-icons/di";
import { SiMongodb, SiLeetcode, SiExpress, SiSequelize, SiRedux } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";

const Skills = () => {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "Bootstrap",
    "React",
    "Redux Toolkit",
    "TailwindCss",
    "NPM",
    "MongoDB",
    "Git",
    "GitHub",
    "NodeJS",
    "ExpressJS",
    "Postgres",
    "Sequelize",
    "C++",
  ];

  const icon = {
    HTML: <FaHtml5 />,
    CSS: <FaCss3 />,
    JavaScript: <DiJavascript1 />,
    Bootstrap: <FaBootstrap />,
    React: <FaReact />,
    "Redux Toolkit": (
      <div className="relative flex items-center justify-center w-full h-full text-center">
        <SiRedux />
      </div>
    ),
    TailwindCss: <RiTailwindCssFill />,
    NPM: <FaNpm />,
    MongoDB: <SiMongodb />,
    Git: <FaGitAlt />,
    GitHub: <FaGithub />,
    NodeJS: <FaNodeJs />,
    ExpressJS: <SiExpress />,
    Postgres: <DiPostgresql />,
    Sequelize: <SiSequelize />,
    "C++": <TbBrandCpp />,
  };

  return (
    <div className="bg-gray-900 p-6 h-screen flex flex-col justify-center items-center" id="skills">
      <h1 className="text-3xl font-bold text-center text-white mb-8">Skills</h1>
      <div className="flex flex-wrap justify-center items-center gap-6">
        {skills.map((skill) => (
          <div
            key={skill}
            title={skill}
            className="w-[80px] h-[80px] md:w-[10%] md:min-w-[120px] md:h-[120px] flex items-center justify-center mb-6 border-2 text-4xl rounded-md transition-transform duration-500 transform hover:scale-110 text-white"
          >
            {icon[skill]}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
