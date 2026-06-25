import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Reveal } from "@/components/site/Reveal";
import { venue } from "@/lib/venue";


type Cat = "All" | "Weddings" | "Receptions" | "Corporate" | "Décor" | "Architecture";
const ITEMS: { src: string; alt: string; cat: Exclude<Cat, "All">; tall?: boolean }[] = [
  { src: "/assets/drive/Screenshot 2026-06-25 144233.png", alt: "Gallery Image 1", cat: "Weddings", tall: true },
  { src: "/assets/drive/Screenshot 2026-06-25 144421.png", alt: "Gallery Image 2", cat: "Receptions" },
  { src: "/assets/drive/Screenshot 2026-06-25 144505.png", alt: "Gallery Image 3", cat: "Corporate" },
  { src: "/assets/drive/Screenshot 2026-06-25 144548.png", alt: "Gallery Image 4", cat: "Décor" },
  { src: "/assets/drive/Screenshot 2026-06-25 144705.png", alt: "Gallery Image 5", cat: "Architecture", tall: true },
  { src: "/assets/drive/Screenshot 2026-06-25 144751.png", alt: "Gallery Image 6", cat: "Weddings" },
  { src: "/assets/drive/Screenshot 2026-06-25 144850.png", alt: "Gallery Image 7", cat: "Receptions" },
  { src: "/assets/drive/Screenshot 2026-06-25 145156.png", alt: "Gallery Image 8", cat: "Corporate", tall: true },
  { src: "/assets/drive/Screenshot 2026-06-25 145312.png", alt: "Gallery Image 9", cat: "Décor" },
  { src: "/assets/drive/Screenshot 2026-06-25 145352.png", alt: "Gallery Image 10", cat: "Architecture" },
  { src: "/assets/drive/Screenshot 2026-06-25 145519.png", alt: "Gallery Image 11", cat: "Weddings" },
  { src: "/assets/drive/Screenshot 2026-06-25 145802.png", alt: "Gallery Image 12", cat: "Receptions", tall: true },
  { src: "/assets/drive/Screenshot 2026-06-25 145848.png", alt: "Gallery Image 13", cat: "Corporate" },
  { src: "/assets/drive/Screenshot 2026-06-25 150228.png", alt: "Gallery Image 14", cat: "Décor" },
  { src: "/assets/drive/Screenshot 2026-06-25 150243.png", alt: "Gallery Image 15", cat: "Architecture" },
  { src: "/assets/drive/Screenshot 2026-06-25 150323.png", alt: "Gallery Image 16", cat: "Weddings" },
  { src: "/assets/drive/Screenshot 2026-06-25 150421.png", alt: "Gallery Image 17", cat: "Receptions" },
  { src: "/assets/drive/Screenshot 2026-06-25 150518.png", alt: "Gallery Image 18", cat: "Corporate" },
];

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: `Gallery — ${venue.name} Convention` },
      { name: "description", content: `Step inside ${venue.name}: wedding stages, reception halls, corporate setups, décor close-ups and exterior architecture in ${venue.city}.` },
      { property: "og:title", content: `Gallery — ${venue.name} Convention` },
      { property: "og:description", content: "A visual tour through weddings, receptions, corporate events and the architecture that hosts them." },
      { property: "og:image", content: g2 },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <>
      <section className="px-5 pb-12 pt-36 md:px-8 md:pb-16 md:pt-44">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="eyebrow">Gallery</div>
            <h1 className="mt-4 max-w-4xl font-serif text-5xl text-balance text-ivory md:text-7xl">
              Moments captured at <span className="italic text-gold">24k Golden Events.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
              A curated selection from celebrations across our halls and lawns.
            </p>
          </Reveal>


        </div>
      </section>

      <section className="px-5 pb-32 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid auto-rows-[180px] grid-cols-2 gap-3 md:auto-rows-[240px] md:grid-cols-4">
            {ITEMS.map((img, i) => (
              <Reveal
                key={img.src + i}
                delay={(i % 4) * 0.05}
                className={"group relative cursor-pointer overflow-hidden rounded-sm " + (img.tall ? "row-span-2" : "")}
              >
                <button
                  onClick={() => setLightbox(img.src)}
                  className="block h-full w-full"
                  aria-label={`View ${img.alt}`}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                </button>
              </Reveal>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              to="/"
              hash="contact"
              className="inline-flex items-center gap-3 rounded-sm bg-gold px-7 py-4 text-xs uppercase tracking-[0.22em] text-charcoal hover:bg-gold-soft"
            >
              Book a Private Tour
            </Link>
          </div>
        </div>
      </section>

      {lightbox && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-charcoal/95 p-4 backdrop-blur-xl"
          onClick={() => setLightbox(null)}
          role="dialog"
        >
          <img src={lightbox} alt="" className="max-h-[90vh] max-w-[95vw] rounded-sm object-contain" />
          <button
            onClick={() => setLightbox(null)}
            className="absolute right-5 top-5 rounded-full border border-ivory/20 px-4 py-2 text-xs uppercase tracking-[0.2em] text-ivory"
          >
            Close
          </button>
        </div>
      )}
    </>
  );
}
