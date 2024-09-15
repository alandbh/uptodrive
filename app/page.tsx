"use client";
import { useRef } from "react";

export default function Home() {
    const inputRef = useRef<HTMLInputElement>(null);

    console.log({ inputRef });

    // const fileInput = inputRef.current; // Replace with your HTML element ID
    // const file = fileInput.files?[0]

    function handleSubmit() {
        console.log("handle", inputRef.current?.files);

        if (inputRef.current && inputRef.current.files) {
            console.log({ fileInput: inputRef.current.files[0].name });

            // return;

            const formData = new FormData();
            // const filename = inputRef.current.files[0].name;
            formData.append("file", inputRef.current.files[0]);

            //fetch("https://uptodrive.vercel.app/upload", {

            fetch("/confirm", {
                method: "POST",
                body: formData,
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);
                })
                .catch((error) => console.error(error));
        }

        console.log("handle FALSE");
    }

    return (
        <div className="flex flex-col p-10 gap-10">
            <h1>Up To Drive 4</h1>
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
