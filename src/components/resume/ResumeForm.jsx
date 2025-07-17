import React, { useState } from 'react';
import { useResume } from '../../context/ResumeContext';
import PersonalDetails from './PersonalDetails';
import ExperienceSection from './ExperienceSection';
import EducationSection from './EducationSection';
import SkillsSection from './SkillsSection';

const ResumeForm = () => {
  const { addSection } = useResume();
  const [activeSection, setActiveSection] = useState('personal');

  const sections = [
    { id: 'personal', label: 'Personal Details' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Skills' },
  ];

  const handleAddSection = (sectionType) => {
    const defaultContent = {
      experience: { title: '', company: '', startDate: '', endDate: '', description: '' },
      education: { institution: '', degree: '', startYear: '', endYear: '' },
      skills: { name: '', level: 'Intermediate' },
    };
    addSection(sectionType, defaultContent[sectionType]);
  };

  return (
    <div id="resume-previews" className="bg-white dark:bg-gray-800 p-8 shadow-lg rounded-lg">
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex flex-wrap gap-2 mb-6">
        {sections.map((section) => (
          <button
            key={section.id}
            className={`px-4 py-2 rounded-md ${
              activeSection === section.id
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
            onClick={() => setActiveSection(section.id)}
          >
            {section.label}
          </button>
        ))}
      </div>

      {activeSection === 'personal' && <PersonalDetails />}
      {activeSection === 'experience' && (
        <ExperienceSection onAdd={() => handleAddSection('experience')} />
      )}
      {activeSection === 'education' && (
        <EducationSection onAdd={() => handleAddSection('education')} />
      )}
      {activeSection === 'skills' && (
        <SkillsSection onAdd={() => handleAddSection('skills')} />
      )}
    </div>
  
    </div>

    
  );
};

export default ResumeForm;