import queryData from "@/app/lib/db";
import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import { User } from "next-auth";

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
                (token?.user as User)?.id as number,
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

export async function GET(request: NextRequest) {
    const token = await getToken({ req: request, secret: process.env.SECRET });
    const account = request.nextUrl.searchParams.get("account");
    if (!account || !token) {
        return NextResponse.json(
            {
                message: "Missing parameters",
                status: 400,
            },
            {
                status: 400,
            }
        );
    }
    let res: any;
    if (account === "riot") {
        res = await queryData("SELECT RiotData FROM users WHERE id = ?", [
            (token?.user as User)?.id as number,
        ]);
    } else if (account === "discord") {
        res = await queryData("SELECT DiscordData FROM users WHERE id = ?", [
            (token?.user as User)?.id as number,
        ]);
    } else {
        return NextResponse.json(
            {
                message: "Invalid account",
                status: 400,
            },
            {
                status: 400,
            }
        );
    }
    if (res.length > 0) {
        return NextResponse.json(
            {
                message: null,
                status: 200,
                data: JSON.parse(
                    res[0][
                        account === "riot" ? "RiotData" : "DiscordData"
                    ] as string
                ),
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
}
