const posts = [
    {
        title: 'Lorem Ipsum',
        slug: 'lorem-ipsum',
        content: 'Lorem ipsum'
    },
    {
        title: 'Dolor Sit Amet',
        slug: 'dolor-sit-amet',
        content: 'dolor sit'
    },
    {
        title: 'Integer Nec Odio',
        slug: 'integer-nec-odio',
        content: 'integer nec odio'
    },
];

import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function GET() {
    const session = await getServerSession();

    return NextResponse.json(posts);
}
