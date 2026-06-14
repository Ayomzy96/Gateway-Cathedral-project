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
      "We are dedicated to propagating the Gospel of Jesus Christ and supporting our church's mission through modern technology. We coordinate audio-visual production, live streaming, and digital communications to enhance the worship experience and connect with our global congregation.",
    members: [
      { name: "AV Lead", role: "Engineer", photo: "" },
    ],
    gallery: [
      "https://kdijhjnkxkrfjlyavcoe.supabase.co/storage/v1/object/public/Gateway%20Cathedral/http___172.20.10.1_33455_static_21111FD1-9B84-44E8-82AE-4AD56F326814_image_283598A8-554F-43AF-93B6-99F9E23A3B0E_L0_001_283598A8-554F-43AF-93B6-99F9E23A3B0EL0001.jpg",
    ],
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
      { name: "Senior Pastor", role: "Senior Pastor", photo: "https://kdijhjnkxkrfjlyavcoe.supabase.co/storage/v1/object/public/Gateway%20Cathedral/http___172.20.10.1_33455_static_21111FD1-9B84-44E8-82AE-4AD56F326814_image_283598A8-554F-43AF-93B6-99F9E23A3B0E_L0_001_283598A8-554F-43AF-93B6-99F9E23A3B0EL0001%20(4).jpg" },
      { name: "Associate Pastor", role: "Associate", photo: "" },
    ],
    gallery: [],
  },
];
