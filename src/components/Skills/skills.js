import React from "react";
import "./skills.css"; // Assuming you have a CSS file for styling
import Typewriter from "../utils/useTypewriter";

const Skills = () => {
  const skillsData = {
    programmingLanguages: [
      "Python",
      "Java",
      "C++",
      "C#",
      "HTML",
      "CSS",
      "JavaScript",
      "SQL",
      "PHP",
    ],
    frameworks: [
      "Bootstrap",
      "jQuery",
      ".NET Core",
      ".NET",
      "Entity Framework",
      "React",
      "Node.js",
      "Express",
      "Flask",
      "Django",
      "TensorFlow",
      "PyTorch",
      "Keras",
      "Pytest",
    ],
    tools: [
      "Visual Studio",
      "SAS Viya",
      "AWS Lambda",
      "Microsoft Azure",
      "Microsoft SQL Server",
      "MariaDB",
      "MongoDB",
      "MySQL",
      "Apache Web Server",
      "Jira",
      "Trello",
      "Git",
      "GitHub",
      "Kubernetes",
      "OpenShift",
      "Docker",
      "Postman",
    ],
    relevantKnowledge: [
      "Data Structures & Algorithms",
      "OOP Principles",
      "Software Development Process",
      "Software Architecture",
      "Database Design/Management",
      "Cloud Computing",
      "Machine Learning",
      "Test-Driven Development",
      "RESTful Services",
      "Containerization",
      "Microservices",
      "Front-End & Back-End Development",
    ],
  };

  return (
    <div className="skills-container">
      <h1>
        <Typewriter text="Skills:" speed="60" />
      </h1>
      <div className="skills-section">
        <h3>Programming Languages</h3>
        <p>{skillsData.programmingLanguages.join(", ")}</p>
      </div>
      <div className="skills-section">
        <h3>Frameworks</h3>
        <p>{skillsData.frameworks.join(", ")}</p>
      </div>
      <div className="skills-section">
        <h3>Tools</h3>
        <p>{skillsData.tools.join(", ")}</p>
      </div>
      <div className="skills-section">
        <h3>Relevant Knowledge</h3>
        <p>{skillsData.relevantKnowledge.join(", ")}</p>
      </div>
    </div>
  );
};

export default Skills;
