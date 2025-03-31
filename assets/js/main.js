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
      value: value,
    });
  } else {
    console.warn("Google Analytics gtag is not loaded.");
  }
}

export function gtagSetUid(uId) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("config", "G-W9ZLZJ3F1G", {
      user_id: "12f",
    });
  } else {
    console.warn("Google Analytics gtag is not loaded.");
  }
}
