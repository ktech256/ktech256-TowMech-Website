"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function SmartImage({ className, ...props }: ImageProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative h-full w-full">
      {!loaded && (
        <div className="absolute inset-0 animate-pulse rounded-2xl border border-white/10 bg-white/5" />
      )}
      <Image
        {...props}
        className={cn(className, "transition-opacity", loaded ? "opacity-100" : "opacity-0")}
        onLoadingComplete={() => setLoaded(true)}
      />
    </div>
  );
}
