export function gtagEvent(
  interactionType,
  eventType,
  eventCategory,
  eventLabel = "",
  value
) {
  if (typeof window !== "undefined" && window.gtag) {
    const eventTime = new Date().toISOString();

    window.gtag(interactionType, eventType, {
      event_category: eventCategory,
      event_label: eventLabel,
      // event_label: `submitted_at_${eventTime}`,
      value: value && 1,
    });
  } else {
    console.warn("Google Analytics gtag is not loaded.");
  }
}

export function gtagSetUid(uId) {
  // console.log(uId)
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag('config', 'G-W9ZLZJ3F1G', {
      'user_id': "12f"
    });
  } else {
    console.warn("Google Analytics gtag is not loaded.");
  }
}
