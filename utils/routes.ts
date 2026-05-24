export const pageRoutes = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "about-us",
    name: "About",
  },
  // Archive removed
  {
    name: "Events",
    children: [
      {
        path: "events",
        name: "Events",
      },
      {
        path: "testimonies",
        name: "Testimonies",
      },
    ],
  },
  {
    name: "Meet Our Team",
    children: [
      { path: "meet-our-team/choir", name: "The Choir" },
      { path: "meet-our-team/ushers", name: "Ushers" },
      { path: "meet-our-team/media-team", name: "Media Team" },
      { path: "meet-our-team/protocol", name: "Protocol" },
      { path: "meet-our-team/prayer-department", name: "Prayer Department" },
      { path: "meet-our-team/pastors", name: "Pastors" },
    ],
  },
  
];

export const mobilePageRoutes = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "about-us",
    name: "About",
  },
  // musics removed from mobile nav
  {
    path: "events",
    name: "Events",
  },
  {
    path: "testimonies",
    name: "Testimonies",
  },
  

];
