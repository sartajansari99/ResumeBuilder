import React from 'react';
import { useResume } from '../../context/ResumeContext';
import SectionCard from '../ui/SectionCard';
import DragAndDrop from '../ui/DragAndDrop';

const SkillsSection = ({ onAdd }) => {
  const { resume, updateSection, removeSection, moveSection } = useResume();
  const skills = resume.sections.skills || [];

  const handleChange = (index, field, value) => {
    const updatedSkill = { ...skills[index], [field]: value };
    updateSection('skills', index, updatedSkill);
  };

  const moveSkill = (fromIndex, toIndex) => {
    moveSection('skills', fromIndex, toIndex);
  };

  return (
    <SectionCard title="Skills" onAdd={onAdd}>
      {skills.map((skill, index) => (
        <DragAndDrop 
          key={skill.id} 
          id={skill.id} 
          index={index} 
          moveItem={moveSkill}
        >
          <div className="mb-4 p-4 border rounded-lg bg-white dark:bg-gray-700">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                  Skill Name
                </label>
                <input
                  type="text"
                  value={skill.name}
                  onChange={(e) => handleChange(index, 'name', e.target.value)}
                  className="mt-1 block w-full border border-gray-300 dark:border-gray-600 rounded-md shadow-sm p-2 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200"
                  placeholder="JavaScript"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                  Proficiency Level
                </label>
                <select
                  value={skill.level}
                  onChange={(e) => handleChange(index, 'level', e.target.value)}
                  className="mt-1 block w-full border border-gray-300 dark:border-gray-600 rounded-md shadow-sm p-2 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200"
                >
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advanced">Advanced</option>
                  <option value="Expert">Expert</option>
                </select>
              </div>
            </div>
            
            <button
              onClick={() => removeSection('skills', index)}
              className="mt-2 text-red-600 dark:text-red-400 text-sm font-medium"
            >
              Remove Skill
            </button>
          </div>
        </DragAndDrop>
      ))}
    </SectionCard>
  );
};

export default SkillsSection;