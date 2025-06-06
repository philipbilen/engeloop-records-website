// src/app/components/LayoutWrapper.tsx
"use client";

import { usePathname } from "next/navigation";
import ConditionalNavigation from "./ConditionalNavigation";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isHomepage = pathname === "/";

  if (isHomepage) {
    // Homepage gets no wrapper - full control by src/app/page.tsx
    // ConditionalNavigation will render null here as per its logic.
    return (
      <>
        <ConditionalNavigation />
        {children}
      </>
    );
  }

  // All other pages get the standard layout
  return (
    <div className="min-h-screen bg-gray-50">
      <ConditionalNavigation /> {/* This will render <Navigation /> */}
      {/* Remove pt-20 from main. StandardHero and other page content
          should handle their own top spacing if they are the first element. */}
      <main>{children}</main>
    </div>
  );
}
