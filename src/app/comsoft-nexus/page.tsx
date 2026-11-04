import { event } from "@/content/event";
import { navigation } from "@/content/navigation";
import { siteConfig } from "@/lib/site-config";
import { SiteHeader } from "@/components/header/SiteHeader";
import { Hero } from "@/components/hero/Hero";
import { Overview } from "@/components/sections/Overview";
import { PhotoBand } from "@/components/sections/PhotoBand";
import { Tracks } from "@/components/sections/Tracks";
import { ChallengeTopics } from "@/components/sections/ChallengeTopics";
import { Ideathon } from "@/components/sections/Ideathon";
import { Prizes } from "@/components/sections/Prizes";
import { Posters } from "@/components/sections/Posters";
import { Register } from "@/components/sections/Register";
import { Programme } from "@/components/sections/Programme";
import { Organisers } from "@/components/sections/Organisers";
import { AboutUs } from "@/components/sections/AboutUs";
import { Faq } from "@/components/sections/Faq";
import { SiteFooter } from "@/components/footer/SiteFooter";

export const metadata = {
  title: "ComSoft Nexus 2026",
  description:
    "ComSoft Nexus 2026 — National Research, Mentorship, and Career Networking Forum on Communications Software, organized under the IEEE ComSoc TC on Communications Software.",
};

export default function ComSoftNexus() {
  return (
    <>
      <SiteHeader nav={navigation} edition="comsoft" />
      <main id="main" tabIndex={-1}>
        <Hero edition="comsoft" />
        <ChallengeTopics />
        <Overview />
        <PhotoBand />
        <Tracks />
        <Ideathon />
        <Prizes />
        <Posters />
        <Register />
        <Programme />
        <Organisers />
        <AboutUs />
        <Faq />
      </main>
      <SiteFooter nav={navigation} />
      <EventStructuredData />
    </>
  );
}

function EventStructuredData() {
  const { dates, venue } = event;
  if (dates.status !== "confirmed" || venue.status !== "confirmed" || !siteConfig.siteUrl) {
    return null;
  }

  const data = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "ComSoft Nexus 2026",
    description:
      "National Research, Mentorship, and Career Networking Forum on Communications Software.",
    startDate: dates.value.start,
    endDate: dates.value.end,
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/MixedEventAttendanceMode",
    url: new URL("/comsoft-nexus", siteConfig.siteUrl).href,
    location: {
      "@type": "Place",
      name: venue.value.name,
      address: venue.value.address ?? venue.value.city,
    },
    organizer: event.organizers.map((p) => ({ "@type": "Person", name: p.name })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
