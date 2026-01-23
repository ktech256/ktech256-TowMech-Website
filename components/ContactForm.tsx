"use client";

import { useState } from "react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      className="space-y-4"
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
      }}
    >
      <div className="grid gap-4 md:grid-cols-2">
        <input
          required
          placeholder="Full name"
          className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40"
        />
        <input
          required
          type="email"
          placeholder="Email address"
          className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40"
        />
      </div>
      <input
        required
        type="tel"
        placeholder="Phone number"
        className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40"
      />
      <textarea
        required
        placeholder="How can we help?"
        rows={5}
        className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40"
      />
      <button
        type="submit"
        className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-glow"
      >
        Send message
      </button>
      {submitted && (
        <div className="rounded-2xl border border-accent/40 bg-accent/10 px-4 py-3 text-sm text-accent">
          Message prepared. We’ll contact you soon.
        </div>
      )}
    </form>
  );
}
