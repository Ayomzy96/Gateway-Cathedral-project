import { redirect } from "next/navigation";

// Books page removed — redirect to homepage
export default function BooksPage() {
  redirect("/");
}
