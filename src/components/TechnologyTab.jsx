import React from "react";

const TechnologyTab = ({ skill}) => {
    return (
        <div className="d-flex align-items-center technology-tab p-1" 
        style={{
            width: 'fit-content', 
            height: 'fit-content',}}>
            <div>
                <span style={{ fontSize: '.9rem', fontWeight: '400' }}>{skill}</span>
            </div>

        </div>
    )
}
export default TechnologyTab;