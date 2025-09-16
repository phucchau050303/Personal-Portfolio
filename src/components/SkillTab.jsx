import React from "react";

const SkillTab = ({ skill, imageLink }) => {
    return (
        <div className="d-flex align-items-center skill-tab p-2" 
        style={{
            width: 'fit-content', 
            height: 'fit-content',}}>
            <img 
                src={imageLink} 
                alt={skill} 
                style={{ width: '20px', height: '20px',}} 
            />
            <div>
                <span className = 'ms-2' style={{ fontSize: '1.2rem', fontWeight: '500' }}>{skill}</span>
            </div>

        </div>
    )
}
export default SkillTab;