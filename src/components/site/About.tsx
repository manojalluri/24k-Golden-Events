import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <section id="about" className="relative overflow-hidden border-t border-ivory/10 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid items-center gap-16 md:grid-cols-2">
          <div className="relative">
            <Reveal>
              <div className="relative overflow-hidden rounded-sm">
                <img
                  src="/assets/drive/image.png"
                  alt="About Grand Occasions"
                  loading="lazy"
                  className="h-auto w-full object-contain"
                />
              </div>
            </Reveal>
          </div>

          <div>
            <SectionHeading
              align="left"
              eyebrow="Our Story"
              title={<>An address shaped by <span className="italic text-gold">eighteen years</span> of celebration.</>}
            />
            <Reveal delay={0.15} className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground">
              <p>
                Since 2007, families across the city have entrusted us with the most important
                moments of their lives — from the first ring exchanged to the last dance of the
                evening. Every event passes through the same uncompromising standard: faultless
                hospitality, immaculate spaces, and a team that anticipates before it is asked.
              </p>
              <p>
                Our pillarless grand ballroom, intimate ceremony lawns and dedicated bridal &amp;
                VIP suites are tuned for celebrations from <span className="text-ivory">200 to 1,500 guests</span>.
                A senior event captain is assigned to your booking — from the venue tour to the
                final farewell.
              </p>
            </Reveal>

            <Reveal delay={0.3} className="mt-10 grid grid-cols-3 gap-4">
              {[
                { k: "4.9★", v: "Google Rated" },
                { k: "100%", v: "On-time Setup" },
                { k: "24/7", v: "Event Concierge" },
              ].map((b) => (
                <div key={b.v} className="rounded-sm border border-ivory/10 bg-card/40 p-4 text-center backdrop-blur">
                  <div className="font-serif text-2xl text-gold">{b.k}</div>
                  <div className="mt-1 text-[0.65rem] uppercase tracking-[0.18em] text-ivory/70">
                    {b.v}
                  </div>
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
