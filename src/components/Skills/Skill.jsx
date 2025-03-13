import React from "react";
import "./Skill.css";

const Skill = () => {
    const skills = [
        "Entrepreneurial Mindset",
        "Go-to-Market Planning",
        "Teamwork & Collaboration",
        "Digital Analytics",
    ];

    const languages = [
        { name: "English", level: "native" },
        { name: "French", level: "proficient" },
        { name: "Spanish", level: "proficient" },
    ];

    return (
        <div className="skill-container">
            <div className="skill-card">
                {/* Professional Skillset */}
                <h2 className="skill-title">Professional skillset</h2>
                <div className="skill-grid">
                    {skills.map((skill, index) => (
                        <div key={index} className="skill-item">
                            <span className="skill-square"></span>
                            {skill}
                        </div>
                    ))}
                </div>

                {/* Languages */}
                <h2 className="skill-title mt-10">Languages</h2>
                <div className="skill-grid">
                    {languages.map((lang, index) => (
                        <div key={index} className="skill-item">
                            <span className="skill-square"></span>
                            {lang.name} <span className="skill-gray-text">({lang.level})</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skill;
