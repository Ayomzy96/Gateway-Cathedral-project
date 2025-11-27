import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "../../styles/style.scss";

export const metadata = {
  title:
    "Gateway Cathedral | Spirit-Filled Worship & Biblical Teachings",
  description:
    "Gateway Cathedral, led by Pastor Peter Adamson, is a dynamic Christian church in Concord, North Carolina, dedicated to spreading the Gospel, fostering spiritual growth, and building a strong faith-based community through worship, prayer, and outreach programs.",
  keywords:
    "Gateway Cathedral, Reedemed Christian Church Of God, RCCG, Christian church in North Carolina, churches in Concord NC, Pastor Peter Adamson, faith-based community, Bible teachings, worship services, Sunday service Concord NC, online church sermons, Christian fellowship, church events, spiritual growth, live church streaming",
  author: "Gateway Cathedral",
  ogTitle:
    "Gateway Cathedral | Experience Faith, Worship, and Community in North Carolina",
  ogDescription:
    "Join Gateway Cathedral in Concord, NC, for inspiring worship, powerful biblical teachings, and a welcoming Christian community. Led by Pastor Peter Adamson, we offer Sunday services, Bible study, and online sermons for spiritual growth.",
  ogType: "website",
  ogUrl: "https://www.Gatewaycathedral.org",
  ogImage: "/images/og_image.png",
  twitterTitle: "Gateway Cathedral | Worship & Fellowship in North Carolina",
  twitterDescription:
    "A vibrant Christian church in Concord, NC, where faith comes alive through worship, teachings, and fellowship. Led by Pastor Peter Adamson.",
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
