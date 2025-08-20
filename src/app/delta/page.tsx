import React from 'react';

const DeltaPage: React.FC = () => {
  return (
    <div>
      <h1>Project Delta</h1>

      <h2>About Project</h2>
      <p>
        Project Delta is a Resume Parser designed to automatically extract key information from resumes.
        This project aims to streamline the process of reviewing and processing resumes for various applications.
      </p>

      <h2>Technology Used</h2>
      <ul>
        <li>spaCy</li>
        <li>NLTK</li>
        <li>FastAPI</li>
        {/* Add more technologies here as needed */}
      </ul>

      <h2>Key Features</h2>
      <ul>
        <li>Automatic extraction of contact information, work experience, education, and skills.</li>
        <li>Support for various resume formats (e.g., PDF, DOCX).</li>
        <li>Structured output for easy integration with other systems.</li>
        {/* Add more key features here */}
      </ul>

      <h2>Project Details from AI</h2>
      <p>
        According to AI analysis, the Resume Parser project demonstrates proficiency in natural language processing and data extraction techniques.
        The use of libraries like spaCy and NLTK suggests a focus on robust text processing capabilities.
        FastAPI likely provides a performant and modern framework for the application's API.
      </p>
    </div>
  );
};

export default DeltaPage;