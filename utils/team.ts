export type TeamCategory = {
  id: string;
  title: string;
  description: string;
  members: Array<{ name: string; role: string; photo?: string; bio?: string }>;
  gallery?: string[];
};

export const teamCategories: TeamCategory[] = [
  {
    id: "choir",
    title: "The Choir",
    description:
      "Lead worship and support congregational singing — rehearsals, arrangements and performance during services.",
    members: [
      { name: "Choir Director", role: "Director", photo: "" },
      { name: "Lead Vocalist", role: "Lead Vocalist", photo: "" },
    ],
    gallery: [],
  },
  {
    id: "ushers",
    title: "Ushers",
    description:
      "Provide hospitality and order during services: seating, greeting, and assisting members and visitors.",
    members: [
      { name: "Head Usher", role: "Coordinator", photo: "" },
    ],
    gallery: [],
  },
  {
    id: "media-team",
    title: "Media Team",
    description:
      "Run audio/visual systems, livestreams and record services; manage social media content and uploads.",
    members: [
      { name: "AV Lead", role: "Engineer", photo: "" },
      { name: "Streaming Operator", role: "Producer", photo: "" },
    ],
    gallery: [],
  },
  {
    id: "protocol",
    title: "Protocol",
    description:
      "Coordinate official events, guest seating and logistics for dignitaries and visiting ministers.",
    members: [
      { name: "Protocol Head", role: "Coordinator", photo: "" },
    ],
    gallery: [],
  },
  {
    id: "prayer-department",
    title: "Prayer Department",
    description:
      "Organize prayer meetings, intercession teams and pastoral care for congregational needs.",
    members: [
      { name: "Prayer Leader", role: "Leader", photo: "" },
    ],
    gallery: [],
  },
  {
    id: "pastors",
    title: "Pastors",
    description:
      "Lead the church spiritually: preaching, counseling, pastoral visits, and oversight of ministries.",
    members: [
      { name: "Senior Pastor", role: "Senior Pastor", photo: "" },
      { name: "Associate Pastor", role: "Associate", photo: "" },
    ],
    gallery: [],
  },
];
