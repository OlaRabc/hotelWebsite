export function gtagEvent(
  interactionType,
  eventType,
  eventCategory,
  eventLabel = ""
) {
    if (typeof window !== "undefined" && window.gtag) {
      const eventTime = new Date().toISOString();

      window.gtag(interactionType, eventType, {
        event_category: eventCategory,
        event_label: eventLabel,
        user_id: 'uid_test',
        event_label: `submitted_at_${eventTime}`,
        value: 1,
      });
    } else {
      console.warn("Google Analytics gtag is not loaded.");
    }
}
