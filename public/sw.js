self.addEventListener("install", (event) => {
    console.log("👷", "install", event);
    self.skipWaiting();
});

self.addEventListener("activate", (event) => {
    console.log("👷", "activate", event);
    return self.clients.claim();
});

// self.addEventListener("fetch", async function (event) {
//     console.log("👷", "fetch", event);
//     const url = new URL(event.request.url);
//     // If this is an incoming POST request for the
//     // registered "action" URL, respond to it.
//     if (event.request.method === "POST" && url.pathname === "/upload") {
//         // event.respondWith(
//         //     (async () => {
//         //         // const filename = "magaludesk01";
//         //         const formData = await event.request.formData();
//         //         const file = formData.get("file");
//         //         console.log("swww", event);
//         //         // const reader = new FileReader();
//         //         // reader.readAsDataURL(file);
//         //         // reader.addEventListener("load", () => {
//         //         //     const url = reader.result;
//         //         //     self.localStorage.setItem("filename", "aaaa");
//         //         // });
//         //         const filename = file.name.replaceAll(" ", "_");
//         //         // const link = formData.get("link") || "";
//         //         return Response.json({ filename });
//         //         // const responseUrl = "/confirm?filename=" + filename;
//         //         // return Response.redirect(responseUrl, 303);
//         //     })()
//         // );
//     }
// });
