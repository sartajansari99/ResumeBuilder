import React, { createContext, useState, useContext, useEffect } from 'react';

import { v4 as uuidv4 } from 'uuid';

const ResumeContext = createContext();

export const useResume = () => useContext(ResumeContext);

export const ResumeProvider = ({ children }) => {
  const loadResume = () => {
    const savedResume = localStorage.getItem('resume');
    return savedResume 
      ? JSON.parse(savedResume) 
      : {
          personalDetails: {
            name: '',
            email: '',
            phone: '',
            address: '',
            summary: '',
          },
          sections: {
            experience: [],
            education: [],
            skills: [],
          },
        };
  };

  const [resume, setResume] = useState(loadResume);

  useEffect(() => {
    localStorage.setItem('resume', JSON.stringify(resume));
  }, [resume]);

  const updatePersonalDetails = (details) => {
    setResume(prev => ({
      ...prev,
      personalDetails: { ...prev.personalDetails, ...details }
    }));
  };

  const addSection = (sectionType, content) => {
  setResume(prev => ({
    ...prev,
    sections: {
      ...prev.sections,
      [sectionType]: [
        ...prev.sections[sectionType], 
        { ...content, id: uuidv4() } 
      ]
    }
  }));
};
const moveSection = (sectionType, fromIndex, toIndex) => {
  setResume(prev => {
    const sections = [...prev.sections[sectionType]];
    const [movedItem] = sections.splice(fromIndex, 1);
    sections.splice(toIndex, 0, movedItem);
    
    return {
      ...prev,
      sections: {
        ...prev.sections,
        [sectionType]: sections
      }
    };
  });
};


  const updateSection = (sectionType, index, content) => {
    setResume(prev => {
      const updatedSections = [...prev.sections[sectionType]];
      updatedSections[index] = content;
      return {
        ...prev,
        sections: { ...prev.sections, [sectionType]: updatedSections }
      };
    });
  };

  const removeSection = (sectionType, index) => {
    setResume(prev => {
      const updatedSections = prev.sections[sectionType].filter((_, i) => i !== index);
      return {
        ...prev,
        sections: { ...prev.sections, [sectionType]: updatedSections }
      };
    });
  };

  

const value = {
  resume,
  updatePersonalDetails,
  addSection,
  updateSection,
  removeSection,
  moveSection
};

  return (
    <ResumeContext.Provider value={value}>
      {children}
    </ResumeContext.Provider>
  );
};