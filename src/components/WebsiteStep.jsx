import React from 'react';
import './styles/base.scss';
import './styles/components.scss';


function WebsiteStep({ businessData, updateBusinessData, nextStep, prevStep, downloadReport }) {
  const website = businessData.website || {};
  const pages = ['Home', 'About Us', 'Products/Services', 'Contact', 'Privacy Policy', 'Terms of Service'];

  return (
    <div className="space-y-6 fade-in">
      <h2 className="text-2xl font-bold text-gray-800">Website & Online Presence</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Domain Name</label>
          <input
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="yourbusiness.com"
            value={website.domain || ''}
            onChange={(e) => updateBusinessData('website', { domain: e.target.value })}
          />
          <p className="text-xs text-gray-500 mt-1">Register with: Namecheap, GoDaddy, Google Domains, or Cloudflare</p>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Website Platform</label>
          <select
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            value={website.platform || ''}
            onChange={(e) => updateBusinessData('website', { platform: e.target.value })}
          >
            <option value="">Select platform</option>
            <option value="wordpress">WordPress (flexible, popular)</option>
            <option value="shopify">Shopify (e-commerce)</option>
            <option value="wix">Wix (easy, drag-and-drop)</option>
            <option value="squarespace">Squarespace (beautiful templates)</option>
            <option value="webflow">Webflow (designer-friendly)</option>
            <option value="custom">Custom Development</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Hosting Provider</label>
          <input
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="e.g., Cloudflare Pages, Vercel, Netlify, Bluehost"
            value={website.hosting || ''}
            onChange={(e) => updateBusinessData('website', { hosting: e.target.value })}
          />
        </div>
        <div className="bg-gray-50 rounded-lg p-4">
          <h3 className="font-semibold text-gray-900 mb-3">Essential Website Pages</h3>
          {pages.map((page, idx) => (
            <div key={idx} className="flex items-center space-x-3 mb-2">
              <input
                type="checkbox"
                className="w-4 h-4 text-blue-600 rounded"
                checked={website[`page${idx}`] || false}
                onChange={(e) => updateBusinessData('website', { [`page${idx}`]: e.target.checked })}
              />
              <label className="text-sm text-gray-700">{page}</label>
            </div>
          ))}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Brand Colors</label>
          <div className="flex space-x-2">
            <input
              type="color"
              className="w-20 h-10 border border-gray-300 rounded cursor-pointer"
              value={website.color1 || '#3B82F6'}
              onChange={(e) => updateBusinessData('website', { color1: e.target.value })}
            />
            <input
              type="color"
              className="w-20 h-10 border border-gray-300 rounded cursor-pointer"
              value={website.color2 || '#1F2937'}
              onChange={(e) => updateBusinessData('website', { color2: e.target.value })}
            />
          </div>
        </div>
      </div>
      <div className="flex space-x-4">
        <button onClick={prevStep} className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors">
          Back
        </button>
        <button onClick={downloadReport} className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
          Download Plan
        </button>
      </div>
    </div>
  );
}

export default WebsiteStep;

