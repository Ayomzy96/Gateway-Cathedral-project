"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const SermonsPage: React.FC = () => {
  const router = useRouter();

  // Redirect visitors to home since the Sermons page has been removed
  useEffect(() => {
    router.replace("/");
  }, [router]);

  return null;
};

export default SermonsPage;
