import jwt from "jsonwebtoken";
import queryData from "@/app/lib/db";
import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";
import { User } from "next-auth";

export async function POST(request: NextRequest) {
    const token = await getToken({ req: request, secret: process.env.SECRET });
    const doesTokenExist = await queryData("SELECT 1 FROM users WHERE ID = ?", [
        (token?.user as User)?.id as number,
    ]);
    if (doesTokenExist.length == 0) {
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
    const devToken = jwt.sign(
        {
            id: (token?.user as User)?.id,
            iat: Math.floor(Date.now() / 1000),
        },
        process.env.JWT_SECRET as string,
        {
            expiresIn: undefined,
        }
    );
    await queryData("UPDATE users SET DeveloperToken = ? WHERE ID = ?", [
        devToken,
        (token?.user as User)?.id as number,
    ]);
    return NextResponse.json(
        {
            message: null,
            status: 200,
            token: devToken,
        },
        {
            status: 200,
        }
    );
}

export async function GET(request: NextRequest) {
    const token = await getToken({ req: request, secret: process.env.SECRET });
    const doesTokenExist = await queryData(
        "SELECT DeveloperToken FROM users WHERE ID = ?",
        [(token?.user as User)?.id as number]
    );
    if (doesTokenExist.length > 0) {
        const { DeveloperToken } = doesTokenExist[0];
        return NextResponse.json(
            {
                message: null,
                status: 200,
                token: DeveloperToken,
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
