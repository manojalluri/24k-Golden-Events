// Single source of truth for venue details. Update these placeholders to brand the site.
export const venue = {
  name: "24k Golden Events",
  tagline: "Convention Hall",
  city: "Vijayawada",
  fullAddress: "National Highway 16, Eluru Road, Enikepadu, Vijayawada, Andhra Pradesh 521108",
  phoneDisplay: "+91 99486 11116",
  phoneHref: "+919948611116",
  whatsappHref: "919948611116",
  email: "hello@24kgoldenevents.com",
  hours: "Mon – Sun · 9:00 AM – 9:00 PM",
  mapsQuery: "24k+Golden+Events+Convention+Hall+Vijayawada",
  social: {
    instagram: "https://instagram.com/",
    facebook: "https://facebook.com/",
    youtube: "https://youtube.com/",
  },
  stats: {
    events: "4,200+",
    years: "18",
    capacity: "1,500",
    rating: "4.9",
  },
} as const;

export const waLink = (msg = "Hello, I'd like to enquire about booking the venue.") =>
  `https://wa.me/${venue.whatsappHref}?text=${encodeURIComponent(msg)}`;

export const mapsLink = () =>
  `https://maps.app.goo.gl/nEZjXUpgVbGeVs2Y7?g_st=ic`;
