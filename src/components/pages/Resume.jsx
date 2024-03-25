import React from 'react';
import ResumeImg from '../../assets/Resume.png'
import ResumeFile from '../../assets/Resume.pdf'

function Resume() {
    return (
        <div>
            <h1>My Resume</h1>
            {/* Link to download the resume PDF */}
            <a href={ResumeFile} download="Resume.pdf">
                <img src={ResumeImg} alt="My Resume" />
            </a>
        </div>
    );
}

export default Resume;