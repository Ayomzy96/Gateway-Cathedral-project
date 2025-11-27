import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "../../styles/style.scss";

export const metadata = {
  title:
    "Shining Light Fellowship | Spirit-Filled Worship & Biblical Teachings",
  description:
    "Shining Light Fellowship, led by Pastor Joshua Ajayi, is a dynamic Christian church in Concord, Nigeria, dedicated to spreading the Gospel, fostering spiritual growth, and building a strong faith-based community through worship, prayer, and outreach programs.",
  keywords:
    "Shining Light Fellowship, Reedemed Christian Church Of God, RCCG, Christian church in Nigeria, churches in Concord NC, Pastor Joshua Ajayi, faith-based community, Bible teachings, worship services, Sunday service Concord NC, online church sermons, Christian fellowship, church events, spiritual growth, live church streaming",
  author: "Shining Light Fellowship",
  ogTitle:
    "Shining Light Fellowship | Experience Faith, Worship, and Community",
  ogDescription:
    "Join Shining Light Fellowship in Concord, NC, for inspiring worship, powerful biblical teachings, and a welcoming Christian community. Led by Pastor Joshua Ajayi, we offer Sunday services, Bible study, and online sermons for spiritual growth.",
  ogType: "website",
  ogUrl: "https://www.Gatewaycathedral.org",
  ogImage: "/images/og_image.png",
  twitterTitle: "Shining Light Fellowship | Worship & Fellowship in Nigeria",
  twitterDescription:
    "A vibrant Christian church, where faith comes alive through worship, teachings, and fellowship. Led by Pastor Joshua Ajayi.",
  twitterCard: "summary_large_image",
  twitterImage: "/images/og_image.png",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/logo.svg"></link>
        <meta name="theme-color" content="#F2F5F8" />
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
      </head>
      <body suppressHydrationWarning>
        {typeof window === undefined ? null : (
          <>
            <Header />
            {children}
            <Footer />
          </>
        )}
      </body>
    </html>
  );
}
