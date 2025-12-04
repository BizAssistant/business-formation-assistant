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
      <h2 className="text-2xl font-bold text-gray-800">Business Registration Checklist</h2>
      <div className="space-y-4">
        <div className="bg-gray-50 rounded-lg p-4">
          <h3 className="font-semibold text-gray-900 mb-3">Required Steps</h3>
          {tasks.map((item, idx) => (
            <div key={idx} className="flex items-start space-x-3 mb-3">
              <input
                type="checkbox"
                className="mt-1 w-5 h-5 text-blue-600 rounded"
                checked={registration[`task${idx}`] || false}
                onChange={(e) => updateBusinessData('registration', { [`task${idx}`]: e.target.checked })}
              />
              <div className="flex-1">
                <label className="text-gray-700">{item.task}</label>
                {item.link && (
                  <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 hover:underline block">
                    → Official resource
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Registration Notes</label>
          <textarea
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            rows="3"
            placeholder="Track important registration details, dates, confirmation numbers..."
            value={registration.notes || ''}
            onChange={(e) => updateBusinessData('registration', { notes: e.target.value })}
          />
        </div>
      </div>
      <div className="flex space-x-4">
        <button onClick={prevStep} className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors">
          Back
        </button>
        <button onClick={nextStep} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          Next
        </button>
      </div>
    </div>
  );
}

export default RegistrationStep;

