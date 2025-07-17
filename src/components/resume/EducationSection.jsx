import React from 'react';
import { useResume } from '../../context/ResumeContext';
import SectionCard from '../ui/SectionCard';
import DragAndDrop from '../ui/DragAndDrop';

const EducationSection = ({ onAdd }) => {
  const { resume, updateSection, removeSection, moveSection } = useResume();
  const education = resume.sections.education || [];

  const handleChange = (index, field, value) => {
    const updatedEducation = { ...education[index], [field]: value };
    updateSection('education', index, updatedEducation);
  };

    const moveEducation = (fromIndex, toIndex) => {
    moveSection('education', fromIndex, toIndex);
  };


  return (
    <SectionCard title="Education" onAdd={onAdd}>
      {education.map((edu, index) => (
         <DragAndDrop 
          key={edu.id} 
          id={edu.id} 
          index={index} 
          moveItem={moveEducation}
        >

        <div key={index} className="mb-6 p-4 border rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Institution</label>
              <input
                type="text"
                value={edu.institution}
                onChange={(e) => handleChange(index, 'institution', e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                placeholder="University Name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Degree</label>
              <input
                type="text"
                value={edu.degree}
                onChange={(e) => handleChange(index, 'degree', e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                placeholder="Bachelor of Science"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Start Year</label>
              <input
                type="month"
                value={edu.startYear}
                onChange={(e) => handleChange(index, 'startYear', e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">End Year (or expected)</label>
              <input
                type="month"
                value={edu.endYear}
                onChange={(e) => handleChange(index, 'endYear', e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>
          </div>
          
          <button
            onClick={() => removeSection('education', index)}
            className="mt-4 text-red-600 text-sm font-medium"
          >
            Remove Education
          </button>
        </div>
        </DragAndDrop>
      ))}
    </SectionCard>
  );
};

export default EducationSection;