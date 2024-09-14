"use client";
import { useRef } from "react";

export default function Home() {
    const inputRef = useRef<HTMLInputElement>(null);

    console.log({ inputRef });

    const fileInput = inputRef.current; // Replace with your HTML element ID
    // const file = fileInput.files?[0]

    function handleSubmit() {
        if (fileInput && fileInput.files) {
            console.log({ fileInput: fileInput.files[0] });

            // return;

            const formData = new FormData();
            formData.append("file", fileInput.files[0]);

            fetch("https://uptodrive.vercel.app/upload", {
                method: "POST",
                body: formData,
            })
                .then((response) => response.json())
                .then((data) => console.log(data))
                .catch((error) => console.error(error));
        }
    }

    return (
        <div className="flex flex-col p-10 gap-10">
            <h1>Up To Drive 2</h1>
            <p>Just a humble Heuristic Collector`s Evidence Uploader</p>
            <div>
                <input
                    ref={inputRef}
                    type="file"
                    name="evidence"
                    id="evidence"
                />
                <div className="mt-10">
                    <button
                        className="bg-blue-500 text-white/70 py-2 px-4 font-bold capitalize rounded"
                        onClick={handleSubmit}
                    >
                        manda 1
                    </button>
                </div>
            </div>
        </div>
    );
}
