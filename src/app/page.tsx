"use client";
import Image from "next/image";
import { useState } from "react";
import { profile } from "./profile";

const iconMap: Record<string, string> = {
  github: "/github.svg",
  twitter: "/twitter.svg",
  linkedin: "/linkedin.svg",
  resume: "/file.svg",
  portfolio: "/portfolio.svg",
};

export default function Home() {
  const [showQR, setShowQR] = useState(false);
  return (
    <div className="min-h-screen flex flex-col items-center bg-background pt-10 pb-10">
      {/* Background photo + Profile/info overlay */}
      <div className="w-full relative mx-auto mb-4">
        <div className="absolute inset-0 h-40 sm:h-56 z-0">
          <Image src="/wallpaper.webp" alt="Background" fill className="object-cover w-full h-full" priority />
        </div>
      </div>
      {/* Name, headline, location, bio below pfp */}
      <div className="w-[50%] lg:w-[40%] min-w-[320px] max-w-2xl flex flex-col items-start gap-1 mx-auto mb-4">
        <div className="relative z-10 flex flex-col items-start justify-end h-40 sm:h-56 w-full pt-8">
          <Image
            src={profile.avatar}
            alt={profile.name}
            width={120}
            height={120}
            quality={100}
            className="border-2 border-foreground shadow-2xl object-cover bg-background"
            priority
          />
        </div>
        <h1 className="text-2xl font-bold text-foreground leading-tight pt-2">{profile.name}</h1>
        <div className="text-base text-foreground/80 font-medium">
          Specialist @ Apple | Software Engineer | UCSD Math & Computer Science | Chief of Systems and Operations @
          Chinatown Volunteer Coalition
        </div>
        <div className="text-base text-foreground/60 flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 inline-block"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 9A3.75 3.75 0 1112 5.25 3.75 3.75 0 0115.75 9z"
            />
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 20.25a7.5 7.5 0 10-15 0" />
          </svg>
          <span>San Francisco Bay Area, CA</span>
        </div>
      </div>
      {/* Icon dock */}
      <div className="w-[40%] min-w-[320px] max-w-2xl flex flex-row items-center justify-center gap-8 mb-4 h-12 mx-auto">
        <a
          href="tel:15104732290"
          title="Call (510) 473-2290"
          className="flex items-center justify-center h-full cursor-pointer hover:scale-110 transition-transform"
        >
          <Image src="/phone.svg" alt="Phone" width={40} height={40} className="inline-block" />
        </a>
        <a
          href="mailto:kennyzhang418@gmail.com"
          title="Email kennyzhang418@gmail.com"
          className="flex items-center justify-center h-full cursor-pointer hover:scale-110 transition-transform"
        >
          <Image src="/email.svg" alt="Email" width={40} height={40} className="inline-block" />
        </a>
        <span
          title="QR Code"
          className="flex items-center justify-center h-full cursor-pointer hover:scale-110 transition-transform"
          onClick={() => setShowQR((v) => !v)}
        >
          <Image src="/qrcode.svg" alt="QR Code" width={40} height={40} className="inline-block" />
        </span>
      </div>
      {showQR && (
        <div className="flex flex-col items-center mb-2 animate-fade-in">
          <Image
            src="/qrcode.webp"
            alt="QR code for linktree.kennyzhang.dev"
            width={200}
            height={200}
            className="mt-2"
          />
          <span className="text-xs text-foreground/60 mt-1">linktree.kennyzhang.dev</span>
        </div>
      )}
      <div className="w-[40%] min-w-[320px] max-w-2xl flex flex-col gap-4 mt-2 mx-auto">
        {profile.links.map((link) => {
          const key = link.label.toLowerCase();
          const icon = iconMap[key];
          return (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2 px-4 rounded-full bg-foreground text-background text-center font-medium text-xl shadow hover:bg-foreground/90 transition-colors border border-foreground/10 flex items-center gap-4 justify-center"
            >
              <Image src={icon} alt=" " width={28} height={28} className="inline-block" />
              <span>{link.label}</span>
            </a>
          );
        })}
      </div>
    </div>
  );
}
