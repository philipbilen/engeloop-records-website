"use client";

import { usePathname } from "next/navigation";
import Navigation from "./Navigation";

export default function ConditionalNavigation() {
    const pathname = usePathname();

    // Hide navigation on homepage
    if (pathname === "/") {
        return null;
    }

    return <Navigation />;
}