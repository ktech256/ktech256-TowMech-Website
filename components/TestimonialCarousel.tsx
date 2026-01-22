"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export type Testimonial = {
  name: string;
  role: string;
  quote: string;
};

export function TestimonialCarousel({
  testimonials,
}: {
  testimonials: Testimonial[];
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5500);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 px-6 py-10">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <p className="text-lg text-white/80">“{testimonials[index].quote}”</p>
          <div>
            <p className="font-semibold text-white">{testimonials[index].name}</p>
            <p className="text-sm text-white/60">{testimonials[index].role}</p>
          </div>
        </motion.div>
      </AnimatePresence>
      <div className="mt-6 flex gap-2">
        {testimonials.map((_, i) => (
          <button
            key={i}
            className={`h-2 w-6 rounded-full transition ${
              i === index ? "bg-accent" : "bg-white/20"
            }`}
            onClick={() => setIndex(i)}
            aria-label={`Show testimonial ${i + 1}`}
            type="button"
          />
        ))}
      </div>
    </div>
  );
}
