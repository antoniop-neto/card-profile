import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";

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

function Skill(props) {
  return (
    <div style={{ backgroundColor: props.color }} className="skill">
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill color="yellow" skill="JavaScript" emoji="👍" />
      <Skill color="orange" skill="HTML" emoji="✌️" />
      <Skill color="lightgreen" skill="CSS" emoji="🤟" />
      <Skill color="lightblue" skill="Git and GitHub" emoji="🖖" />
      <Skill color="red" skill="Ruby on Rails" emoji="💪" />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
