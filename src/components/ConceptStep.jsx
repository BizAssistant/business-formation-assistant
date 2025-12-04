import React from 'react';

const ConceptStep = ({ data, updateData }) => (
  <div className="space-y-4">
    <h2 className="text-xl font-bold text-emerald-glow">Define Your Business Concept</h2>
    <div className="space-y-3">
      <div>
        <label className="block text-sm font-medium text-emeraldMetalSoft mb-1">Business Name</label>
        <input
          type="text"
          className="w-full px-3 py-2 rounded bg-black/40 border border-emeraldMetalSoft/30"
          value={data.name || ''}
          onChange={(e) => updateData({ name: e.target.value })}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-emeraldMetalSoft mb-1">Industry</label>
        <select
          className="w-full px-3 py-2 rounded bg-black/40 border border-emeraldMetalSoft/30"
          value={data.industry || ''}
          onChange={(e) => updateData({ industry: e.target.value })}
        >
          <option value="">Select industry</option>
          <option value="technology">Technology</option>
          <option value="retail">Retail</option>
          <option value="services">Professional Services</option>
          <option value="food">Food & Beverage</option>
          <option value="healthcare">Healthcare</option>
          <option value="construction">Construction</option>
          <option value="consulting">Consulting</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-emeraldMetalSoft mb-1">Description</label>
        <textarea
          className="w-full px-3 py-2 rounded bg-black/40 border border-emeraldMetalSoft/30"
          rows="4"
          value={data.description || ''}
          onChange={(e) => updateData({ description: e.target.value })}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-emeraldMetalSoft mb-1">Target Market</label>
        <textarea
          className="w-full px-3 py-2 rounded bg-black/40 border border-emeraldMetalSoft/30"
          rows="3"
          value={data.target || ''}
          onChange={(e) => updateData({ target: e.target.value })}
        />
      </div>
    </div>
  </div>
);

export default ConceptStep;
