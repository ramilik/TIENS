// Vercel Speed Insights Injection
// This script injects Vercel Speed Insights for performance monitoring

(function() {
  // Create the Speed Insights script injection
  window.si = window.si || function () { 
    (window.siq = window.siq || []).push(arguments); 
  };
  
  // Create and inject the Speed Insights script
  const script = document.createElement('script');
  script.defer = true;
  script.src = '/_vercel/speed-insights/script.js';
  
  // Append to document head or body
  (document.head || document.body).appendChild(script);
})();
