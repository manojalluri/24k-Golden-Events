import { Star, Quote } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const TESTIMONIALS = [
  {
    name: "Rajesh Kumar",
    event: "Local Guide",
    body: "Attended a wedding reception here. The hall is very spacious with excellent air conditioning. The parking area is huge and can accommodate a lot of vehicles. One of the best convention halls in Enikepadu.",
  },
  {
    name: "Srinivas Rao",
    event: "Local Guide",
    body: "Booked 24k Golden Events for our family function. The management was very cooperative. The guest rooms provided were clean and well-maintained. Highly recommend for grand functions in Vijayawada.",
  },
  {
    name: "Kiran Reddy",
    event: "Reviewer",
    body: "The centralized AC works perfectly even with a crowd of 1000+ people. The dining area is separate and very well organized. Excellent ambiance and very accessible location on the Eluru Road.",
  },
  {
    name: "Venkata Lakshmi",
    event: "Reviewer",
    body: "Beautiful venue with great amenities. The management gave us a lot of flexibility with vendors. The lighting and stage setup looked absolutely stunning. Our guests were very impressed!",
  },
];

export function Testimonials() {
  return (
    <section className="relative overflow-hidden border-t border-ivory/10 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Testimonials"
          title={<>Beloved by the families <span className="italic text-gold">we serve.</span></>}
        />
        <div className="mt-16 flex gap-5 overflow-x-auto snap-x snap-mandatory pb-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {TESTIMONIALS.map((t, i) => (
            <Reveal
              key={t.name}
              delay={i * 0.08}
              className="relative flex h-full w-[85vw] max-w-[480px] shrink-0 snap-center flex-col gap-5 rounded-sm border border-ivory/10 bg-card/60 p-8 backdrop-blur md:p-10"
            >
              <Quote className="size-8 text-gold/60" strokeWidth={1} />
              <p className="font-serif text-xl leading-snug text-ivory md:text-2xl">
                "{t.body}"
              </p>
              <div className="mt-auto flex items-center justify-between border-t border-ivory/10 pt-5">
                <div>
                  <div className="text-sm font-medium text-ivory">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.event}</div>
                </div>
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="size-4 fill-gold text-gold" />
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
