import React from 'react';
import './styles/base.scss';
import './styles/components.scss';

function WebsiteStep({ businessData, updateBusinessData, nextStep, prevStep, downloadReport }) {
  const website = businessData.website || {};
  const pages = ['Home', 'About Us', 'Products/Services', 'Contact', 'Privacy Policy', 'Terms of Service'];

  return (
    <div className="space-y-6 fade-in">
      <h2 className="text-2xl font-bold text-emerald-glow">Website & Online Presence</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-emerald-glow mb-2">Domain Name</label>
          <input
            type="text"
            className="w-full px-4 py-2 rounded-xl bg-black/40 border border-emerald-500/20 text-gray-200 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
            placeholder="yourbusiness.com"
            value={website.domain || ''}
            onChange={(e) => updateBusinessData('website', { domain: e.target.value })}
          />
          <p className="text-xs text-slate-400 mt-1">
            Register with: Namecheap, GoDaddy, Google Domains, or Cloudflare
          </p>
        </div>
        <div>
          <label className="block text-sm font-medium text-emerald-glow mb-2">Website Platform</label>
          <select
            className="w-full px-4 py-2 rounded-xl bg-black/40 border border-emerald-500/20 text-gray-200 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
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
          <label className="block text-sm font-medium text-emerald-glow mb-2">Hosting Provider</label>
          <input
            type="text"
            className="w-full px-4 py-2 rounded-xl bg-black/40 border border-emerald-500/20 text-gray-200 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
            placeholder="e.g., Cloudflare Pages, Vercel, Netlify, Bluehost"
            value={website.hosting || ''}
            onChange={(e) => updateBusinessData('website', { hosting: e.target.value })}
          />
        </div>
        <div className="glass rounded-xl p-4 border border-emerald-500/20">
          <h3 className="font-semibold text-emerald-glow mb-3">Essential Website Pages</h3>
          {pages.map((page, idx) => (
            <div key={idx} className="flex items-center space-x-3 mb-2">
              <input
                type="checkbox"
                className="w-4 h-4 rounded border-emerald-500/50 text-emerald-500 focus:ring-emerald-500"
                checked={website[`page${idx}`] || false}
                onChange={(e) => updateBusinessData('website', { [`page${idx}`]: e.target.checked })}
              />
              <label className="text-sm text-gray-300">{page}</label>
            </div>
          ))}
        </div>
        <div>
          <label className="block text-sm font-medium text-emerald-glow mb-2">Brand Colors</label>
          <div className="flex space-x-2">
            <input
              type="color"
              className="w-20 h-10 rounded border border-emerald-500/20 cursor-pointer"
              value={website.color1 || '#10B981'}
              onChange={(e) => updateBusinessData('website', { color1: e.target.value })}
            />
            <input
              type="color"
              className="w-20 h-10 rounded border border-emerald-500/20 cursor-pointer"
              value={website.color2 || '#050907'}
              onChange={(e) => updateBusinessData('website', { color2: e.target.value })}
            />
          </div>
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
          onClick={downloadReport}
          className="px-4 py-2 bg-red-orange text-white rounded-xl hover:bg-red-orange-glow transition-colors"
        >
          Download Plan
        </button>
      </div>
    </div>
  );
}

export default WebsiteStep;
