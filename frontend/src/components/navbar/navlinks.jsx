const navLinks = [
  { title: "Home", path: "/" },
  {
    title: "Properties",
    subMenu: true,
    subLinks: [
      { title: "All Properties", path: "/properties/all-properties" },
      { title: "Featured Properties", path: "/featured-properties" },
      { title: "Most Viewed Properties", path: "/most-viewed-properties" },
      { title: "Nearby Cities Properties", path: "/properties-nearby-city" },
      { title: "Most Favorite Properties", path: "/most-favorite-properties" },
    ],
  },
  {
    title: "Pages",
    subMenu: true,
    subLinks: [
      { title: "Subscription Plan", path: "/subscription-plan" },
      { title: "Trends", path: "/trends" },
      { title: "Area Converter" },
      { title: "Terms & Conditions", path: "/terms-and-condition" },
      { title: "Privacy Policy", path: "/privacy-policy" },
    ],
  },
  { title: "Contact Us", path: "contact-us" },
  { title: "About Us", path: "about-us" },
];

export default navLinks;
