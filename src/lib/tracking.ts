/**
 * Centralized tracking utility for Google Tag Manager (gtag) and Facebook Pixel (fbq)
 */

/**
 * Sends a custom event to Google Ads/Analytics and Facebook Pixel
 */
export const trackEvent = (eventName: string, params: Record<string, any> = {}) => {
    // Google Ads / Analytics
    if (typeof window !== "undefined" && (window as any).gtag) {
        (window as any).gtag("event", eventName, params);
    }

    // Facebook Pixel
    if (typeof window !== "undefined" && (window as any).fbq) {
        (window as any).fbq("trackCustom", eventName, params);
    }
};

/**
 * Sends a Google Ads conversion event (e.g. send_to: 'AW-10800412438/n1bVCJ3mm54dEJbuhJ4o')
 */
export const trackGoogleConversion = (sendTo: string, params: Record<string, any> = {}) => {
    if (typeof window !== "undefined" && (window as any).gtag) {
        (window as any).gtag("event", "conversion", {
            send_to: sendTo,
            ...params
        });
    }
};

/**
 * Special handling for Facebook Standard Events
 */
export const trackPixelEvent = (eventName: string, params: Record<string, any> = {}) => {
    if (typeof window !== "undefined" && (window as any).fbq) {
        (window as any).fbq("track", eventName, params);
    }
};

/**
 * Tracking for Contact (e.g. clicking WhatsApp, Email or Form Submission)
 */
export const trackContact = (metodo: string, params: Record<string, any> = {}) => {
    trackPixelEvent("Contact", { metodo, ...params });
    trackEvent("contato", { metodo, ...params });
};

