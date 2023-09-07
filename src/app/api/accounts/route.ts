import queryData from "@/app/lib/db";
import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function POST(request: NextRequest) {
    const { account, id, username, avatar } = await request.json();
    const token = await getToken({ req: request, secret: process.env.SECRET });
    if (account === "discord") {
        const res = await queryData(
            "UPDATE users SET DiscordData = ? WHERE id = ?",
            [
                JSON.stringify({
                    id,
                    username,
                    avatar,
                }),
                token?.id as number,
            ]
        );
        if (res.affectedRows > 0) {
            return NextResponse.json(
                {
                    message: null,
                    status: 200,
                },
                {
                    status: 200,
                }
            );
        } else {
            return NextResponse.json(
                {
                    message: "User not found",
                    status: 404,
                },
                {
                    status: 404,
                }
            );
        }
    } else if (account === "riot") {
        return NextResponse.json(
            {
                message: "Not implemented",
                status: 501,
            },
            {
                status: 501,
            }
        );
    }
}
