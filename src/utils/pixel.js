// src/utils/pixel.js

export const trackSubscribe = () => {
  if (window.fbq) {
    window.fbq('track', 'Subscribe', {
      content_name: 'Join Group',
      content_category: 'Game Chat',
      value: 0.00,
      currency: 'INR'
    });
    console.log("Pixel: Subscribe Event Fired ✅");
  } else {
    console.error("Pixel: fbq not found ❌");
  }
};