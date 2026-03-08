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
