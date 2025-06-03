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
    // Homepage gets no wrapper - full control
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
      <ConditionalNavigation />
      <main className="pt-20">{children}</main>
    </div>
  );
}
