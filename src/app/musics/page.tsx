import { redirect } from "next/navigation";

// Musics page (archive) removed — redirect to homepage
export default function MusicsPage() {
  redirect("/");
}
