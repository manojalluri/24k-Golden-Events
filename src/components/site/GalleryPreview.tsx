import { Link } from "@tanstack/react-router";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";


const IMAGES = [
  { src: "/assets/drive/Screenshot 2026-06-25 144233.png", alt: "Gallery Image 1", span: "row-span-2" },
  { src: "/assets/drive/Screenshot 2026-06-25 144421.png", alt: "Gallery Image 2" },
  { src: "/assets/drive/Screenshot 2026-06-25 144505.png", alt: "Gallery Image 3" },
  { src: "/assets/drive/Screenshot 2026-06-25 144548.png", alt: "Gallery Image 4" },
  { src: "/assets/drive/Screenshot 2026-06-25 144705.png", alt: "Gallery Image 5", span: "row-span-2" },
  { src: "/assets/drive/Screenshot 2026-06-25 144751.png", alt: "Gallery Image 6" },
  { src: "/assets/drive/Screenshot 2026-06-25 144850.png", alt: "Gallery Image 7" },
  { src: "/assets/drive/Screenshot 2026-06-25 145156.png", alt: "Gallery Image 8" },
];

export function GalleryPreview() {
  return (
    <section id="gallery" className="border-t border-ivory/10 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Gallery"
          title={<>A look inside <span className="italic text-gold">our world.</span></>}
          description="Past celebrations, candid moments and details that set the standard."
        />

        <div className="mt-16 grid auto-rows-[180px] grid-cols-2 gap-3 md:auto-rows-[220px] md:grid-cols-4">
          {IMAGES.map((img, i) => (
            <Reveal
              key={i}
              delay={(i % 4) * 0.05}
              className={"group relative overflow-hidden rounded-sm " + (img.span ?? "")}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-charcoal/0 transition-colors group-hover:bg-charcoal/20" />
            </Reveal>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/gallery"
            className="inline-flex items-center gap-3 rounded-sm border border-gold/60 px-7 py-4 text-xs uppercase tracking-[0.22em] text-gold transition-all hover:bg-gold hover:text-charcoal"
          >
            Explore Full Gallery
          </Link>
        </div>
      </div>
    </section>
  );
}
