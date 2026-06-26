import { useEffect } from "react";
import { Server } from "lucide-react";
import { motion } from "framer-motion";

export function HostingLockScreen() {
  useEffect(() => {
    // Prevent scrolling when the overlay is active
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = "hidden";
    
    // Also disable pointer events on the body to prevent any background interactions,
    // though the overlay should cover everything anyway.
    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[999999] flex items-center justify-center bg-black/80 backdrop-blur-md p-4">
      {/* Prevent any clicks from passing through */}
      <div className="absolute inset-0" onClick={(e) => e.stopPropagation()} />
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="relative flex max-w-lg w-full flex-col items-center rounded-2xl border border-white/10 bg-zinc-950/80 p-8 text-center shadow-2xl backdrop-blur-xl"
      >
        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-blue-500/10 ring-1 ring-blue-500/20">
          <Server className="h-8 w-8 text-blue-400" />
        </div>
        
        <h1 className="mb-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
          🚧 Website Temporarily Unavailable
        </h1>
        
        <div className="mb-8 space-y-4 text-sm text-zinc-300 sm:text-base text-left mt-4 border-t border-white/10 pt-6 w-full">
          <p>
            This website is currently deployed using a Free Hosting Plan.
          </p>
          <p>
            To continue accessing this application, please choose one of the following:
          </p>
          <ul className="space-y-3 pl-2">
            <li className="flex items-start">
              <span className="mr-2 mt-1 flex h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-400" />
              <span>Upgrade this website to a dedicated Vercel Pro plan.</span>
            </li>
            <div className="text-center font-medium text-zinc-500 my-1">OR</div>
            <li className="flex items-start">
              <span className="mr-2 mt-1 flex h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-400" />
              <span>Add this project to your existing Vercel Pro Team/Pro account.</span>
            </li>
          </ul>
          <p className="pt-2">
            Once the hosting has been upgraded, the website will become fully accessible.
          </p>
          <p className="text-zinc-400 text-sm">
            For assistance, please contact the website owner.
          </p>
        </div>
        
        <div className="flex w-full flex-col gap-3 sm:flex-row sm:justify-center mt-2">
          <button 
            className="flex-1 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-medium text-white transition-all hover:bg-blue-500 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-blue-500/50"
            onClick={(e) => e.preventDefault()}
          >
            Upgrade Hosting
          </button>
          <button 
            className="flex-1 rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-white transition-all hover:bg-white/10 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-white/20"
            onClick={(e) => e.preventDefault()}
          >
            Contact Owner
          </button>
        </div>
      </motion.div>
    </div>
  );
}
