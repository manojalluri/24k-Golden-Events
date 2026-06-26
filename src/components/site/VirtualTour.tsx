import { useState } from "react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";


export function VirtualTour() {
  const [showControls, setShowControls] = useState(false);

  return (
    <section className="relative overflow-hidden border-t border-ivory/10 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Virtual Tour"
          title={<>Explore the venue <span className="italic text-gold">before you visit.</span></>}
          description="Walk every corridor, ballroom and ceremony lawn from anywhere."
        />

        <Reveal className="mt-16">
          <div className="group relative aspect-[16/10] rounded-xl border border-gold/20 bg-card/50 p-2 shadow-2xl shadow-black/50 backdrop-blur-sm md:aspect-[21/9] md:p-3">
            <div className="relative h-full w-full overflow-hidden rounded-lg border border-ivory/10">
              <video
                src="/assets/drive/24k%20Convention%20hall.mp4"
                autoPlay
                loop
                muted
                playsInline
                controls={showControls}
                onClick={(e) => {
                  setShowControls(true);
                  e.currentTarget.muted = false;
                }}
                className="h-full w-full object-cover transition-transform duration-[1500ms] group-hover:scale-105 cursor-pointer"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
