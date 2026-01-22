"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export type AccordionItem = {
  question: string;
  answer: string;
};

export function Accordion({ items }: { items: AccordionItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const open = openIndex === index;
        return (
          <button
            key={item.question}
            type="button"
            onClick={() => setOpenIndex(open ? null : index)}
            className="w-full text-left"
          >
            <div className="rounded-2xl border border-white/10 bg-white/5 px-6 py-4 transition hover:border-white/30">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-semibold text-white">
                  {item.question}
                </h3>
                <ChevronDown
                  className={cn(
                    "h-5 w-5 text-white/70 transition-transform",
                    open && "rotate-180",
                  )}
                />
              </div>
              <div
                className={cn(
                  "mt-3 text-sm text-white/70 transition-all",
                  open ? "max-h-40 opacity-100" : "max-h-0 opacity-0 overflow-hidden",
                )}
              >
                {item.answer}
              </div>
            </div>
          </button>
        );
      })}
    </div>
  );
}
