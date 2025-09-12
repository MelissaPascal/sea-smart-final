export const trackEvent = (eventName: string, properties?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.va) {
    window.va('track', { event: eventName, ...properties });  // ✅ correct
  }
};
