import React from 'react';
import '../styles/base.scss';
import '../styles/components.scss';


function Dashboard({ businessData, goToStep }) {
  const steps = [
    { id: 0, name: 'Concept', icon: '💡' },
    { id: 1, name: 'Entity', icon: '🏢' },
    { id: 2, name: 'Registration', icon: '📋' },
    { id: 3, name: 'Marketing', icon: '📈' },
    { id: 4, name: 'Finance', icon: '💰' },
    { id: 5, name: 'Website', icon: '🌐' }
  ];

  const completedSteps = steps.filter(step => {
    const data = businessData[step.name.toLowerCase()] || {};
    return Object.keys(data).length > 0;
  }).map(step => step.id);

  return (
    <div className="space-y-6 fade-in">
      <h2 className="text-2xl font-bold text-emerald-glow">Your Business Formation Dashboard</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {steps.map(step => (
          <div
            key={step.id}
            onClick={() => goToStep(step.id)}
            className={`glass rounded-xl p-5 cursor-pointer transition-all ${
              completedSteps.includes(step.id)
                ? 'border-2 border-emerald-500 glow-emerald'
                : 'border border-emerald-500/20 hover:border-emerald-500/40'
            }`}
          >
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="font-bold text-emerald-glow text-lg">{step.icon} {step.name}</h3>
                <p className="text-sm text-gray-400">
                  {completedSteps.includes(step.id) ? 'Completed' : 'Not started'}
                </p>
              </div>
              {completedSteps.includes(step.id) && (
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="glass rounded-xl p-5">
        <h3 className="font-semibold text-emerald-glow mb-2">Next Steps</h3>
        <ul className="list-disc list-inside text-gray-300 space-y-1">
          {steps
            .filter(step => !completedSteps.includes(step.id))
            .map(step => (
              <li key={step.id} className="text-sm">
                <button
                  onClick={() => goToStep(step.id)}
                  className="text-emerald-400 hover:underline"
                >
                  {step.name}
                </button>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default Dashboard;

