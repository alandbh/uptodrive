"use client";

import { useEffect, useState } from "react";

export default function Confirm() {
    const [filename, setFilename] = useState<string | null>(null);
    useEffect(() => {
        if (typeof window !== undefined) {
            const location: string = window.location.href;
            const parsedUrl = new URL(location);

            setFilename(parsedUrl.searchParams.get("filename"));
        }
    }, []);

    return (
        <div>
            <h1>Confirmation</h1>
            <h2>Filename:</h2>

            <pre>{filename}</pre>

            <img src={`data:image/png;base64, ${filename}`} alt="test" />
        </div>
    );
}
