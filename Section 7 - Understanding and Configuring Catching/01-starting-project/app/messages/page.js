// So you can control caching with help of those fetch function settings. You can alternatively
// also add some file - wide settings in case you had multiple components in that file
// that would maybe all send fetch requests.Instead of then configuring all those requests manually step by step,
//   you could set up a configuration for the entire file, which would then be used for all the requests
// sent from anywhere in that file.And you do that with help of two special constants you can add to your NextJS files.

// The first constant is the revalidate constant.This constant serves the same purpose as the revalidate setting on the fetch function I showed you a couple of seconds ago.

// You can set it to a number and that will be the number of seconds for which data will be cached and reused until a new request will be sent.Now for NextJS to pick up that constant, you also must export it,
//   and this must be named revalidate because NextJS will explicitly look for this name here.


import Messages from '@/components/messages';
import { unstable_noStore } from 'next/cache';

// export const revalidate = 5;
// export const dynamic = 'auto';

//export const dynamic = 'force-dynamic'; // dynamic is preserved name; it is same way of writing 

// const response = await fetch('http://localhost:8080/messages', {
//   cache: 'no-store'
// });

//It always refetch the data if we write dynamic = 'force-dynamic'

//or you could also use 'unstable_noStore' function to make sure that the data is not cached. 
// you have to just write it in the component. All the request of that particular component will not be cached.


export default async function MessagesPage() {
  // unstable_noStore();
  const response = await fetch('http://localhost:8080/messages', {
    next: {
      tags: ['msg']
    }
  });
  const messages = await response.json();

  if (!messages || messages.length === 0) {
    return <p>No messages found</p>;
  }

  return <Messages messages={messages} />;
}
