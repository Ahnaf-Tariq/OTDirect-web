const navLinks = [
  { title: "Home", path: "/" },
  {
    title: "Properties",
    subMenu: true,
    subLinks: [
      { title: "All Properties" },
      { title: "Featured Properties" },
      { title: "Most Viewed Properties" },
      { title: "Nearby Cities Properties" },
      { title: "Most Favorite Properties" },
    ],
  },
  {
    title: "Pages",
    subMenu: true,
    subLinks: [
      { title: "Subscription Plan" },
      { title: "Trends" },
      { title: "Area Converter" },
      { title: "Terms & Conditions" },
      { title: "Privacy Policy" },
    ],
  },
  { title: "Contact Us", path: "contact-us" },
  { title: "About Us", path: "about-us" },
];

export default navLinks;
