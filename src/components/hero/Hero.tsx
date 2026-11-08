import Image from "next/image";
import { event } from "@/content/event";
import { photos } from "@/content/media";
import { formatDateRange, formatWeekdayRange } from "@/lib/format";
import { siteConfig } from "@/lib/site-config";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { CountdownTimer } from "@/components/media/CountdownTimer";
import { HeroMedia } from "./HeroMedia";
import { HeroNetwork } from "./HeroNetwork";
import { HeroThemes } from "./HeroThemes";
import styles from "./Hero.module.css";

type HeroEdition = "ruralconnect" | "comsoft";

const EDITIONS: Record<
  HeroEdition,
  { eyebrow: string; titlePrimary: string; titleAccent: string; description: string }
> = {
  ruralconnect: {
    eyebrow: "RuralConnect 2026",
    titlePrimary: "National Workshop on Rural Communication Innovations",
    titleAccent: "Empowering Underpriviledged Youth",
    description:
      "A two-day National Workshop on Rural Communication Innovations: Empowering Underprivileged Youth, for UG, PG, and PhD students — innovate, pitch, and compete on rural communication and connectivity.",
  },
  comsoft: {
    eyebrow: "ComSoft Nexus 2026",
    titlePrimary: "National Research, Mentorship, and Career Networking Forum",
    titleAccent: "on Communications Software",
    description:
      "ComSoft Nexus 2026 is a two-day hybrid national research, mentorship, and career networking forum organized under the IEEE ComSoc TC on Communications Software. The initiative aims to connect students, researchers, faculty, and industry experts to foster research collaboration, mentorship, and PhD/postdoctoral career opportunities in emerging communications software technologies.",
  },
};

export function Hero({ edition = "ruralconnect" }: { edition?: HeroEdition } = {}) {
  const { identity, dates, venue, ideathon, tracks } = event;
  const applyUrl = siteConfig.ideathonFormUrl;
  const copy = EDITIONS[edition];

  return (
    <section id="top" className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.aurora} aria-hidden="true" />
      <HeroThemes />
      <div className={styles.media}>
        <div className={styles.scrollLayer}>
          <HeroMedia>
            <Image
              src={photos.hero.src}
              alt={photos.hero.alt}
              fill
              priority
              placeholder="blur"
              sizes="(min-width: 64em) 66vw, 100vw"
              className={styles.photo}
            />
            <HeroNetwork />
          </HeroMedia>
        </div>
        <div className={styles.wash} aria-hidden="true" />
      </div>

      <div className={styles.inner}>
        <div className={styles.copy}>
          <div className={styles.introPanel}>
            <p className={styles.eyebrow} aria-hidden="true">
              {copy.eyebrow}
            </p>
            <h1 id="hero-title" className={styles.title}>
              <span className="visually-hidden">{copy.eyebrow}: </span>
              <span className={styles.line}>{copy.titlePrimary}</span>{" "}
              <span className={`${styles.line} ${styles.accent}`}>{copy.titleAccent}</span>
            </h1>
            <p className={styles.lede}>{copy.description}</p>
            <p className={styles.audience}>
              For UG, PG and PhD — innovate, pitch and compete across{" "}
              {tracks.length} challenge tracks.
            </p>
          </div>
          <p className={styles.ideaIntro}>
            Amongst an assortment of events to be hosted by the workshop, one of the highlights is
            the <strong>Ideathon</strong> where you can pitch your ideas catering to rural
            communication and connectivity and get a chance to win exciting prizes and gifts.
          </p>
          <div className={styles.ctas}>
            <ButtonLink
              href={applyUrl ?? "#apply"}
              external={Boolean(applyUrl)}
              size="large"
              className={styles.primary}
            >
              Apply for the ideathon
              <span className={styles.arrow} aria-hidden="true">
                →
              </span>
            </ButtonLink>
          </div>
          <p className={styles.freeNotice} role="note">
            <span className={styles.freeBadge} aria-hidden="true">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12.5l4 4L19 7" />
              </svg>
              Free
            </span>
            <span className={styles.freeText}>
              Registration is <strong>completely free</strong> for applicants — no fee, ever.
            </span>
          </p>
          {/* What's in the competition — advertised right on the hero */}
          <div className={styles.competitionStrip} aria-label="Competition highlights">
            <div className={styles.stripItem}>
              <span className={styles.stripIcon} aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M8 3h8l1.5 6.5H6.5L8 3z" />
                  <path d="M6.5 9.5a5.5 5.5 0 0 0 11 0" />
                  <path d="M12 15v3.5M9 21h6" />
                </svg>
              </span>
              <span className={styles.stripValue}>Prizes</span>
              <span className={styles.stripDetail}>to be revealed</span>
            </div>
            <span className={styles.stripDivider} aria-hidden="true" />
            <div className={styles.stripItem}>
              <span className={styles.stripIcon} aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 6h18M3 12h18M3 18h18" />
                  <path d="M7 6v12M17 6v12" />
                </svg>
              </span>
              <span className={styles.stripValue}>{tracks.length} tracks</span>
              <span className={styles.stripDetail}>choose your arena</span>
            </div>
            <span className={styles.stripDivider} aria-hidden="true" />
            <div className={styles.stripItem}>
              <span className={styles.stripIcon} aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </span>
              <span className={styles.stripValue}>Top speakers</span>
              <span className={styles.stripDetail}>industry &amp; government</span>
            </div>
          </div>
        </div>

        <dl className={styles.facts}>
          <div>
            <dt>Theme</dt>
            <dd>{identity.theme}</dd>
          </div>
          <div>
            <dt>When</dt>
            <dd>
              {dates.status === "confirmed" ? (
                <>
                  {formatDateRange(dates.value)}
                  <span className={styles.factNote}>{formatWeekdayRange(dates.value)}</span>
                </>
              ) : (
                "Dates to be announced"
              )}
            </dd>
          </div>
          <div>
            <dt>Where</dt>
            <dd>
              {venue.status === "confirmed" ? venue.value.name : "Venue to be announced"}
              {venue.status === "confirmed" && (
                <span className={styles.factNote}>{venue.value.city}</span>
              )}
            </dd>
          </div>
          <div>
            <dt>Format</dt>
            <dd>
              Ideathon, lectures and tutorials
              <span className={styles.factNote}>
                {ideathon.shortlistedTeams} shortlisted teams of up to {ideathon.maxTeamSize}
              </span>
            </dd>
          </div>
        </dl>

        {dates.status === "confirmed" && (
          <CountdownTimer
            targetDate="2026-11-05T23:59:00+05:30"
            className={styles.timerRow}
          />
        )}
      </div>
    </section>
  );
}
