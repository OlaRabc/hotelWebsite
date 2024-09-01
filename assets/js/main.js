export function gtagEvent(
  interactionType,
  eventType,
  eventCategory,
  eventLabel = ""
) {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag(interactionType, eventType, {
        event_category: eventCategory,
        event_label: eventLabel,
        value: 1,
      });
    } else {
      console.warn("Google Analytics gtag is not loaded.");
    }
}
