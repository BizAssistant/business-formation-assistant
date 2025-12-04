import React from 'react';
import './styles/base.scss';
import './styles/components.scss';

function MarketingStep({ businessData, updateBusinessData, nextStep, prevStep }) {
  const marketing = businessData.marketing || {};
  const channels = ['Social Media', 'Email Marketing', 'SEO', 'Paid Ads', 'Content Marketing', 'Networking', 'Referrals', 'PR'];

  return (
    <div className="space-y-6 fade-in">
      <h2 className="text-2xl font-bold text-gray-800">Initial Marketing Strategy</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Unique Value Proposition</label>
          <textarea
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            rows="3"
            placeholder="What makes your business unique? Why should customers choose you?"
            value={marketing.uvp || ''}
            onChange={(e) => updateBusinessData('marketing', { uvp: e.target.value })}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">Marketing Channels</label>
          <div className="grid grid-cols-2 gap-3">
            {channels.map((channel) => (
              <label key={channel} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 rounded"
                  checked={marketing.channels?.[channel] || false}
                  onChange={(e) => {
                    const channels = { ...marketing.channels, [channel]: e.target.checked };
                    updateBusinessData('marketing', { channels });
                  }}
                />
                <span className="text-sm text-gray-700">{channel}</span>
              </label>
            ))}
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Initial Marketing Budget</label>
          <input
            type="number"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Monthly budget in USD"
            value={marketing.budget || ''}
            onChange={(e) => updateBusinessData('marketing', { budget: e.target.value })}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">90-Day Marketing Plan</label>
          <textarea
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            rows="4"
            placeholder="Outline your key marketing activities for the first 90 days..."
            value={marketing.plan90 || ''}
            onChange={(e) => updateBusinessData('marketing', { plan90: e.target.value })}
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

export default MarketingStep;

