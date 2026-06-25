import { Link } from "@tanstack/react-router";
import { ArrowUpRight, GlassWater, HeartHandshake, Mic, PartyPopper, Briefcase, Sparkles } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const CATEGORIES = [
  { Icon: HeartHandshake, title: "Weddings", desc: "Traditional & modern wedding celebrations." },
  { Icon: GlassWater, title: "Receptions", desc: "Elegant evening dining experiences." },
  { Icon: Sparkles, title: "Engagements", desc: "Memorable pre-wedding ceremonies." },
  { Icon: Briefcase, title: "Corporate Events", desc: "Meetings, conferences, launches." },
  { Icon: PartyPopper, title: "Birthdays & Anniversaries", desc: "Luxury private milestone parties." },
  { Icon: Mic, title: "Cultural & Exhibitions", desc: "Community gatherings and trade events." },
];

export function Categories() {
  return (
    <section id="events" className="border-t border-ivory/10 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Event Categories"
          title={<>Every occasion, <span className="italic text-gold">staged to perfection.</span></>}
          description="A versatile venue tuned for the full spectrum of life's celebrations and business gatherings."
        />

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map((c, i) => (
            <Reveal
              key={c.title}
              delay={i * 0.05}
              className="group relative flex flex-col justify-between overflow-hidden rounded-sm border border-ivory/10 bg-card/60 p-8 backdrop-blur transition-all hover:border-gold/30 hover:bg-card"
            >
              <div className="mb-8 flex items-center justify-between">
                <c.Icon className="size-8 text-gold transition-transform group-hover:scale-110" strokeWidth={1.25} />
                <Link
                  to="/gallery"
                  className="flex size-10 shrink-0 items-center justify-center rounded-full border border-ivory/20 text-ivory transition-colors group-hover:border-gold group-hover:bg-gold group-hover:text-charcoal"
                  aria-label={`View ${c.title} gallery`}
                >
                  <ArrowUpRight size={16} />
                </Link>
              </div>
              <div>
                <h3 className="font-serif text-2xl text-ivory">{c.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
