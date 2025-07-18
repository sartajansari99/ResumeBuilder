import React from 'react';
import { ResumeProvider } from '../../context/ResumeContext'
import ResumeForm from './ResumeForm';
import ResumePreview from './ResumePreview';
import ExportButton from '../../utils/exportUtils';
import ThemeToggle from '../ui/ThemeToggle';

const ResumeBuilder = () => {
  return (
    <ResumeProvider>
      <div className="min-h-screen p-4 md:p-8">
        <header className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">Resume Builder</h1>
            <p className="text-gray-600 dark:text-gray-400">
              Create and export your professional resume
            </p>
          </div>
          <ThemeToggle />
        </header>
        
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/2">
            <ResumeForm />
          </div>
          <div className="lg:w-1/2">
            <div className="sticky top-4">
              <div className="mb-4 flex justify-end">
                <ExportButton />
              </div>
              <ResumePreview />
            </div>
          </div>
        </div>
      </div>
    </ResumeProvider>
  );
};

export default ResumeBuilder;