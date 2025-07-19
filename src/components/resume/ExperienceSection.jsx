import React from 'react';
import { useResume } from '..//../context/ResumeContext';
import SectionCard from '../ui/SectionCard';
import DragAndDrop from '../ui/DragAndDrop';

const ExperienceSection = ({ onAdd }) => {
  const { resume, updateSection, removeSection, moveSection } = useResume();
  const experiences = resume.sections.experience || [];

  const handleChange = (index, field, value) => {
    const updatedExperience = { ...experiences[index], [field]: value };
    updateSection('experience', index, updatedExperience);
  };
  
    const moveExperience = (fromIndex, toIndex) => {
    moveSection('experience', fromIndex, toIndex);
  };

  return (
    <SectionCard title="Work Experience" onAdd={onAdd}>
      
      {experiences.map((exp, index) => (
          <DragAndDrop 
          key={exp.id} 
          id={exp.id} 
          index={index} 
          moveItem={moveExperience}
        >
        <div key={index} className="mb-4 p-4 border rounded-lg bg-white dark:bg-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Job Title</label>
              <input
                type="text"
                value={exp.title}
                onChange={(e) => handleChange(index, 'title', e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Company</label>
              <input
                type="text"
                value={exp.company}
                onChange={(e) => handleChange(index, 'company', e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Start Date</label>
              <input
                type="month"
                value={exp.startDate}
                onChange={(e) => handleChange(index, 'startDate', e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">End Date</label>
              <input
                type="month"
                value={exp.endDate}
                onChange={(e) => handleChange(index, 'endDate', e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              value={exp.description}
              onChange={(e) => handleChange(index, 'description', e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              rows="3"
            />
          </div>
          
          <button
            onClick={() => removeSection('experience', index)}
            className="text-red-600 text-sm font-medium"
          >
            Remove Experience
          </button>
          
        </div>
       </DragAndDrop>
      ))}
      
    </SectionCard>
  );
};

export default ExperienceSection;