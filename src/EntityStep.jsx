<script>
  // Service Worker Registration
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      const swCode = `
        const CACHE_NAME = 'bizform-v1';
        const urlsToCache = ['/'];
        
        self.addEventListener('install', (event) => {
          event.waitUntil(
            caches.open(CACHE_NAME)
              .then((cache) => cache.addAll(urlsToCache))
          );
        });
        
        self.addEventListener('fetch', (event) => {
          event.respondWith(
            caches.match(event.request)
              .then((response) => response || fetch(event.request))
          );
        });
      `;
      
      const blob = new Blob([swCode], { type: 'application/javascript' });
      const swUrl = URL.createObjectURL(blob);
      
      navigator.serviceWorker.register(swUrl)
        .then(() => console.log('Service Worker registered'))
        .catch((err) => console.log('Service Worker registration failed:', err));
    });
  }

  // App State
  const state = {
    currentStep: 0,
    completedSteps: [],
    businessData: {
      concept: {},
      entity: {},
      registration: {},
      marketing: {},
      finance: {},
      website: {}
    }
  };

  // Load saved progress
  function loadProgress() {
    const saved = localStorage.getItem('businessFormationProgress');
    if (saved) {
      const data = JSON.parse(saved);
      state.businessData = data.businessData || state.businessData;
      state.completedSteps = data.completedSteps || [];
      state.currentStep = data.currentStep || 0;
    }
  }

  // Save progress
  function saveProgress() {
    const data = {
      businessData: state.businessData,
      completedSteps: state.completedSteps,
      currentStep: state.currentStep,
      lastSaved: new Date().toISOString()
    };
    localStorage.setItem('businessFormationProgress', JSON.stringify(data));
    alert('Progress saved successfully!');
  }

  // Update business data
  function updateBusinessData(step, data) {
    state.businessData[step] = { ...state.businessData[step], ...data };
    render();
  }

  // Mark step complete
  function markStepComplete(stepId) {
    if (!state.completedSteps.includes(stepId)) {
      state.completedSteps.push(stepId);
    }
  }

  // Download report
  function downloadReport() {
    const report = `BUSINESS FORMATION PLAN

Generated: ${new Date().toLocaleDateString()}

=== BUSINESS CONCEPT ===
Name: ${state.businessData.concept.name || 'N/A'}
Industry: ${state.businessData.concept.industry || 'N/A'}
Description: ${state.businessData.concept.description || 'N/A'}
Target Market: ${state.businessData.concept.target || 'N/A'}

=== ENTITY SELECTION ===
Type: ${state.businessData.entity.type || 'N/A'}
State: ${state.businessData.entity.state || 'N/A'}

=== REGISTRATION ===
${state.businessData.registration.notes || 'No notes yet'}

=== MARKETING STRATEGY ===
Value Proposition: ${state.businessData.marketing.uvp || 'N/A'}
Budget: $${state.businessData.marketing.budget || '0'}/month
90-Day Plan: ${state.businessData.marketing.plan90 || 'N/A'}

=== FINANCIAL SETUP ===
Startup Costs: $${state.businessData.finance.startupCosts || '0'}
Funding Source: ${state.businessData.finance.fundingSource || 'N/A'}
Pricing Strategy: ${state.businessData.finance.pricing || 'N/A'}

=== WEBSITE & HOSTING ===
Domain: ${state.businessData.website.domain || 'N/A'}
Platform: ${state.businessData.website.platform || 'N/A'}
Hosting: ${state.businessData.website.hosting || 'N/A'}
`;
    const blob = new Blob([report], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'business-formation-plan.txt';
    a.click();
    URL.revokeObjectURL(url);
  }

  // Navigation
  function nextStep() {
    markStepComplete(state.currentStep);
    if (state.currentStep < 5) {
      state.currentStep++;
      render();
    }
  }

  function prevStep() {
    if (state.currentStep > 0) {
      state.currentStep--;
      render();
    }
  }

  function goToStep(stepId) {
    state.currentStep = stepId;
    render();
  }
</script>
  
