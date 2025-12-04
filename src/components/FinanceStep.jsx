import React from 'react';
import './styles/base.scss';
import './styles/components.scss';

function FinanceStep({ businessData, updateBusinessData, nextStep, prevStep }) {
  const finance = businessData.finance || {};
  const tools = [
    'Accounting software (QuickBooks, Xero, FreshBooks)',
    'Payment processing (Stripe, Square, PayPal)',
    'Invoicing system',
    'Expense tracking',
    'Payroll system (if hiring)',
    'Business credit card'
  ];

  return (
    <div className="space-y-6 fade-in">
      <h2 className="text-2xl font-bold text-emerald-glow">Financial Foundation</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-emerald-glow mb-2">Startup Costs</label>
          <input
            type="number"
            className="w-full px-4 py-2 rounded-xl bg-black/40 border border-emerald-500/20 text-gray-200 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
            placeholder="Estimated initial investment needed"
            value={finance.startupCosts || ''}
            onChange={(e) => updateBusinessData('finance', { startupCosts: e.target.value })}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-emerald-glow mb-2">Funding Source</label>
          <select
            className="w-full px-4 py-2 rounded-xl bg-black/40 border border-emerald-500/20 text-gray-200 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
            value={finance.fundingSource || ''}
            onChange={(e) => updateBusinessData('finance', { fundingSource: e.target.value })}
          >
            <option value="">Select funding source</option>
            <option value="personal">Personal Savings</option>
            <option value="loan">Business Loan</option>
            <option value="investors">Investors</option>
            <option value="crowdfunding">Crowdfunding</option>
            <option value="grants">Grants</option>
            <option value="mixed">Mixed Sources</option>
          </select>
        </div>
        <div className="glass rounded-xl p-4 border border-emerald-500/20">
          <h3 className="font-semibold text-emerald-glow mb-3">Financial Tools Setup</h3>
          {tools.map((item, idx) => (
            <div key={idx} className="flex items-center space-x-3 mb-2">
              <input
                type="checkbox"
                className="w-4 h-4 rounded border-emerald-500/50 text-emerald-500 focus:ring-emerald-500"
                checked={finance[`tool${idx}`] || false}
                onChange={(e) => updateBusinessData('finance', { [`tool${idx}`]: e.target.checked })}
              />
              <label className="text-sm text-gray-300">{item}</label>
            </div>
          ))}
        </div>
        <div>
          <label className="block text-sm font-medium text-emerald-glow mb-2">Pricing Strategy</label>
          <textarea
            className="w-full px-4 py-2 rounded-xl bg-black/40 border border-emerald-500/20 text-gray-200 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
            rows="3"
            placeholder="How will you price your products/services?"
            value={finance.pricing || ''}
            onChange={(e) => updateBusinessData('finance', { pricing: e.target.value })}
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

export default FinanceStep;
