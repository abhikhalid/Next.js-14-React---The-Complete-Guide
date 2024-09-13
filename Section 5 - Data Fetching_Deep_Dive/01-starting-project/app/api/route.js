//api is just a folder name, you can assign any other name
// router.js is a predefined name defined by NEXT JS

// A route handler is a file in which you can export various functions.
// which must be names GET or POST or PATCH OR PUT or DELETE and so on.

// here we typically return JSON data for example or accept incoming JSON data and return some JSON response.


//request object is by default proved by NEXT JS
export function GET(request) {
    console.log(request);

    // return Response.json();
    return new Respones('Hello!');
}

export function POST(request) { }


// You might in general not need it too often when building a NextJS application, it's important to know about this feature because it can be really helpful, especially if you, for example, also want to connect our clients
// to your NextJS application. So if you're building a NextJS application that should not just render its pages and so on, but that should maybe also deliver data to some mobile app which sends requests to this NextJS application, well, you could then build such Route Handlers which handle the communication
// with such an external client.

