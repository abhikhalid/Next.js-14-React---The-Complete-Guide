//file name is reserverd.
// file position is also important. it should be in the root project folder.

import { NextResponse } from "next/server";

//method name must be 'middleware' . NextJS provides the the request object.

export function middleware(request)
{
    //forward the incoming request to its actual destination.
    //it's a function that is not really meant to block or handle incoming request, though you could do that.
    //instead, it typically meant to take a loot at some incoming request, maybe change it a bit, maybe block it. for example to implement authentication and may be redirect to another page, if user is not authenticated.

    //it runs for every request.
    console.log(request);
    return NextResponse.next();
}

export const config = {
    matcher: '/news'
};