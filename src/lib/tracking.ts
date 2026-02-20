/**
 * Centralized tracking utility for Google Tag Manager (gtag) and Facebook Pixel (fbq)
 */

type TrackingEvent = {
    action: string;
    category?: string;
    label?: string;
    value?: number;
    [key: string]: any;
};

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
 * Special handling for Facebook Standard Events
 */
export const trackPixelEvent = (eventName: string, params: Record<string, any> = {}) => {
    if (typeof window !== "undefined" && (window as any).fbq) {
        (window as any).fbq("track", eventName, params);
    }
};

/**
 * Tracking for Lead generation (e.g. form submission)
 */
export const trackLead = (params: Record<string, any> = {}) => {
    trackPixelEvent("Lead", params);
    trackEvent("gerar_lead", params);
};

/**
 * Tracking for Contact (e.g. clicking WhatsApp or Email)
 */
export const trackContact = (metodo: string, params: Record<string, any> = {}) => {
    trackPixelEvent("Contact", { metodo, ...params });
    trackEvent("contato", { metodo, ...params });
};
