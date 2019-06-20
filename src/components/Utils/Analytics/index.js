export function initializeDataLayer() {
  if (typeof window !== 'undefined') {
    window.dataLayer = window.dataLayer || [];
  }
}

function eventToDataLayer(event) {
  initializeDataLayer();

  if (typeof window !== 'undefined') {
    window.dataLayer.push(event);
  }
}

export function trackEvent({
  eventType = 'event', // default value
  eventCategory,
  eventAction,
  eventLabel,
  eventUrlPath,
  eventUrlTitle,
  eventReferrer,

}) {
  const eventToPushToDataLayer = ({
    event: eventType,
    category: eventCategory,
    action: eventAction,
    label: eventLabel,
    origin: 'website',
    pagePath: eventUrlPath,
    pageTitle: eventUrlTitle,
    Referrer: eventReferrer,
  });

  eventToDataLayer(eventToPushToDataLayer);
}

export function trackVirtualPageView(url, pagetitle, referrer) {
  trackEvent({
    eventType: 'virtualPageview',
    eventUrlPath: url,
    eventUrlTitle: pagetitle,
    eventReferrer: referrer,
  });
}

export function initializeTracking() {
  initializeDataLayer();
}
