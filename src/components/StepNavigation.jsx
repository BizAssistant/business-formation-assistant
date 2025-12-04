import React from 'react';

const StepNavigation = ({ steps, currentStep, goToStep }) => (
  <div className="flex space-x-2">
    {steps.map((step, index) => (
      <button
        key={index}
        onClick={() => goToStep(index)}
        className={`px-3 py-1 rounded-full text-xs ${
          index === currentStep
            ? 'bg-emerald-500 text-white'
            : 'bg-slate-600 text-white'
        }`}
      >
        {index + 1}
      </button>
    ))}
  </div>
);

export default StepNavigation;
