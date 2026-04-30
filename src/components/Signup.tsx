"use client";

import { useState, type FormEvent } from "react";

export default function Signup({
  placeholder,
  button,
  success,
}: {
  placeholder: string;
  button: string;
  success: string;
}) {
  const [done, setDone] = useState(false);
  const [email, setEmail] = useState("");
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email.trim()) return;
    // For now: visual stub. Wire to Resend/ConvertKit later.
    setDone(true);
    setEmail("");
  };
  return (
    <form className="flex flex-col gap-2" onSubmit={onSubmit}>
      <div className="flex border border-rule-strong rounded-full overflow-hidden bg-black">
        <input
          type="email"
          required
          autoComplete="email"
          placeholder={placeholder}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 bg-transparent border-0 px-5 py-3.5 text-paper text-[14px] outline-none placeholder:text-grey-5"
          aria-label={placeholder}
          disabled={done}
        />
        <button
          type="submit"
          className="px-6 bg-red text-paper font-bold text-[13px] tracking-[0.06em] uppercase hover:bg-red-bright transition-colors"
          disabled={done}
        >
          {done ? success : button}
        </button>
      </div>
    </form>
  );
}
