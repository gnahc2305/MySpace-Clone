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

import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json(posts);
}
