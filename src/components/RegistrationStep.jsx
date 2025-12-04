import React from 'react';
import './styles/base.scss';
import './styles/components.scss';

function RegistrationStep({ businessData, updateBusinessData, nextStep, prevStep }) {
  const registration = businessData.registration || {};
  const tasks = [
    { task: 'Get an EIN (Employer Identification Number)', link: 'https://www.irs.gov/businesses/small-businesses-self-employed/apply-for-an-employer-identification-number-ein-online' },
    { task: 'Register business name (DBA if needed)', link: null },
    { task: 'File formation documents with state', link: null },
    { task: 'Create operating agreement/bylaws', link: null },
    { task: 'Obtain business licenses and permits', link: null },
    { task: 'Open business bank account', link: null },
    { task: 'Get business insurance', link: null },
    { task: 'Register for state taxes', link: null }
  ];

  return (
    <div className="space-y-6 fade-in">
      <h2 className="text-2xl font-bold text-emerald-glow">Business Registration Checklist</h2>
      <div className="space-y-4">
        <div className="glass rounded-xl p-4 border border-emerald-500/20">
          <h3 className="font-semibold text-emerald-glow mb-3">Required Steps</h3>
          {tasks.map((item, idx) => (
            <div key={idx} className="flex items-start space-x-3 mb-3">
              <input
                type="checkbox"
                className="mt-1 w-5 h-5 rounded border-emerald-500/50 text-emerald-500 focus:ring-emerald-500"
                checked={registration[`task${idx}`] || false}
                onChange={(e) => updateBusinessData('registration', { [`task${idx}`]: e.target.checked })}
              />
              <div className="flex-1">
                <label className="text-gray-300">{item.task}</label>
                {item.link && (
                  <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-xs text-emerald-400 hover:underline block">
                    → Official resource
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
        <div>
          <label className="block text-sm font-medium text-emerald-glow mb-2">Registration Notes</label>
          <textarea
            className="w-full px-4 py-2 rounded-xl bg-black/40 border border-emerald-500/20 text-gray-200 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
            rows="3"
            placeholder="Track important registration details, dates, confirmation numbers..."
            value={registration.notes || ''}
            onChange={(e) => updateBusinessData('registration', { notes: e.target.value })}
          />
        </div>
      </div>
      <div className="flex space-x-4">
        <button
          onClick={prevStep}
          className="px-4 py-2 bg-gray-700 text-white rounded-xl hover:bg-gray-800 transition-colors"
        >
          Back
        </button>
        <button
          onClick={nextStep}
          className="px-4 py-2 bg-emerald-500 text-white rounded-xl hover:bg-emerald-600 transition-colors"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default RegistrationStep;
