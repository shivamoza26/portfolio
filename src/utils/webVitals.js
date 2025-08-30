import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals';

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
  onCLS(sendToAnalytics);
  onINP(sendToAnalytics);
  onFCP(sendToAnalytics);
  onLCP(sendToAnalytics);
  onTTFB(sendToAnalytics);
};

// Individual metric getters for custom handling
export const getWebVitals = () => {
  const vitals = {};
  
  onCLS((metric) => { vitals.cls = metric; });
  onINP((metric) => { vitals.inp = metric; });
  onFCP((metric) => { vitals.fcp = metric; });
  onLCP((metric) => { vitals.lcp = metric; });
  onTTFB((metric) => { vitals.ttfb = metric; });
  
  return vitals;
};
