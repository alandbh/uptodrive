import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
    const res = NextResponse.next();

    // Se a rota for /upload, aplique as configurações de CORS
    if (req.nextUrl.pathname.startsWith("/upload")) {
        res.headers.set("Access-Control-Allow-Origin", "*"); // Permitir todas as origens
        res.headers.set("Access-Control-Allow-Methods", "POST, OPTIONS"); // Métodos permitidos
        res.headers.set("Access-Control-Allow-Headers", "Content-Type"); // Cabeçalhos permitidos

        // Para lidar com o método OPTIONS (preflight)
        if (req.method === "OPTIONS") {
            return new Response(null, {
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Methods": "POST, OPTIONS",
                    "Access-Control-Allow-Headers": "Content-Type",
                },
            });
        }
    }

    return res;
}

// Defina as rotas que precisam passar pelo middleware
export const config = {
    matcher: "/upload",
};
