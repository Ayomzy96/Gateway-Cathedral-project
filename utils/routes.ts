export const pageRoutes = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "about-us",
    name: "About",
  },
  {
    name: "Archive",
    children: [
      {
        path: "musics",
        name: "Musics",
      },
      {
        path: "books",
        name: "Books",
      },
    ],
  },
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
  {
    path: "musics",
    name: "Musics",
  },
  {
    path: "books",
    name: "Books",
  },
  {
    path: "events",
    name: "Events",
  },
  {
    path: "testimonies",
    name: "Testimonies",
  },
  {
    path: "blogs",
    name: "Blogs",
  },
  
  {
    path: "youths",
    name: "Youths",
  },
];
