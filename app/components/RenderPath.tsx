"use client";

import { usePathname } from "next/navigation";

export default function RenderPath() {
    const pathname = usePathname();
    return <pre>{pathname}</pre>;
}
