import { NextRequest, NextResponse } from "next/server";

export async function POST() {
    const res = await fetch("", {
        headers: {
            "Content-Type": "application/json",
        },
    });
    const data = await res.json();

    return NextResponse.json({ data });
}
