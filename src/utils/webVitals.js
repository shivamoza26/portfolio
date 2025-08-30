import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

// Function to send metrics to analytics service
const sendToAnalytics = (metric) => {
  // In a real application, you would send this to your analytics service
  // For example: Google Analytics, Mixpanel, or a custom endpoint
  console.log('Web Vital:', metric);
  
  // Example: Send to Google Analytics 4
  if (typeof gtag !== 'undefined') {
    gtag('event', metric.name, {
      value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      event_category: 'Web Vitals',
      event_label: metric.id,
      non_interaction: true,
    });
  }
  
  // Example: Send to a custom analytics endpoint
  // fetch('/api/analytics/web-vitals', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify(metric)
  // });
};

// Initialize web vitals monitoring
export const initWebVitals = () => {
  getCLS(sendToAnalytics);
  getFID(sendToAnalytics);
  getFCP(sendToAnalytics);
  getLCP(sendToAnalytics);
  getTTFB(sendToAnalytics);
};

// Individual metric getters for custom handling
export const getWebVitals = () => {
  const vitals = {};
  
  getCLS((metric) => { vitals.cls = metric; });
  getFID((metric) => { vitals.fid = metric; });
  getFCP((metric) => { vitals.fcp = metric; });
  getLCP((metric) => { vitals.lcp = metric; });
  getTTFB((metric) => { vitals.ttfb = metric; });
  
  return vitals;
};
