import React from 'react';
import { useResume } from '../../context/ResumeContext';

const ResumePreview = () => {
  const { resume } = useResume();
  const { personalDetails, sections } = resume;
  
  return (
     <div id="resume-preview" className="bg-white dark:bg-gray-800 p-8 shadow-lg rounded-lg print:shadow-none print:p-0 print:bg-white">
    <div id="resume-preview" className="bg-white p-8 shadow-lg rounded-lg">
      <header className="mb-8 border-b pb-4">
        <h1 className="text-3xl font-bold text-gray-800">{personalDetails.name}</h1>
        <div className="flex flex-wrap gap-4 mt-2 text-gray-600">
          {personalDetails.email && <div>{personalDetails.email}</div>}
          {personalDetails.phone && <div>{personalDetails.phone}</div>}
          {personalDetails.address && <div>{personalDetails.address}</div>}
        </div>
      </header>

      {personalDetails.summary && (
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Summary</h2>
          <p className="text-gray-700">{personalDetails.summary}</p>
        </section>
      )}

      {sections.experience && sections.experience.length > 0 && (
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">Experience</h2>
          {sections.experience.map((exp, index) => (
            <div key={index} className="mb-4">
              <div className="flex justify-between">
                <h3 className="font-bold text-lg">{exp.title}</h3>
                <div className="text-gray-600">
                  {exp.startDate} - {exp.endDate || 'Present'}
                </div>
              </div>
              <div className="text-gray-700 font-medium">{exp.company}</div>
              <p className="mt-2 text-gray-700">{exp.description}</p>
            </div>
          ))}
        </section>
      )}

      {sections.education && sections.education.length > 0 && (
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">Education</h2>
          {sections.education.map((edu, index) => (
            <div key={index} className="mb-4">
              <div className="flex justify-between">
                <h3 className="font-bold text-lg">{edu.institution}</h3>
                <div className="text-gray-600">
                  {edu.startYear} - {edu.endYear || 'Present'}
                </div>
              </div>
              <div className="text-gray-700 font-medium">{edu.degree}</div>
            </div>
          ))}
        </section>
      )}

  
{sections.skills && sections.skills.length > 0 && (
  <section>
    <h2 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">
      Skills
    </h2>
    <div className="flex flex-wrap gap-2">
      {sections.skills.map((skill, index) => (
        <div key={index} className="flex flex-col">
          <span className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 p-3 rounded-full text-sm">
            {skill.name}
          </span>
          {skill.level && (
            <span className="text-xs text-center text-gray-600 dark:text-gray-400 mt-1">
              ({skill.level})
            </span>
          )}
        </div>
      ))}
    </div>
  </section>
)}
    </div>
    </div>
  );
};

export default ResumePreview;