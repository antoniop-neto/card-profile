import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";

const skills = [
  {
    skill: "Ruby on Rails",
    level: "intermediate",
    color: "#df0201",
  },
  {
    skill: "HTML",
    level: "intermediate",
    color: "#e76228",
  },
  {
    skill: "CSS",
    level: "beginner",
    color: "#30a4d4",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#c471ed",
  },
  {
    skill: "JavaScript",
    level: "intermediate",
    color: "#eed53a",
  },
  {
    skill: "React",
    level: "beginner",
    color: "#5ed2f3",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="/profile.jpg" alt="avatar" />;
}

function Intro() {
  return (
    <div>
      <h1>Antonio Oliveira</h1>
      <p>
        After ten years as self-employed, during which I reached the peak of my
        career as a tattoo artist, I decided to seek new challenges and return
        to the programming field, which I studied before and have always been
        interested in, but never professionally pursued. Recently, I completed
        the intensive nine-week bootcamp at Le Wagon school, graduating as a
        Full Stack Web Developer, aiming for ongoing learning and professional
        development. I am excited to work on new projects, contribute, and learn
        from a dynamic team.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill
          skill={skill.skill}
          level={skill.level}
          color={skill.color}
          key={skill.skill}
        />
      ))}
    </div>
  );
}

function Skill({ skill, level, color }) {
  return (
    <div style={{ backgroundColor: color }} className="skill">
      <span>{skill}</span>
      <span>
        {level === "advanced" && "💪"}
        {level === "intermediate" && "🤟"}
        {level === "beginner" && "👶"}
      </span>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
