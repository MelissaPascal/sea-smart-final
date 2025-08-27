export const trackEvent = (eventName: string, properties?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.va) {
    window.va('track', eventName, properties);
  }
};

export const ANALYTICS_EVENTS = {
  CHAT_MESSAGE_SENT: 'chat_message_sent',
  USER_TYPE_SELECTED: 'user_type_selected',
  // ... other events
};
