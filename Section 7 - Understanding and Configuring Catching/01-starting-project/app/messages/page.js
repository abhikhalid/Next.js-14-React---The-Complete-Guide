import Messages from '@/components/messages';

export default async function MessagesPage() {
  // const response = await fetch('http://localhost:8080/messages', {
  //   headers: {
  //     'X-ID': 'page',
  //   },
  // });


  //Next Js overrides fetch function and adds additional property  
  const response = await fetch('http://localhost:8080/messages', {
    // cache: 'force-cache' // default
    // cache: 'no-store' // just in this place, data should not be cached
    next: {
      revalidate: 5
    }
  });


  const messages = await response.json();

  if (!messages || messages.length === 0) {
    return <p>No messages found</p>;
  }

  return <Messages messages={messages} />;
}
